import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <form className="login-form">
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
