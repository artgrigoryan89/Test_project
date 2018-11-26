import React, {Component} from 'react';
import {Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home/index';

export default class App extends Component {
    render() {

        /**
         *
         * @App component
         * There should be routing logic to define which page should be shown, but now, lets assume that after sign in the user was redirected to the Home page
         */
        return (
            <Col className='appContainer px-0' xl={{size: 6, offset: 3}} lg={{size: 6, offset: 3}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                <Home/>
            </Col>
        )
    }
}