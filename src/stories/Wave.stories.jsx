import { Wave } from "../components/Wave/Wave.jsx";
import * as React from "react";

export default {
  title: "Wave",
  component: Wave,
};
const Template = (args) => <Wave {...args} />;

//copy function using bind
export const Default = Template.bind({});

Default.args = {
  size: "90",
  color1: "blue",
  color2: "black",
  opacity: 1,
  speed: "2s",
};
