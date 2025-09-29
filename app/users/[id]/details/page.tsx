"use client";

import UserDetails from "@/components/UserDetails";
import { User } from "@/types/User";
import { fetchUserById } from "@/utils/api";
import { Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserDetailsPages: React.FC = () => {
  const { id: userId } = useParams(); // URL からユーザーID取得
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      if (!userId) return;
      try {
        const data = await fetchUserById(Number(userId)); // データ取得
        setUser(data); // state に保存
      } catch (err) {
        console.error("ユーザー取得失敗", err);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [userId]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細
      </Typography>
      {user ? <UserDetails user={user} /> : <div>ユーザーが見つかりません</div>}
    </>
  );
};

export default UserDetailsPages;
