(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{607:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(22),n(77),n(99),n(76),n(79),n(54);var r=n(1);function o(t){return r.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var r=n.props,data=n.data,o=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),e(r.tag,data,o)}})}},622:function(t,e,n){"use strict";n(22),n(77),n(76),n(79),n(339),n(606);var r=n(607),o=n(97);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),c)}})},623:function(t,e,n){"use strict";n(22),n(36),n(608),n(76),n(23),n(30),n(50),n(98),n(68),n(609),n(610),n(611),n(612),n(613),n(614),n(615),n(616),n(617),n(618),n(619),n(620),n(621),n(69),n(127);var r=n(2),o=(n(606),n(1)),c=n(97),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var x=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:x}})),C=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:C}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:w}})),O={align:Object.keys(y),justify:Object.keys(_),alignContent:Object.keys(j)},P={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=P[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x}},y),{},{justify:{type:String,default:null,validator:C}},_),{},{alignContent:{type:String,default:null,validator:w}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=k.get(l);return f||function(){var t,e;for(e in f=[],O)O[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),k.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},664:function(t,e,n){var content=n(705);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("78aa80a2",content,!0,{sourceMap:!1})},704:function(t,e,n){"use strict";n(664)},705:function(t,e,n){var r=n(10)(!1);r.push([t.i,".input-coin{padding:10px 15px;font-size:16px;border-radius:3px;border:2px solid #ddd;max-width:100%}.input-coin:focus{box-shadow:0 0 5px 0 #f90;border:2px solid #fff!important;outline:0}#payment-section{display:none}.payment-button{height:36px;padding:0 16px;align-items:center;border-radius:4px;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;will-change:box-shadow;font-size:.875rem;background-color:rgb(33 150 243);box-shadow:0 3px 1px -2px rgb(0 0 0/20%),0 2px 2px 0 rgb(0 0 0/14%),0 1px 5px 0 rgb(0 0 0/12%);display:flex;flex:1 0 auto;min-width:100%!important;overflow:visible;color:#fff}button:hover{opacity:.8}.back_wall{height:calc(100vh - 300px);max-height:calc(100vh - 300px);min-height:calc(100vh - 300px)}.btn_group{border-top:1px solid #e6e6e6}#card-element{padding:10px;background-color:#fff;border-radius:5px}",""]),t.exports=r},744:function(t,e,n){"use strict";n.r(e);n(60);var r=n(4),o=2e4,c={data:function(){return{coinMax:o,stepNumber:1,coin:null,coinCaptured:null,message1:"",errorMessage:"",last4:""}},methods:{CoinPurchaseCheckHandler:function(){null===this.coin||this.coin<50||this.coin>o?this.message1="コインを正しく入力してください。（50 <= Coin <= ".concat(o,"）"):(this.message1="",this.stepNumber++,this.GetCreditcardLast4())},CoinPurchaseConfirmHandler:function(){this.stepNumber++,this.PurchaseCoin()},CoinHandlePrev1:function(){this.stepNumber--},SetCoinCaptured:function(t){this.coinCaptured=t},SetErrorMessage:function(t){this.errorMessage=t},SetLast4:function(t){this.last4=t},GetCreditcardLast4:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.SetLast4,e.next=3,t.$axios.$post("http://localhost:3000/api/get-creditcar-last4").then((function(t){"succeeded"===t.status?n(t.card.last4):"error"===t.status&&console.error("Error:",t)})).catch((function(t){console.error("Error:",t)}));case 3:case"end":return e.stop()}}),e)})))()},PurchaseCoin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.SetCoinCaptured,data={coin:t.coin},e.next=4,t.$axios.$post("http://localhost:3000/api/purchase-coin",data).then((function(t){"succeeded"===t.status?n(t.amount):"error"===t.status&&console.error("Error:",t)})).catch((function(t){console.error("Error:",t)}));case 4:case"end":return e.stop()}}),e)})))()}}},l=(n(704),n(78)),d=n(126),f=n.n(d),v=n(333),h=n(588),m=n(734),x=n(622),y=n(623),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"normal_font--text",attrs:{fluid:"","fill-height":""}},[n("v-row",[n("v-col",[n("h1",[t._v("コインの購入")])])],1),t._v(" "),n("v-row",{staticClass:"mt-5 back_wall tertiary",attrs:{justify:"center"}},[1===t.stepNumber?n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("section",[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12"}},[n("v-card",{staticClass:"pa-5 normal_font--text",attrs:{elevation:"12",outlined:"",tile:"","min-height":"40vh"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"mb-6"},[t._v("\n                  購入するコインを入力してください。（1 Coin = 1円）\n                ")])]),t._v(" "),n("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"5","align-self":"center"}},[n("label",{},[t._v("コイン数")])]),t._v(" "),n("v-col",{attrs:{cols:"5"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.coin,expression:"coin"}],staticClass:"input-coin normal_font--text",attrs:{type:"number",min:"50",max:"20000",placeholder:"0"},domProps:{value:t.coin},on:{input:function(e){e.target.composing||(t.coin=e.target.value)}}})]),t._v(" "),n("v-col",{staticClass:"btn_group mt-10",staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[n("p",[t._v(t._s(t.message1))]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.CoinPurchaseCheckHandler}},[t._v("\n                  確認する\n                ")])],1)],1)],1)],1)],1)]):t._e(),t._v(" "),2===t.stepNumber?n("v-col",{staticClass:"pa-0"},[n("section",[n("v-col",{staticClass:"mx-auto",attrs:{cols:"12"}},[n("v-card",{staticClass:"pa-5 normal_font--text",attrs:{elevation:"12",outlined:"",tile:"","min-height":"40vh"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"mb-6"},[t._v("購入するコインを確認してください。")]),t._v(" "),n("p",[t._v("クレジットカードの下4桁： "+t._s(t.last4))])]),t._v(" "),n("v-col",{staticClass:"mx-auto",attrs:{cols:"12",md:"4","align-self":"center"}},[n("label",[t._v("コイン数")]),t._v(" "),n("span",{staticClass:"display-1"},[t._v(t._s(t.coin)+" / ¥"+t._s(t.coin))])]),t._v(" "),n("v-col",{staticClass:"btn_group mt-10",staticStyle:{"text-align":"center"},attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.CoinHandlePrev1}},[t._v(" 戻る ")]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.CoinPurchaseConfirmHandler}},[t._v("\n                  購入する\n                ")])],1)],1)],1)],1)],1)]):t._e(),t._v(" "),3===t.stepNumber?n("v-col",{staticClass:"indigo lighten-5 grey--text text--darken-1 pa-0"},[n("section",[n("h2",[t._v("コインを購入しました。")]),t._v(" "),n("div",[n("label",[t._v("Coin：")]),t._v(" "),n("p",[t._v(t._s(t.coinCaptured))])])])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VCard:h.a,VCol:m.a,VContainer:x.a,VRow:y.a})}}]);