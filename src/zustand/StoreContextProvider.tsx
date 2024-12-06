import { createContext, useState, useContext } from 'react';

import { useStore } from '.';

const Context = createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreContextProvider = ({ children }: any) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Context.Provider value={useStore()}>{children}</Context.Provider>;
};

export const useStoreContext = () => useContext(Context);

export default StoreContextProvider;
