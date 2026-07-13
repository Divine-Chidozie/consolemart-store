import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const ForgetPassword = () => {
  // const [passwordError, setPasswordError] = useState();

  useEffect(function () {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.error("Form clicked");
  }

  return (
    <>
      <section
        className="md:w-2/5 my-24 mx-auto flex flex-col justify-center items-center p-10 text-center shadow-lg drop-shadow-2xl shadow-slate-300"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-center items-center mb-5 w-full">
          <h1 className="font-bold text-2xl">Reset Your Password</h1>
          <p className="mt-1 text-base">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>

        <form onSubmit={handleSubmit} action="" className="p-5 w-full">
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <input
              type="text"
              placeholder="Enter email address..."
              className="outline-none border-gray-200 border py-1 px-2 focus:outline-offset-1 focus:outline-white mx-1"
            />

            <button className="bg-black  text-white border-none py-2 px-4 text-center text-sm">
              Reset Password
            </button>
          </div>
        </form>

        <div className="text-sm">
          <p>
            Back to {""}
            <Link to="/" className="text-blue-600 underline">
              Home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
