import React from 'react';
import AdaLogo from '../images/AdaLogo.png';
import GroupLogo from '../images/GroupLogo.png';

class MainFooter extends React.Component{
  render(){
    return(
      <footer className="footer">
        <small className="copyright">Awesome profile-cards @2019</small>
        <div className="logo-container">
          <img className="logo-frontNerds" src={GroupLogo} alt="GroupLogo"/>
          <a href="https://adalab.es/" target="_blank" rel="noopener noreferrer" className="logo-adalab__link">
              <img className="logo-adalab" src={AdaLogo} alt="Adalab"/>
          </a>
        </div>
      </footer>
    )
  }
}
export default MainFooter;