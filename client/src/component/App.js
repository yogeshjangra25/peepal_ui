import React, { Component }  from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Guide from './Guide';
import Header from './Header';
import GuideForm from './guide/GuideForm';
import Login from './Login';

class App extends Component {

    componentDidMount() {
        this.props.fetchGuide();
        this.props.login();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/guide" component={Guide} />
                        <Route path="/guide/form/:parent_id" component={GuideForm} />
                    </div>            
                </BrowserRouter>
            </div>        
        );
    }
}



export default connect(null, actions)(App);