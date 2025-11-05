import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
      </div>
    );
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  function handleDecreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const index = existingCart.findIndex(
      (item) => item.shopProductName === productToCart.shopProductName
    );

    if (index >= 0) {
      existingCart[index].quantity += quantity;
    } else {
      existingCart.push(productToCart);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));
    alert(`${quantity} ${product.shopProductName} added to Cart`);
    console.log(`${quantity} ${product.shopProductName} added to cart`);
  };

  // const savedProduct = JSON.parse(localStorage.getItem("checkoutProduct")); // rememeber to move this code to the checkout page

  const handleBuy = () => {
    alert(`${quantity} ${product.shopProductName} bought`);
    console.log("Remember to work on the checkout page...");
  };

  return (
    <>
      <Navbar />

      <section className="container mx-auto px-4 py-10 mt-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.shopProductImage}
              alt={product.shopProductName}
              className="w-full max-w-md object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-3">
              {product.shopProductName}
            </h1>
            <p className="text-xl font-semibold text-gray-800 mb-3">
              {product.shopProductPrice}
            </p>
            <p className="text-green-600 font-medium mb-3">In Stock</p>
            <p className="text-gray-700 mb-6">
              {/* Detailed description coming soon for {product.shopProductName}. */}
              {product.description}
            </p>

            {/* Quantity + Buttons */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded">
                <button onClick={handleDecreaseQuantity} className="px-3 py-1">
                  -
                </button>
                <span className="px-4 py-1 border-x border-gray-300">
                  {quantity}
                </span>
                <button onClick={handleIncreaseQuantity} className="px-3 py-1">
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={handleBuy}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Buy Now
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Category: <span className="font-medium">{product.category}</span>
            </p>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Product Description</h2>
          <p className="text-gray-700 leading-relaxed">
            Experience premium gaming with {product.shopProductName}. This
            product offers high-quality performance and design for gamers of all
            levels.
          </p>
        </div>

        {/* Specifications (Placeholder) */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {/* <li>Coming soon for {product.shopProductName}</li> */}
            {product.specifications && product.specifications.length > 0 ? (
              product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))
            ) : (
              <li>No Specifications available for this product.</li>
            )}
          </ul>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
          <p className="text-gray-600">
            Coming soon — similar products will appear here.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
