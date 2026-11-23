
import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(function Textarea(
  { className, label, error, hint, id, ...props },
  ref,
) {
  const generatedId = React.useId();
  const textareaId = id ?? generatedId;

  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}

      <textarea
        ref={ref}
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error
            ? `${textareaId}-error`
            : hint
              ? `${textareaId}-hint`
              : undefined
        }
        className={cn(
          "min-h-28 w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:bg-gray-100",
          error && "border-red-500 focus:border-red-500",
          className,
        )}
        {...props}
      />

      {error && (
        <p id={`${textareaId}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}

      {!error && hint && (
        <p id={`${textareaId}-hint`} className="text-xs text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
});
