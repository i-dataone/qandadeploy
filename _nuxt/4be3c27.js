(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{611:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(23),r(78),r(100),r(77),r(80),r(55);var n=r(1);function o(t){return n.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},626:function(t,e,r){"use strict";r(23),r(78),r(77),r(80),r(343),r(610);var n=r(611),o=r(98);e.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},627:function(t,e,r){"use strict";r(23),r(33),r(612),r(77),r(20),r(31),r(48),r(99),r(69),r(613),r(614),r(615),r(616),r(617),r(618),r(619),r(620),r(621),r(622),r(623),r(624),r(625),r(70),r(128);var n=r(2),o=(r(610),r(1)),c=r(98),l=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=["start","end","center"];function h(t,e){return m.reduce((function(r,n){return r[t+Object(l.w)(n)]=e(),r}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},x=h("align",(function(){return{type:String,default:null,validator:y}})),w=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},j=h("justify",(function(){return{type:String,default:null,validator:w}})),C=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},O=h("alignContent",(function(){return{type:String,default:null,validator:C}})),_={align:Object.keys(x),justify:Object.keys(j),alignContent:Object.keys(O)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,r){var n=S[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var E=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:w}},j),{},{alignContent:{type:String,default:null,validator:C}},O),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=E.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var n=r[t],o=k(e,t,n);o&&f.push(o)}));f.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),E.set(l,f)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},669:function(t,e,r){var content=r(711);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7906e7cc",content,!0,{sourceMap:!1})},710:function(t,e,r){"use strict";r(669)},711:function(t,e,r){var n=r(10)(!1);n.push([t.i,".input-coin{padding:10px 15px;font-size:16px;border-radius:3px;border:2px solid #ddd;max-width:100%}.input-coin:focus{box-shadow:0 0 5px 0 #f90;border:2px solid #fff!important;outline:0}.create-customer-button{height:36px;padding:0 16px;align-items:center;border-radius:4px;font-weight:500;letter-spacing:.0892857143em;justify-content:center;outline:0;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;will-change:box-shadow;font-size:.875rem;background-color:rgb(33 150 243);box-shadow:0 3px 1px -2px rgb(0 0 0/20%),0 2px 2px 0 rgb(0 0 0/14%),0 1px 5px 0 rgb(0 0 0/12%);display:flex;flex:1 0 auto;min-width:100%!important;overflow:visible;color:#fff}button:hover{opacity:.8}.back_wall{height:calc(100vh - 300px);max-height:calc(100vh - 300px);min-height:calc(100vh - 300px)}.btn_group{border-top:1px solid #e6e6e6}#card-element-customer{padding:10px;background-color:#fff;border-radius:5px}",""]),t.exports=n},749:function(t,e,r){"use strict";r.r(e);r(60);var n=r(4),o={data:function(){return{stepNumber:1,errorMessage:"",customerID:""}},mounted:function(){this.CreateStripeElement()},methods:{CustomerCreateCompleteHandler:function(t){this.stepNumber++,this.customerID=t,this.errorMessage="",document.getElementById("customer-create-section").style.display="none"},SetErrorMessage:function(t){this.errorMessage=t},CreateStripeElement:function(){var t=this.StripeTokenHandler,e=this.$stripe,r=e.elements().create("card",{style:{base:{fontSize:"16px",color:"#32325d",backgroundColor:"#F8F8FF"}},hidePostalCode:!0});r.mount("#card-element-customer"),r.addEventListener("change",(function(t){var e=document.getElementById("card-errors");t.error?e.textContent=t.error.message:e.textContent=""})),document.getElementById("create-customer-form").addEventListener("submit",(function(n){n.preventDefault(),e.createToken(r).then((function(e){e.error?document.getElementById("card-errors").textContent=e.error.message:t(e.token)}))}))},StripeTokenHandler:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.CustomerCreateCompleteHandler,o=e.SetErrorMessage,data={stripeToken:t.id},r.next=5,e.$axios.$post("https://qandadbapi.azurewebsites.net/api/create-customer",data).then((function(t){"customer"===t.object?n(t.customerID):"error"===t.status&&o(t.errorMessage)})).catch((function(t){console.error("Error:",t)}));case 5:case"end":return r.stop()}}),r)})))()}}},c=(r(710),r(79)),l=r(127),d=r.n(l),f=r(738),m=r(626),v=r(627),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"normal_font--text",attrs:{fluid:"","fill-height":""}},[r("v-row",[r("v-col",[r("h1",[t._v("Stripe customer objectの作成")])])],1),t._v(" "),r("v-row",{staticClass:"mt-5 back_wall tertiary",attrs:{justify:"center"}},[r("section",{staticClass:"my-auto",attrs:{id:"customer-create-section"}},[r("v-col",[r("div",{staticClass:"form"},[r("form",{attrs:{id:"create-customer-form",action:"/api/charge-coin",method:"post"}},[r("div",{staticClass:"form-row"},[r("label",{attrs:{for:"card-element-customer"}},[t._v("\n                登録するクレジット・デビットカード番号を入力してください。\n              ")]),t._v(" "),r("div",{attrs:{id:"card-element-customer"}}),t._v(" "),r("div",{attrs:{id:"card-errors",role:"alert"}}),t._v(" "),r("div",[t._v(t._s(t.errorMessage))])]),t._v(" "),r("v-col",{staticClass:"mx-auto btn_group mt-10",attrs:{cols:"12",md:"7"}},[r("button",{staticClass:"create-customer-button"},[t._v("登録する")])])],1)])])],1),t._v(" "),2===t.stepNumber?r("v-col",{staticClass:"indigo lighten-5 grey--text text--darken-1 pa-0"},[r("section",[r("h2",[t._v("登録しました。")]),t._v(" "),r("div",[r("label",[t._v("Customer ID：")]),t._v(" "),r("p",[t._v(t._s(t.customerID))]),t._v(" "),r("p",[t._v("本来、customerIDはDBに保存するもの。")]),t._v(" "),r("p",[t._v("確認のために、customerIDを表示している。")])])])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:f.a,VContainer:m.a,VRow:v.a})}}]);