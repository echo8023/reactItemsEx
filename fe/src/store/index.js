import { createStore,applyMiddleware } from 'redux'

// thunk实现数据请求的。redux-thunk是一个中间件。注意，要调用中间件，还需要从redux中引入applyMiddleware。
import thunk from "redux-thunk"

import {composeWithDevTools} from 'redux-devtools-extension'

// 最后将打造好的rootRreducer导入进来
import rootRreducer from '@/reducers'

// 创建store。通过createStore来创建
const store=createStore(rootRreducer,composeWithDevTools(applyMiddleware(thunk)))

//导出store
export default store;