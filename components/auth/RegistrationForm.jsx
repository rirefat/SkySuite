import Link from "next/link";

const RegistrationForm = () => {
  return (
    <>
      <form className="login-form">
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" />
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Create account
        </button>
      </form>

      <Link href="/login" className="text-center block my-4 font-thin text-gray-500">
        Have an account? <span className="text-blue-500 font-bold hover:underline">Login</span>
      </Link>
    </>
  );
};

export default RegistrationForm;
