import React from "react";
import { Steps, Button } from "antd";
import StepBox from "./StepBox";

const { Step } = Steps;

export default class StepComp extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    };
  }

  onChange = (current) => {
    this.setState({ current });
  };

  nextHandler=()=>{
    this.onChange(this.state.current+1)
}
  preHandler=()=>{
    this.onChange(this.state.current-1)
  }

  render() {
    const { current } = this.state;

    return (
      <div>
        <Steps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </Steps>

        <StepBox num={current} nextStep={this.onChange}/>

        <Button hidden={this.state.current === 0} onClick={this.preHandler}>上一步</Button>
        <Button hidden={this.state.current === 2} onClick={this.nextHandler}>下一步</Button>

      </div>
    );
  }
}
