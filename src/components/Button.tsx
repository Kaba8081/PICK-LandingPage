import React, { FC } from "react";
import clsx from "clsx";
import classNames from "classnames";

import {styles} from '../style';

type ButtonVariant = "primary" | "secondary" | "hollow" | "accent";
const ButtonClassName = `py-3 px-4 rounded-lg sm:py-4 sm:px-6 sm:rounded-2xl text-center text-text font-inter font-semibold ${styles.SemiBoldHeader4} color-000000`

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  href?: string;
};

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-secondary",
  secondary: "bg-secondary-light bg-opacity-50",
  hollow: "bg-transparent border-2 border-secondary",
  accent: "bg-accent-dark text-text",
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  href,
}) => {
  if (href) { // if href is provided, render an anchor tag
    return (
      <a
        className={classNames(ButtonClassName, clsx(buttonVariantClasses[variant]), className)}
        href={href}
      >
        {children}
      </a>
    );
  }

  else { // else, render a button tag
    return (
    <button
      className={classNames(ButtonClassName, clsx(buttonVariantClasses[variant]), className)}
    >
      {children}
    </button>);
  }
};

export default Button;
