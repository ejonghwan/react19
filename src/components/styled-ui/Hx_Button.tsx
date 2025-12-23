


import React, { useRef, useEffect, useContext, createContext, useState } from 'react'
import { Button } from '../headless-ui/Button'
import type { ButtonTestProps } from '../headless-ui/Button'



// declare const foo: string;
// 런타임에 JS 코드는 생성 ❌
// 타입체커에게만 “foo가 있다”고 알려줌 ⭕
// 보통 외부 라이브러리 / 전역 객체 / JS 코드를 TS에서 쓸 때 사용해.

// namespace MyLib {
//    export function hello(): void;
// }
// namespace는 타입과 값들을 묶는 공간이야.
// (요즘은 module / import를 더 많이 쓰지만, 여전히 선언 파일에선 자주 씀)


// declare namespace MyLib {
//    function hello(): void;
//    const version: string;
// }
// 그래서 declare namespace는?
// 👉 “전역에 존재하는 네임스페이스의 타입만 선언” 하는 거야.

// 실제 JS 어딘가에 MyLib가 이미 있음
// TypeScript에게 형태만 알려줌
// JS로 컴파일되면 아무 코드도 안 나옴




// type ButtonContextType = {
//    btn: null;
//    setBtn: React.Dispatch<React.SetStateAction<null>>;
// };

// interface Props {
//    children: React.ReactNode
//    a?: ButtonTestProps
// }

// const ButtonContext = createContext<ButtonContextType | null>(null)


// const Hx_Button = ({ children }: Props) => {


//    // const { btn: btnT, setBtn: setBtnT } = useContext(ButtonContext)
//    const ctx = useContext(ButtonContext)


//    const { btn: btnT, setBtn: setBtnT } = ctx;
//    if (!ctx) {
//       throw new Error("Hx_Button must be used within ButtonContext.Provider");
//    }

//    const [btn, setBtn] = useState(null)

//    const btnRef = useRef(null)

//    // console.log(foo)

//    useEffect(() => {
//       console.log('btnRef.current', btnRef.current, btnT, setBtnT)
//    }, [])

//    return (
//       <>
//          <ButtonContext.Provider value={{ btn, setBtn }}>
//             <Button
//                variant='primary'
//                ref={btnRef}
//             >
//                {children}
//             </Button>
//             {/* <Button variant='primary' ref={btnRef}>asdasd</Button> */}
//          </ButtonContext.Provider>
//       </>
//    )
// }

// export default Hx_Button


















// declare const foo: string;
// 런타임에 JS 코드는 생성 ❌
// 타입체커에게만 “foo가 있다”고 알려줌 ⭕
// 보통 외부 라이브러리 / 전역 객체 / JS 코드를 TS에서 쓸 때 사용해.

// namespace MyLib {
//    export function hello(): void;
// }
// namespace는 타입과 값들을 묶는 공간이야.
// (요즘은 module / import를 더 많이 쓰지만, 여전히 선언 파일에선 자주 씀)


// declare namespace MyLib {
//    function hello(): void;
//    const version: string;
// }
// 그래서 declare namespace는?
// 👉 “전역에 존재하는 네임스페이스의 타입만 선언” 하는 거야.

// 실제 JS 어딘가에 MyLib가 이미 있음
// TypeScript에게 형태만 알려줌
// JS로 컴파일되면 아무 코드도 안 나옴




type ButtonContextType = {
   btn: boolean;
   // setBtn: React.Dispatch<React.SetStateAction<null>>;
   setBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Props {
   children: React.ReactNode
   a?: ButtonTestProps
}

export const ButtonContext = createContext<ButtonContextType | null>(null)

export const BtnProvider = ({ children }: { children: React.ReactNode }) => {
   const [btn, setBtn] = useState<boolean>(false);

   return (
      <ButtonContext.Provider value={{ btn, setBtn }}>
         {children}
      </ButtonContext.Provider>
   );
};


const Hx_Button = ({ children }: Props) => {

   const ctx = useContext(ButtonContext);
   if (!ctx) {
      throw new Error("useButtonContext must be used within BtnProvider");
   }

   const { btn, setBtn } = ctx

   const btnRef = useRef<HTMLButtonElement | null>(null);

   useEffect(() => {
      console.log('btnRef.current', btnRef.current);
   }, []);

   return (
      <Button
         variant="primary"
         ref={btnRef}
         onClick={() => setBtn(prev => !prev)}
      >
         {btn ? 't' : 'f'}
         {children}
      </Button>
   );
};


export default Hx_Button