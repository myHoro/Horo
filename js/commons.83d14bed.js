(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){},2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(11);n.default.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",n.default.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded",n.default.defaults.withCredentials=!1,n.default.defaults.baseURL="../assets/data/",n.default.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),n.default.interceptors.response.use(function(e){if(console.log(e),200==e.status){if(0==e.data.code||200==e.data.code)return e.data.data||e.data.newslist;alert(e.data.msg||"数据请求失败")}},function(e){return Promise.reject(e)}),t.default=n.default},29:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=new URL(window.location.href);t.default=function(e){return n.searchParams.get(e)}}}]);