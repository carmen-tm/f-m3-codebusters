import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import { userInfo } from 'os';

class App extends React.Component {
  render(){
  let {
    palette , 
    name ,
    job,
    phone,
    email,
    linkedin,
    github,
    photo,
    miniature,
    }= this.props;
  return (
    <div className="App">
      <MainPage />
    </div>
  );}
}
export default App;