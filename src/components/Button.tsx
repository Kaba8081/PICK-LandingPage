import React, { FC } from "react";
import clsx from "clsx";
import classNames from "classnames";

import {styles} from '../style';

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-text bg-secondary",
  secondary: "text-text bg-secondary-light bg-opacity-50",
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
}) => (
  <button
    className={classNames(`py-4 px-6 rounded-2xl text-text font-inter font-semibold ${styles.SemiBoldHeader4} color-000000`,clsx(buttonVariantClasses[variant]))}
  >
    {children}
  </button>
);

export default Button;