import React, { createContext, useState } from 'react'


type ButtonContextType = {
   testC: boolean;
   setTestC: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TestCon = createContext<ButtonContextType | null>(null);
export const TestContext = ({ children }: { children: React.ReactNode }) => {

   const [testC, setTestC] = useState<boolean>(false)

   return (
      <TestCon.Provider value={{ testC, setTestC }}>{children}</TestCon.Provider>
   )
}

