import { useContext } from "react";

import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Rating from "react-rating";
import Swal from "sweetalert2";

const ProductCardDetails = () => {
  const productInfo = useLoaderData();

  if (!productInfo) {
    return <div className="flex h-screen justify-center items-center"><span className="loading loading-infinity loading-lg"></span></div>;
  }

  const {
    _id,
    brandName,
    productName,
    productImage,
    productPrice,
    productRating,
    productCategory,
    productTitle,
    productDetails,
  } = productInfo;

  const { user } = useContext(AuthContext);
  const uid = user.uid;

  const handleAddCart = () => {
    const newCart = {
      brandName,
      productName,
      productImage,
      productPrice,
      productRating,
      productCategory,
      productTitle,
      productDetails,
      uid,
    };
 
    fetch(" https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire(
          'Added!',
          'Your cart has been added.',
          'success'
        )
      });
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={productImage}
            alt="product-image"
          />
          <div className="w-full h-full">
            <div className="flex overflow-hidden bg-white rounded-md shadow-xl">
              <div className="w-full p-8">
                <button className="px-3 py-2 my-6 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 ">
                  {brandName}
                </button>
                <div className="flex gap-6 items-center justify-start">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    {productName}
                  </h1>
                  <p className="px-2 py-1 text-xs font-bold text-white transition-colors duration-300 transform bg-gray-800 rounded-full  focus:outline-none focus:bg-gray-700">
                    {productCategory}
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <Rating
                     initialRating={productRating}
                    ></Rating>
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {productDetails}
                </p>
                <h1 className="text-lg my-2 font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                  ${productPrice}
                </h1>
                <div className="flex justify-start items-center gap-6 mt-8">
                  <Link to='/carts'>
                    <button
                      onClick={handleAddCart}
                      className="px-5 py-4 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 "
                    >
                      Add to Cart
                    </button>
                  
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
