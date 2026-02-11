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
          <h1 className="text-xl mb-2 text-black mt-14">Contact ConsoleMart</h1>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            At ConsoleMart, we're always ready to assist our customers. Whether
            you want to make an enquiry, report an issue, or share your feedback
            — we'd love to hear from you. Let's connect and make your gaming
            experience even better.
          </p>
        </section>

        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-xl mb-2">Get in Touch with Us</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Our customer service team is available to answer your questions
            about consoles, accessories, orders, or deliveries. You can contact
            us through the following channels:
          </p>

          <ul className="grid gap-1 shadow-gray-300 shadow-md p-5 mt-3">
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">Email:</strong>{" "}
              support@consolemart.com
            </li>
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">Phone:</strong> +234 800 123 4567
            </li>
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">WhatsApp:</strong> +234 901 234
              5678
            </li>
            <li className="flex flex-col items-center p-1 text-sm text-center">
              <strong className="font-normal">Office Address:</strong> 24
              Admiralty way, Lekki Phase 1, Lagos, Nigeria
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
            We aim to respond to all enquiries as fast as possible
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
            If you'd like to contact us directly, fill out the form below. Our
            team will reach out within 24 hours. Please provide accurate details
            so we can respond efficiently.
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
              Submit Message
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
            Join our gaming community online and never miss out on console
            deals, product updates, or giveaways. Follow ConsoleMart on your
            favorite platforms:
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
            Perfer a face-to-face experience? Visit our store or pickup center
            in Lekki, Lagos.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">We Value Your Feedback</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Your opinion matters to us. ConsoleMart continues to grow by
            listening to our customers. If you have suggestions or ideas for
            improving our services, we'd love to hear from you.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14 mb-10">
          <h3 className="text-xl mb-2">Thank You Message</h3>
          <p className="w-[95%] md:w-3/4 text-sm text-center">
            Thank you for choosing ConsoleMart — where gaming meets quality,
            affordability, and exceptional customer support.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
