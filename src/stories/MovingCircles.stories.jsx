import { MovingCircles } from "../components/MovingCircles/MovingCircles.jsx";
import * as React from "react";

export default {
  title: "Moving Circles",
  component: MovingCircles,
};
const Template = (args) => <MovingCircles {...args} />;

//copy function using bind
export const Default = Template.bind({});

Default.args = {
  size: 90,
  color1: "#FF6F61",
  color2: "#22333B",
  color3: "#ffa9a1",
  duration: 3,
};