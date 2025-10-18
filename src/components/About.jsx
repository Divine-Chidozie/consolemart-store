import React from "react";

const About = () => {
  const handleViewAllProducts = () => {
    alert("Coming soon! We're working hard to bring this feature online 🚧");
  };
  return (
    <>
      <section className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 w-4/5 p-3 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center">
            Why Choose ConsoleMart?
          </h2>
          <p className="text-black mt-4 text-lg">
            At ConsoleMart, we believe gaming should be seamless, exciting, and
            affordable. That's why we bring top-quality consoles, fast delivery,
            and trusted customer service together-so you can focus on the game.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center my-5">
          <p className="text-lg">
            Wide Range of Products - from PlayStation to Nintendo
          </p>
          <p className="text-lg">
            Fast & Reliable Delivery - get your gear quicky
          </p>
          <p className="text-lg">24/7 Support - we're always here for you</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="text-xl font-semibold text-center">
            Ready to Upgrade Your Gaming Setup?
          </h2>
          <p className="text-lg">
            Your next adventure begins here. Browse the latest consoles,
            accessories, and more - all at unbeatable prices
          </p>
          <button
            onClick={handleViewAllProducts}
            className="bg-black  text-white mt-3 py-2 px-4 rounded-lg hover:bg-zinc-400 transition"
          >
            View All Products
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
