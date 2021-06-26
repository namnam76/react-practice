import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  // const contentStyle = {
  //   color: props.color,
  //   fontSize: "18px"
  // };
  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
