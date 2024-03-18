import {
  faBuilding,
  faCar,
  faChevronRight,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SellForm from "../SellForm/SellForm";

import { useMenuSelectionContext } from "../../Context/MenuSelectionContext";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";

const SideMenu = () => {
  const {
    selectedCategory,
    setselectedCategory,
    selectedSubCategory,
    setselectedSubCategory,
  } = useMenuSelectionContext();

  const handleMenuItemClick = (menuItem) => {
    setselectedCategory(menuItem);
    setselectedSubCategory(null);
  };

  const handleSubMenu1Click = (subMenu) => {
    setselectedSubCategory(subMenu);
  };

  return (
    <>
      <div className="hidden">
        <SellForm
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubCategory}
        />

        <BreadCrumb
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubCategory}
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
                className={`flex items-center py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 cursor-pointer ${
                  selectedCategory === "Vehicles" && "bg-gray-50"
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
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedCategory === "Properties" && "bg-gray-50"
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
                className={`flex items-center cursor-pointer justify-between py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                  selectedCategory === "Mobile & tablets" && "bg-gray-50"
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
            </ul>
          </div>
          {selectedCategory == "Vehicles" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Cars for sale" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Cars for sale")}
                  >
                    Cars for sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Cars for Rent" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Cars for Rent")}
                  >
                    Cars for Rent
                  </li>
                </Link>
                <hr className="h-1" />
              </ul>
            </div>
          )}
          {selectedCategory == "Properties" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Apartments for Sale" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Apartments for Sale")}
                  >
                    Apartments for Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Apartments for Rent" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Apartments for Rent")}
                  >
                    Apartments for Rent
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Villas For Sale" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Villas For Sale")}
                  >
                    Villas For Sale
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Villas For Rent" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Villas For Rent")}
                  >
                    Villas For Rent
                  </li>
                </Link>
              </ul>
            </div>
          )}
          {selectedCategory == "Mobile & tablets" && (
            <div className="bg-white">
              <ul className="mt-14">
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Mobile Phones" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Mobile Phones")}
                  >
                    Mobile Phones
                  </li>
                </Link>
                <hr className="h-1" />
                <Link to={"/sellform"}>
                  <li
                    className={`py-2 px-4 my-1 text-black rounded-lg hover:bg-gray-50 ${
                      selectedSubCategory === "Tablets" && "bg-gray-50"
                    }`}
                    onClick={() => handleSubMenu1Click("Tablets")}
                  >
                    Tablets
                  </li>
                </Link>
                <hr className="h-1" />
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
