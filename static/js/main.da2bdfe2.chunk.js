(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{42:function(e,t,i){},43:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},69:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},77:function(e,t,i){},78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(17),c=i.n(n),s=i(6),r=i(16),l=i(2),o=(i(42),i(43),i(0)),u=function(){return Object(o.jsxs)("form",{className:"authorization__form",children:[Object(o.jsx)("div",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(o.jsx)("input",{className:"form__field",type:"text"}),Object(o.jsx)("input",{className:"form__field",type:"password"}),Object(o.jsx)("input",{className:"form__submit",type:"submit"})]})},d=function(){return Object(o.jsx)("div",{className:"authorization",children:Object(o.jsx)(u,{})})},j=(i(45),i(46),i(47),i(48),i(4)),b=(i(49),i(50),function(e){var t=e.disableModal,i=e.children;return Object(a.useEffect)((function(){return document.querySelector("html").style.overflow="hidden",function(){return document.querySelector("html").style.overflow="overlay"}}),[]),Object(o.jsx)("div",{className:"modal",onClick:function(e){"modal"===e.target.className&&t()},children:i})}),m=i(32),v=i.n(m).a.create({baseURL:"https://www.googleapis.com/youtube/v3/",params:{part:"snippet",maxResults:"12",key:"AIzaSyB1jSPYDdlDZZa-jsAQyP_0jqpEK2A5lVg",type:"video"}}),f=function(e,t,i){return function(e,t,i){return v.get("/search",{params:{q:e,maxResults:t,order:i}}).then((function(e){var t=e.data;return{totalResults:t.pageInfo.totalResults,videoId:t.items.map((function(e){return e.id.videoId}))}}))}(e,t,i).then((function(t){var i=t.totalResults,a=t.videoId;return v.get("/videos",{params:{id:a.join(","),part:"snippet, statistics"}}).then((function(t){var a=t.data;return{requestName:e,totalResults:i,videoList:a.items.map((function(e){var t=e.id,i=e.snippet,a=e.statistics;return{videoId:t,channelTitle:i.channelTitle,videoTitle:i.title,description:i.description,thumbnail:i.thumbnails.medium.url,viewCount:a.viewCount}}))}}))}))},O=function(e){return{type:"FETCH_VIDEO_LIST_SUCCESS",payload:e}},h=function(e){return{type:"FETCH_VIDEO_LIST_FAILURE",payload:e}},_=function(e){return function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"relevance";e({type:"FETCH_VIDEO_LIST_REQUEST"}),f(t,i,a).then((function(t){return e(O(t))})).catch((function(t){return e(h(t))}))}},x=i(5),p=i(33),N=(i(69),Object(s.b)((function(e){return{favouriteList:e.favouriteList}}),(function(e){return{favouriteListItemIsAdded:function(t){return e(function(e){return{type:"FAVOURITELIST_ITEM_IS_ADDED",payload:e}}(t))},favouriteListItemIsUpdate:function(t,i){return e(function(e,t){return{type:"FAVOURITELIST_ITEM_IS_UPDATE",payload:{id:e,data:t}}}(t,i))}}}))((function(e){var t=e.disableModal,i=e.id,n=void 0===i?void 0:i,c=e.input,s=void 0===c?void 0:c,r=e.favouriteList,l=e.favouriteListItemIsAdded,u=e.favouriteListItemIsUpdate,d=Object(a.useState)(""),b=Object(j.a)(d,2),m=b[0],v=b[1],f=Object(a.useState)(""),O=Object(j.a)(f,2),h=O[0],_=O[1],N=Object(a.useState)("date"),y=Object(j.a)(N,2),I=y[0],T=y[1],g=Object(a.useState)(12),L=Object(j.a)(g,2),E=L[0],S=L[1];Object(a.useEffect)((function(){if(s&&v(s),n){var e=r.find((function(e,t){return t===+n}));v(e.requestName),_(e.title),T(e.sortBy),S(e.count)}}),[n,s]);var C=function(e){switch(e.target.name){case"request":v(e.target.value);break;case"title":_(e.target.value);break;case"selector":T(e.target.value)}};return Object(o.jsxs)("form",{className:"favourite__form",onSubmit:function(e){e.preventDefault();var i={requestName:m,title:h,sortBy:I,count:E};if(n)return u(n,i),void t();l(i),t()},children:[Object(o.jsx)("div",{className:"form__title",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441"}),Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("div",{className:"field__title",children:"\u0417\u0430\u043f\u0440\u043e\u0441"}),Object(o.jsx)("input",{type:"text",className:"field__field",name:"request",value:m,onChange:C})]}),Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("div",{className:"field__title",children:"* \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(o.jsx)("input",{type:"text",name:"title",className:"field__field",value:h,onChange:C})]}),Object(o.jsxs)("div",{className:"form__field",children:[Object(o.jsx)("div",{className:"field__title",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"}),Object(o.jsxs)("select",{className:"field__field",name:"selector",value:I,onChange:C,children:[Object(o.jsx)("option",{value:"relevance",children:"\u041f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438"}),Object(o.jsx)("option",{value:"date",children:"\u041f\u043e \u0434\u0430\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),Object(o.jsx)("option",{value:"viewCount",children:"\u041f\u043e \u0447\u0438\u0441\u043b\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"}),Object(o.jsx)("option",{value:"rating",children:"\u041f\u043e \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0443"})]})]}),Object(o.jsxs)("div",{className:"form__slider",children:[Object(o.jsx)("div",{className:"slider__title",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(o.jsxs)("div",{className:"slider__body",children:[Object(o.jsx)(p.a,{className:"slider",max:50,thumbClassName:"slider__thumb",trackClassName:"slider__track",value:E,onChange:S,renderThumb:function(e){return Object(o.jsx)("div",Object(x.a)({},e))}}),Object(o.jsx)("div",{className:"slider__count",children:E})]})]}),Object(o.jsxs)("div",{className:"form__buttons",children:[Object(o.jsx)("input",{type:"reset",value:"\u041d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c",onClick:t,className:"buttons__cancel"}),Object(o.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"buttons__submit"})]})]})}))),y=Object(l.g)(Object(s.b)((function(e){return{favouriteList:e.favouriteList}}),(function(e){return{favouriteListItemIsDeleted:function(t){return e(function(e){return{type:"FAVOURITELIST_ITEM_IS_DELETED",payload:e}}(t))},updateVideoList:_(e)}}))((function(e){var t=e.id,i=e.title,n=e.favouriteList,c=e.favouriteListItemIsDeleted,s=e.updateVideoList,r=e.history,l=Object(a.useState)(!1),u=Object(j.a)(l,2),d=u[0],m=u[1],v=d?Object(o.jsx)(b,{disableModal:function(){return m(!1)},children:Object(o.jsx)(N,{id:"".concat(t),disableModal:function(){return m(!1)}})}):null;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("li",{className:"favourite-list__item",children:[Object(o.jsx)("span",{className:"item__title",onClick:function(){return function(){var e=n[t].requireName,i=n[t].count,a=n[t].sortBy;s(e,i,a),r.push("/main")}()},children:i}),Object(o.jsxs)("div",{className:"item__btns",children:[Object(o.jsx)("button",{className:"item__edit-btn",onClick:function(){m(!0),document.querySelector("html").style.overflow=d?"hidden":"overlay"},children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(o.jsx)("button",{className:"item__delete-btn",onClick:function(){return c(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},t),v]})}))),I=Object(s.b)((function(e){return{favouriteList:e.favouriteList}}))((function(e){var t=e.favouriteList.map((function(e,t){var i=e.title;return Object(o.jsx)(y,{id:t,title:i},t)}));return Object(o.jsx)("ul",{className:"favourite-list",children:t})})),T=function(){return Object(o.jsxs)("div",{className:"favourites",children:[Object(o.jsx)("div",{className:"favourites__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(o.jsx)(I,{})]})},g=(i(72),i(73),i.p+"static/media/favourites.c6fe4391.svg"),L=Object(s.b)(null,(function(e){return{updateVideoList:_(e)}}))((function(e){var t=e.updateVideoList,i=e.requestName,n=Object(a.useState)(""),c=Object(j.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(!1),u=Object(j.a)(l,2),d=u[0],m=u[1];Object(a.useEffect)((function(){i&&r(i)}),[i]);var v=d?Object(o.jsx)(b,{disableModal:function(){return m(!1)},children:Object(o.jsx)(N,{input:s,disableModal:function(){return m(!1)}})}):null;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(o.jsx)("div",{className:"form__title",children:"\u041f\u043e\u0438\u0441\u043a \u0432\u0438\u0434\u0435\u043e"}),Object(o.jsxs)("div",{className:"form__body",children:[Object(o.jsx)("input",{className:"form__field",onChange:function(e){r(e.target.value)},value:s,type:"text",placeholder:"\u0427\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c?"}),Object(o.jsx)("input",{className:"form__submit",type:"submit",value:"\u041d\u0430\u0439\u0442\u0438"}),Object(o.jsx)("div",{className:"form__favourite-btn",children:Object(o.jsx)("img",{onClick:function(){return m(!0)},src:g})})]})]}),v]})})),E=function(){return Object(o.jsx)("div",{className:"search-default",children:Object(o.jsx)(L,{})})},S=(i(74),i.p+"static/media/grid-selected.10e3a154.svg"),C=i.p+"static/media/list-selected.0db44f7d.svg",D=i.p+"static/media/grid.838af36c.svg",w=i.p+"static/media/list.6dde3dc3.svg",q=function(e){var t=e.filterType,i=e.setFilterType,a=e.totalResults,n=e.requestName,c=n?'\u0412\u0438\u0434\u0435\u043e \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "'.concat(n,'"'):"",s=a?"".concat(a):"";return Object(o.jsx)("div",{className:"filter",children:Object(o.jsxs)("div",{className:"filter__header",children:[Object(o.jsxs)("div",{className:"header__body",children:[Object(o.jsx)("div",{className:"header__name",children:c}),Object(o.jsx)("div",{className:"header__count",children:s})]}),Object(o.jsxs)("div",{className:"header__view",children:[Object(o.jsx)("div",{className:"view__item",onClick:function(){return i("list")},children:Object(o.jsx)("img",{src:"list"==t?C:w})}),Object(o.jsx)("div",{className:"view__item",onClick:function(){return i("grid")},children:Object(o.jsx)("img",{src:"grid"==t?S:D})})]})]})})},R=(i(75),function(e){var t=e.videoId,i=e.videoTitle;return Object(o.jsx)("iframe",{width:"861",height:"484",src:"https://www.youtube.com/embed/".concat(t),title:i,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),k=function(e){var t=e.channelTitle,i=e.thumbnail,n=e.viewCount,c=e.videoTitle,s=e.videoId,r=Object(a.useState)(!1),l=Object(j.a)(r,2),u=l[0],d=l[1],m=u?Object(o.jsx)(b,{disableModal:function(){return d(!1)},children:Object(o.jsx)(R,{videoId:s,videoTitle:c})}):null;return Object(o.jsxs)("div",{className:"grid__item",children:[Object(o.jsx)("div",{className:"item__video",onClick:function(){return d(!0)},children:Object(o.jsx)("img",{src:i})}),Object(o.jsx)("div",{className:"item__title",onClick:function(){return d(!0)},children:c}),Object(o.jsxs)("div",{className:"item__description",children:[Object(o.jsx)("div",{className:"item__channel-title",children:t}),Object(o.jsxs)("div",{className:"item__count",children:[n," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]})]}),m]})},A=(i(76),function(e){var t=e.videoList.map((function(e){var t=e.channelTitle,i=e.thumbnail,a=e.viewCount,n=e.videoTitle,c=e.videoId;return Object(o.jsx)(k,{videoId:c,thumbnail:i,videoTitle:n,channelTitle:t,viewCount:a})}));return Object(o.jsx)("div",{className:"grid",children:t})}),F=(i(77),function(e){var t=e.videoId,i=e.thumbnail,n=e.videoTitle,c=e.channelTitle,s=e.viewCount,r=Object(a.useState)(!1),l=Object(j.a)(r,2),u=l[0],d=l[1],m=u?Object(o.jsx)(b,{disableModal:function(){return d(!1)},children:Object(o.jsx)(R,{videoId:t,videoTitle:n})}):null;return Object(o.jsxs)("li",{className:"list__item",children:[Object(o.jsx)("div",{className:"item__video",onClick:function(){return d(!0)},children:Object(o.jsx)("img",{src:i})}),Object(o.jsxs)("div",{className:"item__body",children:[Object(o.jsx)("div",{className:"item__title",onClick:function(){return d(!0)},children:n}),Object(o.jsxs)("div",{className:"item__description",children:[Object(o.jsx)("div",{className:"item__channel-title",children:c}),Object(o.jsxs)("div",{className:"item__count",children:[s," \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"]})]})]}),m]},t)}),M=(i(78),function(e){var t=e.videoList.map((function(e){var t=e.channelTitle,i=e.thumbnail,a=e.viewCount,n=e.videoTitle,c=e.videoId;return Object(o.jsx)(F,{videoId:c,thumbnail:i,videoTitle:n,channelTitle:t,viewCount:a})}));return Object(o.jsx)("ul",{className:"list",children:t})}),U=(i(79),Object(s.b)((function(e){var t=e.videoData;return{requestName:t.requestName,totalResults:t.totalResults,videoList:t.videoList}}))((function(e){var t=e.totalResults,i=e.requestName,n=e.videoList,c=Object(a.useState)("grid"),s=Object(j.a)(c,2),r=s[0],l=s[1],u=n?"grid"===r?Object(o.jsx)(A,{videoList:n}):"list"===r?Object(o.jsx)(M,{videoList:n}):null:null;return Object(o.jsxs)("div",{className:"search-result",children:[Object(o.jsx)(L,{requestName:i}),Object(o.jsx)(q,{filterType:r,setFilterType:l,totalResults:t,requestName:i}),u]})}))),V=Object(s.b)((function(e){return{videoData:e.videoData,loading:e.loading}}))((function(e){var t=e.videoData,i=e.loading||Object.keys(t).length>0?Object(o.jsx)(U,{}):Object(o.jsx)(E,{});return Object(o.jsx)(o.Fragment,{children:i})})),B=function(){return Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/main",exact:!0,component:V}),Object(o.jsx)(l.a,{path:"/main/favourites",component:T})]})},H=function(){return Object(o.jsx)("main",{className:"main__body",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(B,{})})})},z=(i(80),function(){var e=Object(l.f)(),t="/main"===e.pathname?"button active":"button",i="/main/favourites"===e.pathname?"button active":"button";return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"header-wrap",children:[Object(o.jsxs)("nav",{className:"header__nav",children:[Object(o.jsx)(r.b,{to:"/main",children:Object(o.jsx)("button",{className:t,children:"\u041f\u043e\u0438\u0441\u043a"})}),Object(o.jsx)(r.b,{to:"/main/favourites",children:Object(o.jsx)("button",{className:i,children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]}),Object(o.jsx)("button",{className:"button",children:"\u0412\u044b\u0439\u0442\u0438"})]})})})}),P=function(){return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(z,{}),Object(o.jsx)(H,{})]})},Q=function(){return Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/authorization",component:d}),Object(o.jsx)(l.a,{path:"/main",component:P})]})},J=(i(81),function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(Q,{})})}),Z=(i(82),i(34)),K=i(13),Y={loading:!1,error:null,favouriteList:[{requestName:"Metallica",title:"Metallica",sortBy:"rating",count:12},{requestName:"Megadeth",title:"Megadeth",sortBy:"relevance",count:17},{requestName:"Anthrax",title:"Anthrax",sortBy:"date",count:15}],videoData:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_VIDEO_LIST_SUCCESS":return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:null,videoData:t.payload});case"FETCH_VIDEO_LIST_FAILURE":return Object(x.a)(Object(x.a)({},e),{},{loading:!1,error:t.payload,videoData:{}});case"FETCH_VIDEO_LIST_REQUEST":return Object(x.a)(Object(x.a)({},e),{},{loading:!0,error:null,videoData:{}});case"FAVOURITELIST_ITEM_IS_ADDED":var i={requestName:t.payload.requestName,title:t.payload.title,sortBy:t.payload.sortBy,count:t.payload.count};return Object(x.a)(Object(x.a)({},e),{},{favouriteList:[].concat(Object(K.a)(e.favouriteList),[i])});case"FAVOURITELIST_ITEM_IS_UPDATE":var a={requestName:t.payload.data.requestName,title:t.payload.data.title,sortBy:t.payload.data.sortBy,count:t.payload.data.count};return Object(x.a)(Object(x.a)({},e),{},{favouriteList:[].concat(Object(K.a)(e.favouriteList.slice(0,t.payload.id)),[a],Object(K.a)(e.favouriteList.slice(+t.payload.id+1)))});case"FAVOURITELIST_ITEM_IS_DELETED":return Object(x.a)(Object(x.a)({},e),{},{favouriteList:[].concat(Object(K.a)(e.favouriteList.slice(0,t.payload)),Object(K.a)(e.favouriteList.slice(+t.payload+1)))});default:return e}},W=Object(Z.a)(G);c.a.render(Object(o.jsx)(s.a,{store:W,children:Object(o.jsx)(r.a,{basename:"/youtube",children:Object(o.jsx)(J,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.da2bdfe2.chunk.js.map