import React from "react";

const style = {
  backgroundColor: "white",
  borderTop: "1px solid black",
  textAlign: "center",
  padding: "10px",
  position: "static",
  left: "0",
  bottom: "0",
  height: "25px",
  width: "100%"
};

export default function Footer() {
  return (
    <div>
      <div style={style}>Created by JMoon 2022</div>
    </div>
  );
}