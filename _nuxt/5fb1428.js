(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{607:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(22),e(77),e(99),e(76),e(79),e(54);var r=e(1);function o(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),n(r.tag,data,o)}})}},622:function(t,n,e){"use strict";e(22),e(77),e(76),e(79),e(339),e(606);var r=e(607),o=e(97);n.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,r=n.props,data=n.data,c=n.children,l=data.attrs;return l&&(data.attrs={},e=Object.keys(l).filter((function(t){if("slot"===t)return!1;var n=l[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(e||[])}),c)}})},623:function(t,n,e){"use strict";e(22),e(36),e(608),e(76),e(23),e(30),e(50),e(98),e(68),e(609),e(610),e(611),e(612),e(613),e(614),e(615),e(616),e(617),e(618),e(619),e(620),e(621),e(69),e(127);var r=e(2),o=(e(606),e(1)),c=e(97),l=e(0);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function y(t,n){return h.reduce((function(e,r){return e[t+Object(l.w)(r)]=n(),e}),{})}var m=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},w=y("align",(function(){return{type:String,default:null,validator:m}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=y("justify",(function(){return{type:String,default:null,validator:j}})),k=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},_=y("alignContent",(function(){return{type:String,default:null,validator:k}})),x={align:Object.keys(w),justify:Object.keys(O),alignContent:Object.keys(_)},C={align:"align",justify:"justify",alignContent:"align-content"};function P(t,n,e){var r=C[t];if(null!=e){if(n){var o=n.replace(t,"");r+="-".concat(o)}return(r+="-".concat(e)).toLowerCase()}}var S=new Map;n.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},w),{},{justify:{type:String,default:null,validator:j}},O),{},{alignContent:{type:String,default:null,validator:k}},_),render:function(t,n){var e=n.props,data=n.data,o=n.children,l="";for(var d in e)l+=String(e[d]);var f=S.get(l);return f||function(){var t,n;for(n in f=[],x)x[n].forEach((function(t){var r=e[t],o=P(n,t,r);o&&f.push(o)}));f.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(r.a)(t,"align-".concat(e.align),e.align),Object(r.a)(t,"justify-".concat(e.justify),e.justify),Object(r.a)(t,"align-content-".concat(e.alignContent),e.alignContent),t)),S.set(l,f)}(),t(e.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},670:function(t,n,e){var content=e(723);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("8b656c52",content,!0,{sourceMap:!1})},722:function(t,n,e){"use strict";e(670)},723:function(t,n,e){var r=e(10)(!1);r.push([t.i,".mavonEditor{border:1px solid grey}.markdown-editor{width:100%;height:100%;z-index:inherit!important;background-color:unset!important}.post-text{z-index:2!important}.markdown-body{background-color:unset!important;max-height:300px}.content-input,.content-input-wrapper,.v-note-op,.v-show-content{background:unset!important}.auto-textarea-input,.v-show-content{color:var(--v-normal_font-base)!important}",""]),t.exports=r},749:function(t,n,e){"use strict";e.r(n);e(60);var r=e(4),o={data:function(){return{markdownOption:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0},id:"",content:"",created_at:"",answered_by:"",comments:"",answer_question:"",changeHistory:"",checkcontent:""}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$store.getters.publicAPIConf,r=t.$route.params.id,n.next=4,t.$axios.get("./api/answers/".concat(r),e);case 4:o=n.sent,c=o.data,t.id=c.id,t.content=c.content,t.created_at=c.created_at,t.answered_by=c.answered_by,t.comments=c.comments,t.changeHistory=c.changeHistory,t.answer_question=c.answer_question,t.changeHistory=c.changeHistory,t.checkcontent=c.content;case 15:case"end":return n.stop()}}),n)})))()},methods:{postAnswers:function(){this.checkData();var data={id:this.id,content:this.content,created_at:this.created_at,voters:this.voters,answered_by:this.answered_by,comments:this.comments,changeHistory:this.changeHistory,answer_question:this.answer_question,is_delete:!1},t=this.$store.getters.privateAPIConf;this.$axios.post("http://localhost:7071/api/answers",data,t)},checkData:function(){this.content!==this.checkcontent&&this.changeHistory.push({type:"changeContent",oldValue:this.checkcontent,newValue:this.content})}}},c=(e(722),e(78)),l=e(126),d=e.n(l),f=e(333),h=e(734),v=e(622),y=e(623),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"py-4 px-3",attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h1",{staticClass:"headline"},[t._v("回答を修正する")])]),t._v(" "),e("v-col",{staticClass:"post-text",attrs:{cols:"12"}},[e("div",{staticClass:"mavonEditor"},[e("no-ssr",[e("mavon-editor",{attrs:{toolbars:t.markdownOption,language:"ja"},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1)],1)]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-btn",{attrs:{color:"info"},on:{click:function(n){return t.postAnswers()}}},[t._v("回答を更新する")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:f.a,VCol:h.a,VContainer:v.a,VRow:y.a})}}]);