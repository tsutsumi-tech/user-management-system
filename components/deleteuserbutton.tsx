import { softDeleteUser } from "@/utils/api";
import { Button } from "@mui/material";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({
  userId,
  onDelete,
}) => {
  const handleClick = async () => {
    if (confirm("本当にこのユーザーを削除しますか？"))
      try {
        await softDeleteUser(userId);
        onDelete(userId);
      } catch (e) {}
  };
  return <Button onClick={handleClick}>削除</Button>;
};

export default DeleteUserButton;
