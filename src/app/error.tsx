
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-600">
          !
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          An unexpected error occurred. Please try again.
        </p>

        {error.digest && (
          <p className="mt-3 text-xs text-gray-400">
            Error reference: {error.digest}
          </p>
        )}

        <div className="mt-6">
          <Button onClick={reset} fullWidth>
            Try again
          </Button>
        </div>
      </div>
    </main>
  );
}
