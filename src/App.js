import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import { userInfo } from 'os';

const infoUser ={
  name: 'Patricia',
  job: 'Front end developer',
  phone: 697845963,
  email:'',
  linkedin: 'https://www.linkedin.com/in/sarayfernandezgarcia/',
  github: '',
  photo:'',
  miniature:'',
}
 
class App extends React.Component {
  render(){

  return (
    <div className="App">
      <MainPage data={infoUser}/>
    </div>
  );}
}
export default App;