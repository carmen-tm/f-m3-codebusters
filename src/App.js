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
  constructor(props){
    super(props)
    this.state = {
			userInfo: {
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				photo: '',
				miniature: ''
			},
			
			//Fake value, to see if the setState keeps the Object at all levels right
			test: true
    };
    this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
  }

  handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;

		//Need to set the state with callback as we want to keep the PrevState all the time (the other inputs info)
		this.setState(prevState => {
			return {
				userInfo: {
					...prevState.userInfo,
					[key]: value
				}
			};
		});
	}
  render(){

  return (
    <div className="App">
      <MainPage data={infoUser} methodInputText={this.handleInputsOnChange}/>
    </div>
  );}
}
export default App;