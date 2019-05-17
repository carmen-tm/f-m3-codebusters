import React from 'react';
import MainSections from './MainSections';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import { userInfo } from 'os';

class MainPage extends React.Component {
  render(){
    return(
      <div className="main-page-wrapper">
        <MainHeader/>
        <MainSections data={this.props.data} methodInputText={this.props.methodInputText}/>
        <MainFooter/>
      </div>
    );
  }
}
export default MainPage;
