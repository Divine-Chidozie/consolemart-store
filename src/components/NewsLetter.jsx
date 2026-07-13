import { useState } from "react";

const NewsLetter = () => {
  const [input, setInput] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    function subscribeNotification() {
      alert("Subscription successful! Stay tuned for hot deals and hot news..");
    }
    setTimeout(subscribeNotification, 1000);
  };

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <section
        className="px-6 py-12 bg-gray-100 text-center"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <h4 className="text-lg font-normal">Join the GameVault Insider List</h4>
        <p className="font-light text-sm">
          Be the first to know about new arrivals, exclusive deals, and
          limited-time gaming offers.
        </p>

        <form
          onSubmit={handleForm}
          className="flex justify-center mt-4 max-w-md mx-auto"
        >
          <input
            onChange={handleInput}
            value={input}
            className="flex-1 border border-zinc-200 px-4 py-2 outline-none"
            type="text"
            placeholder="Enter your email..."
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-1-lg hover:bg-gray-400 hover:transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsLetter;
