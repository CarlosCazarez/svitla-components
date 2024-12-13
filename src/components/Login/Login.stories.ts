import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Login from "./Login.vue";

const meta = {
  title: "Example/Login",
  component: Login,
  tags: ["autodocs"],
  args: {
    handleForgetPassword: fn(),
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    username: "",
    password: "",
    className: "width-full",
    handleForgetPassword: (evt) => alert("did you forget your password?"),
    handleSignIn: () => alert("Loging In"),
  },
};
