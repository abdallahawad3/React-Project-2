import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      {...rest}
      className={`w-5 h-5 block rounded-full`}
      style={{ background: `${color}` }}
    />
  );
};

export default CircleColor;
