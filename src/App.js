import React from 'react';

import MainForm from './components/main-form';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
import { userInfo } from 'os';


let userInfo = {
  'palette': '', 
  'name': '',
  'job': '',
  'phone': '',
  'email': '',
  'linkedin': '',
  'github': '',
  'photo': '',
  'miniature': '',
};


function App() {

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}
export default App;