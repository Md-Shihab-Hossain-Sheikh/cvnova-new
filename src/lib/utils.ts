
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const parsed = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(parsed);
}

export function truncateText(
  value: string,
  maxLength: number,
): string {
  if (maxLength <= 0) return "";
  if (value.length <= maxLength) return value;

  return `${value.slice(0, maxLength).trimEnd()}...`;
}
