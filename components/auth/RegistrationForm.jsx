'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get("fname");
      const lname = formData.get("lname");
      const email = formData.get("email");
      const password = formData.get("password");

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        })
      });

      if (res.status === 201) {
        router.push('/login');
      } else {
        const message = await res.text();
        setError(message || "Registration failed.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
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
          <label htmlFor="fname">First Name</label>
          <input required type="text" name="fname" id="fname" />
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input required minLength={5} type="password" name="password" id="password" />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full mt-4 disabled:opacity-50">
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <div className="text-center text-sm text-gray-500">
        Already have an account?
        <Link href='/login' className="text-blue-600 font-bold hover:underline mx-1">
          Login
        </Link>
        or sign up with
      </div>
    </>
  );
};

export default RegistrationForm;
