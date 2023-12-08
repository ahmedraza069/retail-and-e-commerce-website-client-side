/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Rating from "react-rating";

const MyCart = () => {
  const carts = useLoaderData();

  const [items, setItems] = useState(carts);

  const { user } = useContext(AuthContext);
  const userUid = user.uid;

  const filteredCarts = items.filter((product) => product.uid === userUid);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete succes");
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingItems = items.filter((item) => item._id !== id);
              setItems(remainingItems);
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto my-16">
      <h1 className="text-5xl text-center font-bold text-orange-500 my-12">
        My Cart
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCarts.length > 0 ? (
          filteredCarts.map((product) => (
            <div
              className="card lg:card-side bg-base-100 shadow-xl"
              key={product._id}
            >
              <div className="w-full h-full">
                <figure className="W-full h-full">
                  <img
                    className="w-full h-full rounded-l-lg"
                    src={product.productImage}
                    alt="Album"
                  />
                </figure>
              </div>
              <div className="card-body">
                <div className="w-full h-full">
                  <div className="flex overflow-hidden bg-white rounded-md">
                    <div className=" w-full">
                      <button className="px-2 py-1 my-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded  focus:outline-none focus:bg-gray-700 ">
                        {product.brandName}
                      </button>
                      
                        <h1 className="text-xl mb-2 font-bold text-gray-800 dark:text-white">
                          {product.productName}
                        </h1>
                        
                 
                      <span className="px-2 py-1 text-xs font-bold text-white transition-colors duration-300 transform bg-gray-800 rounded-full">
                          {product.productCategory}
                        </span>

                      <p className="my-3  text-sm text-gray-600 dark:text-gray-400">
                        <Rating initialRating={product.productRating}></Rating>
                      </p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {product.productTitle}
                      </p>
                      <h1 className="text-lg mt-2 font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                        ${product.productPrice}
                      </h1>

                      <div className="flex justify-start items-center gap-6 mt-2">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="px-3 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded   "
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full col-span-2">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/n198Y8h/photo-1484069560501-87d72b0c3669-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-40 h-40 text-white"
                >
                  <path
                    fill="currentColor"
                    d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                  ></path>
                  <rect
                    width="176"
                    height="32"
                    x="168"
                    y="320"
                    fill="currentColor"
                  ></rect>
                  <polygon
                    fill="currentColor"
                    points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                  ></polygon>
                  <polygon
                    fill="currentColor"
                    points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                  ></polygon>
                </svg>
                <p className="text-4xl text-white md:px-5 lg:px-20 font-semibold">
                  You haven't made any purchases yet. No cart is showing for
                  this. You visit our home page and buy your favorite items.
                </p>
                <span className="font-bold text-6xl text-white">
                  Thank you!
                </span>
                <Link
                  to={"/"}
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 font-semibold rounded bg-orange-500 text-white"
                >
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
