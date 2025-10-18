import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ cartCount = 0 }) => {
  const logoWidth = {
    width: "30px",
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-5 mb-10 bg-white shadow-md sticky top-0 z-50">
        {/* Left Side Logo */}
        <div>
          <img style={logoWidth} src={logo} alt="Navbar gaming logo" />
        </div>

        {/* Middle Side Navigation Links */}
        <ul className="flex items-center justify-center gap-3">
          <li className=" hover:text-blue-500 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-blue-500 transition">
            <Link to="/shop">Shop</Link>
          </li>

          <li className="hover:text-blue-500 transition">
            <a href="/">About</a>
          </li>

          <li className="hover:text-blue-500 transition">
            <a href="/">Contact</a>
          </li>
        </ul>

        {/* Right Side  */}
        <div className="relative">
          <Link
            to="/signin"
            className="bg-black max-w-full text-white mt-3 py-2 px-4  rounded-lg hover:bg-zinc-400 transition"
          >
            Sign In
          </Link>
          <Link to="/cartpage" className="relative ml-4 text-lg">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
