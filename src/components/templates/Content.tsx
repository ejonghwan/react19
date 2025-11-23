import React, { useEffect, useState, useCallback } from 'react'
import styles from './Content.module.scss'
import { useOnlineStatus } from '../../hooks/useOnlineStatus'
import { useToggle } from '../../hooks/useToggle'

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

   return (
      <>



         <div>itme : {time}</div>
         <button onClick={handleTime}>++</button>




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