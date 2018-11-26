import React, {Component} from 'react';
import {Col} from "reactstrap";
import {ScaleLoader} from 'react-spinners';

import {valueFormat} from "./../../lib/helpers"

export default class Capital extends Component {
    render() {
        const {pending, data} = this.props;

        if (pending || !data) {
            return (
                <Col className="d-flex align-items-center justify-content-center mt-5">
                    <ScaleLoader
                        size={150}
                        color={'#ffffff'}
                        loading={true}
                    />
                </Col>
            )
        }

        const {trading_capital, trading_capital_currency, balance, on_hold} = data

        return (
            <Col className="balanceContainer">
                <div className="balanceRowContainer">
                    <div className="balanceDataSection">
                        <h5>TRADING CAPITAL</h5>
                    </div>
                </div>
                <div className="balanceRowContainer">
                    <div className="d-flex flex-column align-items-center justify-content-end">
                        <div className="balanceDataSection">
                            <h3>{trading_capital} {trading_capital_currency}</h3>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-end">
                        <div className="balanceDataSection d-flex align-items-center justify-content-end">
                            <h5>BALANCE:</h5>
                            <p>{valueFormat(balance)}</p>
                            <img src='/assets/img/balance/h_img.png' alt="h_img"/>
                        </div>
                        <div className="balanceDataSection d-flex align-items-center justify-content-end">
                            <h5>ON HOLD:</h5>
                            <p>{valueFormat(on_hold)}</p>
                            <img src='/assets/img/balance/h_img.png' alt="h_img"/>
                        </div>
                    </div>
                </div>

            </Col>
        )
    }
}