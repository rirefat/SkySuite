'use client'
import { login } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (response.error) {
        setError(response.error.message);
      } else {
        router.push('/bookings');
      }

    } catch (err) {
      setError(err?.message);
    }
  }

  return (
    <>
      {error && (
        <div className="text-xl text-red-500 text-center">{error}</div>
      )}

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>

      <div className="text-center text-s text-gray-500">
        <Link href='/registration' className="text-blue-600 font-bold hover:underline mx-1">Register</Link>
        or SignUp with
      </div>
    </>
  );
};

export default LoginForm;
