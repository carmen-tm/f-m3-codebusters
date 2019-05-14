import React from 'react';

class PopUp extends React.Component {
    constructor(props){
        super(props)
        this.handlerAlertReset=this.handlerAlertReset.bind(this);
    }
    handlerAlertReset(){

    }
    render() {
        return (
            <div className={this.props.classAlert}>
                <p>Do you want to delete your data?</p>
                <button type="button" onClick="" className="btn btn-resetY">Yes</button>
                <button type="button" onClick="" className="btn btn-resetN">No</button>
            </div>
        )
    }
}

export default PopUp;