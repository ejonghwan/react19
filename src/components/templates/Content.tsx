import React, { useEffect, useState, useCallback } from 'react'
import styles from './Content.module.scss'
import styles2 from '../../components/atoms/Listitem.module.scss'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'
import { useToggle } from '../../hooks/useToggle'
import ListItem from '../atoms/ListItem'
import ListWrap from '../atoms/ListWrap'

interface Props {
   // children: React.ReactElement // 원시타입 비허용
   children: React.ReactNode // 원시타입 허용
}

const Content = ({ children }: Props) => {



   const isOnline = useOnlineStatus()
   const [toggle, handleToggle] = useToggle()

   const [time, setTime] = useState(0)

   const handleTime = useCallback(() => {
      setTime(prev => prev + 1)
   }, [])

   useEffect(() => {
      console.log(time)
   }, [time])


   const [count, setCount] = useState(0); // 클릭시 올라감 
   const [renderCount, setRenderCount] = useState(0);

   // 무한반복됨 왜냐 ?. setCount이게 업데이트되면 useEffect가 실행됨. 
   // 그 안에 setRenderCount이게 업데이트되면 또 실행됨 무한반복
   // 이럴떄 useRef 사용

   // useEffect(() => {
   //    setRenderCount(prev => prev + 1)
   // })




   return (
      <>


         <ListWrap />





         <div>itme : {time}</div>
         <button onClick={handleTime}>++</button>


         test1 commit
         test2 commit
         test3 commit



         <button type='button' onClick={handleToggle}>toggle ? {toggle ? 'true' : 'false'}</button>

         <div>{isOnline ? 'online' : 'notOnline'}</div>

         <div className={styles.zzz}>zzz</div>

         <div className={styles.box1}>asd</div>
         <div className={styles.box2}>bbb</div>

         <div className={styles.icon_1}>1</div>
         <div className={styles.icon_2}>2</div>
         <div className={styles.icon_3}>3</div>
         <div className={styles.icon_4}>4</div>
         <div className={styles.icon_5}>5</div>


         <div className={styles.content}>
            {children}
         </div>
      </>
   )
}

export default Content