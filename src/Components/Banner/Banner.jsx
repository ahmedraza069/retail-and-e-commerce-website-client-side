

const Banner = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/Q6kFjHw/photo-1468971050039-be99497410af-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl text-[#ff5c00] font-bold">Your One-Stop Shop for Unbeatable Deals, Quality Products, and Seamless Shopping!</h1>
            <p className="mb-5">
            Discover quality products, unbeatable prices, and seamless shopping on our e-commerce platform. Join us today for a world of convenience and savings
            </p>
            <button className="btn bg-[#ff5c00] border-none text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;