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

      <Link href="/registration" className="text-center block my-4 font-thin text-gray-500">
        Don&apos;t have any account? <span className="text-blue-500 font-bold hover:underline">Register Now</span>
      </Link>
    </>
  );
};

export default LoginForm;
