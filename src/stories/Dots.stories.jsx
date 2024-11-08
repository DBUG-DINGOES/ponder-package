import { Dots } from "../components/Dots/Dots.jsx";
import * as React from "react";

export default {
  title: "Dots",
  component: Dots,
};
const Template = (args) => <Dots {...args} />;

//copy function using bind
export const Default = Template.bind({});

// <CircularSpinner color="red" opacity="0.3"></CircularSpinner>

Default.args = {
  color1: "blue",
  color2: "black",
  color3: "purple",
};
