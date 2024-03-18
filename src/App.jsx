import "./App.css";
import Home from "./Pages/Home/Home";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Property from "./Pages/Property/Property";
import { Provider } from "react-redux";
import StroeConfig from "./Store/Store";
import Favorite from "./Pages/Favorite/Favorite";
import { SellPage } from "./Pages/Sell/SellPage";
import { SellFormPage } from "./Pages/SellForm/SellFormPage";
import { MenuSelectionProvider } from "./Context/MenuSelectionContext";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { PropertyDetails } from "./Pages/PropertyDetails/PropertyDetails";
import SubCategoryProducts from "./Pages/SubCategoryProducts/SubCategoryProducts";
import EditProfile from "./Pages/EditProfile/EditProfile";


function App() {


  const routesPage = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "favorite", element: <Favorite /> },
        { path: "/subCategoryProducts", element: <SubCategoryProducts /> },
        { path: "/sell", element:<SellPage /> },
        { path: "/sellform", element: <SellFormPage /> },
        { path: "/product-details/:id", element: <ProductDetails /> },
        { path: '/EditProfile', element: <EditProfile /> }
      ],
    },
    { path: "/property", element: <Property /> },
    { path: "/property-details", element: <PropertyDetails /> },
  ]);

  return (
    <>
      <MenuSelectionProvider>
        <Provider store={StroeConfig}>
          <RouterProvider router={routesPage}>
            <AppLayout />
          </RouterProvider>
        </Provider>
      </MenuSelectionProvider>
    </>
  );
}

export default App;
