(this["webpackJsonplab-notes"]=this["webpackJsonplab-notes"]||[]).push([[0],{20:function(e,a,t){e.exports=t(31)},30:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(17),r=t.n(c),m=t(10),s=t(8),o=t(4),i=t(7),d=t(6),E=function(){var e=Object(l.useState)({email:"",password:""}),a=Object(d.a)(e,2),t=a[0],c=a[1],r=t.email,s=t.password,E=function(e){c(Object(i.a)({},t,Object(o.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"backgroundForms"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row loginRow"},n.a.createElement("div",{className:"col s12 m8 offset-m2 xl6 offset-xl3"},n.a.createElement("div",{className:"card center-align opacity-tc"},n.a.createElement("div",{className:"card-content"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},n.a.createElement("h4",{className:"mt0 mb3 textColorLogo"},"Log in"),n.a.createElement("div",{className:"grey-text"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"email",type:"email",id:"email",className:"validate",value:r,onChange:E}),n.a.createElement("label",{for:"email"},"Email")),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"password",type:"password",id:"password",className:"validate",value:s,onChange:E}),n.a.createElement("label",{for:"password"},"Password"))),n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn waves-effect waves-light deep-orange",type:"submit",name:"action"},"Login"))),n.a.createElement(m.b,{to:"/register"},n.a.createElement("p",{className:"right-align"},"Sign up"))))))))},u=function(){var e=Object(l.useState)({name:"",email:"",password:"",confirmPassword:""}),a=Object(d.a)(e,2),t=a[0],c=a[1],r=t.name,s=t.email,E=t.password,u=t.confirmPassword,f=function(e){c(Object(i.a)({},t,Object(o.a)({},e.target.name,e.target.value)))};return n.a.createElement("div",{className:"backgroundForms"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row loginRow"},n.a.createElement("div",{className:"col s12 m8 offset-m2 xl6 offset-xl3"},n.a.createElement("div",{className:"card center-align opacity-tc"},n.a.createElement("div",{className:"card-content"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},n.a.createElement("h4",{className:"mt0 mb3 textColorLogo"},"Register"),n.a.createElement("div",{className:"grey-text"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"name",type:"text",id:"text",className:"validate",value:r,onChange:f}),n.a.createElement("label",{for:"text"},"Name")),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"email",type:"email",id:"email",className:"validate",value:s,onChange:f}),n.a.createElement("label",{for:"email"},"Email")),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"password",type:"password",id:"password",className:"validate",value:E,onChange:f}),n.a.createElement("label",{for:"password"},"Password")),n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("input",{name:"confirmPassword",type:"password",id:"confirmPassword",className:"validate",value:u,onChange:f}),n.a.createElement("label",{for:"confirmPassword"},"Confirm Password"))),n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn waves-effect waves-light deep-orange",type:"submit",name:"action"},"Sign up"))),n.a.createElement(m.b,{to:"/"},n.a.createElement("p",{className:"right-align"},"Login"))))))))},f=t(33),v=function(e){e.createNote;var a=Object(l.useState)({note:""}),t=Object(d.a)(a,2),c=t[0],r=t[1],m=c.note,s=Object(l.useState)(!1),E=Object(d.a)(s,2),u=(E[0],E[1]);return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6 "},n.a.createElement("div",{className:"card opacity-tc"},n.a.createElement("span",{className:"card-title textColorLogo"},"Card Title"),n.a.createElement("div",{className:"card-image"},n.a.createElement("a",{className:"btn-floating halfway-fab waves-effect waves-light red mb1"},n.a.createElement("i",{className:"material-icons"},"edit"))),n.a.createElement("div",{className:"card-content textColorLogo"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==m.trim()?c.id=Object(f.a)():u(!0)}},n.a.createElement("input",{type:"text",name:"note",value:m,onChange:function(e){r(Object(i.a)({},c,Object(o.a)({},e.target.name,e.target.value)))}}),n.a.createElement("button",{className:"btn waves-effect waves-light deep-orange",type:"submit",name:"action"},"Save"))),n.a.createElement("div",{className:"card-action"},n.a.createElement("a",{href:"#",className:"textColorsBar ml80"},"Delete")))))},g=function(){return n.a.createElement("aside",null,n.a.createElement("ul",{className:"collection mt0 mb0"},n.a.createElement("a",{className:"collection-item waves-effect btn modal-trigger textOrange",href:"#modalNote"},"New Note"),n.a.createElement("div",{id:"modal1",className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("h4",null,"Modal Header"),n.a.createElement("p",null,"A bunch of text")),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat"},"Agree"))),n.a.createElement("a",{href:"#!",className:"collection-item waves-effect modal-trigger textOrange"},"Favorites"),n.a.createElement("a",{href:"#!",className:"collection-item waves-effect modal-trigger textOrange"},"Show All"),n.a.createElement("a",{href:"#!",className:"collection-item waves-effect modal-trigger textOrange"},"Papelera")))};var N=function(){return n.a.createElement(l.Fragment,null,n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper tc-side"},n.a.createElement("a",{href:"#!",className:"brand-logo textColorLogo"},n.a.createElement("i",{className:"Medium material-icons ml2 textColorLogo"},"favorite"),"Note"),n.a.createElement("a",{href:"#","data-target":"menuResponsive",className:"sidenav-trigger"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement("ul",{className:"right hide-on-med-and-down"},n.a.createElement("li",null,n.a.createElement("a",{href:"sass.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"search"))),n.a.createElement("li",null,n.a.createElement("a",{href:"collapsible.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"refresh"))),n.a.createElement("li",null,n.a.createElement("a",{href:"mobile.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"cancel_presentation")))))),n.a.createElement("ul",{className:"sidenav backgroundBurger",id:"menuResponsive"},n.a.createElement(g,null),n.a.createElement("li",null,n.a.createElement("a",{href:"sass.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"search"))),n.a.createElement("li",null,n.a.createElement("a",{href:"collapsible.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"refresh"))),n.a.createElement("li",null,n.a.createElement("a",{href:"mobile.html"},n.a.createElement("i",{className:"material-icons textColorLogo"},"cancel_presentation")))))},p=function(){var e=[{note:"",status:!0}];return n.a.createElement(l.Fragment,null,n.a.createElement("h4",null,"List notes"),n.a.createElement("ul",null,0===e.length?n.a.createElement("li",null,n.a.createElement("h5",null,"Notes Empty")):e.map((function(e){return n.a.createElement(v,{key:"1",note:e})}))))},b=function(){var e=Object(l.useState)({note:""}),a=Object(d.a)(e,2),t=a[0],c=a[1],r=t.note;return n.a.createElement("div",{id:"modalNote",className:"card opacity-tc modal"},n.a.createElement("span",{className:"card-title textColorLogo"},"New Note"),n.a.createElement("div",{className:"card-image"},n.a.createElement("a",{className:"btn-floating halfway-fab waves-effect waves-light red mb1"},n.a.createElement("i",{className:"material-icons"},"edit"))),n.a.createElement("div",{className:"card-content textColorLogo"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},n.a.createElement("textarea",{className:"materialize-textarea","data-length":"120",name:"note",value:r,onChange:function(e){c(Object(i.a)({},t,Object(o.a)({},e.target.name,e.target.value)))}}),n.a.createElement("button",{className:"btn waves-effect waves-light deep-orange",type:"submit",name:"action"},"Save"))),n.a.createElement("div",{className:"card-action"},n.a.createElement("a",{href:"#",className:"textColorsBar ml80"},"Delete")))},h=function(){return n.a.createElement("div",null,n.a.createElement(N,null),n.a.createElement("div",{className:"row backgroundColorsHome"},n.a.createElement("div",null,n.a.createElement("div",{className:"col s3 hide-on-med-and-down l2 backgroundGray marginCollection"},n.a.createElement(g,null)),n.a.createElement("div",{className:"col s9 m8 l10"},n.a.createElement(b,null),n.a.createElement(p,null)))))};var w=function(){return n.a.createElement(m.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:E}),n.a.createElement(s.a,{exact:!0,path:"/register",component:u}),n.a.createElement(s.a,{exact:!0,path:"/home",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(30);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1064b0fc.chunk.js.map