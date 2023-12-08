import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "../Slider/Slider";

const BrandCardDetails = () => {

    const { brandName } = useParams();
    const products = useLoaderData();

    // Filter products based on the brandName
    const filteredProducts = products.filter(product => product.brandName.toLowerCase() == brandName.toLowerCase());


    return (
        <div className="container mx-auto">
            <Slider></Slider>
            <div>
                <h1 className="text-5xl font-extrabold text-center uppercase my-16">{brandName}</h1>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {filteredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
           </div>
        </div>
    );
};

export default BrandCardDetails;
