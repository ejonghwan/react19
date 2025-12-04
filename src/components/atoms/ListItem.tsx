import React, { useState } from 'react'
import styles from './Listitem.module.scss'

const ListItem = ({ item, idx }: { item: number; idx: number; }) => {

    const [t, setT] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (idx == Number(e.currentTarget.dataset.n)) setT(prev => !prev)
    }


    return (
        <div onClick={(e) => handleClick(e)} className={styles.list} data-n={idx}>
            <div className={styles["list--item"]}>
                ListItem: {item}<br />
                {t ? 't' : 'f'}
                <div className={styles[`imglist-${idx}`]}>a</div>
            </div>
        </div >
    )
}

export default ListItem