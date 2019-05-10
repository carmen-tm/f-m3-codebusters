import React from 'react';
import MainPreview from './MainPreview';
import MainForm from './MainForm';

class MainSections extends React.Component{
  render(){
    return(
      <main className="main-sections__container">
        <MainPreview
        name= 'Patricia'
        job= 'Front end developer'
        phone= {697845963}
        email = ''
        linkedin = 'https://www.linkedin.com/in/sarayfernandezgarcia/'
        github = ''
        photo= ''
        miniature=''
        />
        <MainForm/>
      </main>
    )
  }
}

export default MainSections;