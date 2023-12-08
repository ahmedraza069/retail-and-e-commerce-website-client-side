import { Link } from "react-router-dom";

const BrandCategoryCard = ({ brand }) => {
  const { brandName, brandImage, title, id } = brand;

  return (
    <div data-aos="fade-down"
    data-aos-duration="3000" className=" rounded-md shadow-lg border border-[#ff5c00]">
      <img
        src={brandImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl uppercase font-semibold tracki">{brandName}</h2>
          <p className="text-normal font-medium">{title}</p>
        </div>
        <Link to={`/brand/${brandName}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 text-lg font-bold  tracki rounded-md bg-[#ff5c00] text-white "
          >
            See Our Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BrandCategoryCard;
