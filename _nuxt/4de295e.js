(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{623:function(t,e,n){"use strict";n(22),n(36),n(608),n(76),n(23),n(30),n(50),n(98),n(68),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(617),n(618),n(619),n(620),n(621),n(69),n(127);var r=n(2),o=(n(606),n(1)),c=n(97),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],w=["start","end","center"];function y(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var m=function(t){return[].concat(w,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:m}})),x=function(t){return[].concat(w,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:x}})),h=function(t){return[].concat(w,["space-between","space-around","stretch"]).includes(t)},C=y("alignContent",(function(){return{type:String,default:null,validator:h}})),k={align:Object.keys(j),justify:Object.keys(O),alignContent:Object.keys(C)},_={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=_[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},j),{},{justify:{type:String,default:null,validator:x}},O),{},{alignContent:{type:String,default:null,validator:h}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=P.get(l);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},626:function(t,e,n){var content=n(634);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("4d8f3b20",content,!0,{sourceMap:!1})},633:function(t,e,n){"use strict";n(626)},634:function(t,e,n){var r=n(10)(!1);r.push([t.i,"li{list-style:none}a{text-decoration:none}.vrow-span{display:flex;align-items:center;flex-direction:column;font-size:13px}.vrow-span p{margin:0}.vrow-span span{color:#848d95;vertical-align:bottom}.ans-vote-num{font-size:16px}.view{color:#848d95;font-size:10px}.item-title{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;word-break:break-all;font-size:16px;text-overflow:ellipsis}p.time{margin:auto 0 0 auto}p.item-content{text-align:left;font-size:14px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;min-height:40px;max-height:40px}.q-posted-by{padding:0 60px 0 0!important;display:flex;justify-content:space-between}p.q-posted-by-p{color:#07c}.questioner{width:200px;padding:0 10px}.questioner a,.questioner p{font-size:12px}.questioner p{margin:0;display:inline-block}",""]),t.exports=r},646:function(t,e,n){"use strict";n.r(e);n(30),n(68);var r={props:["question"],methods:{removeLineBreak:function(text){return text.replace(/\n/g,"")},convertDate:function(t){return new Date(1e3*t)}}},o=(n(633),n(78)),c=n(126),l=n.n(c),f=n(734),d=n(623),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("v-row",{staticClass:"mt-3",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"1"}},[n("v-row",{staticClass:"vrow-span"},[n("v-col",[n("v-row",{staticClass:"vrow-span"},[n("p",{staticClass:"count"},[t._v("回答数")]),t._v(" "),n("p",{staticClass:"ans-vote-num"},[t._v(t._s(t.question.answerCount||0))])])],1)],1)],1),t._v(" "),n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"8"}},[n("p",{staticClass:"mb-0"},[n("nuxt-link",{staticClass:"item-title",attrs:{to:{name:"questions-id",params:{id:t.question.id}}}},[t._v(t._s(t.removeLineBreak(t.question.title))+"\n          ")])],1),t._v(" "),n("p",[t._v(t._s(t.$store.getters.getCategoryById(t.question.category).name))])]),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("p",{staticClass:"time"},[t._v(t._s(t.convertDate(t.question._ts).toLocaleString()))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);