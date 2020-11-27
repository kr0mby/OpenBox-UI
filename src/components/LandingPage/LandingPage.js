import React from 'react';
import styles from './landingPage.module.css';
import Button from '../UI/Button/Button';

const LandingPage = (props) => {
    return (
        <div className={styles.LandingPage}>
            <h1>Open Box</h1>
            <Button path={'create-game'}  buttonStyle="ButtonV1"><p>Create Game</p></Button>
            <Button path={'join-game'} buttonStyle="ButtonV1"><p>Join Game</p></Button>
        </div>
    )
}

export default LandingPage