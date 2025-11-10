import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import About from "../components/About";
import Deals from "../components/Deals";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import xboxseries from "../assets/xboxseries.png";

export default function Home() {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/shop");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />

      <section
        className="flex items-center justify-center mt-10"
        data-aos="fade-up"
      >
        <div className="md:grid md:grid-cols-2 gap-6  items-center w-[90%] md:w-[70%] mx-auto md:text-left">
          <div data-aos="fade-right">
            <h1 className="text-3xl font-bold  sm:text-black md:text-4xl leading-tight">
              Power Up Your Play-Discover the best Gaming Consoles & Accessories
            </h1>
            <p className="text-gray-600 mt-4 text-md md:text-lg">
              From PlayStation to Xbox to Nintendo, ConsoleMart brings you the
              best in gaming gear - all in one place.Level up your experience
              today!
            </p>
            <button
              onClick={handleShopNow}
              className="bg-black mx-auto sm:mx-0 max-w-full text-white mt-3 py-2 px-4 rounded-lg hover:bg-zinc-700 hover:scale-105 transition"
            >
              Shop Now...
            </button>
          </div>
          <img
            data-aos="fade-left"
            className="w-8/12 rounded-xl shadow-lg animate-float-zoom hover:-translate-y-5 transition mt-5 mx-auto md:mx-0"
            src={xboxseries}
            alt="hero image"
          />
        </div>
      </section>
      <Categories />
      <ProductCard />
      <About />
      <Deals />
      <NewsLetter />
      <Footer />
    </>
  );
}
