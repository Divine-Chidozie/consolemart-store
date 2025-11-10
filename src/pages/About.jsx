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
            About ConsoleMart
          </h1>
          <p className="w-[95%] md:w-3/4 text-md text-center mb-2">
            At ConsoleMart, we're passionate about gaming. Since our founding,
            we've dedicated ourselves to providing top-quality consoles,
            accessories, and gaming experiences for players of all levels. Our
            goal is simple: make gaming accessible, exciting, and reliable for
            everyone.
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
            ConsoleMart was founded in 2022 by a team of gaming enthusiasts who
            wanted to create a one-stop destination for gamers in Nigeria. From
            PlayStation classics to the latest Nintendo Switch consoles, we
            source only the best for our community.
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
                Deliver high-quality gaming consoles, accessories, and
                experiences to players everywhere, quick and reliably
              </p>
            </div>

            <div
              className="w-full flex flex-col shadow-sm shadow-slate-300 p-5 py-8 md:w-2/6"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <h3 className="font-bold text-lg my-2">Vision</h3>
              <p className="w-full">
                To be the go-to destination for gamers seeking the best geer and
                support
              </p>
            </div>

            <div
              className="w-full flex flex-col shadow-sm  shadow-slate-300 p-5 py-14 md:w-2/6"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3 className="w-full ">
                Passion, Quality, Customer First, Innovation.
              </h3>
            </div>

            {/* add image here later: Use simple illustrative icons for Mission, Vision, and Values */}
          </div>
        </section>

        {/* Why Choose ConsoleMart Section*/}
        <section className="mt-14" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl mb-2 text-center">Why Choose ConsoleMart?</h2>
          <div className="grid grid-row-4 gap-10 p-5 md:grid-cols-4 md:gap-5  w-11/12 my-0 mx-auto">
            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-medium text-base my-2">
                Wide Range of Products →
              </h3>
              <p className="text-sm">
                From PlayStation to Nintendo, we have consoles and accessories
                for every gamer.
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-medium text-base my-2">
                Fast & Reliable Delivery →
              </h3>
              <p className="text-sm">
                Get your gear delivered quickly and safely with our trusted
                service.
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-medium text-md my-2">24/7 Support →</h3>
              <p className="text-sm">
                Our team is always ready to help you with questions or issues.
              </p>
            </div>

            <div className="rounded shadow-md shadow-gray-300 transition cursor-pointer py-2 px-4 hover:bg-[#111827] hover:text-white">
              <h3 className="font-medium text-md my-2">Affordable Prices →</h3>
              <p className="text-sm">
                We provide high-quality products at prices that won’t break your
                wallet.
              </p>
            </div>
          </div>
          {/* Icons / Image Suggestions: Small illustrative icons for each feature. */}
        </section>

        {/* Testimonials (Optional) Section */}
        <section className="mt-14" data-aos="fade-up" data-aos-delay="600">
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
          {/* Image Placeholder: Small avatar or gamer images. */}
        </section>

        {/* Call to Action Section */}
        <section className="mt-14" data-aos="fade-up" data-aos-delay="800">
          <div className="flex flex-col justify-center text-center items-center">
            <h2 className="text-2xl mb-2">
              Ready to Level up your Gaming Setup?
            </h2>
            <p className="w-3/4 text-sm mb-2">
              Browse our latest consoles, controllers, and accessories-all at
              unbeatable prices. Your next gaming adventure starts here
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
