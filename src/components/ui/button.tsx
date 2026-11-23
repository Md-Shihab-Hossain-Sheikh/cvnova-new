
import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg",
  secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
  outline:
    "border border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
  icon: "size-10 p-0",
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    fullWidth = false,
    type = "button",
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  );
});
