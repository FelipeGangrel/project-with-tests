import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type BasicButtonProps =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BasicButtonProps &
  (
    | (JSX.IntrinsicElements["button"] & { as?: "button" })
    | (JSX.IntrinsicElements["a"] & { as?: "a" })
  );

const Button: React.FC<ButtonProps> = (props) => {
  const { children, as: Component = "button", ...rest } = props;

  return <Component {...(rest as any)}>{children}</Component>;
};

export default Button;
