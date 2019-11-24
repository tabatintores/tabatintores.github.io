(this["webpackJsonphybrid-ai"]=this["webpackJsonphybrid-ai"]||[]).push([[0],{18:function(e,t,a){e.exports=a(36)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(15),c=a.n(n),i=a(4),m=(a(23),function(e){return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"Layout-Nav container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 Layout-Nav-Title"},r.a.createElement(i.b,{to:"/"},"Blog for hybrid.ai")),r.a.createElement("div",{className:"col-2 Layout-Nav-Buttons"},r.a.createElement(i.b,{to:"/"},r.a.createElement("i",{className:"fas fa-home"})),r.a.createElement(i.b,{to:"/create-article"},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("a",{href:"https://github.com/tabatintores/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"}))))),r.a.createElement("hr",null),e.children)}),o=a(7),s=a(2),u=(a(29),function(e){var t=Object(l.useState)([]),a=Object(s.a)(t,2),n=a[0],c=a[1];c(JSON.parse(localStorage.listArticles).list);var m=0===n.length;return Object(l.useEffect)((function(){localStorage.setItem("listArticles",JSON.stringify({list:n}))})),m?null:n.map((function(e){var t=e.id,a=e.title,l=e.description,m=e.comments;return r.a.createElement("div",{className:"ArticleItem",key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(i.b,{to:"/article/".concat(t),className:"Article-NavTitle"},a)),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("i",{className:"fas fa-comment"})," ",m.length),r.a.createElement("div",{className:"col-sm-5 ArticleItem-Description"},l),r.a.createElement("div",{className:"col-sm-2 ArticleItem-Actions"},r.a.createElement(i.b,{to:"/edit-article/".concat(t)},r.a.createElement("i",{className:"fas fa-pen text-dark",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})),r.a.createElement("i",{className:"fas fa-times text-danger",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return function(e){c(n.filter((function(t){return t.id!==e})))}(t)}}))))}))}),d=(a(30),function(e){return document.title="Hybrid Blog",r.a.createElement("div",{className:"ArticlesList container-fluid"},r.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0435\u0439:"),r.a.createElement("div",{className:"row ArticlesList-Title"},r.a.createElement("div",{className:"col-sm-3"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),r.a.createElement("div",{className:"col-sm-2"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"),r.a.createElement("div",{className:"col-sm-5"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("div",{className:"col-sm-2"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435")),r.a.createElement(u,null))}),f=(a(31),a(32),function(e){var t=Object(l.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],i=Object(l.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1];return r.a.createElement("div",{className:"ArticleCommentAdd"},r.a.createElement("h4",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"),r.a.createElement("div",{className:"ArticleCommentAdd-Form"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onAdd(n,o),c(""),u("")}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"author",className:"col-sm-2 col-form-label"},"\u0418\u043c\u044f"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",id:"author",minLength:3,maxLength:15,value:n,onChange:function(e){return c(e.target.value)},required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"text",className:"col-sm-2 col-form-label"},"\u0422\u0435\u043a\u0441\u0442"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("textarea",{className:"form-control",id:"text",minLength:10,maxLength:150,value:o,rows:5,onChange:function(e){return u(e.target.value)},required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"",className:"col-sm-2 col-form-label"}),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"submit",className:"form-control btn btn-primary",id:"name"}))))))}),E=(a(33),function(e){var t=e.article,a=Object(l.useState)(JSON.parse(localStorage.listArticles).list),n=Object(s.a)(a,2),c=n[0],i=n[1];return Object(l.useEffect)((function(){localStorage.setItem("listArticles",JSON.stringify({list:c}))})),r.a.createElement("div",{className:"ArticleComments"},r.a.createElement("h3",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 (",t.comments.length,"):"),t.comments.map((function(e){var a=e.id,l=e.author,n=e.comment;return r.a.createElement("div",{className:"media",key:a},r.a.createElement("img",{src:"https://picsum.photos/64/?random=".concat(a),className:"mr-3",alt:e.text}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0"},l),n),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return function(e){t.comments=t.comments.filter((function(t){return t.id!==e})),i(c.map((function(e){return e.id===t.id?t:e})))}(e.id)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})),r.a.createElement(f,{onAdd:function(e,a){t.comments.push({id:t.comments.length,author:e,comment:a}),i(c.map((function(e){return e.id===t.id?t:e})))}}))}),h=function(e){var t=Object(l.useState)(JSON.parse(localStorage.listArticles).list),a=Object(s.a)(t,2),n=a[0],c=a[1],m=Object(l.useState)((function(){var t=!0,a=!1,l=void 0;try{for(var r,c=n[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var i=r.value;if(i.id===+e.match.params.id)return i}}catch(m){a=!0,l=m}finally{try{t||null==c.return||c.return()}finally{if(a)throw l}}})),o=Object(s.a)(m,1)[0];Object(l.useEffect)((function(){localStorage.setItem("listArticles",JSON.stringify({list:n}))})),document.title=o.title;var u=o.id,d=o.title,f=o.description,h=o.text,p=o.date;return r.a.createElement("div",{className:"ArticlePage container-fluid"},r.a.createElement("h1",{className:"ArticlePage-Title"},d,r.a.createElement(i.b,{to:"/edit-article/".concat(u)},r.a.createElement("i",{className:"fas fa-pen text-dark",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})),r.a.createElement("i",{className:"fas fa-times text-danger",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return function(t){c(n.filter((function(e){return e.id!==t}))),setTimeout((function(){e.history.push("/")}),1e3)}(u)}})),r.a.createElement("p",{className:"ArticlePage-Description"},r.a.createElement("i",{className:"far fa-calendar-alt"})," \xa0",p," - ",f),r.a.createElement("p",{className:"ArticlePage-Text"},h),r.a.createElement("hr",null),r.a.createElement(E,{article:o}))},p=function(e){var t=Object(l.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],i=Object(l.useState)(""),m=Object(s.a)(i,2),o=m[0],u=m[1],d=Object(l.useState)(""),f=Object(s.a)(d,2),E=f[0],h=f[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(n,o,E)}},r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",minLength:5,maxLength:75,onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("input",{className:"btn btn-success",type:"submit",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"}))),r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:5,maxLength:150,onChange:function(e){return u(e.target.value)},required:!0})),r.a.createElement("div",{className:"input-group mb-1"},r.a.createElement("textarea",{className:"form-control",placeholder:"\u0422\u0435\u043a\u0441\u0442",rows:7,minLength:10,maxLength:5e3,onChange:function(e){return h(e.target.value)},required:!0})))},v=(a(34),function(e){return document.title="\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e",r.a.createElement("div",{className:"ArticleCreator container"},r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e:"),r.a.createElement("hr",null),r.a.createElement(p,{onSubmit:function(t,a,l){localStorage.getItem("listArticles")||localStorage.setItem("listArticles",JSON.stringify({list:[]}));var r,n=JSON.parse(localStorage.listArticles).list,c={id:(r=n,r[0]?r[r.length-1].id+1:0),title:t,description:a,text:l,comments:[],date:(new Date).toLocaleDateString()};n.push(c),localStorage.setItem("listArticles",JSON.stringify({list:n})),e.history.push("/article/".concat(c.id))}}))}),N=(a(35),function(e){var t=JSON.parse(localStorage.listArticles).list,a={},n=!0,c=!1,i=void 0;try{for(var m,o=t[Symbol.iterator]();!(n=(m=o.next()).done);n=!0){var u=m.value;if(u.id===+e.match.params.id){a=u;break}}}catch(x){c=!0,i=x}finally{try{n||null==o.return||o.return()}finally{if(c)throw i}}var d=Object(l.useState)(a.title),f=Object(s.a)(d,2),E=f[0],h=f[1],p=Object(l.useState)(a.description),v=Object(s.a)(p,2),N=v[0],g=v[1],b=Object(l.useState)(a.text),y=Object(s.a)(b,2),S=y[0],O=y[1];return document.title="\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e",r.a.createElement("div",{className:"ArticleEditor container"},r.a.createElement("h1",null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e:"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(l){l.preventDefault(),function(l,r,n){a.title=l,a.description=r,a.text=n;var c=!0,i=!1,m=void 0;try{for(var o,s=t[Symbol.iterator]();!(c=(o=s.next()).done);c=!0){var u=o.value;if(u.id===+e.match.params.id){u=a;break}}}catch(x){i=!0,m=x}finally{try{c||null==s.return||s.return()}finally{if(i)throw m}}localStorage.setItem("listArticles",JSON.stringify({list:t})),e.history.push("/article/".concat(a.id))}(E,N,S)}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"title",className:"col-sm-2 col-form-label"},"\u0422\u0435\u043c\u0430"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0422\u0435\u043c\u0430",minLength:5,maxLength:50,value:E,onChange:function(e){return h(e.target.value)},id:"title",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"description",className:"col-sm-2 col-form-label"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:5,maxLength:100,value:N,onChange:function(e){return g(e.target.value)},id:"description",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"text",className:"col-sm-2 col-form-label"},"\u0422\u0435\u043a\u0441\u0442"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("textarea",{className:"form-control",placeholder:"\u0422\u0435\u043a\u0441\u0442",rows:7,minLength:10,maxLength:5e3,value:S,onChange:function(e){return O(e.target.value)},id:"text",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}))))});var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:d}),r.a.createElement(o.a,{path:"/article/:id",component:h}),r.a.createElement(o.a,{path:"/create-article",component:v}),r.a.createElement(o.a,{path:"/edit-article/:id",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=r.a.createElement(i.a,{basename:"/blog"},r.a.createElement(g,null));c.a.render(b,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4277496b.chunk.js.map