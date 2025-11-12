import { useNavigate } from "react-router-dom";
import dealDiscountImage from "../assets/dealDiscountImage.jpg";

const Deals = () => {
  const navigate = useNavigate();
  const discountImg = {
    width: "280px",
  };

  const handleShop = () => {
    navigate("/shop");
  };
  const dealsBackground = {
    backgroundColor: "#111827",
  };
  return (
    <>
      <section
        data-aos="zoom-in-up"
        data-oas-delay="600"
        className="px-6 py-12 bg-gradient-to-r text-white text-center"
        style={dealsBackground}
      >
        <div className="flex flex-col items-center p-5 justify-center gap-5 md:flex md:flex-row">
          <div>
            <img
              style={discountImg}
              src={dealDiscountImage}
              alt="special offer discount"
              data-aos="zoom-in"
            />
          </div>
          <div className="">
            <h2 className="text-xl font-normal mb-1">Special Offer</h2>
            <h4 className="font-light text-md">20% off Controllers</h4>
            <p className="text-sm font-light">
              Save ₦50,000 when you buy as a bundle
            </p>
            <button
              onClick={handleShop}
              className="bg-white text-black px-4 py-2 mt-4 rounded-sm font-extralight text-sm hover:bg-gray-200 transition"
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
