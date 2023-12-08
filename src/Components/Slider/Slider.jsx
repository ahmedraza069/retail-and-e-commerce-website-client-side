/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hKdgSqW/photo-1697301439997-052adc7d7443-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1  className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "  data-aos="fade-up">Quality products, great prices, and easy online shopping experience</h1>
          <p className="mb-5 md:px-18 sm:px-12 lg:px-24"  data-aos="fade-up">Introducing our newest product, a versatile and innovative solution designed to simplify your life. With top-notch quality and unbeatable performance, it's the answer to your needs. Shop now!</p>
            <Link><button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">Discover</button></Link>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/9wSfsK0/photo-1697636979792-fb057f6cbe8d-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "  data-aos="fade-up">Celebrate savings with quality products, easy shopping, and great prices.</h1>
          <p className="mb-5 md:px-18 sm:px-12 lg:px-24"  data-aos="fade-up" >Indulge in our exquisite product selection, where every item tells a story of quality and craftsmanship. Discover the perfect additions to your life, all conveniently available at your fingertips.</p>

            <Link><button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">Discover</button></Link>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/ZzBs6v1/photo-1697638044627-683663954a37-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "  data-aos="fade-up">Discover top deals, quality goods, and effortless shopping with us.</h1>
          <p className="mb-5 md:px-18 sm:px-12 lg:px-24"  data-aos="fade-up">Introducing our latest product, a game-changing innovation designed to enhance your daily life. With its cutting-edge technology, premium quality, and sleek design, it's the perfect addition to your lifestyle</p>
            <Link><button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">Discover</button></Link>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/SdpH3sb/photo-1551107696-a4b0c5a0d9a2-auto-format-fit-crop-q-60-w-500-ixlib-rb-4-0.jpg'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    <h1 className="font-extrabold sm:text-4xl mb-5 md:px-18 sm:px-12 lg:px-24 md:text-5xl  lg:text-6xl 
              text-center 
              "  data-aos="fade-up">Explore, discover, and shop - your online retail destination awaits!</h1>
          <p className="mb-5 md:px-18 sm:px-12 lg:px-24"  data-aos="fade-up">Discover our exquisite line of products, meticulously curated for quality and style. From cutting-edge electronics to timeless fashion, we offer a diverse range that caters to all your desires.</p>
            <Link><button className="text-white my-8 px-8 py-3 font-semibold uppercase rounded-full text-base border ">Discover</button></Link>
    </div>
  </div>
</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;