const NewsLetter = () => {
  const handleForm = (event) => {
    event.preventDefault();
    // console.log("Stay tuned for latest updates on new products.");
    alert("Coming soon! We're working hard to bring this feature online 🚧");
  };

  return (
    <>
      <section className="px-6 py-12 bg-gray-100 text-center">
        <h4 className="text-2xl font-semibold">Subscribe to our Newsletter</h4>
        <p>Get updates on new arrivals and exclusive deals</p>

        <form
          onSubmit={handleForm}
          className="flex justify-center mt-4 max-w-md mx-auto"
        >
          <input
            className="flex-1 border border-zinc-200 px-4 py-2 rounded-1-lg outline-none"
            type="text"
            placeholder="Enter your email"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-1-lg hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
};

export default NewsLetter;
