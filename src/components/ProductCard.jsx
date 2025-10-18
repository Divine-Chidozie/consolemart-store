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
    alert("🚧 This feature is still in development. Please check back later!");
  };

  return (
    <section>
      <div className="px-6 py-12  w-full">
        <h2 className="text-2xl font-bold text-center mb-2">
          Featured Gaming Gear
        </h2>
        <p className="text-center mb-6 w-full">
          Explore our top picks in gaming - from the latest consoles to
          essential accessories
        </p>

        <div className="grid grid-cols-2 w-full gap-5 sm:grid-cols-2 sm:w-full md:grid-cols-2 p-3 mx-auto md:w-full">
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
              <h4 className="font-medium mt-2 text-center">
                {product.productName}
              </h4>
              <p className="mt-1 text-center">{product.productPrice}</p>

              <div className="w-full text-center">
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
                  className="border text-center w-6 mr-2 font-bold
                  "
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

          <div className="col-span-full w-full flex justify-center">
            <button
              onClick={handleViewAllProducts}
              className="col-span-full bg-black text-white w-[200px] py-2 px-8 rounded-lg hover:bg-zinc-400 transition"
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
