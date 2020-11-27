import React from 'react'
import styles from './commingSoon.module.css'

const commingSoon = () => {
    return (
        <div className={styles.CommingSoonContainer}>
            <h1>Open Box</h1>
        <div className={styles.Message}>
            <p>Coming Soon</p>
            <p className={styles.dot1}>. </p>
            <p className={styles.dot2}>. </p>
            <p className={styles.dot3}>. </p>
        </div>
        </div>
    )
}

export default commingSoon