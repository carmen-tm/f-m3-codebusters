import React from 'react';
import MainPage from '../components/MainPage.js';
import '../stylesheets/CardGenerator.scss';
import defaultImage from '../assets/defaultImage';



class CardGenerator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			isAvatarDefault: true,
			profile: {
				name: 'User name',
				job: 'User job',
				phone: '',
				email: '',
				linkedin: '',
				github: '',
				photo: defaultImage,
				miniature: ''
			},
			palette : {
				number: 1,
			},
			twitter: false,
    };
		this.handleInputsOnChange = this.handleInputsOnChange.bind(this);
		this.handleColorChange = this.handleColorChange.bind(this);
		this.updateAvatar = this.updateAvatar.bind(this);
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
 
  updateAvatar(image) {
    const {profile} = this.state;
    this.setState(prevState => {
      const newProfile = {...profile, photo: image};
      return {
        profile: newProfile,
        isAvatarDefault: false
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
			updateAvatar={this.updateAvatar}
			twitter={this.state.twitter}
			/>
    </div>
  );}
}
export default CardGenerator;