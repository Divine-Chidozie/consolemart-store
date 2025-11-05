import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, [navigate]);

  const totalPrice = cartItems.reduce((acc, item) => {
    const cleanPrice = parseFloat(
      String(item.shopProductPrice).replace(/[₦,]/g, "")
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
      localStorage.setItem("cartItems", JSON.stringify([]));
      setCartItems([]);
      setIsProcessing(false);
      alert("Checkout successful! Thank you for your purchase. 🤝");
      navigate("/shop");
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: "#111527", height: "100vh" }}>
      <div className="text-white py-5 px-10 flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl mb-4 mt-10">Checkout Order</h1>
        <div className="bg-slate-800 w-1/3 py-4 px-8 flex flex-col gap-x-3.5 items-center rounded-md">
          <h2 className="text-xl mb-1 lowercase">Order Summary</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mt-3 font-semibold">
                {item.shopProductName}: ${item.shopProductPrice}
              </li>
            ))}
          </ul>
          <p className="my-1 text-lg">
            <strong className="text-green-600">Total: </strong>${totalPrice}
          </p>
          <button
            onClick={handleConfirmCheckout}
            disabled={isProcessing}
            className="bg-green-600 py-2 px-4 mt-5 hover:bg-green-300 transition rounded-md"
          >
            {isProcessing ? "Processing..." : "Confirm Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
