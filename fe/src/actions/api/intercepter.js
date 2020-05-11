// 登录拦截

import axios from 'axios'

// 使用封装好的TOKEN
import {getCookie} from "@/utils/cookie"
const TOKEN=getCookie('TOKEN')


// Add a request interceptor添加请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent在发送请求前做点什么
    if(!TOKEN){
        window.location.href="http//localhost:3000/login"
    }else{
        window.location.href="http//localhost:3000/home"
    }
    return config;
  }, function (error) {
    // Do something with request error对请求错误做点什么
    return Promise.reject(error);
  });

// Add a response interceptor添加响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data对响应数据做点什么
    return response;
  }, function (error) {
    // Do something with response error对响应错误做点什么
    return Promise.reject(error);
  });