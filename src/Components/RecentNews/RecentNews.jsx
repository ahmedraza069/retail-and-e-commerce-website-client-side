

const RecentNews = () => {
    return (
        <div>
        <h1 data-aos="fade-up"
         data-aos-duration="3000" className="text-center py-12 text-[#ff5c00] text-5xl">
        Recent <span className="font-bold">  News</span></h1>
        <div  className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 text-white">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
            <div data-aos="fade-up"
         data-aos-duration="3000" className="relative flex items-end justify-start w-full  text-left rounded-md border-2 bg-center  bg-cover h-96" style={{ backgroundImage: "url('https://i.ibb.co/vvxmp3L/photo-1505740420928-5e560c06d30e-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg')" }}
    >
                <div className="absolute hero-overlay opacity-50 top-0 bottom-0 left-0 right-0 "></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#" className="px-4 py-3 bg-[#24242f]  text-xs font-semibold uppercase text-white ">Alibaba</a>
                    <div className="flex flex-col justify-start text-center text-white">
                        <span className="text-3xl font-semibold leadi tracki">04</span>
                        <span className="leadi uppercase">Aug</span>
                    </div>
                </div>
                <h2 className="z-10 p-5">
                    <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-white">Discover Exclusive Deals on Alibaba for Quality Products and Savings</a>
                </h2>
            </div>
            <div data-aos="fade-up"
         data-aos-duration="3000" className="relative flex items-end justify-start w-full text-left rounded-md border-2 bg-center bg-cover h-96 dark:bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/7jvk4Pz/photo-1526170375885-4d8ecf77b99f-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg')" }}
    >
                <div className="absolute hero-overlay opacity-50 top-0 bottom-0 left-0 right-0  "></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#" className="px-4 py-3 bg-[#24242f]  text-xs font-semibold tracki uppercase text-white bgundefined">Amazon</a>
                    <div className="flex flex-col justify-start text-center text-white">
                        <span className="text-3xl font-semibold leadi tracki">01</span>
                        <span className="leadi uppercase">jan</span>
                    </div>
                </div>
                <h2 className="z-10 p-5">
                    <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-white">Shop the Latest Amazon Deals for a World of Selection and Convenience.</a>
                </h2>
            </div>
            <div data-aos="fade-down"
         data-aos-duration="3000" className="relative flex items-end justify-start w-full text-left rounded-md border-2 bg-center bg-cover h-96 dark:bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/VYgVVgN/photo-1509695507497-903c140c43b0-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg')" }}
    >
                <div className="absolute hero-overlay opacity-50 top-0 bottom-0 left-0 right-0 "></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#" className="px-4 py-3 bg-[#24242f]  text-xs font-semibold tracki uppercase text-white bgundefined">Shopify</a>
                    <div className="flex flex-col justify-start text-center text-white">
                        <span className="text-3xl font-semibold leadi tracki">28</span>
                        <span className="leadi uppercase">Dec</span>
                    </div>
                </div>
                <h2 className="z-10 p-5">
                    <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-white">Shop the Latest Amazon Deals for a World of Selection and Convenience.</a>
                </h2>
            </div>
            <div data-aos="fade-down"
         data-aos-duration="3000" className="relative flex items-end justify-start w-full text-left border-2 bg-center bg-cover h-96 dark:bg-gray-500" style={{ backgroundImage: "url('https://i.ibb.co/YLrBbV2/photo-1479064555552-3ef4979f8908-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg')" }}
    >
                <div className="absolute hero-overlay opacity-50 top-0 bottom-0 left-0 right-0 "></div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a rel="noopener noreferrer" href="#" className="px-4 py-3 bg-[#24242f]  text-xs font-semibold tracki uppercase text-white bgundefined">Walmart</a>
                    <div className="flex flex-col justify-start text-center text-white">
                        <span className="text-3xl font-semibold leadi tracki">19</span>
                        <span className="leadi uppercase">Jul</span>
                    </div>
                </div>
                <h2 className="z-10 p-5">
                    <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-white">Find Affordable Walmart Products and Everyday Essentials for Your Home</a>
                </h2>
            </div>
        </div>
    </div>
       </div>
    );
};

export default RecentNews;