import React, {Component} from 'react';
import { Col } from "reactstrap";

import "./indexs.css"

export default class TimeRange extends Component {
    constructor(props) {
        super(props);
        this.handleBtnChange = this.handleBtnChange.bind(this);
    }

    handleBtnChange(selectedBtn) {
        this.props.onChange(selectedBtn)
    }

    render() {
        const {selectedPeriod} = this.props;
        return (
            <Col className='timeRangeContainer'>
                <div className="d-flex flex-column align-items-center justify-content-end">
                    <p>Time Range:</p>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-end">
                    <button className={`${selectedPeriod === '24h' ? 'active ' : ''}timeRangeBtn`} onClick={() => this.handleBtnChange('24h')}>24h</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-end">
                    <button className={`${selectedPeriod === '7d' ? 'active ' : ''}timeRangeBtn`} onClick={() => this.handleBtnChange('7d')}>7days</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-end">
                    <button className={`${selectedPeriod === '30d' ? 'active ' : ''}timeRangeBtn`} onClick={() => this.handleBtnChange('30d')}>30days</button>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-end">
                    <button className={`${selectedPeriod === 'all_time' ? 'active ' : ''}timeRangeBtn`} onClick={() => this.handleBtnChange('all_time')}>All time</button>
                </div>
            </Col>
        )
    }
}