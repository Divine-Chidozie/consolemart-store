import React, { useState } from "react";
import featureProduct1 from "../assets/featureProduct1.png";
import featureProduct2 from "../assets/featureProduct2.png";

const ProductCard = () => {
  const products = [
    {
      productImage: featureProduct1,
      productName: "PlayStation 5",
      productPrice: "₦850,000",
      productAlt: "PS5 console",
      productButton: "🛒 +",
    },
    {
      productImage: featureProduct2,
      productName: "Xbox Series X",
      productPrice: "₦500,000",
      productAlt: "Xbox console",
      productButton: "🛒 +",
    },
  ];

  const [quantity, setQuantity] = useState(Array(products.length).fill(0));

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
      `Added ${quantity[index]} ${products[index].productName}(s) to basket`
    );
  };

  const handleViewAllProducts = () => {
    console.log("View all Products here!");
  };

  return (
    <section>
      <div className="px-6 py-12">
        <h2 className="text-2xl font-bold text-center">Featured Gaming Gear</h2>
        <p className="text-center mb-6">
          Explore our top picks in gaming - from the latest consoles to
          essential accessories
        </p>

        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-2 w-3/5 p-3 mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="border flex flex-col justify-center items-center rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                className="w-full h-48 object-contain"
                src={product.productImage}
                alt={product.productAlt}
              />
              <h4 className="font-medium mt-2">{product.productName}</h4>
              <p className="mt-1">{product.productPrice}</p>

              <div>
                <button
                  onClick={() => handleDecrease(index)}
                  className="bg-zinc-400 text-white px-2 rounded-lg mt-3 mr-2"
                >
                  -
                </button>
                <input
                  disabled
                  value={quantity[index]}
                  type="text"
                  className="border text-center w-6"
                />
                <button
                  onClick={() => handleIncrease(index)}
                  className="bg-zinc-400 text-white font-bold px-2 rounded-lg mt-3 mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleAddToCart(index)}
                  className="bg-black text-white py-1 px-4 rounded-lg mt-3 hover:bg-zinc-400 transition"
                >
                  {product.productButton}
                </button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-self-center mb-10">
            <button
              onClick={handleViewAllProducts}
              className="bg-black text-white mt-3 py-2 px-4 rounded-lg hover:bg-zinc-400 transition"
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
