
import { cn } from "@/lib/utils";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizes = {
  sm: "size-4 border-2",
  md: "size-6 border-[3px]",
  lg: "size-9 border-4",
};

export function Spinner({
  size = "md",
  className,
  label = "Loading",
}: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        "inline-block animate-spin rounded-full border-indigo-200 border-t-indigo-600",
        sizes[size],
        className,
      )}
    />
  );
}
