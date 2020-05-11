
import React, { Component } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import './index.scss'

export default class StepBox extends Component {
    // nextHandler=()=>{
    //     this.props.nextStep(this.props.num+1)
    // }
    // preHander=()=>{
    //     this.props.nextStep(this.props.num-1)
    // }
    render() {
        return (
            <div className="stepbox">
                <div hidden={this.props.num !== 0}>
                    <StepOne />
                </div>
                <div hidden={this.props.num !== 1}>
                    <StepTwo />
                </div>
                <div hidden={this.props.num !== 2}>
                    <StepThree />
                </div>
            </div>
        )
    }
}

