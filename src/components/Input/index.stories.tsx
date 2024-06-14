import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Design System/Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    // backgrounds: {
    //   default: "dark",
    // },
  },
  tags: ["autodocs"],
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/7")
      ).json(),
    }),
  ],
  decorators: [
    (Story) => (
      <div className=" bg-slate-300 py-4 px-4 rounded-lg">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    placeholder: "Input Text",
    padding: "sm",
    corners: "lg",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    padding: "sm",
    corners: "lg",
  },
};

export const Numbers: Story = {
  args: {
    type: "number",
    placeholder: "10",
    padding: "md",
    corners: "lg",
  },
};
