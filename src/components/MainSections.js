import React from 'react';
import MainPreview from './MainPreview';
import MainForm from './MainForm';

class MainSections extends React.Component{
  render(){
    return(
      <main className="main-sections__container">
        <MainPreview/>
        <MainForm/>
      </main>
    )
  }
}

export default MainSections;