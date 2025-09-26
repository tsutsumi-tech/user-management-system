import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";

// TODO: メタデータ
const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails", 
  component: UserDetails, 
  tags: ["autodocs"], 
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof UserDetails>;


export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: "山田 花子",
      email: "hanako@example.com",
      role: "一般ユーザー",
      deleted: false
    } 
  },
};
