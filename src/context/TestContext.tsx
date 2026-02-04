import React, { createContext, useContext, useState } from 'react'

// 워크에서 수정 
// 데브에서 수정
// 데브에서 수정
// 데브에서 수정
// 데브에서 수정2
// 데브에서 수정2


type ButtonContextType = {
   testC: boolean;
   setTestC: React.Dispatch<React.SetStateAction<boolean>>;
};


// work-1 에서 수정
// work-1 에서 수정
// work-1 에서 수정
// work-1 에서 수정
// work 에서 수정
// work 에서 수정
// work 에서 수정
// work 에서 수정

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

