import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-16 bg-gray-50">
        {/* About Heading Section */}
        <section className="flex flex-col items-center" data-aos="fade-up">
          <h1
            className="text-2xl mb-2 text-black"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            About GameVault
          </h1>
          <p className="w-[95%] md:w-3/4 text-md text-center mb-2">
            GameVault is your trusted destination for premium gaming consoles,
            accessories, and gaming essentials. We are committed to delivering
            quality products, competitive pricing, and a seamless shopping
            experience for gamers of all levels.
          </p>
          <button className="bg-green-600 text-white font-serif font-thin py-2 px-4">
            <Link to="/shop">Browse Our Products →</Link>
          </button>
        </section>

        {/* Our Story Section */}
        <section
          className="flex flex-col items-center mt-14"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl mb-2" data-aos="fade-right">
            Our Story
          </h2>
          <p className="w-[95%] md:w-3/4 text-md text-center mb-2">
            GameVault was created with a simple goal — to make premium gaming
            products more accessible to gamers. From consoles and controllers to
            accessories and storage solutions, we focus on offering products
            that enhance every gaming experience.
          </p>
          <p className="w-[95%] md:w-3/4  text-md text-center mb-2">
            Our mission began with a simple idea: combine quality products, fast
            delivery, and execellent customer service to give gamer the
            experience they deserve
          </p>

          {/* add image here later: photo of the founding team, office or warehouse */}
          <img src="#" alt="founding team or office or warehouse" />
        </section>

        {/* Mission & Vision Section */}
        <section className="mt-14" data-aos="fade-up">
          <h2 className="text-2xl mb-2 text-center">Our Mission & Vision</h2>
          <div className="mt-2 flex flex-col justify-between md:flex-row gap-5 items-center max-w-6xl m-auto py-2 px-4">
            <div
              className="w-full flex flex-col shadow-sm shadow-slate-300 p-5 md:w-2/6"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3 className="font-bold text-lg my-2">Mission</h3>
              <p className="w-full">
                Tp provide gamers with high-quality consoles, accessories, and
                gaming solutions backed by exceptional service and reliable
                delivery.
              </p>
            </div>

            <div
              className="w-full flex flex-col shadow-sm shadow-slate-300 p-5 py-8 md:w-2/6"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h3 className="font-bold text-lg my-2">Vision</h3>
              <p className="w-full">
                To become the most trusted gaming marketplace, connecting gamers
                with the products and support they need to play at their best.
              </p>
            </div>

            <div
              className="w-full flex flex-col shadow-sm  shadow-slate-300 p-5 py-14 md:w-2/6"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3 className="w-full ">Our Values</h3>
              <p className="w-full">
                Passion for Gaming, Product Quality, Customer Satisfaction,
                Innovation, and Reliability.
              </p>
            </div>

            {/* add image here later: Use simple illustrative icons for Mission, Vision, and Values */}
          </div>
        </section>

        {/* Why Choose ConsoleMart Section*/}
        <section className="mt-14" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl mb-2 text-center">Why Choose ConsoleMart?</h2>
          <div className="grid grid-row-4 gap-10 p-5 md:grid-cols-4 md:gap-5  w-11/12 my-0 mx-auto">
            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-normal text-lg mb-2">
                Curated Gaming Collection
              </h3>
              <p className="text-sm font-light">
                We carefully select consoles and accessories from top gaming
                brands to ensure quality and performance
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-normal text-lg mb-2">
                Fast & Secure Delivery
              </h3>
              <p className="text-sm font-light">
                Get your gaming gear delivered safely and quickly, with reliable
                logistics you can trust
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-normal text-lg mb-2">Dedicated Support</h3>
              <p className="text-sm font-light">
                Our support team is always available to assist you with orders,
                product questions, and updates
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-normal text-lg mb-2 hover:text-white">
                Built for Gamers, Designed for Performance
              </h3>

              <p className="text-gray-700 text-sm hover:text-white">
                At GameVault, we believe gaming is more than entertainment —
                it's an experience. We exist to make high-quality gaming
                accessible, seamless, and enjoyable for everyone.
              </p>
            </div>
          </div>
          {/* Icons / Image Suggestions: Small illustrative icons for each feature. */}
        </section>

        {/* Testimonials (Optional) Section */}
        {/* <section className="mt-14" data-aos="fade-up" data-aos-delay="600">
          <h2 className="text-2xl mb-5 text-center">What Our Gamers Say</h2>
          <section className="grid grid-cols-1 w-[95%] text-center md:w-8/12 m-auto gap-10">
            <div className="m-2 p-5 rounded shadow-lg border-gray-400">
              <h4 className="font-medium text-md my-2">Testimonal 1</h4>
              <p className="text-sm">
                "I got my Xbox Series X within two days—amazing service!" –
                David K.
              </p>
            </div>

            <div className="m-2 p-5 rounded shadow-lg border-gray-400">
              <h4 className="font-medium text-md my-2">Testimonal 2</h4>
              <p className="text-sm">
                "ConsoleMart is my go-to store for gaming accessories. Highly
                recommended!" – Chinwe A.
              </p>
            </div>
          </section>
        </section> */}

        {/* Call to Action Section */}
        <section className="mt-14" data-aos="fade-up" data-aos-delay="800">
          <div className="flex flex-col justify-center text-center items-center">
            <h2 className="text-2xl mb-2">
              Ready to Upgrade Your Gaming Experience?
            </h2>
            <p className="w-3/4 text-sm mb-2">
              Discover the latest consoles, controllers, headsets, and gaming
              accessories carefully selected for performance, quality, and
              value.
            </p>
            <Link
              to="/shop"
              className="bg-green-600 text-white font-serif font-thin py-2 px-4 mb-5"
            >
              Shop Now →
            </Link>
          </div>
        </section>
      </div>
      <NewLetter />
      <Footer />
    </>
  );
}
