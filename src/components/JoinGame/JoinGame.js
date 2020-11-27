import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import styles from './joinGame.module.css';
import Modal from '../UI/Modal/Modal';
const JoinGame = () => {
    return (
        <Modal>
            <div className={styles.JoinGame}>
                <Link to="/" className={styles.Back}>BACK</Link>
                <label>Room Code
                <input type="text" style={{gridColumn: '1'}}/></label>
                <label>Name
                <input type="text"/></label>
                <Button path={'game-lobby'}  buttonStyle='ButtonV1'><p>Enter Game</p></Button>
            </div>
        </Modal>
    )
}

export default JoinGame;