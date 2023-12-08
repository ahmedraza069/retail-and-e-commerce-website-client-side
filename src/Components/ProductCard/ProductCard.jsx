import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    brandName,
    productName,
    productImage,
    productPrice,
    productRating,
    productCategory,
    productTitle,
  } = product;



  return (
    <div data-aos="fade-down"
    data-aos-duration="3000" className="container mx-auto mb-16">
      <div className=" overflow-hidden bg-white rounded-lg shadow-lg border">
        <div className="px-6 py-4">
         <div className='flex justify-between items-center'>
         <h1 className="text-xl mb-2 font-bold text-gray-800 uppercase dark:text-white">
              {productName}
            </h1>
           
         </div>
         <span className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded focus:outline-none">
              {productCategory}
           </span>
            <p className="my-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              {productTitle}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <Rating
                     initialRating={productRating}
                    ></Rating>
            </p>
    
          <div>
           
          </div>
        </div>

        <img className="h-64 w-full" src={productImage} alt={productCategory} />
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          <h1 className="text-lg font-bold text-white">${productPrice}</h1>
          <Link to={`/details/${_id}`}>
          <button className="px-2 py-1 text-xs font-semibold  text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Details
          </button>
          </Link>
        <Link to={`/update/${_id}`}>
        <button  className="px-2 py-1 text-xs font-semibold  text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Edit
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
