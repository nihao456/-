(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221fb8"],{cd56:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"main"},[e("router-view"),e("van-tabbar",{attrs:{"active-color":"#3B2212"},model:{value:a.tabbarName,callback:function(t){a.tabbarName=t},expression:"tabbarName"}},a._l(a.tabbarData,(function(t,n){return e("van-tabbar-item",{key:n,attrs:{name:t.name,icon:t.icon},nativeOn:{click:function(e){return a.goPage(t)}}},[a._v(a._s(t.text))])})),1)],1)},r=[],o={name:"Main",data:function(){return{tabbarName:"brand"}},computed:{tabbarData:function(){return this.$store.state.mainModule.tabbarData}},methods:{goPage:function(a){this.$router.push({name:a.routeName})}}},i=o,b=e("2877"),c=Object(b["a"])(i,n,r,!1,null,"0bd775bd",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d221fb8.e62387c2.js.map