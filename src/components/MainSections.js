import React from 'react';
import MainPreview from './MainPreview';
import MainForm from './MainForm';
import { tsImportEqualsDeclaration } from '@babel/types';

class MainSections extends React.Component{
  render(){
    return(
      <main className="main-sections__container">
        <MainPreview data={this.props.data}
        />
        <MainForm/>
      </main>
    )
  }
}

export default MainSections;