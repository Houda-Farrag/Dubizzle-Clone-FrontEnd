import upload_area from "../../assets/upload_area.svg";

import { useEffect, useState } from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useMenuSelectionContext } from "../../Context/MenuSelectionContext";

const SellForm = () => {
  const { selectedCategory, selectedSubCategory } = useMenuSelectionContext();
  const [negotiable, setNegotiable] = useState(false);
  const [exchange, setExchange] = useState(false);
  const [free, setFree] = useState(false);
  const [duplex, setDuplex] = useState(false);
  const [townHouse, setTownHouse] = useState(false);
  const [standAlone, setStandAlone] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [garden, setGarden] = useState(false);
  const [security, setSecurity] = useState(false);
  const [image, setImage] = useState(false);
  const [contactMethod, setContactMethod] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isDropdownLocation, setisDropdownLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceType, setPriceType] = useState("");
  const [isproperty, setIsProperty] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    sellerData: {
      userName: "",
      phoneNumber: "",
    },
    location: "",
    category: "",
    price_type: "",
    subCategory: "",
    contact_type: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name == "userName" || name == "phoneNumber") {
      setProductDetails((prevState) => ({
        ...prevState,
        sellerData: {
          ...prevState.sellerData,
          [name]: value,
        },
      }));
    } else {
      setProductDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const brands = [
    { value: "Apple", label: "Apple" },
    { value: "Samsung", label: "Samsung" },
    { value: "LG", label: "LG" },
    { value: "HP", label: "HP" },
    { value: "Redmi", label: "Redmi" },
  ];

  const addProduct = async () => {
    let responseData;
    let product = {
      ...productDetails,
      price_type: priceType,
      category: selectedCategory,
      subCategory: selectedSubCategory,
      contact_type: contactMethod,
    };
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData) {
      product.images.push(responseData.image_url);
      await fetch("http://localhost:3000/products/add", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data && data.success === 1) {
            alert("Product Saved Successfully");
            window.location.reload();
          } else {
            alert("There was an issue saving the product. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error saving product:", error);
          alert("An error occurred while saving the product.");
        });
    }
  };

  const toggleDropdownLocation = (e) => {
    e.preventDefault();
    setisDropdownLocation((prevState) => !prevState);
  };

  const dropdownItems = ["Cairo", "Alexandria", "Asuit", "Aswan", "Qena"];

  const handleNegotiableChange = () => {
    setNegotiable(true);
    setExchange(false);
    setFree(false);
    setPriceType("negotiable");
  };

  const handleExchangeChange = () => {
    setNegotiable(false);
    setExchange(true);
    setFree(false);
    setPriceType("exchange");
  };

  const handleFreeChange = () => {
    setNegotiable(false);
    setExchange(false);
    setFree(true);
    setPriceType("free");
  };
  const handleDuplex = () => {
    setDuplex(true);
    setTownHouse(false);
    setStandAlone(false);
    setPriceType("Duplex");
  };

  const handleTownHouse = () => {
    setDuplex(false);
    setTownHouse(true);
    setStandAlone(false);
    setPriceType("Town House");
  };

  const handleStandAlone = () => {
    setDuplex(false);
    setTownHouse(false);
    setStandAlone(true);
    setPriceType("Stand Alone");
  };

  const handleBalcony = () => {
    setBalcony(!balcony);
  };
  const handlekitchen = () => {
    setKitchen(!kitchen);
  };
  const handleSecurity = () => {
    setSecurity(!security);
  };
  const handleGarden = () => {
    setGarden(!garden);
  };

  const handleContactMethodChange = (method) => {
    if (method === "phone") {
      setContactMethod("phone");
    } else if (method === "chat") {
      setContactMethod("chat");
    } else if (method === "both") {
      setContactMethod("both");
    }
  };

  const handleDropdownItemClick = (selectedItem, e) => {
    e.preventDefault();
    setSelectedLocation(selectedItem);
    setProductDetails((prevState) => ({
      ...prevState,
      location: selectedItem,
    }));
    setisDropdownLocation(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct();
  };

  useEffect(() => {
    const isPropertySelected = async () => {
      if (selectedCategory == "Properties") {
        setIsProperty(true);
      }
    };
    isPropertySelected();
  }, [setIsProperty, selectedCategory]);

  return (
    <>
      <h1 className="font-semibold py-4 text-3xl mx-auto flex justify-center">
        Post AD
      </h1>
      <div className="container mx-auto border p-1">
        <div className="flex items-center">
          <BreadCrumb />
          <Link to={"/sell"}>
            <span className="text-black ml-auto underline relative right-16">
              Change
            </span>
          </Link>
          <hr className="w-fit" />
        </div>
        <hr className="w-full mb-2" />
        <div className="mx-20">
          <h1 className="font-semibold text-2xl mb-4">Includes Some Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="productName" className="text-md block mb-1">
                AD Title:
              </label>
              <input
                type="text"
                id="productName"
                value={productDetails.name}
                onChange={changeHandler}
                name="name"
                className="w-full border rounded px-3 py-2"
                required
              />
              <p className="text-sm text-black font-normal">
                Please, Mention the key features of your item
              </p>
            </div>
            {!isproperty && (
              <div className="mb-4">
                <label htmlFor="brand" className="block mb-1">
                  Brand:
                </label>
                <Select
                  options={brands}
                  value={selectedBrand}
                  onChange={(selectedOption) =>
                    setSelectedBrand(selectedOption)
                  }
                  placeholder="Select a brand"
                  isSearchable
                  className="w-full bg-gray-50"
                  required
                />
              </div>
            )}
            {isproperty && (
              <div className="mb-4">
                <label className="text-md mb-1">Property Type:</label>
                <div className="mb-4 flex gap-5 m-3">
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={duplex}
                      onChange={handleDuplex}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="negotiable" className="mx-3 relative top-1">
                      Duplex
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="exchange"
                      checked={standAlone}
                      onChange={handleStandAlone}
                      className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="exchange" className="mx-3 relative top-1">
                      Stand Alone
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="free"
                      checked={townHouse}
                      onChange={handleTownHouse}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label htmlFor="free" className="mx-3 relative top-1">
                      Town House
                    </label>
                  </div>
                </div>
              </div>
            )}
            {isproperty && (
              <div className="mb-4">
                <label>
                  Area (m<span className="relative text-sm bottom-1">2</span>):
                </label>
                <input
                  type="number"
                  name="area"
                  className="w-full border rounded px-3 py-2 mt-3"
                />
              </div>
            )}

            {isproperty && (
              <div>
                <label className="block mb-1">Amenities:</label>
                <div className="mb-4 flex gap-5 m-3">
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={balcony}
                      onChange={handleBalcony}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="negotiable" className="mx-3 relative top-1">
                      Balcony
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="exchange"
                      checked={kitchen}
                      onChange={handlekitchen}
                      className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="exchange" className="mx-3 relative top-1">
                      Built in Kitchen Appliances
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="free"
                      checked={garden}
                      onChange={handleGarden}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label htmlFor="free" className="mx-3 relative top-1">
                      Private Garden
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="free"
                      checked={security}
                      onChange={handleSecurity}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label htmlFor="free" className="mx-3 relative top-1">
                      Security
                    </label>
                  </div>
                </div>
              </div>
            )}

            {isproperty && (
              <div className="mb-4">
                <div className="mb-4">
                  <label>Bedrooms:</label>
                  <input
                    type="number"
                    name="bedrooms"
                    className="w-full border rounded px-3 py-2 mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label>Bathrooms:</label>
                  <input
                    type="number"
                    name="bathrooms"
                    className="w-full border rounded px-3 py-2 mt-3"
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="description" className="block mb-1">
                Description:
              </label>
              <textarea
                id="description"
                value={productDetails.description}
                onChange={changeHandler}
                name="description"
                className="w-full border rounded px-3 py-2"
                rows="4"
                required
              ></textarea>
              <p className="text-sm">
                Please,Include condition, features and reason for selling
              </p>
            </div>
            <hr className="w-full" />

            <div className="relative mb-4">
              <label
                htmlFor="price"
                className="block mb-7 mt-5 text-2xl font-bold"
              >
                Set a Price:
              </label>
              <label className="block mb-2">Price:</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 pointer-events-none">
                  EGP
                </span>
                <input
                  type="text"
                  id="price"
                  value={productDetails.price}
                  onChange={changeHandler}
                  name="price"
                  className="pl-16 w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="mb-4 flex gap-5">
              <div className="p-2 border w-fit flex justify-center items-center">
                <input
                  type="checkbox"
                  id="negotiable"
                  checked={negotiable}
                  onChange={handleNegotiableChange}
                  className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="negotiable" className="mx-3 relative top-1">
                  Negotiable
                </label>
              </div>
              {!isproperty && (

              <div className="p-2 border w-fit flex justify-center items-center">
                <input
                  type="checkbox"
                  id="exchange"
                  checked={exchange}
                  onChange={handleExchangeChange}
                  className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="exchange" className="mx-3 relative top-1">
                  Exchange
                </label>
              </div>
              )}
              {!isproperty && (
              <div className="p-2 border w-fit flex justify-center items-center">
                <input
                  type="checkbox"
                  id="free"
                  checked={free}
                  onChange={handleFreeChange}
                  className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                />
                <label htmlFor="free" className="mx-3 relative top-1">
                  Free
                </label>
              </div>
              )}
            </div>

            <div className="add-product-itemfield">
              <label htmlFor="file-input">
                <img
                  src={image ? URL.createObjectURL(image) : upload_area}
                  className="add-product-thumnail-img"
                  alt=""
                />
              </label>
              <input
                onChange={imageHandler}
                type="file"
                name="image"
                id="file-input"
                hidden
              />
            </div>
              <hr className="w-full mt-3"/>
            <div className="mb-6">
              <label htmlFor="location" className="block mb-6 mt-5 text-2xl font-bold">
                Location:
              </label>
              <div className="relative border p-4">
                <button
                  onClick={toggleDropdownLocation}
                  type="button"
                  className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900"
                  aria-expanded={isDropdownLocation}
                >
                  <span className="text-red-600 font-semibold">
                    <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {selectedLocation || "Select Location"}
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
                  <div className="dropdown-menu absolute top-full mt-1 border rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="relative grid w-64 sm:gap-8 sm:p-8">
                      {dropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                          onClick={(e) => handleDropdownItemClick(item, e)}
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> {item}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="reviewProfile" className="block mb-1">
                Review Profile:
              </label>
              <img
                src="user-image.jpg"
                alt="User Image"
                className="w-12 h-12 rounded-full"
              />
              <input
                type="text"
                id="userName"
                value={productDetails.sellerData.userName}
                onChange={changeHandler}
                name="userName"
                placeholder="Name"
                className="border rounded px-3 py-2 w-full"
                required
              />
              <input
                type="tel"
                id="phoneNumber"
                value={productDetails.sellerData.phoneNumber}
                onChange={changeHandler}
                name="phoneNumber"
                placeholder="Phone Number"
                className="border rounded px-3 py-2 w-full mt-2"
                required
              />
              <div className="mt-2 gap-5 flex">
                <label className="text-lg">Contact Type:</label>
                <div className="flex justify-center items-center w-fit border">
                <input
                  type="checkbox"
                  id="phone"
                  value="phone"
                  checked={contactMethod.includes("phone")}
                  onChange={() => handleContactMethodChange("phone")}
                  className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="phone" className="mx-3 relative top-1">
                  Phone
                </label>
                </div>
                <div className="flex justify-center items-center w-fit border">
                <input
                  type="checkbox"
                  id="chat"
                  value="chat"
                  checked={contactMethod.includes("chat")}
                  onChange={() => handleContactMethodChange("chat")}
                  className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="chat" className="mx-3 relative top-1">
                  Chat
                </label>
                </div>
                <div className="flex justify-center items-center w-fit border">
                <input
                  type="checkbox"
                  id="both"
                  value="both"
                  checked={contactMethod.includes("both")}
                  onChange={() => handleContactMethodChange("both")}
                  className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="both" className="mx-3 relative top-1">
                  Both
                </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-600 font-bold mt-3 text-white px-6 py-2 rounded-lg"
            >
              Post Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellForm;
