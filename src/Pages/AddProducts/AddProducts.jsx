// import Swal from "sweetalert2";

import Swal from "sweetalert2";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brand_name.value;
    const productName = form.product_name.value;
    const productImage = form.product_image.value;
    const productPrice = form.price.value;
    const productRating = form.rating.value;
    const productCategory = form.category.value;
    const productTitle = form.title.value;
    const productDetails = form.details.value;

    const product = {
      brandName,
      productName,
      productImage,
      productPrice,
      productRating,
      productCategory,
      productTitle,
      productDetails,
    };

    fetch(" https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added SuccesFully",
            icon: "succes",
            confirmButtonText: "OK",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="bg-gray-100">
      <div className="lg:p-24">
        <h2 className="text-5xl font-bold text-center text-slate-800 py-8">
          Add a Product!
        </h2>

        <form onSubmit={handleAddProduct}>
          <div className="flex gap-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label>
                <select
                  required
                  name="brand_name"
                  className="select select-bordered w-full"
                >
                  <option value="">Select a Brand Name</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Alibaba">Alibaba</option>
                  <option value="eBay">eBay</option>
                  <option value="Walmart">Walmart</option>
                  <option value="Etsy">Etsy</option>
                  <option value="Shopify">Shopify</option>
                </select>
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Product Details</span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Product Details"
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* input flex part */}
          <div className="flex gap-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label>
                <input
                  type="text"
                  required
                  name="product_name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <label>
                <input
                  type="text"
                  required
                  name="product_image"
                  placeholder="Product Image"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* input flex part */}
          <div className="flex gap-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <label>
                <input
                  type="text"
                  name="price"
                  placeholder="Product Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* input flex part */}
          <div className="flex gap-8">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Brand Category</span>
              </label>
              <label>
                <select
                  required
                  name="category"
                  className="select select-bordered w-full"
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Food">Food</option>
                  <option value="Books">Books</option>
                  <option value="Home & Garden">Home & Garden</option>
                  <option value="Sports & Outdoors">Sports & Outdoors</option>
                  <option value="Beauty & Health">Beauty & Health</option>
                  <option value="Toys & Games">Toys & Games</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Product Title"
                  name="title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* input flex part */}
          <div className="mb-8">
            <input
              type="submit"
              value="Add a Product"
              className="btn btn-block bg-gray-700 text-white mt-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
