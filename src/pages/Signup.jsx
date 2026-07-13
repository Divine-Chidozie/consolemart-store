import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
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

  function validateFirstName(value) {
    if (!value.trim()) {
      return "Please enter your first name";
    }
    return "";
  }

  function validateLastName(value) {
    if (!value.trim()) {
      return "Please enter your second name";
    }
    return "";
  }

  function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      return "Please enter a valid email Address";
    } else if (!emailRegex.test(value)) {
      return "Please enter a valid email format";
    } else {
      return "";
    }
  }

  function handleLastNameError(e) {
    setLastName(e.target.value);
    if (lastNameError) setLastNameError("");
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    if (firstNameError) setFirstNameError("");
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (emailError) {
      setEmailError("");
    }
  };

  function handlePassword(e) {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError("");
    }
  }

  function validatePassword(value) {
    if (!value.trim()) {
      return "Please enter a password";
    } else if (value.trim().length <= 5) {
      return " Password must be at least 6 characters long";
    }
    return "";
  }

  const handleChange = (event) => {
    event.preventDefault();

    const firstNameErr = validateFirstName(firstName);
    const lastNameErr = validateLastName(lastName);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    setFirstNameError(firstNameErr);
    setLastNameError(lastNameErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    // If all fields are valid
    if (!firstNameErr && !lastNameErr && !emailErr && !passwordErr) {
      console.log("Form submitted successfully:", {
        firstName,
        lastName,
        email,
        password,
      });

      // Save the registered user
      const userSingUp = {
        userFirstName: firstName,
        userLastName: lastName,
        userEmail: email,
        userPassword: password,
      };
      localStorage.setItem("user", JSON.stringify(userSingUp));

      // REdirect to signin page
      navigate("/signin");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.userEmail === email) {
      setEmailError("An account with this email already exists");
      return;
    }
  };

  return (
    <section
      className="max-w-96 md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center bg-white rounded-xl shadow-xl border border-gray-100"
      data-aos="fade-down"
    >
      <div className="flex flex-col justify-center items-center mb-5 w-full">
        <h2 className="text-4xl font-bold text-gray-600 mb-2">GameVault</h2>
        <h1 className="font-bold text-2xl">Create Your Account</h1>
        <p className="mt-3 text-sm text-gray-600 text-center">
          Join GameVault to save favorities, track orders, and enjoy a seamless
          gaming experience
        </p>
      </div>

      <form
        onSubmit={handleChange}
        className="w-full flex flex-col gap-1 justify-center items-start p-5"
      >
        <input
          onChange={handleFirstNameChange}
          value={firstName}
          type="text"
          placeholder="Enter your first name"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-sm  text-gray-700 outline-none"
        />
        {firstNameError && (
          <p className="text-red-500 font-bold text-xs mb-3">
            {firstNameError}
          </p>
        )}
        <input
          onChange={handleLastNameError}
          value={lastName}
          type="text"
          placeholder="Enter your last name"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-sm  text-gray-700 outline-none"
        />

        {lastNameError && (
          <p className="text-red-500 font-bold text-xs mb-3">{lastNameError}</p>
        )}
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="Enter your email address"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-sm text-gray-700 outline-none"
        />
        {emailError && (
          <p className="text-red-500 font-bold text-xs mb-3">{emailError}</p>
        )}
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="Create a password"
          className="w-full border-2 border-gray-800 py-1 pl-2 text-sm text-gray-700 outline-none"
        />
        {passwordError && (
          <p className="text-red-500 font-bold text-xs mb-3">{passwordError}</p>
        )}

        <button
          type="submit"
          className="bg-black w-full text-white py-2 px-4 text-center"
        >
          Create Account
        </button>
      </form>

      <div className="w-full flex items-center my-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-sm text-gray-500">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <p className="text-sm mt-2">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-700 font-medium">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default Signup;
