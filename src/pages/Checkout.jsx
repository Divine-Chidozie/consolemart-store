import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    const cleanPrice = parseFloat(
      String(item.shopProductPrice).replace(/[₦,]/g, ""),
    );

    return acc + (item.quantity || 1) * cleanPrice;
  }, 0);

  const handleConfirmCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      // 1. Get existing orders
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

      // 2. Create new order
      const newOrder = {
        id: `GV${Date.now()}`,
        items: cartItems,
        total: totalPrice,
        status: "Processing",
        date: new Date().toLocaleDateString(),
      };

      // 3. Save order
      const updatedOrders = [newOrder, ...existingOrders];
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      // 4. Clear cart
      localStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems([]);

      setIsProcessing(false);

      alert("Order placed successfully! 🎉");

      navigate("/dashboard");
    }, 1200);
  };

  // EMPTY CART UI
  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
          <h2 className="text-3xl font-bold mb-3">Your Cart is Empty</h2>

          <p className="text-gray-500 mb-6">
            Add some products before proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Continue Shopping
          </button>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 mt-10">
            Checkout
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <h3 className="font-semibold">{item.shopProductName}</h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <span className="font-medium">{item.shopProductPrice}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-5">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Grand Total</span>

                <span className="text-2xl font-bold text-green-600">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleConfirmCheckout}
                disabled={isProcessing}
                className="w-full mt-6 bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition disabled:opacity-50"
              >
                {isProcessing ? "Processing Order..." : "Confirm Order"}
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="w-full mt-3 border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-100 transition"
              >
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
