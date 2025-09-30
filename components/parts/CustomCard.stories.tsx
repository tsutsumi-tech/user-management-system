// components/parts/CustomCard.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";

// TODO: メタデータ

const meta: Meta<typeof CustomCard> = {
  title: "Components/parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <CustomButton variantType="secondary">アクション1</CustomButton>
        <CustomButton variantType="danger">アクション2</CustomButton>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};
