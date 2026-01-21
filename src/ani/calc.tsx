import React, { useEffect, useRef } from 'react'
import style from './calc.module.scss'

const Calc = () => {


   const targetRef = useRef<HTMLInputElement | null>(null)
   const wrapRef = useRef<HTMLDivElement | null>(null)
   const keypadRef = useRef<HTMLDivElement | null>(null)


   useEffect(() => {



      if (targetRef.current) {

         targetRef.current.addEventListener('focus', () => {
            keypadRef.current?.classList.add('focus')
            // const wrapH = wrapRef.current?.getBoundingClientRect()
            // const cliH = wrapRef.current?.clientHeight;
            // const targetOffsetTop = targetRef.current?.offsetTop;
            const targetRect = targetRef.current?.getBoundingClientRect();
            const keypadH = keypadRef.current?.clientHeight


            // console.log('innerH?', innerH,)
            // console.log('wrapH?', cliH)
            // console.log('targetOffsetTop?', targetOffsetTop)

            if (targetRect && keypadH && wrapRef.current) {
               // console.log('targetRect?', targetRect.top)

               const calc = window.innerHeight - keypadH
               const inputCalc = targetRect.bottom - calc

               console.log('키패드 가려진데서 얼마나 아래에있는지 ? ', inputCalc)


               // 뷰포트높이 - 키패드 보다 타겟이 떨어진 위치가 크면
               if (calc <= targetRect.bottom) {
                  console.log('조절해야됨')
                  wrapRef.current.style.transform = `translateY(-${inputCalc + 20}px)`

               }
            }

         })


         targetRef.current.addEventListener('blur', () => {
            if (wrapRef.current) {

               keypadRef.current?.classList.remove('focus')
               wrapRef.current.style.removeProperty('transform')
            }
         })

      }

   }, [])

   return (
      <>
         <div className={style["calc__wrap"]} ref={wrapRef}>

            <section></section>
            <section></section>
            <section></section>
            <section>
               <input type="text" ref={targetRef} />
            </section>
            <section></section>
            <section></section>
            <section></section>

            {/* 랩에 트랜스 레이트주면 안에있는 픽스드 이상해짐 ./..;;?? */}
         </div>
         <div className={style["keypad"]} ref={keypadRef}>
            12345678
         </div>
      </>
   )
}

export default Calc