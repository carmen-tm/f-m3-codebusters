import React from "react";
import Fieldset from "./Fieldset";

class MainForm extends React.Component {
  render() {
    return (
      <form action="" method="post">
        <Fieldset title="Design" classIcon="far fa-object-ungroup"/>
        <Fieldset title="Fill"
        classIcon="far fa-keyboard"/>
        <Fieldset title="Share"
        classIcon="fas fa-share-alt"/>
      </form>
    );
  }
}

export default MainForm;