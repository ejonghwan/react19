import React from 'react'
import styles from './Listitem.module.scss'
import ListItem from './ListItem'

const ListWrap = () => {
    return (
        <div className={styles.list}>
            {[1, 2, 3, 4].map((item, idx) => <ListItem key={idx} item={item} idx={idx} />)}
        </div>
    )
}

export default ListWrap