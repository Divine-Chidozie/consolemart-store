import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const validateName = (value) => {
    if (!value.trim()) {
      return "Please enter your name";
    }
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Please enter your email address";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  function validateMessage(value) {
    if (!value) {
      return "Please enter your message";
    }
    return "";
  }
  validateMessage();

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const messageErr = validateMessage(message);

    setNameError(nameErr);
    setEmailError(emailErr);
    setMessageError(messageErr);

    if (!nameErr && !emailErr && !messageErr) {
      console.log("Form submitted successfully:", { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  // 🔥 Clear errors when user types
  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError) setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  function handleMessageChange(event) {
    setMessage(event.target.value);
    if (messageError) setMessageError("");
  }
  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <section className="flex flex-col items-center" data-aos="fade-up">
          <h1 className="text-xl mb-2 text-black mt-14">Contact GameVault</h1>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Have a question about a product, order, or delivery? Our team is
            here to help. Reach out to us and we we'll get back to you as soon
            as possible.
          </p>
        </section>

        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-xl mb-2">Get in Touch with Us</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Need assistance? Whether you're looking for product recommendations,
            order updates, or technical support, our customer service team is
            ready to assist.
          </p>

          <ul className="grid gap-1 shadow-gray-300 shadow-md p-5 mt-3">
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">Email:</strong>{" "}
              support@gamevault.com
            </li>
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">Phone:</strong> Available upon
              request
            </li>

            <li className="flex flex-col items-center p-1 text-sm text-center">
              <strong className="font-normal">Location:</strong> Lagos, Nigeria
            </li>
          </ul>
        </section>

        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-xl mb-2">Customer Support Hours</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            We strive to respond to all enquiries promptly during our business
            hours.
          </p>
          <ul className="grid gap-1 shadow-gray-200 shadow-sm p-5 mt-3">
            <li className="bg-green-400 font-thin mb-1 px-2">
              Monday - Friday: 8:00AM - 6:00PM
            </li>
            <li className="bg-green-400 font-thin mb-1 px-2">
              Saturday: 9:00AM - 4:00PM
            </li>
            <li className="bg-red-400 font-thin px-2">Sunday: Closed</li>
          </ul>
        </section>

        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h2 className="text-xl mb-2">Send Us a Message</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Send us a message and a member of our team will respond as soon as
            possible. Please provide accurate information so we can assist you
            effectively.
          </p>

          <form
            onSubmit={handleSubmit}
            className="border border-black p-5 flex justify-center items-center flex-1 flex-col bg-gray-100 mt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="flex flex-col mb-2 w-full">
              <label className="text-sm mb-1">Full Name</label>
              <input
                onChange={handleNameChange}
                value={name}
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              />
              {nameError && (
                <p className="text-red-500 font-bold text-xs mt-1">
                  {nameError}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-2 w-full">
              <label className="text-sm mb-1">Email</label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="text"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              />
              {emailError && (
                <p className="text-red-500 font-bold text-xs mt-1">
                  {emailError}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-2 w-full">
              <label className="text-sm mb-1">Message</label>
              <textarea
                onChange={handleMessageChange}
                value={message}
                name="message"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              ></textarea>
              {messageError && (
                <p className="text-red-500 font-bold text-xs mt-1">
                  {messageError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="border border-black py-1 px-2 font-semibold hover:text-white hover:border-gray-50 hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </section>

        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <h2 className="text-xl mb-2">Connect on Social Media</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Stay connected with GameVault for the latest product launches,
            gaming updates, exclusive offers, and community news.
          </p>

          <ul className="font-medium text-sm">
            <li>Facebook: @ConsoleMart</li>
            <li>Instagram: @ConsoleMart.ng</li>
            <li>Twitter: @ConsoleMartHQ</li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">Locate Our Store</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Prefer an in-person experience? Visit our store or pickup location
            in Lagos to explore our products and speak directly with our team.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">We Value Your Feedback</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Your feedback helps us improve. We value every suggestion, review,
            and recommendation shared by our customers and gaming community.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14 mb-10">
          <h3 className="text-xl mb-2">Thank You for Choosing GameVault</h3>

          <p className="w-[95%] md:w-3/4 text-center text-sm">
            We appreciate your trust in GameVault. Our mission is to provide
            gamers with quality products, reliable service, and an exceptional
            shopping experience every time.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
