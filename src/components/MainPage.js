import React from 'react';
import MainSections from './MainSections';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';


class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <MainHeader />
        <MainSections
          data={this.props.data}
          methodInputText={this.props.methodInputText}
          methodColorChange={this.props.methodColorChange}
          checked={this.props.checked}
          color={this.props.color}
          updateAvatar={this.props.updateAvatar}
          twitter={this.props.twitter}
        />
        <MainFooter />
      </div>
    );
  }
}
export default MainPage;
