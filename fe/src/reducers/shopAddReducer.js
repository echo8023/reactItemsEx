// action.type放在actions/api文件夹下面的。专门管理动作的文件：actionType.js文件中
import {GET_ADDRESS } from '@/actions/actionType'

// 1.初始化的数据
const initState={
    address:""
}

// 2.打造reducers-----shopAddReducers
const shopAddStore=(state=initState,action)=>{

    const newState=JSON.parse(JSON.stringify(state)) //深克隆拷贝state,返回新的state。

    switch(action.type){
        case GET_ADDRESS:
            newState.address=action.payload
            break;
        default:
            break
    }

    return newState
}

export default shopAddStore