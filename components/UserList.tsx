import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "@/types/User";
import { softDeleteUser } from "@/utils/api";

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
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;
