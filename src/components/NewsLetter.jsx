import { useState } from "react";

const NewsLetter = () => {
  const [input, setInput] = useState("");
  const handleForm = (event) => {
    event.preventDefault();
    console.log("Stay tuned for latest updates on new products.");
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
        <h4 className="text-lg font-normal">Subscribe to our Newsletter</h4>
        <p className="font-light text-sm">
          Get updates on new arrivals and exclusive deals
        </p>

        <form
          onSubmit={handleForm}
          className="flex justify-center mt-4 max-w-md mx-auto"
        >
          <input
            onChange={handleInput}
            value={input}
            className="flex-1 border border-zinc-200 px-4 py-2 rounded-1-lg outline-none"
            type="text"
            placeholder="Enter your email..."
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-1-lg hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsLetter;
