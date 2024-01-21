import React from "react";

interface IText extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

const Text = ({ as, children, className, ...props }: IText) => {
  return React.createElement(as || "span", { ...props, className: `${className} font-common dark:text-white text-black` }, children)
}

export default Text;