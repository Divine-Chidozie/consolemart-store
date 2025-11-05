import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <section className="max-w-96 md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center shadow-lg drop-shadow-2xl shadow-slate-300">
      <div className="flex flex-col justify-center items-center mb-5 w-full">
        <h1 className="font-bold text-2xl">Sign Up Account</h1>
        <p className="mt-3 text-base text-left">
          Enter your persoanl details to create your account
        </p>
      </div>

      <form className="w-full flex flex-col gap-1 justify-center items-center p-5">
        <input
          type="text"
          placeholder="First Name"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
        />

        <a href="#" className="mb-3 text-sm mt-2 text-blue-700">
          Forget password?
        </a>

        <button
          type="submit"
          className="bg-black w-full text-white py-2 px-4 text-center"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm mt-2">
        Already have an Account?{" "}
        <Link
          to="/signin"
          className="text-base text-blue-700 underline underline-offset-2"
        >
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default Signup;
