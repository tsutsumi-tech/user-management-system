import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";

const meta: Meta<typeof UserList> = {
  title: "Components/UserList", 
  component: UserList, 
  tags: ["autodocs"], 
};

export default meta;

type Story = StoryObj<typeof UserList>;

export const Default: Story = {
  args: {
       users: [
      {
        id: 1,
        name: "山田太郎",
        email: "taro@example.com",
        role: "管理者",
        deleted: false,
      },
      {
        id: 2,
        name: "佐藤花子",
        email: "hanako@example.com",
        role: "一般ユーザー",
        deleted: false,
      },
    ],
  },
};
