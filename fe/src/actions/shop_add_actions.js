
// 4.引入request
import requset from '@/utils/requset'

// 7.引入actionType
import {GET_ADDRESS } from './actionType'

const shop_add_actions={
    // 1.写一个方法
    getAddress(val){
        // 2.创建动作，发出动作
        return async dispatch=>{
            //3.发送数据请求，用了封装好的request。所以先在上面引入request。
            // 5.写request请求，然后通过async，await来接受这个结果。最后用result来保存数据请求的这个结果。
            result=await requset({
                url:"/v1/pois", //记得配置反向代理，解决跨域
                params:{
                    type:"search", 
                    city_id:2,
                    keyword:val
                }
            })

            //6. 最后通过dispath发送给我们。注意此处会根据action.type动作类型做出判断，所以要在上面引入actionType。
            dispatch({
                // 7.携带了动作类型，及结果payload
                type:GET_ADDRESS,
                payload:result.data
            })

        }
    }
}

export default shop_add_actions