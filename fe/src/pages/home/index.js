import React, { Component } from 'react'
import "./index.scss"
import StepComp from './step'

export default class Home extends Component {
    render() {
        return (
            <div className="container home-box">
                {/* 一级路由组件StepComp */}
                <StepComp {...this.props}/>
                {/* 写步骤条tepComp组件的二级路由，先引入Route从react-router-dom中 */}
                {/* <Route path="/home/step1" component={ StepOne } />
                <Route path="/home/step2" component={ StepTwo } />
                <Route path="/home/step3" component={ StepThree } /> */}
            </div>
        )
    }
}
