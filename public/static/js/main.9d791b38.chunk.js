(this.webpackJsonpnano_lms=this.webpackJsonpnano_lms||[]).push([[0],{139:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(7),u=n(15),s=n(41),i=n(23),m=n(10),d=n(28),p=n(29),f=n(22),h=n(54),E=n(90),b=n(9),g=n.n(b),v=n(17),O=n(21),y=n.n(O),j="https://deutschkursorga.de/api/v1",S=function(){return sessionStorage.getItem("token")};function w(){return(w=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/sign_in"),e.next=3,y.a.post(n,{sign_in:t}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/sign_out"),e.next=3,y.a.post(t).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/users"),e.next=3,y.a.get(t,{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/users/").concat(t),e.next=3,y.a.get(n,{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/users"),e.next=3,y.a.post(n,{data:t},{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(v.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/users/").concat(t),e.next=3,y.a.put(a,{user:n},{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return _.apply(this,arguments)}function _(){return(_=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/courses"),e.next=3,y.a.get(t,{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/courses/").concat(t),e.next=3,y.a.get(n,{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/courses/").concat(t),e.next=3,y.a.delete(n,{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(v.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/courses/").concat(t),e.next=3,y.a.put(a,{course:n},{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/courses"),e.next=3,y.a.post(n,{course:{title:t.title,description:t.description}},{headers:{"AUTH-TOKEN":S()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{},e.next=3,y.a.get("".concat(j,"/events"),{headers:{"AUTH-TOKEN":S()}}).then((function(e){return console.log("response:"),console.log(e),e.data})).catch((function(e){return console.log(e)}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/events/"),{method:"patch",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Data is ok",e)})).catch((function(e){console.log("parsing failed",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(s.o)((function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),b=s[0],g=s[1];Object(a.useEffect)((function(){A().then((function(e){console.log(e.data),o(e.data.courses),g(!1)}))}),[]);var v=function(){return c.map((function(e){return r.a.createElement(h.a,{style:{marginTop:"4px"}},r.a.createElement(h.a.Header,null,e.title),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Text,null,e.description),r.a.createElement(E.LinkContainer,{to:"/courses/".concat(e.id)},r.a.createElement(m.a,{variant:"primary"},"mehr ..."))))}))};return b?r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(d.a,{style:{marginTop:"2em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"Kurse"),sessionStorage.getItem("admin_role")&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){e.history.push("courses/create")}},"Add"),v())||v())))})),F=n(44);var Y=Object(s.o)((function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),h=s[0],E=s[1];Object(a.useEffect)((function(){H(e.match.params.id).then((function(e){console.log(e.data),o(e.data.course),E(!1)}))}),[]);var b=function(t){(function(e){return L.apply(this,arguments)})(t).then((function(t){E(!1),e.history.push("/courses")})).catch((function(e){return E(!1)}))};return r.a.createElement(d.a,{style:{marginTop:"2em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,null,h&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(F.a,null,r.a.createElement("h2",null,c.title),r.a.createElement("p",null,c.description),r.a.createElement("p",null,r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){var t;t=c.id,e.history.push({pathname:"/courses/".concat(t,"/edit")})}},"Edit"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"danger",onClick:function(){b(c.id)}},"Delete"))))))})),M=n(38),J=n(45);var P=Object(s.o)((function(e){var t=Object(a.useState)({id:0,description:"",title:""}),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),h=s[0],E=s[1],b=Object(a.useState)(!1),g=Object(l.a)(b,2),v=g[0],O=g[1];Object(a.useEffect)((function(){"create"!==e.mode?H(e.match.params.id).then((function(e){console.log(e.data),o(e.data.course),E(!1)})):E(!1)}),[]);var y=function(t){"create"===e.mode?function(e){return B.apply(this,arguments)}(c).then((function(t){E(!1),e.history.push("/courses")})).catch((function(e){return E(!1)})):function(e,t){return q.apply(this,arguments)}(t,c).then((function(t){E(!1),e.history.push("/courses")})).catch((function(e){return E(!1)}))},j=function(e){var t=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;o(Object(J.a)({},c,Object(M.a)({},t,n))),O(!0)};return r.a.createElement(d.a,{style:{marginTop:"2em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,null,h&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(F.a,null,r.a.createElement("label",null,"title"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.title,name:"title",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"description"),r.a.createElement("br",null),r.a.createElement("textarea",{style:{height:"10em",width:"100%",border:"none"},value:c.description,onChange:j,name:"description"}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(m.a,{disabled:!v,type:"button",variant:"primary",onClick:function(){y(c.id)}},"Save"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"normal",onClick:function(){e.history.goBack()}},"Cancel"))))))})),W=n(98),z=n(76),G=n(56),R=n.n(G),$=n(47),Q=n(75),V=n.n(Q),X=(n(137),n(138),Object(z.b)(R.a)),Z=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(0),s=Object(l.a)(u,2),d=s[0],p=s[1],f=Object(a.useState)({events:[]}),h=Object(l.a)(f,2),E=h[0],b=h[1],g=Object(a.useState)(!0),v=Object(l.a)(g,2),O=v[0],y=v[1];Object(a.useEffect)((function(){console.log("Calendar"),K().then((function(e){if(console.log("response.data"),console.log(e.data.events),e.data){var t=e.data;b({events:t.events})}y(!1)})).catch((function(e){return console.log(e)}))}),[]);var j,S=function(){o(0)},w=function(e){return E.events.find((function(t){return t.id===e}))};return O?r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{style:{height:700,minHeight:400,padding:"10px"}},r.a.createElement(z.a,{localizer:X,events:E.events,startAccessor:"start",endAccessor:"end",style:{height:500},culture:"de",selectable:!0,onSelectEvent:function(e,t){return function(e,t){console&&console.log(E),p(t.id),o(1),console&&console.log(e,t)}(t,e)},onSelectSlot:function(e){var t=e.start,n=e.end,a=window.prompt("Event name");a&&b({events:[].concat(Object(W.a)(E.events),[{start:t,end:n,title:a}])})}}),r.a.createElement($.a,{show:c,onHide:S},r.a.createElement($.a.Header,{closeButton:!0},r.a.createElement($.a.Title,null,d&&w(d).title)),r.a.createElement($.a.Body,null,d&&(j=w(d),r.a.createElement(r.a.Fragment,null,"Start: ",r.a.createElement(V.a,{dateFormat:"DD.MM.YYYY",value:j.start}),"End: ",r.a.createElement(V.a,{dateFormat:"DD.MM.YYYY",value:j.end})))),r.a.createElement($.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:S},"Close"),r.a.createElement(m.a,{variant:"primary",onClick:function(){!function(e){U(w(e)),o(0)}(d)}},"Save Changes"))))},ee=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),o=Object(l.a)(c,2),u=o[0],s=o[1];return Object(a.useEffect)((function(){A().then((function(e){console.log(e.data),n(e.data.courses),s(!1)}))}),[]),u?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{style:{background:"#fff",marginTop:"2em"}},r.a.createElement("h1",null,"Dashboard"),r.a.createElement("p",null,"Hallo!"))},te=n(96),ne=Object(s.o)((function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),h=s[0],E=s[1];Object(a.useEffect)((function(){(function(){return x.apply(this,arguments)})().then((function(e){console.log(e),console.log(e.data),o(e.data.users),E(!1)}))}),[]);var b=function(){e.history.push("users/create")};return r.a.createElement(d.a,{style:{marginTop:"2em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,null,h&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Benutzer"),sessionStorage.getItem("admin_role")&&r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){b()}},"Add"),r.a.createElement(te.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"E-Mail"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,c.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.email,"  ",e.first_name," ",e.last_name),r.a.createElement("td",null,r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){b()}},"Edit")))}))))))))}));var ae=Object(s.o)((function(e){var t=Object(a.useState)({id:0,description:"",title:""}),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),h=s[0],E=s[1],b=Object(a.useState)(!1),g=Object(l.a)(b,2),v=g[0],O=g[1];Object(a.useEffect)((function(){"create"!==e.mode?function(e){return T.apply(this,arguments)}(e.match.params.id).then((function(e){console.log(e.data),o(e.data.user),E(!1)})):E(!1)}),[]);var y=function(t){"create"===e.mode?function(e){return C.apply(this,arguments)}(c).then((function(t){E(!1),e.history.push("/users")})).catch((function(e){return E(!1)})):function(e,t){return N.apply(this,arguments)}(t,c).then((function(t){E(!1),e.history.push("/users")})).catch((function(e){return E(!1)}))},j=function(e){var t=e.target.name,n="checkbox"===e.target.type?e.target.checked:e.target.value;o(Object(J.a)({},c,Object(M.a)({},t,n))),O(!0)};return r.a.createElement(d.a,{style:{marginTop:"2em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,null,h&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(F.a,null,r.a.createElement("label",null,"email"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.email,name:"email",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.title,name:"title",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(m.a,{disabled:!v,type:"button",variant:"primary",onClick:function(){y(c.id)}},"Save"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"normal",onClick:function(){e.history.goBack()}},"Cancel"))))))})),re=n(37),ce=(n(139),function(e){var t=Object(a.useState)({password:"",email:""}),n=Object(l.a)(t,2),c=n[0],o=n[1],u=function(e){o(Object(J.a)({},c,Object(M.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},function(e){return r.a.createElement(re.a,{onSubmit:function(t){return e.onSubmit(t,c)}},r.a.createElement(re.a.Group,{controlId:"formBasicEmail"},r.a.createElement(re.a.Label,null,"Email address"),r.a.createElement(re.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:c.email,onChange:function(e){return u(e)}}),r.a.createElement(re.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(re.a.Group,{controlId:"formBasicPassword"},r.a.createElement(re.a.Label,null,"Password"),r.a.createElement(re.a.Control,{type:"password",name:"password",placeholder:"Password",value:c.password,onChange:function(e){return u(e)}})),r.a.createElement(m.a,{variant:"primary",type:"submit",className:"login-btn"},"Submit"))}(e)))))}),oe=function(){return r.a.createElement("div",{style:{background:"#fff",marginTop:"2em"}},r.a.createElement("h1",null,"404 Not Found"))},le=n(53),ue=n(97),se=(n(89),Object(s.o)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{sticky:"top",bg:"light"},r.a.createElement(le.a,{className:"mr-auto",variant:"pills"},r.a.createElement(le.a.Item,null,r.a.createElement(u.Link,{to:"/courses"}," Courses ")),r.a.createElement(le.a.Item,null,r.a.createElement(u.Link,{to:"/calendar"}," Calendar ")),sessionStorage.getItem("admin_role")&&r.a.createElement(le.a.Item,null,r.a.createElement(u.Link,{to:"/users"}," Users"))),r.a.createElement(m.a,{onClick:function(t){return e.doSignOut(t)},variant:"outline-primary"},"Logout")),e.children)})));var ie=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){sessionStorage.getItem("token")&&c(!0)}),[c]);var o=function(e){e.preventDefault(),console.log("sign out"),function(){return k.apply(this,arguments)}().then((function(e){c(!1),sessionStorage.remotItemt("token")})).catch((function(e){return console.log(e)}))};return!n&&r.a.createElement("div",{className:"login"},r.a.createElement(ce,{onSubmit:function(e,t){e.preventDefault(),function(e){return w.apply(this,arguments)}(t).then((function(e){console.log(e),e&&e.is_success&&(c(!0),sessionStorage.setItem("token",e.data.user.authentication_token),sessionStorage.setItem("user_role",e.data.user_role),sessionStorage.setItem("admin_role",e.data.admin_role))})).catch((function(e){return console.log(e)}))}}))||r.a.createElement(u.BrowserRouter,null,r.a.createElement(s.g,null,r.a.createElement(s.d,{exact:!0,path:"/"},r.a.createElement(se,{doSignOut:o},r.a.createElement(ee,null))),r.a.createElement(s.d,{exact:!0,path:"/courses"},r.a.createElement(se,{doSignOut:o},r.a.createElement(D,null))),r.a.createElement(s.d,{exact:!0,path:"/courses/:id/edit"},r.a.createElement(se,{doSignOut:o},r.a.createElement(P,null))),r.a.createElement(s.d,{exact:!0,path:"/courses/create"},r.a.createElement(se,{doSignOut:o},r.a.createElement(P,{mode:"create"}))),r.a.createElement(s.d,{exact:!0,path:"/courses/:id"},r.a.createElement(se,{doSignOut:o},r.a.createElement(Y,null))),r.a.createElement(s.d,{path:"/calendar"},r.a.createElement(se,{doSignOut:o},r.a.createElement(Z,null))),r.a.createElement(s.d,{path:"/users/create"},r.a.createElement(se,{doSignOut:o},r.a.createElement(ae,{mode:"create"}))),r.a.createElement(s.d,{path:"/users"},r.a.createElement(se,{doSignOut:o},r.a.createElement(ne,null))),r.a.createElement(s.d,{path:"/oops",component:oe}),r.a.createElement(s.c,{to:"/oops"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(141);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){},99:function(e,t,n){e.exports=n(142)}},[[99,1,2]]]);
//# sourceMappingURL=main.9d791b38.chunk.js.map