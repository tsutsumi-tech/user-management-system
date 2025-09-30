import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "@/types/User";
import { softDeleteUser } from "@/utils/api";
import CustomCard from "./parts/CustomCard";
import { CardActions, Button } from "@mui/material";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filterUsers, setFilterUsers] = useState<User[]>(users);

  const handleUserDeleted = (deletedUserId: number) => {
    setFilterUsers((users) =>
      users.filter((user: User) => user.id !== deletedUserId)
    );
  };
  const handleDelete = async (userId: number) => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(userId);
        handleUserDeleted(userId);
      } catch (error) {
        alert("削除に失敗しました。" + error);
      }
    }
  };
  return (
    <div>
      {filterUsers.map((user) => (
        <CustomCard
          key={user.id}
          title={user.name}
          description={`メール: ${user.email} / 役割: ${user.role}`}
          actions={
            <CardActions>
              <Button
                size="small"
                component={Link}
                href={`/users/${user.id}/details`}
              >
                詳細
              </Button>
              <Button
                size="small"
                component={Link}
                href={`/users/${user.id}/edit`}
              >
                編集
              </Button>
              <CustomButton
                onClick={() => handleDelete(user.id)}
                variantType="danger"
              >
                削除
              </CustomButton>
            </CardActions>
          }
        />
      ))}
    </div>
  );
};

export default UserList;
