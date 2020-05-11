// 创建路由组件
import React from 'react'

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

// 引入组件
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import ShopList from '@/pages/shop_list'
import ShopAdd from '@/pages/shop_add'
import Chart from '@/pages/chart'
import Edit from '@/pages/edit'
import Setting from '@/pages/setting'
import Explain from '@/pages/explain'
import NotFound from '@/pages/not_found/index'


//侧边栏各栏目，通过数据渲染出来。定义一个数组。数据进来了之后，只要渲染这个数据就可以了。
const navs=[
    {
        id:1,
        path:"/home",
        component:Home
    },
    {
        id:2,
        path:"/login",
        component:Login
    },
    {
        id:3,
        path:"/register",
        component:Register
    },
    {
        id:4,
        path:"/shop_list",
        component:ShopList
    },
    {
        id:5,
        path:"/shop_add",
        component:ShopAdd
    },
    {
        id:6,
        path:"/chart",
        component:Chart
    },
    {
        id:7,
        path:"/edit",
        component:Edit
    },
    {
        id:8,
        path:"/setting",
        component:Setting
    },
    {
        id:9,
        path:"/explain",
        component:Explain
    },
    {
        id:10,
        path:"",
        component:NotFound
    }
]

const RouterComp=props=><Switch>
{/* 这里面写很多route页面 */}
    {/* 重定向 */}
    <Redirect to="/home" from="/" exact/>
    {/* 渲染 */}
    {
        navs.map(item=>
            <Route key={item.id} path={item.path} component={item.component} />
        )
    }
</Switch>

export default RouterComp