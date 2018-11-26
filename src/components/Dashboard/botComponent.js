import React, {Component} from 'react';

import "./indexs.css"

export default class Bot extends Component {
    render() {
        const {data, selectedPeriod} = this.props
        const {image, nickname, disabled} = data
        const percent = data[selectedPeriod]
        return (
            <div className='botContainer'>
                <img src={image} alt="menu"/>
                <h2>{nickname}</h2>
                {!disabled &&
                <p>{percent}%</p>
                }
            </div>
        )
    }
}