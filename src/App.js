import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import CardGenerator from './containers/CardGenerator'
import Landing from './containers/Landing'

class App extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path = "/" component= {Landing}/>
                    <Route path = "/card-generator" component= {CardGenerator}/>
                </Switch>
            </div>
        )
    }
}

export default App;