
import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({
  className,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white shadow-sm",
        hover &&
          "transition-all duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-bold text-gray-900", className)} {...props} />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm leading-6 text-gray-500", className)} {...props} />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 pb-6", className)} {...props} />
  );
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center px-6 pb-6", className)} {...props} />
  );
}
