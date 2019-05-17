import React from 'react';
import MainPage from './components/MainPage.js';
import './stylesheets/App.scss';
//import { userInfo } from 'os';


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
			palette : {
				number: 1,
				color: 'green-palette, borderLeftGreen'	
			}
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.changeClassColor = this.changeClassColor.bind(this);
	}
	changeClassColor(){
		let classCard = 'card-user card__container '
		if(this.state.palette.number ===1){classCard += 'green-palette borderLeftGreen'
	 } else if(this.state.palette.number ===2){classCard += 'red-palette borderLeftRed'
	 } else if(this.state.palette.number ===3){classCard += 'gray-palette borderLeftGray'}
	}

  handleColorChange(event){
		const {value} = event.currentTarget;
		this.setState(prevState => {
			return {
				palette: {
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
			<MainPage 
			data={this.state.userInfo} 
			methodInputText={this.handleInputsOnChange} 
			methodColorChange={this.handleColorChange} 
			checked={this.state.palette.number}
			/>
    </div>
  );}
}
export default App;