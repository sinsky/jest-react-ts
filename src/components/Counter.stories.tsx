import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
} as Meta<typeof Counter>;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {};

export const Testing: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const plusButton = await canvas.getByText("＋");
    const minusButton = await canvas.getByText("ー");
    const countElement = await canvas.getByRole("heading");
    await expect(countElement).toHaveTextContent("Count: 0");
    for (let i = 0; i < 3; i++) {
      await userEvent.click(plusButton);
    }
    await expect(countElement).toHaveTextContent("Count: 3");
    await userEvent.click(minusButton);
    await expect(countElement).toHaveTextContent("Count: 2");
    for (let i = 0; i < 3; i++) {
      await userEvent.click(minusButton);
    }
    await expect(countElement).toHaveTextContent("Count: -1");
  },
};
