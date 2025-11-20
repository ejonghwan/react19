import React from 'react'
import styles from './Content.module.scss'

interface Props {
   // children: React.ReactElement // 원시타입 비허용
   children: React.ReactNode // 원시타입 허용
}

const Content = ({ children }: Props) => {
   return (
      <>
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