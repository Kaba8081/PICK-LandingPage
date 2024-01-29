import React, { FC } from "react";
import clsx from "clsx";
import classNames from "classnames";

type ButtonSize = "small" | "medium";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const buttonSizeClasses: Record<ButtonSize, string> = {
  small: "py-1 px-2",
  medium: "py-2 px-4",
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-text bg-secondary",
  secondary: "text-text bg-secondary-light bg-opacity-50",
};

const Button: FC<ButtonProps> = ({
  children,
  size = "small",
  variant = "primary",
}) => (
  <button
    className={classNames("py-4 px-6 rounded-2xl text-text font-inter font-semibold text-lg color-000000",clsx(buttonSizeClasses[size], buttonVariantClasses[variant]))}
  >
    {children}
  </button>
);

export default Button;
