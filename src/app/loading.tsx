
import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-gray-50"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" label="Loading page" />

        <p className="text-sm font-medium text-gray-500">
          Loading CVNova...
        </p>
      </div>
    </main>
  );
}
