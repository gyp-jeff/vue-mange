(self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[]).push([[836],{7836:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("el-container",{staticStyle:{height:"100vh"}},[n("el-aside",{attrs:{width:"auto"}},[n("common-aside")],1),n("el-container",[n("el-header",[n("common-header")],1),n("el-main",[n("tag-common"),n("keep-alive",[n("router-view")],1)],1)],1)],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":this.currentBreadCrumb.name,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse}},[n("h3",[e._v(e._s(e.isCollapse?"管理":"后台管理系统"))]),e._l(e.noChildren,(function(t){return n("el-menu-item",{key:t.path,attrs:{index:t.name+""},on:{click:function(n){return e.clickMenu(t)}}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),e._l(e.hasChildren,(function(t){return n("el-submenu",{key:t.path,attrs:{index:t.name+""}},[n("template",{slot:"title"},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._l(t.children,(function(t){return n("el-menu-item-group",{key:t.path},[n("el-menu-item",{attrs:{index:t.name+""},on:{click:function(n){return e.clickMenu(t)}}},[e._v(e._s(t.label))])],1)}))],2)}))],2)},l=[];n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(8309);var s=n(4665),m={data:function(){return{menu:[{path:"/",name:"home",label:"首页",icon:"s-home",url:"Home/Home"},{path:"/goods",name:"goods",label:"商品管理",icon:"video-play",url:"MallManage/MallManage"},{path:"/user",name:"user",label:"用户管理",icon:"user",url:"UserManage/UserManage"},{label:"其他",icon:"location",children:[{path:"/page1",name:"page1",label:"页面1",icon:"setting",url:"Other/Page1"},{path:"/page2",name:"page2",label:"页面2",icon:"setting",url:"Other/Page2"}]}]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},clickMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("tab/selectBreadCrumb",e)}},computed:u(u({},(0,s.rn)("tab",["currentBreadCrumb"])),{},{noChildren:function(){return this.menu.filter((function(e){return!e.children}))},hasChildren:function(){return this.menu.filter((function(e){return e.children}))},isCollapse:function(){return this.$store.state.tab.isCollapse}})},A=m,d=n(1001),h=(0,d.Z)(A,a,l,!1,null,null,null),b=h.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"commonHeader"},[n("div",{staticClass:"l-content"},[n("el-button",{attrs:{plain:"",icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),n("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadCrumb,(function(t){return n("el-breadcrumb-item",{key:t.path+"",attrs:{to:{name:t.name}}},[e._v(e._s(t.label))])})),1)],1),n("div",{staticClass:"r-content"},[n("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"user",attrs:{src:e.userImg}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("个人中心")]),n("el-dropdown-item",[e._v("退出")])],1)],1)],1)])},g=[],C={name:"commonHeader",data:function(){return{userImg:n(7319)}},computed:u({},(0,s.rn)("tab",["breadCrumb","currentBreadCrumb"])),methods:{handleMenu:function(){this.$store.commit("tab/collapseMenu")}},watch:{"$route.name":{handler:function(e){this.$store.commit("tab/shiftTag",{name:e})},deep:!0,immediate:!0}}},f=C,Q=(0,d.Z)(f,p,g,!1,null,"8d21868a",null),K=Q.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag"},[e._t("tag",(function(){return e._l(e.breadCrumb,(function(t){return n("el-tag",{key:t.path+"",attrs:{closable:"home"!=t.name,type:""},on:{click:function(n){return e.shiftWeb(t)},close:function(n){return e.removeTag(t)}}},[e._v(" "+e._s(t.label)+" ")])}))}))],2)},O=[],k={data:function(){return{}},computed:u({},(0,s.rn)("tab",["breadCrumb"])),methods:u(u({},(0,s.OI)("tab",["removeTag"])),{},{shiftWeb:function(e){this.$router.push({name:e.name})},removeTag:function(e){var t,n=this.breadCrumb.length-1;this.breadCrumb.forEach((function(n,r){n.name==e.name&&(t=r)})),this.$store.commit("tab/removeTag",e),console.log(t),t==n?this.$router.push({name:this.breadCrumb[t-1].name}):this.$router.push({name:this.breadCrumb[t].name})}})},B=k,j=(0,d.Z)(B,P,O,!1,null,"cdc46680",null),E=j.exports,U={name:"mainPart",components:{CommonAside:b,CommonHeader:K,tagCommon:E}},v=U,S=(0,d.Z)(v,r,o,!1,null,"55e20fa5",null),q=S.exports},9337:function(e,t,n){var r=n(2109),o=n(9781),a=n(3887),l=n(5656),i=n(1236),c=n(6135);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=l(e),o=i.f,u=a(r),s={},m=0;while(u.length>m)n=o(r,t=u[m++]),void 0!==n&&c(s,t,n);return s}})},7319:function(e){"use strict";e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=836-legacy.f85232cc.js.map