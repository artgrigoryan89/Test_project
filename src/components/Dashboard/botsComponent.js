import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {ScaleLoader} from 'react-spinners';

import TimeRange from "./timeRange";
import Bot from './botComponent';
import "./indexs.css";

export default class Bots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPeriod: ''
        };
        this.selectedPeriodChange = this.selectedPeriodChange.bind(this);
    };

    componentWillReciveProps(props) {
        this.setState({selectedPeriod: props.data.selectedPeriod});
    }

    selectedPeriodChange(period) {
        this.setState({selectedPeriod: period});
        this.props.data.setSelectedPeriod(period);
    }

    renderBotCard(data) {
        const {data: {selectedPeriod}} = this.props
        return (
            <div className=" botsContainerRow d-flex flex-row align-items-center justify-content-end">
                {
                    data.map((bot) =>
                        (
                            <Bot key={bot.name} data={bot} selectedPeriod={selectedPeriod}/>)
                    )
                }
            </div>
        )
    }

    render() {
        const {data} = this.props.data;
        if (!data || !data.bots) {
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
        ;
        const bots = data.bots.concat();
        return (
            <Col className='botsContainer'>
                <img className='leftLine' src='/assets/img/lines/line1.png' alt='line'/>
                <img className='leftDownLine' src='/assets/img/lines/line2.png' alt='line'/>
                <img className='rightLine' src='/assets/img/lines/line3.png' alt='line'/>
                <img className='rightDownLine' src='/assets/img/lines/line4.png' alt='line'/>
                <div className='botsContainerColumn d-flex flex-column align-items-center justify-content-end'>
                    {this.renderBotCard(bots.splice(0, 3))}
                </div>
                <div className='botsContainerColumn d-flex flex-column align-items-center justify-content-end'>
                    {this.renderBotCard(bots.splice(0, 3))}
                </div>
                <TimeRange onChange={this.selectedPeriodChange} selectedPeriod={this.props.data.selectedPeriod}/>
            </Col>
        )
    }
}
