import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-24">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
        <div className="text-6xl font-extrabold text-primary mb-2">404</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 text-sm mb-6">
          The page or hotel you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block text-sm px-6 py-2"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
