import React from "react";
import MainPreview from "./MainPreview";
import MainForm from "./MainForm";


class MainSections extends React.Component {
	render() {
		return (
			<main className='main-sections__container'>
				<MainPreview
          defaultProfile = {this.props.defaultProfile}
					data={this.props.data}
					circles={this.props.circles}
					color={this.props.color}
				/>
				<MainForm
					methodInputText={this.props.methodInputText}
					methodColorChange={this.props.methodColorChange}
					checked={this.props.checked}
					updateAvatar={this.props.updateAvatar}
				/>
			</main>
		);
	}
}

export default MainSections;
