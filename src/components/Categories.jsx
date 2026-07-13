import { useNavigate } from "react-router-dom";
import playstation5 from "../assets/playstation5.png";
import xboxseries from "../assets/xboxseries.png";
import nintendoswitch from "../assets/nintendoswitch.png";
import playstation4 from "../assets/playstation4.png";

const Categories = () => {
  const navigate = useNavigate();
  const categories = [
    {
      categoryImage: playstation5,
      categoryName: "PlayStation",
      categorieAlt: "play station",
      tagLine:
        "Explore the PlayStation ecosystem - from iconic classics to the latest PS5 experience built form immersive gaming",
    },

    {
      categoryImage: xboxseries,
      categoryName: "Xbox Series",
      categorieAlt: "xbox series",
      tagLine:
        "Experience powerful next-gen performance with Xbox consoles built for speed, graphics, and competitive gameplay.",
    },
    {
      categoryImage: nintendoswitch,
      categoryName: "Nintendo Switch",
      categorieAlt: "nintendo switch",
      tagLine:
        "Enjoy gaming anywhere with Nintendo Switch — flexible, fun, and perfect for both solo and multiplayer adventures.",
    },

    {
      categoryImage: playstation4,
      categoryName: "Accessories",
      categorieAlt: "accessories",
      tagLine:
        "Upgrade your setup with premium controllers, headsets, and essential gaming accessories for peak performance.",
    },
  ];

  const handleShowAllPlayStation = () => {
    navigate("/shop");
  };

  return (
    <>
      <section>
        <div className="px-6 py-12 mt-28" data-aos="fade-up">
          <h2 className="text-2xl font-normal mb-6 text-center text-white">
            Explore by Category
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 cursor-pointer w-full ">
            {categories.map((categorie, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center gap-2 p-4 border rounded-lg hover:shadow-lg transition"
              >
                <img
                  className="w-32 h-32 object-contain"
                  src={categorie.categoryImage}
                  alt={categorie.categorieAlt}
                />
                <p className="font-normal text-sm w-full text-center text-white">
                  {categorie.categoryName}
                </p>
                <p className="text-sm font-light text-center w-full text-white">
                  {categorie.tagLine}
                </p>
              </div>
            ))}

            <div className="col-span-full w-full flex justify-center">
              <button
                onClick={handleShowAllPlayStation}
                className="bg-black  text-white w-[200px] mt-3 py-2 px-8 rounded-sm hover:bg-zinc-500 hover:font-normal transition"
              >
                View All Consoles
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
