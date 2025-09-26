import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "@/types/User";

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
  return (
    <div>
      {filterUsers.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleUserDeleted}/>
      ))}
    </div>
  );
};

export default UserList;
