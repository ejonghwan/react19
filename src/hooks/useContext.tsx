import React from 'react';

const useContext = () => {
  const context = React.createContext(null);

  return { context };
};

export default useContext;
