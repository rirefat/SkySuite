'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function HomeError({ error, reset }) {
  useEffect(() => {
    console.error("Runtime Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-24">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg border border-gray-100 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
        <p className="text-gray-600 text-sm mb-6">
          We encountered an unexpected error processing your request. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary text-sm px-6 py-2"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
