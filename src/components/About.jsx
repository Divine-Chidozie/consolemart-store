import React from "react";

const About = () => {
  return (
    <>
      <section className="px-6 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose ConsoleMart?</h2>
          <p className="text-gray-700 mb-8">
            At ConsoleMart, we believe gaming should be seamless, exciting, and
            affordable. That's why we bring top-quality consoles, fast delivery,
            and trusted customer service together—so you can focus on the game.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Wide Range of Products</h3>
              <p>
                From PlayStation to Nintendo, we have the consoles and
                accessories you need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">
                Fast & Reliable Delivery
              </h3>
              <p>
                Get your gear quickly and safely with our trusted delivery
                service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p>We're always here to help you with any questions or issues.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">
              Ready to Upgrade Your Gaming Setup?
            </h3>
            <p className="text-gray-700">
              Your next adventure begins here. Browse the latest consoles,
              accessories, and more—all at unbeatable prices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
