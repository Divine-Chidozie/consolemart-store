import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <section className="w-full md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center shadow-lg drop-shadow-2xl shadow-slate-300">
      <div className="flex flex-col justify-center items-center mb-5 w-full">
        <h1 className="font-bold text-3xl">Sign Up Account</h1>
        <p className="mt-3 text-lg">
          Enter your persoanl details to create your account
        </p>
      </div>

      <form className="w-full flex flex-col gap-1 justify-center items-center p-5">
        <input
          type="text"
          placeholder="First Name"
          className="w-full py-2 pl-2 text-[15px] text-gray-700 outline-none mb-1 border rounded-md border-slate-300"
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full py-2 pl-2 text-[15px] text-gray-700 outline-none mb-1 border rounded-md border-slate-300"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full py-2 pl-2 text-[15px] text-gray-700 outline-none mb-1 border rounded-md border-slate-300"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-md border-slate-300 mb-1 py-2 pl-2 text-[15px] text-gray-700 outline-none"
        />

        <a href="#" className="mb-3">
          Forget password?
        </a>

        <button
          type="submit"
          className="bg-black w-2/4 text-white py-2 px-4 rounded-lg text-center hover:bg-zinc-400 transition"
        >
          Login
        </button>
      </form>
      <p className="font-normal mt-2">
        Already have an Account?{" "}
        <Link
          to="/signin"
          className="text-lg font-bold underline underline-offset-2"
        >
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default Signup;
