import { PulseBox } from "../components/PulseBox/PulseBox.jsx";
import * as React from "react";

export default {
  title: "PulseBox",
  component: PulseBox,
};
const Template = (args) => <PulseBox {...args} />;

//copy function using bind
export const Default = Template.bind({});

Default.args = {
  color1: "#22333B",
  color2: "#FF6F61",
  color3: "#ffa9a1",
  color4: "#22333B",
};
