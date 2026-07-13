import { Link, useNavigate } from "react-router-dom";
import consolemartlogo from "../assets/consolemartlogo.png";

const Footer = () => {
  const navigate = useNavigate();

  function handleShopNavigate() {
    navigate("/shop");
  }

  const handleAboutNavigate = () => {
    navigate("/about");
  };

  const handleContactNavigate = () => {
    navigate("/contact");
  };

  // === Handle Support Info Alert Message ===
  const handleFAQ = (e) => {
    e.preventDefault();
    alert("FAQs section is currently being updated. Please check back soon.");
  };

  function handleReturns(e) {
    e.preventDefault();
    alert("Return policy feature will be available soon.");
  }

  const handlePrivacyPolicy = (e) => {
    e.preventDefault();

    alert("Privacy policy is currently been updated.");
  };

  function handleTerms(e) {
    e.preventDefault();
    alert("Terms & Condition are currently being updated.");
  }

  return (
    <footer
      className="bg-gray-900 text-gray-300 px-6 py-12"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-easing="ease-in-zine"
    >
      {/* Top Grid Section */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Logo & Tagline */}
        <div>
          <Link to="/">
            <img
              className="w-8 mb-4 rounded-full"
              src={consolemartlogo}
              alt="GameVault Logo"
            />
          </Link>
          <p>Premium Gaming Consoles & Accessories</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a
                  onClick={handleShopNavigate}
                  className="hover:text-white transition cursor-pointer"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  onClick={handleAboutNavigate}
                  className="hover:text-white transition cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleContactNavigate}
                  className="hover:text-white transition cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Support & Info */}
        <div>
          <h4 className="font-semibold mb-2">Support & Info</h4>
          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  onClick={handleFAQ}
                  href="/"
                  className="hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  onClick={handleReturns}
                  href="/"
                  className="hover:text-white transition"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  onClick={handlePrivacyPolicy}
                  href="/"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  onClick={handleTerms}
                  href="/"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <small>&copy; 2025 GameVault. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
