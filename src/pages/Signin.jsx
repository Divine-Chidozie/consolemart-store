import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
      console.log("Form submitted successfully! Logging you in...", {
        email,
        password,
      });
    }

    // Fetch saved User data from signUp

    if (emailErr || passwordErr) return;
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.userEmail === email &&
      savedUser.userPassword === password
    ) {
      console.log("User logged in successfully");
      navigate("/shop");
    } else {
      setPasswordError("Incorrect email or password");
      return;
    }

    const userSignIn = {
      userEmail: email,
      userPassword: password,
    };

    localStorage.setItem("userSignIn", JSON.stringify(userSignIn));

    // const saveUserLogIn = localStorage.setItem(
    //   "userSignIn",
    //   JSON.stringify(userSignIn),
    // );
  };

  return (
    <>
      <section
        className="max-w-96 md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center bg-white rounded-xl shadow-xl border border-gray-100"
        data-aos="fade-up"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center mb-5 w-full"
        >
          <div className="mb-5">
            <h2 className="text-4xl font-bold text-gray-600">GameVault</h2>
          </div>
          <h1 className="font-bold text-lg">Welcome Back to GameVault!</h1>
          <p className="mt-1 text-sm">
            Sign in to manage your account, track orders, and continue shopping
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center p-1 "
        >
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="w-full border-2 border-gray-800 py-1 pl-2 text-base  text-gray-700 outline-none mb-2"
          />
          {emailError && (
            <p className="text-red-600 text-xs mb-3 font-bold">{emailError}</p>
          )}

          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="w-full border-2 border-gray-800 mb-1 py-1 pl-2  text-base text-gray-700 outline-none"
          />
          {passwordError && (
            <p className="text-red-600 text-xs mb-3 font-bold">
              {passwordError}
            </p>
          )}

          <div className="w-full flex justify-between items-center text-sm mb-3 mt-1">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgetpassword" className="text-blue-700">
              Forgot Password?
            </Link>
          </div>

          <div className="w-full flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <button
            type="submit"
            className="bg-black w-full text-white py-2 px-4 text-center"
          >
            {/* <Link to="/shop">Login</Link> */}
            Sign In
          </button>
        </form>
        <p className="font-normal mt-2 text-sm">
          Dont have an account?{" "}
          <Link
            to="/signup"
            className="text-base underline underline-offset-2 text-blue-700"
          >
            create one
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signin;
