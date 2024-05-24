import { IButton } from "../../interfaces";

const ButtonComponent = ({ children, className, width, ...rest }: IButton) => {
  return (
    <button
      className={`${className} text-white p-2 rounded-md ${width}`}
      {...rest}
    >
      {/* {" "} */}
      {children}
    </button>
  );
};

export default ButtonComponent;
