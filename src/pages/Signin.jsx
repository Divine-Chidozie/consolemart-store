import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const navigate = useNavigate();

  // Validate email format
  const validateEmail = (value) => {
    if (!value.trim()) return "Please enter your email address";
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email";
    return "";
  };

  // Validate password
  const validatePassword = (value) => {
    if (!value.trim()) return "Please enter your password";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  // Real-time validation on typing
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (!emailErr && !passwordErr) {
      console.log("Form submitted successfully! Logging you in...");
      // API call goes here
    }
  };

  return (
    <section className="w-full md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center shadow-lg drop-shadow-2xl shadow-slate-300">
      <div className="flex flex-col justify-center items-center mb-5 w-full">
        <h1 className="font-bold text-3xl">Welcome Back!</h1>
        <p className="mt-3 text-lg">Enter your login information</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center p-5 "
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="✉️ Email Address"
          className="w-full border-2 border-gray-200 py-2 pl-2  text-lg text-gray-700 outline-none mb-1"
        />
        {emailError && (
          <p className="text-red-600 text-sm mb-3 font-bold">{emailError}</p>
        )}

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="🔒 Password"
          className="w-full border-2 border-gray-200 mb-1 py-2 pl-2  text-lg text-gray-700 outline-none"
        />
        {passwordError && (
          <p className="text-red-600 text-sm mb-3 font-bold">{passwordError}</p>
        )}

        <a href="#" className="mb-3 text-lg">
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
        New user?{" "}
        <Link
          to="/signup"
          className="text-lg font-bold underline underline-offset-2"
        >
          create an account
        </Link>
      </p>
    </section>
  );
};

export default Signin;
