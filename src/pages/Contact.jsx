import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    if (!name.trim()) {
      setNameError("Name can't be Empty");
      isValid = false;
    } else if (name.length < 5) {
      setNameError("Name can't be less that 5 characters");
    }

    if (isValid) {
      console.log("Form working...", { name });
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <section className="flex flex-col items-center">
          <h1 className="text-xl mb-2 text-black mt-14">Contact ConsoleMart</h1>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            At ConsoleMart, we're always ready to assist our customers. Whether
            you want to make an enquiry, report an issue, or share your feedback
            - we'd love to hear from you. Let's connect and make your gaming
            experience even better.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
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
            <li className="flex flex-col items-center p-1 text-sm">
              <strong className="font-normal">Office Address:</strong> 24 Tech
              Avenue, Mile 50, Abakaliki, Ebonyi State, Nigeria
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">Customer Support Hours</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            We aim to respond to all enquires as fast as possible
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

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">Send Us a Message</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            If you'd like to contact us directly, fill out the form below. Our
            team will reach out within 24 hours. Please provide accurate details
            so we can respond efficiently
          </p>

          <form
            onSubmit={handleSubmit}
            action="form/api/contact-us"
            className="border border-black p-5 flex justify-center items-center flex-1 flex-col bg-gray-100 mt-4"
          >
            <div className="flex flex-col mb-2">
              <label className="text-sm mb-1">Full Name</label>
              <input
                onChange={handleNameChange}
                value={name}
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              />

              {nameError && (
                <p className="text-red-500 font-bold text-xs  mt-1">
                  {nameError}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-sm mb-1">Email</label>
              <input
                onChange={handleEmailChange}
                value={email}
                type="text"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              />
              <p className="text-red-500 text-sm font-medium mt-1"></p>
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="border border-black py-1 px-2 font-semibold hover:text-white  hover:border-gray-50 hover:bg-green-800 transition"
            >
              Submit Message
            </button>
          </form>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">Connect on Social Media</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Join our gaming community online and never miss out on console
            deals, product updates, or giveaways. Follow ConsoleMart on your
            favorite platforms:
          </p>

          <ul className="font-medium text-sm">
            <li>Facebook: @ConsoleMart</li>
            <li>Instagram: @ConsoleMart.ng</li>
            <li>Twiiter: @ConsoleMartHQ</li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">Locate Our Store</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Perfer a face-to-face experience? Visit our store or pickup center
            in Abakaliki. You can find us using the map below or through your
            preferred navigation app.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-xl mb-2">We Value Your Feedback</h2>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-2">
            Your opinion matters to us. ConsoleMart continues to grow by
            listening to our customers. if you have suggestions or ideas for
            improving our services, we'd love to hear from you.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h3 className="text-xl mb-2">Thank You Message</h3>
          <p className="w-[95%] md:w-3/4 text-sm text-center mb-10">
            Thank you for choosing ConsoleMart - where gaming meets quality,
            affordablitiy, and execeptional customer support.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
