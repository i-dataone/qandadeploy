(window.webpackJsonp=window.webpackJsonp||[]).push([[27,8],{628:function(t,e,n){var content=n(633);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("86d06398",content,!0,{sourceMap:!1})},631:function(t,e,n){t.exports=n.p+"img/default.25e8839.jpg"},632:function(t,e,n){"use strict";n(628)},633:function(t,e,n){var r=n(10)(!1);r.push([t.i,".comment-wrapper[data-v-2cfb8798]{min-width:0;flex-basis:0;padding:6px 6px 6px 10px;font-size:15px;line-height:1.4}",""]),t.exports=r},636:function(t,e,n){"use strict";n.r(e);n(60);var r=n(4),o={props:["comment"],methods:{deleteComment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.comment.questionId,r=t.comment.id,e.prev=2,e.next=5,t.$store.dispatch("deleteComment",{questionId:n,commentId:r});case 5:t.$emit("delete",r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}},c=(n(632),n(79)),l=n(127),m=n.n(l),d=n(335),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-wrapper"},[n("span",[t._v("\n    "+t._s(t.comment.content)+" ー"),n("a",{attrs:{href:""}},[t._v(" "+t._s(t.comment.userName))]),t._v(" "),t.comment.userId===this.$store.state.id?n("v-btn",{attrs:{color:"red","x-small":"",text:""},on:{click:function(e){return t.deleteComment()}}},[t._v("削除する")]):t._e()],1)])}),[],!1,null,"2cfb8798",null);e.default=component.exports;m()(component,{VBtn:d.a})},645:function(t,e,n){"use strict";n.r(e);n(60);var r=n(4),o={props:["comments","questionId","id"],data:function(){return{commentContent:""}},methods:{createComment:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("createComment",{questionId:e.questionId,targetId:t,content:e.commentContent});case 2:e.$emit("updateComment"),e.commentContent="";case 4:case"end":return n.stop()}}),n)})))()}}},c=n(79),l=n(127),m=n.n(l),d=n(335),v=n(738),f=n(593),w=n(627),h=n(657),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("ul",[n("v-divider"),t._v(" "),t._l(t.comments,(function(e){return n("comment",{key:e.id,attrs:{comment:e},on:{delete:function(e){return t.$emit("delete")}}})}))],2),t._v(" "),1==t.$store.state.isLoggedIn?n("div",[n("v-col",[n("v-textarea",{staticClass:"disabled-link",attrs:{outlined:"","hide-details":"auto",rows:"2",name:"input-7-4",label:"コメントを追加",value:""},model:{value:t.commentContent,callback:function(e){t.commentContent=e},expression:"commentContent"}})],1),t._v(" "),n("v-col",{staticStyle:{"text-align":"right"},attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.createComment(t.id)}}},[t._v("コメントする")])],1)],1):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Comment:n(636).default}),m()(component,{VBtn:d.a,VCol:v.a,VDivider:f.a,VRow:w.a,VTextarea:h.a})},651:function(t,e,n){"use strict";n.r(e);n(31),n(69),n(60);var r=n(4),o=n(648),c=n.n(o),l=n(649),m={props:{answer:Object,questionId:String},data:function(){return{value:"",commentContent:"",comments:this.answer.comments,coin:0}},mounted:function(){var t;try{t=this.$refs.content.innerHTML.replace(/\$\$([^]*?)\$\$/g,(function(t,e){return l.renderToString(e,{displayMode:!0})})).replace(/\$([^]*?)\$/g,(function(t,e){return l.renderToString(e,{displayMode:!1})}))}catch(e){t="エラー: ".concat(e)}this.$refs.content.innerHTML=c()(t)},computed:{content:function(){var content=this.answer.content;return content}},methods:{convertDate:function(t){return new Date(1e3*t)},sendCoins:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={sendUser:t.answer.answered_by,questions:"TODO 後で書き換える",value:t.coin},n=t.$store.getters.privateAPIConf,e.next=4,t.$axios.post("./private/questions/fee",data,n);case 4:t.coin=0;case 5:case"end":return e.stop()}}),e)})))()}}},d=n(79),v=n(127),f=n.n(v),w=n(738),h=n(627),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",[r("v-row",[r("v-col",[r("div",{ref:"content"},[t._v(t._s(t.content))])])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[r("div",{staticClass:"user-info",staticStyle:{margin:"0 0 0 auto"}},[r("p",[t._v("回答日時:"+t._s(t.convertDate(t.answer._ts).toLocaleString()))]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[""==t.answer.imageURL?r("img",{attrs:{width:"36px",height:"36px",src:n(631)}}):r("img",{attrs:{src:t.answer.imageURL,width:"36px",height:"36px"}})]),t._v(" "),r("v-col",{staticClass:"pt-3",attrs:{cols:"8"}},[r("nuxt-link",{attrs:{to:{name:"users-id",params:{id:t.answer.userId}}}},[t._v(t._s(t.answer.userName))])],1)],1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:w.a,VRow:h.a})},672:function(t,e,n){var content=n(723);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("43e2e190",content,!0,{sourceMap:!1})},678:function(t,e,n){"use strict";n.r(e);n(78),n(60);var r=n(4),o={props:["questionId","comments"],data:function(){return{answers:[],isLoading:!0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("getAnswersByQuestionId",t.questionId);case 4:t.answers=e.sent,t.$emit("mounted",t.answers.length),console.log(t.answers),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:return e.prev=12,t.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},methods:{getCommentsTo:function(t){return this.comments.filter((function(e){return e.targetId===t}))},updateComment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCommentsByQuestionId",t.questionId);case 2:t.comments=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},c=n(79),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",[t._v("回答読み込み中...")]):n("div",[t._l(t.answers,(function(e){return[n("answer",{key:e.id+"1",attrs:{"question-id":t.questionId,answer:e}}),t._v(" "),n("comments",{key:e.id+"2",attrs:{comments:t.getCommentsTo(e.id),questionId:t.questionId,id:e.id},on:{updateComment:t.updateComment,delete:t.updateComment}})]}))],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Answer:n(651).default,Comments:n(645).default})},722:function(t,e,n){"use strict";n(672)},723:function(t,e,n){var r=n(10)(!1);r.push([t.i,'span{font:inherit;font-size:inherit}.container{font-family:"Helvetica",sans-serif!important}.container a{text-decoration:none!important}.question-title{line-height:1.3;margin:0 0 1em;font-weight:400;font-size:1.8rem;word-wrap:break-word!important;word-break:break-word!important}.question-hyperlink{margin-bottom:0;text-decoration:none;color:var(--black-700)!important;letter-spacing:2px}.question-btn{font-size:inherit}.question-data{box-sizing:inherit;font-size:13px}.question-body-layout{flex-wrap:nowrap}.vote-cell{flex-direction:column}.vote-cell,.vote-item{white-space:nowrap}.vote-num{font-size:1.6rem}.vote-item-bookmark{flex-direction:column;font-size:10px}.vote-comment-cell{visibility:hidden}.question-content-cell{width:90%}.question-content-body{line-height:1.5;font-size:15px;letter-spacing:.5px}.question-content h2{font-size:18px;margin-bottom:5px}.v-chip-group .v-chip{margin:0 4px 0 0}.v-chip-group .v-slide-group__content{padding:0}.v-chip.v-size--small{border-radius:12px;font-size:inherit}.tag-chip{font-size:12px}.link-group a{margin:0 5px;font-size:13px;color:var(--black-500)}.user-info{width:200px;padding:5px 10px}.user-info a,.user-info p{font-size:12px}.user-info p{margin:0;display:inline-block}.post-signature-owner{background-color:rgba(64,162,234,.05098)}.comment-layout{flex-wrap:nowrap}.comment-cell{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.comment-body{width:1000px}.comment-body ul{list-style:none}.disabled-link{color:#848d95!important;opacity:.6;padding:0 3px 2px;font-size:15px}.answer-number{font-size:18px;font-weight:400;text-align:left;margin:0}.new-post-login-form{flex-direction:column}.post-login-title{font-size:1.3rem!important;font-weight:400}.post-login-title a{text-decoration:none}pre{background-color:#2b2b2b;padding:8px;width:auto;overflow:auto}.v-application code{padding-left:0;background-color:unset!important}.flex-wrap{flex-wrap:wrap!important}.ws-nowrap{white-space:nowrap!important}.box-inherit{box-sizing:inherit}.mr-2px{margin-right:2px}.mavonEditor{border:1px solid grey;width:100%}.markdown-editor{width:100%;height:100%;z-index:inherit!important;background-color:unset!important}.post-text{z-index:2!important}.markdown-body{background-color:unset!important;max-height:300px}.content-input,.content-input-wrapper,.v-note-op,.v-show-content{background:unset!important}.auto-textarea-input,.v-show-content{color:var(--v-normal_font-base)!important}.v-note-op{border-bottom-color:grey!important}.scroll-style::-webkit-scrollbar-thumb{background:var(--v-normal_font-base)!important}.scroll-style::-webkit-scrollbar-track{background:grey!important}.input-fee{padding:10px 15px;font-size:16px;border-radius:3px;border:1px solid grey;max-width:100%}',""]),t.exports=r},752:function(t,e,n){"use strict";n.r(e);n(78),n(31),n(69),n(60);var r=n(4),o=n(648),c=n.n(o),l=n(719),m=n.n(l),d=n(649),v={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route.params.id,e.next=3,t.store.dispatch("getQuestionById",n);case 3:return r=e.sent,e.abrupt("return",{question:r,id:n});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=c()(t.question.content).replace(/\$\$([^]*?)\$\$/g,(function(t,e){return d.renderToString(e,{displayMode:!0})})).replace(/\$([^]*?)\$/g,(function(t,e){return d.renderToString(e,{displayMode:!1})}))}catch(t){n="エラー: ".concat(t)}return t.$refs.content.innerHTML=n,e.prev=2,t.isLoadingComments=!0,e.next=6,t.$store.dispatch("getCommentsByQuestionId",t.id);case 6:t.comments=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.prev=12,t.isLoadingComments=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))()},data:function(){return{question:"",answers:[],comments:[],content:"",commentContent:"",checkUser:!1,checkCost:!1,viewAnswerBtn:!1,paymentDialog:!1,answerKey:!0,isDisabled:!1,isLoading:!1,markdownOption:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0},isLoadingComments:!1}},created:function(){c.a.setOptions({langPrefix:"",highlight:function(code,t){return m.a.highlightAuto(code,[t]).value}})},methods:{getCommentsTo:function(t){return this.comments.filter((function(e){return e.targetId===t}))},createAnswer:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,t.isDisabled=!0,n=t.question.id,e.next=6,t.$store.dispatch("createAnswer",{content:t.content,id:n,imageURL:t.$store.getters.getImageURL});case 6:return e.sent,e.next=9,t.$store.dispatch("getQuestionById",n);case 9:t.question=e.sent,t.content="",t.answerKey=!t.answerKey,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("error: ".concat(e.t0));case 17:return e.prev=17,t.isDisabled=!1,t.isLoading=!1,e.finish(17);case 21:case"end":return e.stop()}}),e,null,[[0,14,17,21]])})))()},convertDate:function(t){return new Date(1e3*t)},paymentCost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.getters.privateAPIConf,data={value:t.question.cost,question:t.question,userId:t.$store.state.id},e.next=4,t.$axios.post("./qandaprivateapi/questions/cost",data,n);case 4:200===(r=e.sent).status?(t.question.costList=r.data,t.getAnswers(),t.paymentDialog=!1):alert("コインなどを確認してください。");case 6:case"end":return e.stop()}}),e)})))()},cancel:function(){this.paymentDialog=!1},updateComment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,t.$store.dispatch("getCommentsByQuestionId",n);case 3:t.comments=e.sent;case 4:case"end":return e.stop()}}),e)})))()},follow:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("followQuestion",t.question.id);case 2:return e.next=4,t.$store.dispatch("getQuestionById",t.question.id);case 4:t.question=e.sent;case 5:case"end":return e.stop()}}),e)})))()},unfollow:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("unfollowQuestion",t.question.id);case 2:return e.next=4,t.$store.dispatch("getQuestionById",t.question.id);case 4:t.question=e.sent;case 5:case"end":return e.stop()}}),e)})))()}},computed:{imageURL:function(){return this.question.imageURL?this.question.imageURL:""}}},f=(n(720),n(722),n(79)),w=n(127),h=n.n(w),x=n(335),_=n(738),k=n(626),C=n(593),y=n(211),$=n(627),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"py-4 px-3",attrs:{fluid:""}},[r("v-row",[r("v-col",[r("h1",{staticClass:"question-title"},[t._v("\n        "+t._s(t.question.title)+"\n      ")]),t._v(" "),r("p",[t._v(t._s(t.$store.getters.getCategoryById(t.question.category).name))])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"question-body pt-3",attrs:{"no-gutters":""}},[r("v-col",[r("div",{ref:"content",staticClass:"question-content"},[t._v(t._s(t.question.content))])])],1),t._v(" "),r("v-row",{staticClass:"link-icon-group pt-1 mt-4",attrs:{"no-gutters":"",justify:"space-between"}},[t.$store.getters.getIsLoggedIn?r("v-col",{staticClass:"link-group py-0",attrs:{cols:"4"}},[-1==t.question.followers.indexOf(t.$store.getters.getId)?r("v-btn",{attrs:{text:"",small:""},on:{click:t.follow}},[t._v("フォロー")]):r("v-btn",{attrs:{text:"",small:""},on:{click:t.unfollow}},[t._v("フォローを外す")])],1):t._e(),t._v(" "),r("v-col",{staticClass:"post-signature-owner",attrs:{cols:"3"}},[r("div",{staticClass:"user-info"},[r("p",[t._v("質問日時:"+t._s(t.convertDate(t.question._ts).toLocaleString()))]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[""==t.imageURL?r("img",{attrs:{src:n(631),width:"36px",height:"36px"}}):r("img",{attrs:{src:t.imageURL,width:"36px",height:"36px"}})]),t._v(" "),r("v-col",{staticClass:"pt-3",attrs:{cols:"8"}},[r("nuxt-link",{attrs:{to:{name:"users-id",params:{id:t.question.userId}}}},[t._v(t._s(t.question.userName))])],1)],1)],1)])],1),t._v(" "),t.isLoadingComments?r("div",[t._v("コメント読み込み中...")]):r("comments",{attrs:{comments:t.getCommentsTo(t.question.id),questionId:t.question.id,id:t.question.id},on:{updateComment:t.updateComment,delete:t.updateComment}}),t._v(" "),r("v-row",[r("v-col",[t.question.answerCount>0?r("h2",{staticClass:"answer-number d-inline-block"},[t._v(t._s(t.question.answerCount)+"件の回答")]):r("div",{staticStyle:{"text-align":"center"}},[r("p",[t._v("まだ回答はありません。")])])])],1),t._v(" "),t.$store.getters.getIsLoggedIn?r("div",[r("answers",{key:t.answerKey,attrs:{questionId:t.id,comments:t.comments}})],1):t._e(),t._v(" "),r("v-row",{staticClass:"answer-form"},[r("v-col",[r("v-row",[t._v("回答する")]),t._v(" "),r("v-row",{staticClass:"post-text"},[r("v-col",[r("div",{staticClass:"mavonEditor"},[r("no-ssr",[r("mavon-editor",{attrs:{toolbars:t.markdownOption,language:"ja",placeholder:"質問内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)])],1),t._v(" "),r("v-row",[r("v-col",[r("div",{staticStyle:{"text-align":"right"}},[r("v-btn",{attrs:{color:"info",disabled:t.isDisabled},on:{click:function(e){return t.createAnswer()}}},[t._v("送信")]),t._v(" "),t.isLoading?r("v-progress-circular",{attrs:{indeterminate:""}}):t._e()],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{Comments:n(645).default,Answers:n(678).default}),h()(component,{VBtn:x.a,VCol:_.a,VContainer:k.a,VDivider:C.a,VProgressCircular:y.a,VRow:$.a})}}]);