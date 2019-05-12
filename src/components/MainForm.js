import React from "react";
import Fieldset from "./Fieldset";

class MainForm extends React.Component {
  render() {
    return (
      <form action="" method="post">
        <Fieldset
          title="Design"
          classIcon="far fa-object-ungroup"
          btnId="ButtonDesign"
          arrowId="arrow-design"
          arrow="up"
        />
        <Fieldset
          title="Fill"
          classIcon="far fa-keyboard"
          btnId="ButtonFill"
          arrowId="arrow-fillTheGap"
          arrow="down"
        />
        <Fieldset
          title="Share"
          classIcon="fas fa-share-alt"
          btnId="ButtonShare"
          arrowId="arrow-share"
          arrow="down"
        />
      </form>
    );
  }
}

export default MainForm;