import React, {Component} from 'react';
import {Col} from "reactstrap";

import Dashboard from "./../../containers/dashboard_container"
import "./index.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'dashboard'
        };
        this.handleTabChange = this.handleTabChange.bind(this)
    }

    handleTabChange(selectedTab) {
        this.setState({selectedTab})
    }

    render() {
        const {selectedTab} = this.state
        return (
            <Col className="homeContainer">
                <Col className="homeContentContainer">
                    {selectedTab === 'dashboard' &&
                        <Dashboard/>
                    }
                    {selectedTab !== 'dashboard' &&
                        <Col className="d-flex justify-content-center">
                           <h3 className="comingSoonMessage">Coming soon...</h3>
                        </Col>
                    }
                </Col>
                <Col className="homeFooterContainer">
                    <Col className={`${selectedTab === 'dashboard' ? 'active ' : ''}homeFooterTab`} onClick={() => this.handleTabChange('dashboard')}>
                        <i>&#xe900;</i>
                        <h5>Dashboard</h5>
                    </Col>
                    <Col className={`${selectedTab === 'megabot' ? 'active ' : ''}homeFooterTab`} onClick={() => this.handleTabChange('megabot')}>
                        <i>&#xe902;</i>
                        <h5>Megabot</h5>
                    </Col>
                    <Col className={`${selectedTab === 'botMarket' ? 'active ' : ''}homeFooterTab`} onClick={() => this.handleTabChange('botMarket')}>
                        <i>&#xe900;</i>
                        <h5>Bot market</h5>
                    </Col>
                    <Col className={`${selectedTab === 'coinPrices' ? 'active ' : ''}homeFooterTab`} onClick={() => this.handleTabChange('coinPrices')}>
                        <i>&#xe901;</i>
                        <h5>Coin prices</h5>
                    </Col>
                    <Col className={`${selectedTab === 'profile' ? 'active ' : ''}homeFooterTab`} onClick={() => this.handleTabChange('profile')}>
                        <i>&#xe901;</i>
                        <h5>Profile</h5>
                    </Col>
                </Col>
            </Col>
        )
    }
}