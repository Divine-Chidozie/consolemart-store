import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);
  // localStorage.removeItem("cartItems");

  const totalPrice = cartItems.reduce((acc, item) => {
    const cleanPrice = parseFloat(item.shopProductPrice.replace(/[₦,]/g, ""));
    return acc + item.quantity * cleanPrice;
  }, 0);

  function handleRemove(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }

  const cartBackgroundColor = {
    backgroundColor: "#111527",
  };

  return (
    <>
      <Navbar />
      <div style={cartBackgroundColor}>
        <section className="text-white py-5 px-10 flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mb-4">Your Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-lg">Your cart is empty...</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="my-2 py-2 px-4 shadow-lg  bg-slate-800 flex flex-row justify-between items-center rounded-md"
                >
                  {item.shopProductName} - Quantity: {item.quantity}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-600 py-2 px-4 ml-5 hover:bg-red-500 hover:transition hover:border-none rounded-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          <section className="my-2 py-4 px-2 rounded-md bg-slate-800 flex flex-row justify-between items-center gap-14">
            {cartItems.length > 0 && (
              <h2 className="font-semibold text-xl">
                Total: ₦{totalPrice.toFixed(2)}
              </h2>
            )}
            <button>
              <Link
                to="/checkout"
                className="bg-green-600 py-2 px-4 rounded-sm hover:bg-green-500 hover:transition hover:border-none"
              >
                Checkout
              </Link>
            </button>
          </section>
        </section>
        <div className="flex justify-center items-center gap-2 mt-2">
          <button className="bg-blue-700 py-2 px-4 ml-1 mb-3 text-white rounded-md">
            <Link to="/shop">Back to Products</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
