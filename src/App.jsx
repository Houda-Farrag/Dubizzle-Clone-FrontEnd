import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Pages/ProductDetails";
import { PropertyDetails } from "./Pages/PropertyDetails";
import { SellPage } from "./Pages/SellPage";
import { SellFormPage } from "./Pages/SellFormPage";
import { MenuSelectionProvider } from "./Context/MenuSelectionContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <MenuSelectionProvider>
        <Routes>
          <Route path="/" element={<ProductDetails />} />
          <Route path="property" element={<PropertyDetails />} />
          <Route path="/sell" element={<SellPage/>}/>
          <Route path="/sellform" element={<SellFormPage />} />
        </Routes>
          </MenuSelectionProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
