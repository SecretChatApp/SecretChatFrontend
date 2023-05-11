import { KeyValueFrom } from "@/types/common";
import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

type Size = "small" | "medium" | "large";
type Variant = "contained" | "outlined";

const __DEFAULT_ELEMENT__ = "button";

interface ButtonOwnProps<E extends React.ElementType = React.ElementType>
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  size?: Size;
  variant?: Variant;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  fullWidth?: boolean;
  as?: E;
}

type ButtonProps<E extends React.ElementType> = ButtonOwnProps &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const sizeMap: KeyValueFrom<Size, string> = {
  small: "h-8 text-sm",
  medium: "h-9 text-base",
  large: "h-10 text-lg",
};

const variantMap: KeyValueFrom<Variant, string> = {
  contained: "bg-blue-500 hover:bg-blue-700 text-white",
  outlined: "border border-blue-500 hover:border-blue-700",
};

export default function Button<
  E extends React.ElementType = typeof __DEFAULT_ELEMENT__
>({
  className,
  startIcon,
  endIcon,
  size = "medium",
  variant = "contained",
  disabled,
  as,
  children,
  fullWidth,
  ...props
}: ButtonProps<E>) {
  const Component = as || __DEFAULT_ELEMENT__;

  return (
    <Component
      className={twMerge(
        'flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md py-3 px-4 font-medium',
        sizeMap[size],
        fullWidth && 'w-full',
        disabled && "opacity-40",
        variantMap[variant],
        className
      )}
      disabled={disabled}
    >
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
}
