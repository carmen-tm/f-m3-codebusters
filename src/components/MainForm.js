import React from "react";
import Fieldset from "./Fieldset";

class MainForm extends React.Component {
  render() {
    return (
      <form action="" method="post">
        <Fieldset title="Carmen"/>
        <Fieldset title="Clara"/>
        <Fieldset title="Pat"/>
      </form>
    );
  }
}

export default MainForm;