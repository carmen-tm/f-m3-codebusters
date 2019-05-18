import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
//import { userInfo } from 'os';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			profile: {
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '#',
				github: '#',
				photo: '',
				miniature: ''
			},
			palette : {
				number: 1,
			}
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
	}
	
  handleColorChange(event){
		const {value} = event.currentTarget;
		this.setState(prevState => {
			return {
				palette:{
					...prevState.palette,
				 number: value,
				}
			}
		});
	}
 
  handleInputsOnChange(event) {
		const key = event.currentTarget.name;
		const value = event.currentTarget.value;

		//Need to set the state with callback as we want to keep the PrevState all the time (the other inputs info)
		this.setState(prevState => {
			return {
				profile: {
					...prevState.profile,
					[key]: value
				}
			};
		});
	}
  render(){

  return (
    <div className="App">
			<MainPage 
			data={this.state.profile} 
			methodInputText={this.handleInputsOnChange} 
			methodColorChange={this.handleColorChange} 
			checked={this.state.palette.number}
			color={this.state.palette.number}
			/>
    </div>
  );}
}
export default App;