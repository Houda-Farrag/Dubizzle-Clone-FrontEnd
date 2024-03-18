import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export const RelatedProducts = ({ products }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="w-[650] h-[503]">

      <div className="w-[650px] relative left-28 top-24">
        <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
          Related ADs
        </h1>
      </div>
      <Slider className="w-[650px] relative left-28 top-28 mb-48 " {...settings}>
        {productsData.map((product, index) => (
          <div key={index} className="h-full">
            <img src={product.images[0]} alt={`Card ${index + 1}`} className="rounded-2xl h-[215px] w-[415px] pr-[10px] pl-[10px]" />
            <h1 className="mb-2 block font-sans text-xl relative left-3 font-bold leading-snug tracking-normal text-red-600 antialiased">
              {product.price}
            </h1>
            <div className="relative left-36 bottom-9">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="24"
                height="32"
                >
                <path d="M225.8 468.2l-2.5-2.3-175.2-162c-30.7-28.5-48.1-68.5-48.1-110.4v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4l-175.2 162-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </div>
            
            <p className="block font-sans text-base font-semibold w-[150px] flex-nowrap leading-relaxed text-inherit antialiased">
              {product.description}
            </p>
            </div>
        ))}
      </Slider>
        </div>
    </>
  );
};

