import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      {/* Top Grid Section */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Logo & Tagline */}
        <div>
          <img
            className="w-32 mb-4 cursor-pointer"
            src={logo}
            alt="footer logo image"
          />
          <p>Your #1 Gaming Store</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
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
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
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
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <small>&copy; 2025 ConsoleMart. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
