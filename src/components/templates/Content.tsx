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
         <div className={styles.content}>
            {children}
         </div>
      </>
   )
}

export default Content