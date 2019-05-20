import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <header class="main__header">
            <a class="header__link" href="index.html">
            <img class="header__image" src="assets/images/Awesome-profile-cards.svg" alt="Awesome profile-cards logo"></img>
            </a>
        </header> 
        <main class="landing__container">
          <img
            class="landing__hero"
            src="assets/images/Awesome-profile-cards.svg"
            alt="Awesome Profile Cards Logo"
          />
          <h1 class="landing__title">Create your visit card</h1>
          <h2 class="landing__subtitle">
            Create better professional contacts easily and comfortably
          </h2>
          <ul class="landing__list">
            <li class="item__list">
              <i class="far fa-object-ungroup icon" title="Design icon" />
              Design
            </li>
            <li class="item__list">
              <i class="far fa-keyboard icon" title="Complete icon" />
              Complete
            </li>
            <li class="item__list">
              <i class="fas fa-share-alt icon" title="Share icon" />
              Share
            </li>
          </ul>
          <a class="landing__link" href="main-page.html">
            <Link to = "/card-generator">Start</Link>
          </a>
        </main>
      </div>
    );
  }
}
export default Landing;
