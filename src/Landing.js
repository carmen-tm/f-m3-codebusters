import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
    render(){
        return (
            <div>
                <p>Soy la landing!! </p>
                <Link to = "/card-generator">Empezar</Link>
            </div>
        )
    }
}
export default Landing