import React from 'react'
import { withRouter } from 'react-router-dom'
import styles from '../Button/button.module.css'

const button = (props) => {

    const onClickHandler = () => {
        props.history.push({pathname: '/' + props.path})

    }

    return (
        <div className={styles.ButtonContainer}>
            <button onClick={onClickHandler} className={styles[props.buttonStyle]}>{props.children}</button>
        </div>
        )
}

export default withRouter(button)