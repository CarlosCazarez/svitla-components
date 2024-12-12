import type { Meta, StoryObj } from "@storybook/vue3";
import Text from "./Text.vue";

const meta = {
  title: "Example/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    size: "sm",
  },
  parameters: {
    layout: "centered",
    backgroundColor: "#fff",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "This is a Label Primary Example",
  },
  parameters: {
    backgroundColor: "#fff",
  },
};

export const Secondary: Story = {
  args: {
    label: "This is a label Secondary Example",
    secondary: true,
  },
  parameters: {
    backgroundColor: "#fff",
  },
};
