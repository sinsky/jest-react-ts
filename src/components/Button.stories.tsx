import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      options: ["Button", "Primary"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    primary: false,
  },
};
