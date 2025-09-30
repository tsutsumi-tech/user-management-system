// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "../../components/parts/CustomModal";
import CustomButton from "../../components/parts/CustomButton";
import { Box } from "@mui/material";

// TODO: メタデータ
const meta: Meta<typeof CustomModal> = {
  title: "Components/parts/CustomModal",
  component: CustomModal,
  tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomModal>;

// TODO: デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleConfirm = () => {
      alert("確認ボタンが押されました");
      setOpen(false);
    };

    return (
      <Box>
        {/* // TODO: クリックでモーダル開閉させる */}
        <CustomButton variantType="primary" onClick={handleOpen}>
          モーダルを開く
        </CustomButton>
        <CustomModal
          // TODO: Propを渡す
          open={open}
          title="ユーザー削除確認"
          content="このユーザーを削除してもよろしいですか？"
          // onCloceはsetOpenにfalseを渡す
          onClose={() => setOpen(false)}
          // onConfirmはalert()を使ってクリックしたことを知らせて
          // setOpenにfalseを渡す
          onConfirm={handleConfirm}
        />
      </Box>
    );
  },
};
