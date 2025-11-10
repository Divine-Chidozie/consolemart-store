import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(savedCart.length);
    };
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  const logoWidth = { width: "30px" };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 bg-white shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div>
          <img style={logoWidth} src={logo} alt="Navbar gaming logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6">
          <li className="hover:text-blue-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center">
          <Link
            to="/cart"
            className="relative text-lg hover:scale-75 transition"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/signin"
            className="bg-black text-white py-2 px-4 ml-4 rounded-sm hover:bg-zinc-400 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3  bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(true)} className="text-2xl">
            ✖
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-start gap-4 px-6 mt-10">
          <li className="hover:text-blue-500 transition w-full">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-blue-500 transition w-full">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-blue-500 transition w-full">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition w-full">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Cart and Sign In */}
        <div className="mt-6 px-6 flex flex-col gap-4">
          <Link to="/cart" className="relative text-lg">
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/signin"
            className="bg-black text-white py-2 px-4 rounded-sm text-center hover:bg-zinc-400 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Background Overlay when Drawer is Open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
