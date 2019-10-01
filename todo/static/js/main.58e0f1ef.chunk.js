(window["webpackJsonpbig-todo"]=window["webpackJsonpbig-todo"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),o=n.n(r),i=n(1),c=n(2),s=n(4),m=n(3),u=n(5),d=(n(13),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Layout"},this.props.children)}}]),t}(a.Component)),p=(n(14),function(e){return l.a.createElement(l.a.Fragment,null,e.list.map((function(t,n){var a=["list-group-item","overflow-hidden","activeTask"];return t.isCompleted&&a.push("completed"),t.isDeleted?null:l.a.createElement("li",{className:a.join(" "),key:n,onClick:function(){return e.onComplete(t.id)}},t.text,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(n){e.onDelete(t.id),n.stopPropagation()}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})))}),h=function(e){return l.a.createElement(l.a.Fragment,null,e.list.map((function(t,n){return t.isDeleted||t.isCompleted?null:l.a.createElement("li",{className:["list-group-item","overflow-hidden","activeTask"].join(" "),key:n,onClick:function(){return e.onComplete(t.id)}},t.text,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.onDelete(t.id)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")))})))},f=function(e){return l.a.createElement(l.a.Fragment,null,e.list.map((function(t,n){var a=["list-group-item","overflow-hidden","activeTask"];return t.isCompleted&&a.push("completed"),!t.isDeleted&&t.isCompleted?l.a.createElement("li",{className:a.join(" "),key:n,onClick:function(){return e.onComplete(t.id)}},t.text,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return e.onDelete(t.id)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):null})))},E=function(e){return l.a.createElement(l.a.Fragment,null,function(){var t=e.currentState;return"All"===t?l.a.createElement(p,{list:e.list,onEnter:e.onEnter,onComplete:e.onComplete,onDelete:e.onDelete}):"Active"===t?l.a.createElement(h,{list:e.list,onEnter:e.onEnter,onComplete:e.onComplete,onDelete:e.onDelete}):l.a.createElement(f,{list:e.list,onEnter:e.onEnter,onComplete:e.onComplete,onDelete:e.onDelete})}())},C=function(e){return l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3"},l.a.createElement("small",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c: ",function(){var t=0;return e.list.forEach((function(e){!1===e.isCompleted&&t++})),t}())),l.a.createElement("div",{className:"col-3 text-right"},l.a.createElement("a",{href:"#",onClick:function(){return e.onCurrentStateChange("All")}},"\u0412\u0441\u0435")),l.a.createElement("div",{className:"col-3 text-right"},l.a.createElement("a",{href:"#",onClick:function(){return e.onCurrentStateChange("Active")}},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435")),l.a.createElement("div",{className:"col-3 text-right"},l.a.createElement("a",{href:"#",onClick:function(){return e.onCurrentStateChange("Completed")}},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"))))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={listItems:[],currentState:"All"},n.addItemHandler=function(e){if(e.target.value&&"Enter"===e.key){var t=n.state.listItems;t.push({id:t.length+1,isCompleted:!1,text:e.target.value}),n.setState(t),e.target.value=""}},n.completeItemHandler=function(e){if(!n.state.isButtonHovered){var t=n.state.listItems;0!==n.state.listItems.length&&(n.state.listItems[e-1].isCompleted?(t[e-1].isCompleted=!1,n.setState(t)):(t[e-1].isCompleted=!0,n.setState(t)))}},n.deleteItemHandler=function(e,t){var a=n.state.listItems;a[e-1].isCompleted=!0,a[e-1].isDeleted=!0,n.setState(a)},n.currentStateSetter=function(e){n.setState({currentState:e})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"Todo"},l.a.createElement("h1",null,"TODO"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("input",{type:"text",className:"list-group-item form-control form-control-lg",placeholder:"\u0427\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",onKeyPress:this.addItemHandler,maxLength:40}),l.a.createElement(E,{list:this.state.listItems,onEnter:this.addItemHandler,onComplete:this.completeItemHandler,onDelete:this.deleteItemHandler,currentState:this.state.currentState}),l.a.createElement(C,{list:this.state.listItems,onCurrentStateChange:this.currentStateSetter}))))}}]),t}(a.Component);var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null,l.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.58e0f1ef.chunk.js.map