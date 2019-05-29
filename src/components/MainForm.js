import React from "react";
import Fieldset from "./Fieldset";
import PanelColors from "./PanelColors";
import PanelFill from "./PanelFill";
import PanelShare from "./PanelShare";

class MainForm extends React.Component {
  render() {
    return (
      <form action="" method="post">
        <Fieldset
          title="Design"
          classIcon="far fa-object-ungroup"
          btnId="ButtonDesign"
          arrowId="arrow-design"
          arrow={this.props.currentIdState ==='Design'? 'up' : 'down'}
          onClickCollapsible={this.props.onClickCollapsible}
        >
          <PanelColors
            methodColorChange={this.props.methodColorChange}
            checked={this.props.checked}
            currentIdState={this.props.currentIdState}
            title="Design"
            id="Design"
          />
        </Fieldset>

        <Fieldset
          title="Fill"
          classIcon="far fa-keyboard"
          btnId="ButtonFill"
          arrowId="arrow-fillTheGap"
          arrow={this.props.currentIdState ==='Fill'? 'up' : 'down'}
          onClickCollapsible={this.props.onClickCollapsible}
        >
          <PanelFill
            methodInputText={this.props.methodInputText}
            profileObject={this.props.profileObject}
            updateAvatar={this.props.updateAvatar}
            currentIdState={this.props.currentIdState}
            title="Fill"
            id="Fill"
          />
        </Fieldset>

        <Fieldset
          title="Share"
          classIcon="fas fa-share-alt"
          btnId="ButtonShare"
          arrowId="arrow-share"
          arrow={this.props.currentIdState ==='Share'? 'up' : 'down'}
          onClickCollapsible={this.props.onClickCollapsible}
        >
          <PanelShare
            btnShare={this.props.btnShare}
            messageError={this.props.messageError}
            success={this.props.success}
            urlCard={this.props.urlCard}
            currentIdState={this.props.currentIdState}
            title="Share"
            id="Share"
          />
        </Fieldset>
      </form>
    );
  }
}

export default MainForm;
