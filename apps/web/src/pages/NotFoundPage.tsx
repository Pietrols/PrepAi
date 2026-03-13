import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <p className="text-gray-400">Page not found</p>
      <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
        Back to home
      </Link>
    </main>
  );
}
