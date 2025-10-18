import dealDiscountImage from "../assets/dealDiscountImage.jpg";

const Deals = () => {
  const discountImg = {
    width: "300px",
  };

  const handleShop = () => {
    console.log(`Special discount offer coming soon.. Stay turned!`);
  };
  const dealsBackground = {
    backgroundColor: "#111827",
  };
  return (
    <>
      <section
        className="px-6 py-12 bg-gradient-to-r text-white text-center"
        style={dealsBackground}
      >
        <div className="flex items-center justify-center  gap-5">
          <div>
            <img
              style={discountImg}
              src={dealDiscountImage}
              alt="special offer discount"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <h4 className="font-semibold text-2xl">20% off Controllers</h4>
            <p className="text-lg">Save ₦50,000 when you buy as a bundle</p>
            <button
              onClick={handleShop}
              className="bg-white text-blue-600 px-6 py-3 mt-4 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Deals;
