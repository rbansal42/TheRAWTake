import React from "react";

interface Props {
  text: string;
}

const textOnRed = ({ text }: Props) => {
  return (
    <div className="font-Raleway font-medium bg-brandRed cursor-default px-2 text-2xl text-white tracking-wide leading-tight">
      {text}
    </div>
  );
};

export default textOnRed;
