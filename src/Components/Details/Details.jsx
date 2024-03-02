import { useEffect, useState } from "react";

export const Details = ({ product }) => {
  const [productData, setProductDate] = useState(null);

  useEffect(() => {
    setProductDate(product);
  }, [product]);
  return (
    <div className="my-10">
      <div className="relative left-28 flex flex-col rounded-xlspace-y-6 w-5/12 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-red-600 antialiased">
            EGP {productData?.price}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="64"
            height="32"
            className="absolute right-5 top-6"
          >
            <path d="M225.8 468.2l-2.5-2.3-175.2-162c-30.7-28.5-48.1-68.5-48.1-110.4v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4l-175.2 162-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>

          <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased">
            {productData?.description}
          </p>
          <span className="my-5 mb-4 block font-sans text-base leading-relaxed text-inherit antialiased">
            <span>
              <img
                width="25"
                height="50"
                className="absolute"
                src="https://img.icons8.com/ios/50/marker--v1.png"
                alt="marker--v1"
              />
              <span className="absolute left-14">{productData?.location}</span>
            </span>
          </span>
        </div>
      </div>
      <div className="relative left-28 top-10 flex flex-col rounded-xlspace-y-6 w-5/12 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
            Details
          </h1>
          <div className="grid grid-cols-4">
            <div>
              <p className="my-5">Price</p>
              <p className="my-5">Area</p>
              <p className="my-5">Bathrooms</p>
            </div>
            <div>
              <p className="font-semibold my-5">{productData?.price}</p>
              <p className="font-semibold my-5">245m</p>
              <p className="font-semibold my-5">4</p>
            </div>
            <div>
              <p className="my-5">Type</p>
              <p className="my-5">Bedrooms</p>
            </div>
            <div>
              <p className="font-semibold my-5">Town House</p>
              <p className="font-semibold my-5">5</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-28 top-12 flex flex-col rounded-xlspace-y-6 w-5/12 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
            Description
          </h1>
          <p>{productData?.description}</p>
        </div>
      </div>
      <div className="relative left-28 top-16 flex flex-col rounded-xlspace-y-6 w-5/12 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
          Location
        </h1>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={600}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${productData?.location},egypt+(Dubizzle)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
      <div className="relative left-28 top-24 rounded-xlspace-y-6 w-5/12 col-span-1 ">
        <p>AD ID {productData?.id}</p>
        <p className="font-bold absolute right-0 top-0 hover:underline cursor-pointer ">
          Report this ad
        </p>
      </div>
      <hr className="relative left-28 top-24 w-5/12 border-1 border-black" />
    </div>
  );
};
