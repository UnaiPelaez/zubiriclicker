import React from "react";

const Stage = ({ color1, color2 }) => {
  const gradient = `linear-gradient(0deg, ${color1},  ${color2})`;

  return (
    <div
      className="w-full h-screen absolute -z-10"
      style={{ background: gradient }}
    ></div>
  );
};

export default Stage;
