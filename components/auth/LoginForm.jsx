'use client';
import { login } from "@/actions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/bookings';

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (response?.error) {
        setError(response.error.message || "Invalid credentials.");
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (err) {
      setError(err?.message || "Authentication failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="p-3 my-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md text-center">
          {error}
        </div>
      )}

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input required type="password" name="password" id="password" />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full mt-4 disabled:opacity-50">
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">
        Don&apos;t have an account?
        <Link href='/registration' className="text-blue-600 font-bold hover:underline mx-1">
          Register
        </Link>
        or Sign in with
      </div>
    </>
  );
};

export default LoginForm;
