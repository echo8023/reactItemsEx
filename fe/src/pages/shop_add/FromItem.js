// import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";

// 从react-redux中引入connect高阶组件。帮助我们获取store的数据和action里面方法的。利用的原理是合并分发。
import {connect} from 'react-redux'
// connect中第二个参数会用到bindAction。所以在此引入
import {bindActionCreators} from 'redux'
// 引入actions
import actions from '@/actions'

import React, { Component } from 'react'

class FromItem extends Component {
  constructor(props){
    super(props)

   this.state={
     shop_name:"",
     shop_address:""
   }

  }


  changeShopName=e=>{
    this.setState({
      shop_name:e.target.value
    })
  }

  // 在此做数据请求。先引入connect的高阶组件。
  changeShopAddress=e=>{
    this.setState({
      shop_address:e.target.value
    })
  }


  render() {
    const {
      shop_name,
      shop_address
    }=this.state

    return (
        <div className="Form-box">
      <Form>

        <Form.Item label="店铺名称">
          <Input placeholder="请输入店铺名称" value={shop_name} onChange={this.changeShopName}/>
        </Form.Item>

        <Form.Item label="店铺地址">
          <Input placeholder="请输入店铺地址" value={shop_address} onChange={this.changeShopAddress}/>
        </Form.Item>

        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
      
    )
  }
}

export default connect( 

 )(FromItem)


// 需要改为 函数式编程配合hook实用------------未完成

// const FormItem = () => {
  // const {
  //   shop_name,
  //   shop_address
  // }=this.state

  // const [form] = Form.useForm();
  // console.log("form",form) //不停的打印好多，听不下来？？？？？？


  // console.log(useState(0)) //该方法里面传一个参数0, 打印结果一个数组。
  // const [状态,更改状态的方法]=useState(0) //用的时候，将数组里的两个东西解构出来
  // console.log(count)

  // const [value,changeShopAddress]=useState(0)


  // changeShopAddress=e=>{
  //   this.setState({
  //     shop_address:e.target.value
  //   })
  // }

  // return (
  //   <div className="Form-box">
  //     <Form>

  //       <Form.Item label="店铺名称">
  //         <Input placeholder="请输入店铺名称" value={shop_name} onChange={this.changeShopName}/>
  //       </Form.Item>

  //       <Form.Item label="店铺地址">
  //         <Input placeholder="请输入店铺地址" value={shop_address} onChange={this.changeShopAddress}/>
  //       </Form.Item>

  //       <Form.Item>
  //         <Button type="primary">Submit</Button>
  //       </Form.Item>
  //     </Form>
  //   </div>
  // );
// };

// export default FormItem;
