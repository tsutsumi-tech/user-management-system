// components/DeleteUserButton.tsx

import { Button } from "@mui/material";
import React from "react";
import { softDeleteUser } from "../utils/api";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId) => void;
}

// TODO: ユーザーを削除するボタンコンポーネントを実装する
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const handleDelete = async () => {
    if (confirm("本当にこのユーザーを削除しますか？")) {
      try {
        await softDeleteUser(userId);
        onDelete(userId);
      } catch (error) {
        alert("削除に失敗しました。" + error);
      }
    }
  };

  return (
    <Button
      variant="outlined"
      color="error"
      sx={{ ml: 1 }}
      onClick={handleDelete}
    >
      削除
    </Button>
  );
};

export default DeleteUserButton;
