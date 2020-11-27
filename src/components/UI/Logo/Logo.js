import React from 'react'
import Logo from '../../../assets/logo.svg'
import styles from './logo.module.css'


const OpenBoxLogo = () => {
    return (
        <div>
            <img className={styles.Logo} src={Logo}/>
        </div>
    )
}

export default OpenBoxLogo