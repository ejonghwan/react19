// import React, { type ComponentPropsWithoutRef } from 'react'
// 또는 완전히 분리해서 선언
// import React from 'react'
// import type { ComponentPropsWithoutRef } from 'react'

// interface Props extends ComponentPropsWithoutRef<'input'> {
//    // 필요한 경우 여기에 커스텀 속성만 추가하면 됩니다.
//    customTitle?: string;
// }



// 이게 좀 더 명시적인거같은데 ..
import React, { type InputHTMLAttributes } from 'react'

// <HTMLInputElement> 제네릭을 넘겨주어야 합니다.
interface Props extends InputHTMLAttributes<HTMLInputElement> {
   // 추가로 필요한 커스텀 속성이 있다면 여기에 작성
   label?: string;
}


// interface Props {
//    type?: string;
//    name?: string;
//    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//    onChange?: React.ChangeEventHandler<HTMLInputElement>;
// }



const someCondition = true

const Input = ({ ...props }: Props) => {

   // const [test, setTest] = useState(false)
   // useEffect(() => {
   //    setTest(prev => !prev)
   // }, [])
   const test = someCondition ? true : false

   return (
      <div>

         {test ? 'true' : 'false'}
         <input {...props} />
      </div>
   )
}

export default Input