import React, {Component} from 'react';
import {Col} from "reactstrap";

import "./indexs.css"

import Header from "./header";

import Balance from "./balance";
import Chart from "./chart";
import Bots from "./botsComponent";




export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false
        };
    }

    componentWillMount() {
        this.props.getData();
        this.props.getSelectedPeriod();
    }

    render() {
        const {data} = this.props
        return (
            <Col className='dashboardContainer'>
                <Header/>
                <Balance data={data}/>
                <Chart data={data}/>
                <Bots data={this.props}/>
            </Col>
        )
    }
}