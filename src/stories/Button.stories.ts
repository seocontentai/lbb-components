import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
  },
};
export const AfterIconButton: Story = {
  args: {
    label: "Button",
    afterIcon: "src/assets/react.svg",
  },
};
export const BeforeIconButton: Story = {
  args: {
    label: "Button",
    beforeIcon: "src/assets/react.svg",
  },
};
export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
export const fullWidth: Story = {
  args: {
    size: "large",
    label: "Button",
    fullWidth: true,
  },
};
// export const PrimaryFullWidth: Story = {
//   args: {
//     variant: "primary",
//     size: "large",
//     label: "Sign Up",
//     fullWidth: true,
//   },
// };

export const success: Story = {
  args: {
    variant: "success",
    size: "large",
    label: "Connected",
    fullWidth: false,
  },
};
export const danger: Story = {
  args: {
    variant: "danger",
    size: "large",
    label: "Delete Account ",
    fullWidth: false,
  },
};
export const disabled: Story = {
  args: {
    variant: "disabled",
    size: "large",
    label: "Change Password",
    fullWidth: false,
  },
};
