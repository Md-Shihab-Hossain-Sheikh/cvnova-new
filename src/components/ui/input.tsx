
import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  { className, label, error, hint, id, ...props },
  ref,
) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${inputId}-error`
            : hint
              ? `${inputId}-hint`
              : undefined
        }
        className={cn(
          "h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-gray-100",
          error && "border-red-500 focus:border-red-500",
          className,
        )}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}

      {!error && hint && (
        <p id={`${inputId}-hint`} className="text-xs text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
});
