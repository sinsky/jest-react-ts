import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import Form from "./Form";

export default {
  title: "Form",
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByRole("textbox");
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveTextContent("");
    await userEvent.type(input, "Play function!");
    await expect(
      canvas.getByDisplayValue("Play function!")
    ).toBeInTheDocument();
  },
};
