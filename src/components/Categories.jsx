import playstation5 from "../assets/playstation5.png";
import xboxseries from "../assets/xboxseries.png";
import nintendoswitch from "../assets/nintendoswitch.png";
import playstation4 from "../assets/playstation4.png";

const Categories = () => {
  const categories = [
    {
      categoryImage: playstation5,
      categoryName: "Play Station",
      categorieAlt: "play station",
      tagLine:
        "Experience the world of PlayStation-form PS3 classics to the latest PS5",
    },

    {
      categoryImage: xboxseries,
      categoryName: "Xbox Series",
      categorieAlt: "xbox series",
      tagLine:
        "Unleash next-gen performance with Xbox consoles and accessories",
    },
    {
      categoryImage: nintendoswitch,
      categoryName: "Nintendo Switch",
      categorieAlt: "nintendo switch",
      tagLine: "Play anywhere, anytime-discover the joy of Nintendo gaming",
    },

    {
      categoryImage: playstation4,
      categoryName: "accessories",
      categorieAlt: "accessories",
      tagLine:
        "Find controllers, headsets, and everything you need to stay in the game",
    },
  ];

  const handleShowAllPlayStation = () => {
    alert("🚧 This feature is still in development. Please check back later!");
  };

  return (
    <>
      <section>
        <div className="px-6 py-12 mt-28">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Explore by Catogory
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 cursor-pointer">
            {categories.map((categorie, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-4 border rounded-lg hover:shadow-lg transition"
              >
                <img
                  className="w-32 h-32 object-contain"
                  src={categorie.categoryImage}
                  alt={categorie.categorieAlt}
                />
                <p className="font-medium">{categorie.categoryName}</p>
                <p className="text-left text-sm">{categorie.tagLine}</p>
              </div>
            ))}
            <div>
              <button
                onClick={handleShowAllPlayStation}
                className="bg-black max-w-full text-white mt-3 py-2 px-4  rounded-lg hover:bg-zinc-400 transition"
              >
                Show All PlayStation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
