import React, {Component} from 'react';
import {Col} from "reactstrap";
import {ScaleLoader} from 'react-spinners';

export default class Chart extends Component {
    render() {
        const {pending, data} = this.props

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

        const {growth} = data
        return (
            <Col className="chartContainer">
                    {/*There should be some lib to render the chart depends on the data received via props*/}
                <img src="/assets/img/chart.png" alt="chart" className="w-100"/>
                <p>{growth}</p>
            </Col>
        )
    }
}