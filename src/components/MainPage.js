import React from "react";
import MainSections from "./MainSections";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-wrapper">
        <MainHeader />
        <MainSections
          defaultProfile={this.props.defaultProfile}
          data={this.props.data}
          methodInputText={this.props.methodInputText}
          methodColorChange={this.props.methodColorChange}
          checked={this.props.checked}
          color={this.props.color}
          updateAvatar={this.props.updateAvatar}
          messageError={this.props.messageError}
          success={this.props.success}
          btnShare={this.props.btnShare}
          urlCard={this.props.urlCard}
          profileObject={this.props.profileObject}
          onClickCollapsible={this.props.onClickCollapsible}
          currentIdState={this.props.currentIdState}
          btnClick={this.props.btnClick}
        />
        <MainFooter />
      </div>
    );
  }
}
export default MainPage;
