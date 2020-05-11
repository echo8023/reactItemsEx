//1.从redux中解构出combineReducers
import { combineReducers } from 'redux'

// 4. 步骤2中分片的reducer，是哪个页面的数据，就写哪个页面的数据就可。
// 我们打造某个页面的。如:数据添加页面的reducer
import shopAddStore from "./shopAddReducer";

//2.创建rootReducer
const rootReducers=combineReducers({
    //分片的reducer(是哪个页面的数据，就写哪个页面的数据就可)
    shopAddStore
})

//3.导出rootReducers
export default rootReducers;