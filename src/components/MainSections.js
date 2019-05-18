import React from 'react';
import MainPreview from './MainPreview';
import MainForm from './MainForm';
//import { tsImportEqualsDeclaration } from '@babel/types';

class MainSections extends React.Component{
  render(){
    return(
      <main className="main-sections__container">
        <MainPreview 
         data={this.props.data}
         color={this.props.color}
        />
        <MainForm  
        methodInputText={this.props.methodInputText} 
        methodColorChange={this.props.methodColorChange}
        checked={this.props.checked}
        />
<<<<<<< HEAD
=======
        <MainForm  methodInputText={this.props.methodInputText} updateAvatar={this.props.updateAvatar}/>
>>>>>>> 4e06274622a01b1f3146de3776bc7c33e9d0f86e
      </main>
    )
  }
}

export default MainSections;