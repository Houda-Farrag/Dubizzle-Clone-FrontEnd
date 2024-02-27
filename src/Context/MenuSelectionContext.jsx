import { createContext, useContext, useState } from 'react';

const MenuSelectionContext = createContext();

export const useMenuSelectionContext = () => useContext(MenuSelectionContext);

export const MenuSelectionProvider = ({ children }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedSubMenu1, setSelectedSubMenu1] = useState(null);
  const [selectedSubMenu2, setSelectedSubMenu2] = useState(null);

  return (
    <MenuSelectionContext.Provider
      value={{
        selectedMenuItem,
        selectedSubMenu1,
        selectedSubMenu2,
        setSelectedMenuItem,
        setSelectedSubMenu1,
        setSelectedSubMenu2,
      }}
    >
      {children}
    </MenuSelectionContext.Provider>
  );
};
