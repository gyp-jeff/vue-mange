"use strict";(self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[]).push([[761],{4761:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login"},[n("div",{staticClass:"loginWindow"},[n("h3",{staticClass:"login_title"},[e._v("后台管理系统登录")]),n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名","label-width":"80px",rules:[{required:!0,message:"年龄不能为空",trigger:"blur"}]}},[n("el-input",{attrs:{placeholder:"请输入用户名",size:"small"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("el-form-item",{attrs:{label:"密码","label-width":"80px",rules:[{required:!0,message:"密码不能为空",trigger:"blur"}]}},[n("el-input",{attrs:{placeholder:"请输入密码","show-password":"",size:"small"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("el-form-item",{staticClass:"submit",attrs:{"label-width":"80px"}},[n("el-button",{attrs:{type:"primary",size:"mimi"}},[e._v("清空")]),n("el-button",{attrs:{type:"primary",size:"mimi"},on:{click:e.loginUser}},[e._v("登录用户")])],1)],1)],1)])},u=[],a=n(785),o={name:"login",data:function(){return{form:{username:"",password:""},username:"",password:"",loading:!1}},methods:{loginUser:function(e){var t=this;this.loading=!0;var n={username:this.username,password:this.password};(0,a.qn)(n).then((function(e){200==e.status&&(""==e.data?(t.loading=!1,t.$message({type:"warning",message:"请输入正确的用户名和密码",center:!0})):(localStorage.setItem("token",e.data),t.$router.push({name:"home"})))}))}}},s=o,i=n(1001),l=(0,i.Z)(s,r,u,!1,null,"65866896",null),c=l.exports},785:function(e,t,n){n.d(t,{ti:function(){return p},ov:function(){return h},nP:function(){return l},qn:function(){return v},kR:function(){return i},yZ:function(){return s},bG:function(){return m},HF:function(){return c},jR:function(){return d},lQ:function(){return f},fw:function(){return g}});n(1539);var r=n(6166),u=n.n(r),a=u().create({baseURL:"http://localhost:3000",timeout:5e3});a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var o=a,s=function(){return o.get("/phone")},i=function(){return o.get("/order")},l=function(){return o.get("/chart")},c=function(){return o.get("/userPage")},m=function(e){return o({url:"/getuserinfo",method:"GET",params:{page:e}})},d=function(e){return console.log(e),o({url:"/senduserpage",method:"POST",data:e})},f=function(e){return console.log(e),o({url:"/sendalluser",method:"PUT",data:e})},p=function(e){return o({url:"/deluser",method:"DELETE",data:e})},g=function(e){return console.log(e),o({url:"/getinputvalue",method:"GET",params:{val:e}})},h=function(e){return console.log(e),o({url:"/getAllInputValue",method:"GET",params:{page:e}})},v=function(e){return o({url:"/loginuser",method:"GET",params:e})}}}]);
//# sourceMappingURL=761-legacy.d36d15b8.js.map