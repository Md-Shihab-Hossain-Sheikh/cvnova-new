
import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "neutral";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  primary: "bg-indigo-50 text-indigo-700",
  secondary: "bg-blue-50 text-blue-700",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  neutral: "bg-gray-100 text-gray-700",
};

export function Badge({
  className,
  variant = "primary",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
