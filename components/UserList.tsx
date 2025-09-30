import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "@/types/User";
import { softDeleteUser } from "@/utils/api";
import CustomCard from "./parts/CustomCard";
import { CardActions, Button } from "@mui/material";
import Link from "next/link";
import CustomButton from "./parts/CustomButton";
import CustomModal from "./parts/CustomModal";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [filterUsers, setFilterUsers] = useState<User[]>(users);
  const [open, setOpen] = useState(false);

  const handleUserDeleted = (deletedUserId: number) => {
    setFilterUsers((users) =>
      users.filter((user: User) => user.id !== deletedUserId)
    );
  };
  const handleDelete = async (userId: number) => {
    try {
      await softDeleteUser(userId);
      handleUserDeleted(userId);
    } catch (error) {
      alert("削除に失敗しました。" + error);
    }
  };
  return (
    <div>
      {filterUsers.map((user) => (
        <>
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
                <CustomButton onClick={() => setOpen(true)} variantType="danger">
                  削除
                </CustomButton>
              </CardActions>
            }
          />
          <CustomModal
            open={open}
            title="ユーザー削除確認"
            content="このユーザーを削除してもよろしいですか？"
            // onCloceはsetOpenにfalseを渡す
            onClose={() => setOpen(false)}
            // onConfirmはalert()を使ってクリックしたことを知らせて
            // setOpenにfalseを渡す
            onConfirm={() => handleDelete(user.id)}
          />
        </>
      ))}
    </div>
  );
};

export default UserList;
