import React from 'react';


class Legend extends React.Component {
    constructor(props){
        super(props);
        this.createIconClass=this.createIconClass.bind(this);
        this.createArrowClass=this.createArrowClass.bind(this);
    }
    
    createIconClass(){
        let classIcon = 'icon icon--fieldset ';
        classIcon += this.props.classIcon
        return classIcon
    }
   
    createArrowClass(){
        let arrowClass = 'arrow fas fa-chevron-';
        arrowClass += this.props.arrow
        return arrowClass
    }
    render() {
        return (
            <section className="fieldset__title__container">
                <div className="icon-legend__container">
                    <i className={this.createIconClass()}></i>
                    <legend className="fieldset__title">{this.props.title}</legend>
                </div>
                <button type="button" className="btn--collapsable" id={this.props.btnId}>
                    <i id={this.props.arrowId} className={this.createArrowClass()}></i>
                </button >
            </section >
        )
    }
}

export default Legend;