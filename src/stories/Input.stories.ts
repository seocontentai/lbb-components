import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    value: "",
    label: "Label",
    iconSrc: "",
    fullWidth: false,
    onChange: (e) => {
      console.log(e);
    },
    placeholder: "Placeholder",
  },
};
export const FullWidth: Story = {
  args: {
    value: "/asset/react.svg",
    label: "Label",
    iconSrc: "",
    fullWidth: true,
    onChange: (e) => {
      console.log(e);
    },
    placeholder: "Placeholder",
  },
};
export const WithIcon: Story = {
  args: {
    value: "src = /src/asset/react.svg",
    label: "Label",
    iconSrc: "/src/assets/react.svg",
    fullWidth: true,
    onChange: (e) => {
      console.log(e);
    },
    placeholder: "Placeholder",
  },
};
