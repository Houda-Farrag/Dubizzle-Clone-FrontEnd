import {
  faBabyCarriage,
  faBicycle,
  faBuilding,
  faCar,
  faCat,
  faChevronRight,
  faCouch,
  faMobileScreenButton,
  faShirt,
  faTv,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SellForm from "../SellForm/SellForm";

import { useMenuSelectionContext } from "../../Context/MenuSelectionContext";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";

const SideMenu = () => {
  // const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  // const [selectedSubMenu1, setSelectedSubMenu1] = useState(null);
  // const [selectedSubMenu2, setSelectedSubMenu2] = useState(null);

  const {
    selectedMenuItem,
    setSelectedMenuItem,
    selectedSubMenu1,
    setSelectedSubMenu1,
    selectedSubMenu2,
    setSelectedSubMenu2,
  } = useMenuSelectionContext();

  useEffect(() => {
    // handleMenuItemClick(selectedMenuItem)
    // handleSubMenu1Click(selectedSubMenu1)
    // handleSubMenu2Click(selectedSubMenu2)
    console.log(selectedMenuItem, selectedSubMenu1, selectedSubMenu2);
  }, [selectedMenuItem, selectedSubMenu1, selectedSubMenu2]);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    setSelectedSubMenu1(null);
    setSelectedSubMenu2(null);
  };

  const handleSubMenu1Click = (subMenu) => {
    setSelectedSubMenu1(subMenu);
    setSelectedSubMenu2(null);
  };

  const handleSubMenu2Click = (subMenu) => {
    setSelectedSubMenu2(subMenu);
  };

  return (
    <>
      <div className="hidden">
        <SellForm
          selectedCategory={selectedMenuItem}
          selectedSubcategory={selectedSubMenu1}
          selectedNestedSubcategory={selectedSubMenu2}
        />

        <BreadCrumb
          selectedCategory={selectedMenuItem}
          selectedSubcategory={selectedSubMenu1}
          selectedNestedSubcategory={selectedSubMenu2}
        />
      </div>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold py-8">Post Your Ad</h1>
        <div className="grid grid-cols-3 border">
          <div className="bg-white">
            <div className="p-4 text-black font-bold">Choose a Category</div>
            <ul>
              <hr className="h-1" />
              <li
                className={`flex items-center py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 cursor-pointer ${selectedMenuItem === "Vehicles" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Vehicles")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCar} className="text-red-600 mr-2" />
                  Vehicles
                </span>
                <FontAwesomeIcon icon={faChevronRight} className="ml-auto" />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Properties" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Properties")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="text-red-600 mr-2"
                  />
                  Properties
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Mobile & tablets" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Mobile & tablets")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    className="text-red-600 mr-2"
                  />
                  Mobile & tablets
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Jobs" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Jobs")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserDoctor}
                    className="text-red-600 mr-2"
                  />
                  Jobs
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Electronics & Appliances" &&
                  "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Electronics & Appliances")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faTv} className="text-red-600 mr-2" />
                  Electronics & Appliances
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Furniture & Decor" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Furniture & Decor")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCouch}
                    className="text-red-600 mr-2"
                  />
                  Furniture & Decor
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Pets" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Pets")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon icon={faCat} className="text-red-600 mr-2" />
                  Pets
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Kids & babies" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Kids & babies")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBabyCarriage}
                    className="text-red-600 mr-2"
                  />
                  Kids & babies
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Hoppies" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Hoppies")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faBicycle}
                    className="text-red-600 mr-2"
                  />
                  Hoppies
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
              <hr className="h-1" />
              <li
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedMenuItem === "Fashion & Beauty" && "bg-gray-50"
                  }`}
                onClick={() => handleMenuItemClick("Fashion & Beauty")}
              >
                <span className="flex items-center">
                  <FontAwesomeIcon
                    icon={faShirt}
                    className="text-red-600 mr-2"
                  />
                  Fashion & Beauty
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
            </ul>
          </div>
          {selectedMenuItem == "Vehicles" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cars for sale" && "bg-gray-50"

                      }`}
                    onClick={() => handleSubMenu1Click("Cars for sale")}
                  >
                    Cars for sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cars for Rent" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Cars for Rent")}
                  >
                    Cars for Rent
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cars Spare Parts" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Cars Spare Parts")}
                  >
                    Cars Spare Parts
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Boats - Watercraft" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Boats - Watercraft")}
                  >
                    Boats - Watercraft
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Tyres , Oils & Accessories" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Tyres , Oils & Accessories")}
                  >
                    Tyres , Oils & Accessories
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Properties" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Apartments for Sale" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Apartments for Sale")}
                  >
                    Apartments for Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Apartments for Rent" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Apartments for Rent")}
                  >
                    Apartments for Rent
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Villas For Sale" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Villas For Sale")}
                  >
                    Villas For Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Villas For Rent" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Villas For Rent")}
                  >
                    Villas For Rent
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Vacation Homes for Sale" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Vacation Homes for Sale")}
                  >
                    Vacation Homes for Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Vacation Homes for Rent" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Vacation Homes for Rent")}
                  >
                    Vacation Homes for Rent
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Commercial for Sale" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Commercial for Sale")}
                  >
                    Commercial for Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Commercial for Rent Buildings & Lands" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Commercial for Rent Buildings & Lands")}
                  >
                    Commercial for Rent Buildings & Lands
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Buildings & Lands" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Buildings & Lands")}
                  >
                    Buildings & Lands
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Mobile & tablets" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Mobile Phones" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Mobile Phones")}
                  >
                    Mobile Phones
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Tablets" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Tablets")}
                  >
                    Tablets
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Mobile & Tablet Accessories Mobile Numbers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Mobile & Tablet Accessories Mobile Numbers")}
                  >
                    Mobile & Tablet Accessories Mobile Numbers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Mobile Numbers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Mobile Numbers")}
                  >
                    Mobile Numbers
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Jobs" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Accounting, Finance & Banking" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Accounting, Finance & Banking")}
                  >
                    Accounting, Finance & Banking
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Engineering" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Engineering")}
                  >
                    Engineering
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Designers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Designers")}
                  >
                    Designers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Customer Service & Call Center" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Customer Service & Call Center")}
                  >
                    Customer Service & Call Center
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Workers and Technicians" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Workers and Technicians")}
                  >
                    Workers and Technicians
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Management & Consulting" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Management & Consulting")}
                  >
                    Management & Consulting
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Drivers & Delivery" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Drivers & Delivery")}
                  >
                    Drivers & Delivery
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Education" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Education")}
                  >
                    Education
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "HR" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("HR")}
                  >
                    HR
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Tourism, Travel & Hospitality" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Tourism, Travel & Hospitality")}
                  >
                    Tourism, Travel & Hospitality
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "IT - Telecom" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("IT - Telecom")}
                  >
                    IT - Telecom
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Marketing and Public Relations" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Marketing and Public Relations")}
                  >
                    Marketing and Public Relations
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Electronics & Appliances" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <li
                  className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 == "TV Audio Video" && "bg-gray-50"
                    }`}
                  onClick={() => handleSubMenu1Click("TV Audio Video")}
                >
                  <span>TV - Audio - Video</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <hr className="h-1" />
                <li
                  className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Computers - Accessories" &&
                    "bg-gray-50"
                    }`}
                  onClick={() => handleSubMenu1Click("Computers - Accessories")}
                >
                  <span>Computers - Accessories</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <hr className="h-1" />
                <li
                  className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Video games - Consoles" &&
                    "bg-gray-50"
                    }`}
                  onClick={() => handleSubMenu1Click("Video games - Consoles")}
                >
                  <span>Video games - Consoles</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <hr className="h-1" />
                <li
                  className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cameras - Imaging" && "bg-gray-50"
                    }`}
                  onClick={() => handleSubMenu1Click("Cameras - Imaging")}
                >
                  <span>Cameras - Imaging</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <hr className="h-1" />
                <li
                  className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Home Appliances" && "bg-gray-50"
                    }`}
                  onClick={() => handleSubMenu1Click("Home Appliances")}
                >
                  <span>Home Appliances</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </li>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Furniture & Decor" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Bathroom" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Bathroom")}
                  >
                    Bathroom
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Bedroom" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Bedroom")}
                  >
                    Bedroom
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Dining Room" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Dining Room")}
                  >
                    Dining Room
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Fabrics - Curtains - Carpets" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Fabrics - Curtains - Carpets")}
                  >
                    Fabrics - Curtains - Carpets
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Garden - Outdoor" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Garden - Outdoor")}
                  >
                    Garden - Outdoor
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Home Decoration" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Home Decoration")}
                  >
                    Home Decoration
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Kitchen - Kitchenware" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Kitchen - Kitchenware")}
                  >
                    Kitchen - Kitchenware
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Lighting Tools" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Lighting Tools")}
                  >
                    Lighting Tools
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Living Room" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Living Room")}
                  >
                    Living Room
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Multiple/Other Furniture" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Multiple/Other Furniture")}
                  >
                    Multiple/Other Furniture
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Pets" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Birds - Pigeons" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Birds - Pigeons")}
                  >
                    Birds - Pigeons
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cats" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Cats")}
                  >
                    Cats
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Dogs" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Dogs")}
                  >
                    Dogs
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Other Pets & Animals" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Other Pets & Animals")}
                  >
                    Other Pets & Animals
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Accessories - Pet Care Products" && "bg-gray-50"
                      }`}

                    onClick={() => handleSubMenu1Click("Accessories - Pet Care Products")}
                  >
                    Accessories - Pet Care Products
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Kids & babies" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Baby & Mom Healthcare" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Baby & Mom Healthcare")}
                  >
                    Baby & Mom Healthcare
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Baby Clothing" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Baby Clothing")}
                  >
                    Baby Clothing
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Baby Feeding Tools" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Baby Feeding Tools")}
                  >
                    Baby Feeding Tools
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Cribs - Strollers - Carriers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Cribs - Strollers - Carriers")}
                  >
                    Cribs - Strollers - Carriers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Toys" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Toys")}
                  >
                    Toys
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Other Baby Items" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Other Baby Items")}
                  >
                    Other Baby Items
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Hoppies" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Antiques - Collectibles" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Antiques - Collectibles")}
                  >
                    Antiques - Collectibles
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Bicycles" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Bicycles")}
                  >
                    Bicycles
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Books" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Books")}
                  >
                    Books
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Board - Card Games" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Board - Card Games")}
                  >
                    Board - Card Games
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Movies - Music" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Movies - Music")}
                  >
                    Movies - Music
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Musical Instruments" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Musical Instruments")}
                  >
                    Musical Instruments
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Sports Equipment" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Sports Equipment")}
                  >
                    Sports Equipment
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Study Tools" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Study Tools")}
                  >
                    Study Tools
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Tickets - Vouchers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Tickets - Vouchers")}
                  >
                    Tickets - Vouchers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Luggage" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Luggage")}
                  >
                    Luggage
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Other Items" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Other Items")}
                  >
                    Other Items
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedMenuItem == "Fashion & Beauty" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Women`s Clothing" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Women`s Clothing")}
                  >
                    Women`s Clothing
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Men`s Clothing" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Men`s Clothing")}
                  >
                    Men`s Clothing
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Women`s Accessories - Cosmetics - Personal Care" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Women`s Accessories - Cosmetics - Personal Care")}
                  >
                    Women`s Accessories - Cosmetics - Personal Care
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu1 === "Men`s Accessories - Personal Care" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu1Click("Men`s Accessories - Personal Care")}
                  >
                    Men`s Accessories - Personal Care
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedSubMenu1 == "TV Audio Video" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Televisions" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Televisions")}
                  >
                    Televisions
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "DVD - Home Theater" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("DVD - Home Theater")}
                  >
                    DVD - Home Theater
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Home Audio" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Home Audio")}
                  >
                    Home Audio
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50${selectedSubMenu2 === "Mp3 Players - Portable audio" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Mp3 Players - Portable audio")
                    }
                  >
                    Mp3 Players - Portable audio
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Satellite TV receivers" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Satellite TV receivers")
                    }
                  >
                    Satellite TV receivers
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedSubMenu1 == "Computers - Accessories" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Desktop computers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Desktop computers")}
                  >
                    Desktop computers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Laptop computers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Laptop computers")}
                  >
                    Laptop computers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 ===
                      "Computer Accessories & Spare Parts" && "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Computer Accessories & Spare Parts")
                    }
                  >
                    Computer Accessories & Spare Parts
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedSubMenu1 == "Video games - Consoles" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Video Game Consoles" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Video Game Consoles")}
                  >
                    Video Game Consoles
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Video Games & Accessories" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Video Games & Accessories")
                    }
                  >
                    Video Games & Accessories
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedSubMenu1 == "Cameras - Imaging" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Cameras" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Cameras")}
                  >
                    Cameras
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Security Cameras" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Security Cameras")}
                  >
                    Security Cameras
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg bg-gray-50 ${selectedSubMenu2 === "Camera Accessories" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Camera Accessories")}
                  >
                    Camera Accessories
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Binoculars - Telescopes" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Binoculars - Telescopes")
                    }
                  >
                    Binoculars - Telescopes
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedSubMenu1 == "Home Appliances" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Refrigerators - Freezers" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Refrigerators - Freezers")
                    }
                  >
                    Refrigerators - Freezers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Ovens - Microwaves" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Ovens - Microwaves")}
                  >
                    Ovens - Microwaves
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Dishwashers" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Dishwashers")}
                  >
                    Dishwashers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Cooking Tools" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Cooking Tools")}
                  >
                    Cooking Tools
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Washers - Dryers" && "bg-gray-50"
                      }`}
                    bg-gray-50
                    onClick={() => handleSubMenu2Click("Washers - Dryers")}
                  >
                    Washers - Dryers
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Water Coolers & Kettles" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Water Coolers & Kettles")
                    }
                  >
                    Water Coolers & Kettles
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Air conditioners & Fans" &&
                      "bg-gray-50"
                      }`}
                    onClick={() =>
                      handleSubMenu2Click("Air conditioners & Fans")
                    }
                  >
                    Air conditioners & Fans
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Cleaning Appliances" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Cleaning Appliances")}
                  >
                    Cleaning Appliances
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Other Home Appliances" &&
                      "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Other Home Appliances")}
                  >
                    Other Home Appliances
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${selectedSubMenu2 === "Heaters" && "bg-gray-50"
                      }`}
                    onClick={() => handleSubMenu2Click("Heaters")}
                  >
                    Heaters
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
