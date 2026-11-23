
import * as React from "react";
import { cn } from "@/lib/utils";

export type SkeletonProps =
  React.HTMLAttributes<HTMLDivElement>;

export function Skeleton({
  className,
  ...props
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-lg bg-gray-200",
        className
      )}
      {...props}
    />
  );
}

export interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({
  lines = 3,
  className,
}: SkeletonTextProps) {
  const safeLines = Math.max(1, Math.floor(lines));

  return (
    <div className={cn("space-y-3", className)}>
      {Array.from({ length: safeLines }, (_, index) => (
        <Skeleton
          key={index}
          className={
            index === safeLines - 1
              ? "h-3 w-2/3"
              : "h-3 w-full"
          }
        />
      ))}
    </div>
  );
}
