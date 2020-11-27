import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.module.css';
import LandingPage from './components/LandingPage/LandingPage'
import OpenBoxLogo from './components/UI/Logo/Logo'
import JoinGame from './components/JoinGame/JoinGame'
import CommingSoon from './components/CommingSoon/CommingSoon'
import styles from './app.module.css'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Route path="/join-game" component={JoinGame}/>
          <Route path="/landing-page" exact component={LandingPage}/>
          <Route path="/"  exact component={CommingSoon}/>
          <OpenBoxLogo/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
