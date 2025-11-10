import { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const navigate = useNavigate();

  const validateEmail = (value) => {
    if (!value.trim()) return "Please enter your email address";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (value) => {
    if (!value.trim()) return "Please enter your password";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

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
    <>
      <section className="max-w-96 md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center shadow-lg drop-shadow-2xl shadow-slate-300">
        <div className="flex flex-col justify-center items-center mb-5 w-full">
          <h1 className="font-bold text-2xl">Welcome Back!</h1>
          <p className="mt-1 text-base">Enter your login information</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center p-1 "
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="✉️ Email Address"
            className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
          />
          {emailError && (
            <p className="text-red-600 text-xs mb-3 font-bold">{emailError}</p>
          )}

          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="🔒 Password"
            className="w-full border-2 border-gray-800 mb-1 py-1 pl-2  text-base text-gray-700 outline-none"
          />
          {passwordError && (
            <p className="text-red-600 text-xs mb-3 font-bold">
              {passwordError}
            </p>
          )}

          <Link
            to="/forgetpassword"
            className="mb-3 text-sm mt-2 text-blue-700"
          >
            Forget password?
          </Link>

          <button
            type="submit"
            className="bg-black w-full text-white py-2 px-4 text-center"
          >
            <Link to="/checkout">Login</Link>
          </button>
        </form>
        <p className="font-normal mt-2 text-sm">
          New user?{" "}
          <Link
            to="/signup"
            className="text-base underline underline-offset-2 text-blue-700"
          >
            create an account
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signin;
