import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const PropertyAds = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownLocation, setisDropdownLocation] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const toggleDropdownLocation = () => {
    setisDropdownLocation((prevState) => !prevState);
  };
  let cards = [];
  for (let index = 0; index < 65; index++) {
    cards.push(
      <div key={index} className="max-w-xl mt-10 mb-2">
        <div className="flex items-center justify-center">
          <div className="max-w-sm w-72 py-2 px-1">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center h-56 p-4"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                }}
              >
                <div className="flex justify-end">
                  <svg
                    className="h-6 w-6 text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                  Detached house • 5y old
                </p>
                <p className="text-3xl text-gray-900">$750,000</p>
                <p className="text-gray-700">742 Evergreen Terrace</p>
              </div>
              <div className="flex p-2 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z" />
                  </svg>
                  <p>
                    <span className="text-gray-900 font-bold">3</span> Bedrooms
                  </p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                    />
                  </svg>
                  <p>
                    <span className="text-gray-900 font-bold">2</span> Bathrooms
                  </p>
                </div>
              </div>
              <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                  Realtor
                </div>
                <div className="flex items-center pt-2">
                  <div
                    className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)",
                    }}
                  ></div>
                  <div>
                    <p className="font-bold text-gray-900">Tiffany Heffner</p>
                    <p className="text-sm text-gray-700">(555) 555-4321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="absolute right-2/4 top-32">
        <h1 className="relative right-20 font-bold text-5xl w-28">DRE</h1>
      </div>
      <div className="relative left-40 w-4/5">
        <hr className="relative left-1/3 top-16 border-1 border-black w-9/12 " />
      </div>
      <div className="grid grid-cols-2 w-2/3 left-1/3 relative">
        <div className="relative left-28 top-12 mt-5 border-s-violet-200 w-3/12">
          <h1 className="absolute w-20 right-12 top-7 font-bold">Filter by:</h1>
          <p className="relative top-16">Purpose</p>
          <div className="relative top-52 h-36 w-1/2">
            <nav className="hidden -mt-32 space-x-10 md:flex w-1/2">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="text-gray-500 group p-4 inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="text-black font-semibold">All</span>
                  <svg
                    className={`text-black ml-2 h-5 w-5 group-hover:text-black ${
                      isDropdownOpen
                        ? "rotate-180 duration-500"
                        : "duration-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu z-20">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid bg-white sm:gap-8 sm:p-8 z-50">
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-bold text-black">
                              All
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">
                              Sale
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-black">
                              Rent
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <div className="relative left-28 top-12 mt-5 z-10 border-s-violet-200 w-3/12">
          <p className="relative top-16">Location</p>
          <div className="relative top-52 h-36">
            <nav className="hidden -mt-32 space-x-10 md:flex">
              <div className="relative">
                <button
                  onClick={toggleDropdownLocation}
                  type="button"
                  className="text-gray-500 group p-4 inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900"
                  aria-expanded={isDropdownLocation}
                >
                  <span className="text-red-600 font-semibold">
                    <FontAwesomeIcon icon={faLocationDot} /> Egypt
                  </span>
                  <svg
                    className={`text-black ml-2 h-5 w-5 group-hover:text-black ${
                      isDropdownLocation
                        ? "rotate-180 duration-500"
                        : "duration-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownLocation && (
                  <div className="dropdown-menu">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid w-64 bg-white sm:gap-8 sm:p-8">
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-bold text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> Egypt
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> Cairo
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} />{" "}
                              Alexandria
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> Asuit
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> Aswan
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> Qena
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 w-2/3 relative left-1/3 top-40 md:grid-cols-2 lg:grid-cols-3">
        {cards}
      </div>
    </>
  );
};
