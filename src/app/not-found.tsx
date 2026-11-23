
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-600">
        The page you are looking for could not be found.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}
