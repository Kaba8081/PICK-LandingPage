import React, { FC } from "react";
import clsx from "clsx";
import classNames from "classnames";

import {styles} from '../style';

type ButtonVariant = "primary" | "secondary" | "hollow" | "accent";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-secondary",
  secondary: "bg-secondary-light bg-opacity-50",
  hollow: "bg-transparent border-2 border-secondary",
  accent: "bg-accent text-text-light",
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
}) => (
  <button
    className={classNames(`py-3 px-4 rounded-lg sm:py-4 sm:px-6 sm:rounded-2xl text-center text-text font-inter font-semibold ${styles.SemiBoldHeader4} color-000000`,clsx(buttonVariantClasses[variant]))}
  >
    {children}
  </button>
);

export default Button;
