import React, {Component} from 'react';
import {Col} from "reactstrap";

export default class TitleBar extends Component {
    render() {
        return (
            <Col className="headerContainer">
                <button><img src='/assets/img/menuIcon.png' alt="menu" /></button>
                <h2>Dashboard</h2>
                <button><img src='/assets/img/refreshIcon.png' alt="reload" /></button>
            </Col>
        )
    }
}