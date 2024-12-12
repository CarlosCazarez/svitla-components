import type { Meta, StoryObj } from "@storybook/vue3";

import Input from "./Input.vue";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    modelValue: "hello world",
    label: "title example",
  },
  parameters: {
    backgroundColor: "#fff",
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    modelValue: "hello world",
    label: "title example",
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "hello world",
    label: "disabled example",
    disabled: true,
  },
};

export const WithErrorAndRequired: Story = {
  args: {
    label: "Example with error",
    errorMsg: "Error Message",
    required: true,
  },
};
