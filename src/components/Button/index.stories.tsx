import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Design System/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button Text",
    types: "solid",
    size: "md",
    colorScheme: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Text",
    types: "outline",
    size: "md",
    colorScheme: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button Text",
    types: "ghost",
    size: "md",
    colorScheme: "primary",
  },
};
