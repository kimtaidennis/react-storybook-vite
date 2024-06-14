import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from ".";

const meta: Meta<typeof TodoItem> = {
  title: "Design System/Components/Alert",
  component: TodoItem,
  parameters: {
    layout: "centered",
    // backgrounds: {
    //   default: "dark",
    // },
  },
  tags: ["autodocs", "dev"],
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

/**
 * # Alert
 * These stories showcase the alert
 */
export const Primary: Story = {
  args: {
    types: "info",
  },
};

export const Success: Story = {
  args: {
    types: "success",
  },
};

export const Warning: Story = {
  args: {
    types: "danger",
  },
};
