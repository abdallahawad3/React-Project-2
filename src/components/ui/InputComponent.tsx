import type { InputHTMLAttributes } from "react";
// import type { IInputList } from "../../interfaces";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  // input: IInputList;
}

const InputComponent = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="border-2 border-gray-300 p-2 rounded-md focus:outline-indigo-400 shadow-md text-md focus:ring-1 "
    />
  );
};

export default InputComponent;
