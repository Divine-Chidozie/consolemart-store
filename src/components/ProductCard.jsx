import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import featureProduct1 from "../assets/featureProduct1.png";
import featureProduct2 from "../assets/featureProduct2.png";

const ProductCard = () => {
  const products = [
    {
      productImage: featureProduct1,
      productName: "PlayStation 5",
      productPrice: "₦850,000",
      productAlt: "PS5 console",
      // productButton: "🛒 +",
      productButton: "Add to Cart",
    },
    {
      productImage: featureProduct2,
      productName: "Xbox Series X",
      productPrice: "₦500,000",
      productAlt: "Xbox console",
      // productButton: "🛒 +",
      productButton: "Add to Cart",
    },
  ];

  const [quantity, setQuantity] = useState(Array(products.length).fill(0));
  const navigate = useNavigate();

  const handleIncrease = (index) => {
    const newQuantities = [...quantity];
    newQuantities[index] += 1;
    setQuantity(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantity];
    if (newQuantities[index] > 0) newQuantities[index] -= 1;
    setQuantity(newQuantities);
  };

  const handleAddToCart = (index) => {
    console.log(
      `Added ${quantity[index]} ${products[index].productName}(s) to basket`,
    );
  };

  const handleViewAllProducts = () => {
    // alert("🚧 This feature is still in development. Please check back later!");
    navigate("/shop");
  };

  return (
    <section>
      <div
        className="px-6 py-12  w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="font-normal text-2xl text-white text-center mb-2">
          Premium Gaming Picks
        </h2>
        <p className="text-center text-white mb-6 w-full text-sm">
          Discover high-performance consoles and accssories handpicked for
          gamers who want quality, spreed, and immersive gameplay
        </p>

        <div className="grid grid-cols-1 w-full gap-5 sm:grid-cols-2 sm:w-full md:grid-cols-2 p-3 mx-auto md:w-full">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 flex flex-col w-full justify-center items-center shadow hover:shadow-lg transition"
            >
              <img
                className="w-52 h-48 object-contain"
                src={product.productImage}
                alt={product.productAlt}
              />
              <h4 className="font-medium mt-2 text-center text-white">
                {product.productName}
              </h4>
              <p className="mt-1 text-center text-white">
                {product.productPrice}
              </p>

              <div className="w-full text-center">
                <button
                  onClick={() => handleDecrease(index)}
                  className="bg-red-600 text-white px-2 rounded-sm mt-3 mr-2 hover:bg-zinc-600"
                >
                  -
                </button>
                <input
                  disabled
                  value={quantity[index]}
                  type="text"
                  className="border text-center w-10 mr-2 font-medium bg-white
                  "
                />
                <button
                  onClick={() => handleIncrease(index)}
                  className="bg-green-600 text-white font-bold px-2 rounded-sm mt-3 mr-2 hover:bg-zinc-600"
                >
                  +
                </button>
                <button
                  onClick={() => handleAddToCart(index)}
                  className="bg-black text-white px-4 rounded-sm mt-3 hover:bg-zinc-400 transition"
                >
                  {product.productButton}
                </button>
              </div>
            </div>
          ))}

          <div className="col-span-full w-full flex justify-center">
            <button
              onClick={handleViewAllProducts}
              className="col-span-full  bg-black text-white w-[200px] py-2 px-8 rounded-sm hover:bg-zinc-400"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
