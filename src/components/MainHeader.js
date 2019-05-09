import React from 'react';
import AppLogo from '../images/AppLogo.svg';

class MainHeader extends React.Component{
  render(){
    return(
      <header className="main__header">
              <a className="header__link" href="index.html">
                  <img className="header__image" src={AppLogo} alt="Awesome profile-cards logo"/>
              </a>
      </header> 
    )
  }
}
export default MainHeader;