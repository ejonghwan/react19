import React, { createContext, useContext, useState } from 'react'


type ButtonContextType = {
   testC: boolean;
   setTestC: React.Dispatch<React.SetStateAction<boolean>>;
};


// eslint-disable-next-line react-refresh/only-export-components
export const TestCon = createContext<ButtonContextType | null>(null);


// eslint-disable-next-line react-refresh/only-export-components
export const useTestConProvider = () => {
   const context = useContext(TestCon)
   console.log('bb??', context)
   if (!context) throw new Error('is not context');

   return context;
}

export const TestContextProvider = ({ children }: { children: React.ReactNode }) => {

   const [testC, setTestC] = useState<boolean>(false)

   return (
      <TestCon.Provider value={{ testC, setTestC }}>{children}</TestCon.Provider>
   )
}

