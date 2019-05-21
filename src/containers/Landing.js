import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppLogo from '../images/AppLogo.svg';
import AdaLogo from '../images/AdaLogo.png';

class Landing extends Component {
  render() {
    return (
      <div>
        <header className="main__header">
            <a className="header__link" href="index.html">
            <img className="header__image" src={AppLogo} alt="Awesome profile-cards logo"></img>
            </a>
        </header> 
        <main className="landing__container">
          <img
            className="landing__hero"
            src={AppLogo}
            alt="Awesome Profile Cards Logo"
          />
          <h1 className="landing__title">Create your visit card</h1>
          <h2 className="landing__subtitle">
            Create better professional contacts easily and comfortably
          </h2>
          <ul className="landing__list">
            <li className="item__list">
              <i className="far fa-object-ungroup icon" title="Design icon" />
              Design
            </li>
            <li className="item__list">
              <i className="far fa-keyboard icon" title="Complete icon" />
              Complete
            </li>
            <li className="item__list">
              <i className="fas fa-share-alt icon" title="Share icon" />
              Share
            </li>
          </ul>
          <a className="landing__link" href="main-page.html">
            <Link to = "/card-generator">Start</Link>
          </a>
        </main>
        <footer className="footer">
        <small className="copyright">Awesome profile-cards @2019</small>
        <div className="logo-container">
            <img className="logo-frontNerds" src={AppLogo} alt="Adalab"/>
            <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer" className="logo-adalab__link">
                <img className="logo-adalab" src={AdaLogo} alt="Adalab"/>
            </a>
        </div>
        </footer>
      </div>
    );
  }
}
export default Landing;
