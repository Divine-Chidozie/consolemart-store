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

// import xboxseries from "../assets/xboxseries.png";
import GameVaultHomeImage from "../assets/GameVaultHomeImage.png";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌌 BACKGROUND LAYER (FIXED) */}
      <div className="absolute inset-0 bg-[#0b0f19]"></div>

      {/* subtle gaming glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f2937_0%,transparent_60%)] opacity-60"></div>

      {/* optional subtle grid feel (uncomment if you want it) */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div> */}

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <section className="flex items-center justify-center mt-16">
          <div className="md:grid md:grid-cols-2 gap-10 items-center w-[90%] md:w-[70%] mx-auto">
            {/* TEXT */}
            <div data-aos="fade-right">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                GameVault delivers premium gaming consoles & accessories built
                for every level of play
              </h1>

              <p className="text-gray-300 mt-4 text-md md:text-lg">
                Discover next-generation PlayStation, Xbox, and Nintendo
                consoles, along with high-quality gaming accessories. GameVault
                offers a seamless experience built for performance and serious
                gamers.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="mt-5 bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-500 transition"
              >
                Shop Now
              </button>
            </div>

            {/* IMAGE */}
            <img
              data-aos="fade-left"
              className="w-full h-full mx-auto md:mx-0 shadow-2xl hover:scale-105 transition"
              src={GameVaultHomeImage}
              alt="GameVault gaming console"
            />
          </div>
        </section>

        {/* OTHER SECTIONS */}
        <Categories />
        <ProductCard />
        <About />
        <Deals />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
