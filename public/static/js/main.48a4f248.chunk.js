(this.webpackJsonpnano_lms=this.webpackJsonpnano_lms||[]).push([[0],{102:function(e,t,a){e.exports=a(145)},142:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(7),u=a(15),s=a(45),i=a(16),m=a(9),p=a(20),d=a(17),f=a(13),E=a(62),h=a(61),b=a(8),g=a.n(b),v=a(18),y=a(19),O=a.n(y),j="https://deutschkursorga.de/api/v1",w=function(){return sessionStorage.getItem("token")};function k(){return(k=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/sign_in"),e.next=3,O.a.post(a,{sign_in:t}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/sign_out"),e.next=3,O.a.post(t).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(j,"/users"),e.next=3,O.a.get(t,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/users/").concat(t),e.next=3,O.a.get(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/users"),e.next=3,O.a.post(a,{user:t},{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(v.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/users/").concat(t),e.next=3,O.a.put(n,{user:a},{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return D.apply(this,arguments)}function D(){return(D=Object(v.a)(g.a.mark((function e(){var t,a,n=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,a="".concat(j,"/courses?page=").concat(t),e.next=4,O.a.get(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/courses/").concat(t),e.next=3,O.a.get(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/courses/").concat(t),e.next=3,O.a.delete(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(v.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/courses/").concat(t),e.next=3,O.a.put(n,{course:a},{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(){return(Y=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a="".concat(j,"/courses"),e.next=4,O.a.post(a,{course:{title:t.title,description:t.description}},{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return U.apply(this,arguments)}function U(){return(U=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/events/").concat(t),e.next=3,O.a.get(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(){var e=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{},e.next=3,O.a.get("".concat(j,"/events"),{headers:{"AUTH-TOKEN":w()}}).then((function(e){return console.log("response:"),console.log(e),e.data})).catch((function(e){return console.log(e)}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function q(){return(q=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a="".concat(j,"/events"),e.next=4,O.a.post(a,{start:t.start.format(),end:t.end.format(),title:t.title,courses_id:"undefined"!==typeof t.coursesId?Number(t.coursesId):null},{headers:{"AUTH-TOKEN":w(),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(){var e=Object(v.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(j,"/events/").concat(t),e.next=3,O.a.put(n,{event:{start:a.start,end:a.end,title:a.title,courses_id:"undefined"!==typeof a.coursesId?Number(a.coursesId):null}},{headers:{"AUTH-TOKEN":w(),Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function F(){return(F=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(j,"/events/").concat(t),e.next=3,O.a.delete(a,{headers:{"AUTH-TOKEN":w()}}).then((function(e){return e.data})).catch((function(e){console.log("request failed: ".concat(e))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=a(35),z=a.n(P);var W=Object(s.o)((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),b=s[0],g=s[1];Object(n.useEffect)((function(){K().then((function(e){console.log(e.data),l(e.data.events),g(!1)}))}),[]);return b?r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"Termine"),sessionStorage.getItem("admin_role")&&r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){e.history.push("events/create")}},"Add"),r.a.createElement(E.a,{striped:!0,bordered:!0,hover:!0,size:"sm",style:{marginTop:"8px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Datum"),r.a.createElement("th",null,"Kurs"))),r.a.createElement("tbody",null,c.map((function(e){var t=String(function(e,t){var a=z()(new Date(e)),n=z()(new Date(t));return a.format("DDMMY")==n.format("DDMMY")?"".concat(a.format("DD.MM.Y"),"  ").concat(a.format("HH:mm")," - ").concat(n.format("HH:mm")):"".concat(a.format("DD.MM.Y"),"  ").concat(a.format("HH:mm")," - ").concat(n.format("HH:mm")," (").concat(n.format("DD.MM.Y"),")")}(e.start,e.end));return console.log(t),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(h.LinkContainer,{to:"/events/".concat(e.id)},r.a.createElement("h2",{key:e.id},e.title))),r.a.createElement("td",null,t),r.a.createElement("td",null,e.course_id))})))))))})),G=a(28),J=a(36),R=a(32),$=a(51),Q=a.n($);var V=Object(s.o)((function(e){var t=Object(n.useState)({id:0,start:"",end:"",title:""}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),E=s[0],h=s[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),v=g[0],y=g[1];Object(n.useEffect)((function(){"create"!==e.mode?M(e.match.params.id).then((function(e){console.log(e.data),l(e.data.event),h(!1)})):h(!1)}),[]);var O=function(t){"create"===e.mode?function(e){return q.apply(this,arguments)}(c).then((function(t){h(!1),e.history.push("/events")})).catch((function(e){return h(!1)})):B(t,c).then((function(t){h(!1),e.history.push("/events")})).catch((function(e){return h(!1)}))},j=function(e,t){var a=e;l(Object(J.a)({},c,Object(G.a)({},t,a))),y(!0)};return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,E&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(R.a,null,r.a.createElement("label",null,"title"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.title,name:"title",onChange:function(e){console.log(c);var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;l(Object(J.a)({},c,Object(G.a)({},t,a))),y(!0)},style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"start"),r.a.createElement("br",null),r.a.createElement(Q.a,{dateFormat:"DD.MM.YYYY",value:c.start,name:"start",onChange:function(e){j(e,"start")}}),r.a.createElement("label",null,"end"),r.a.createElement("br",null),r.a.createElement(Q.a,{dateFormat:"DD.MM.YYYY",value:c.end,name:"end",onChange:function(e){j(e,"end")}}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(m.a,{disabled:!v,type:"button",variant:"primary",onClick:function(){O(c.id)}},"Save"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"normal",onClick:function(){e.history.goBack()}},"Cancel"))))))}));var X=Object(s.o)((function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),E=s[0],h=s[1];Object(n.useEffect)((function(){M(e.match.params.id).then((function(e){console.log(e.data),l(e.data),h(!1)}))}),[]);var b=function(t){(function(e){return F.apply(this,arguments)})(t).then((function(t){h(!1),e.history.push("/events")})).catch((function(e){return h(!1)}))};return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,E&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(R.a,null,r.a.createElement("h2",null,c.event.title),r.a.createElement("p",null,c.event.start),r.a.createElement("p",null,c.event.end),r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement(m.a,{type:"button",variant:"secondary",onClick:function(){e.history.goBack()}},"Cancel"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){var t;t=c.event.id,e.history.push({pathname:"/events/".concat(t,"/edit")})}},"Edit"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"danger",onClick:function(){window.confirm("Delete?")&&b(c.event.id)}},"Delete"))))))})),Z=a(31),ee=a(47);var te=Object(s.o)((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),E=Object(o.a)(u,2),b=E[0],g=E[1],v=new URLSearchParams(Object(s.l)().search);Object(n.useEffect)((function(){H(v.get("page")||1).then((function(e){l(e.data),g(!1)}))}),[]);var y=function(){return c.courses.map((function(e){return r.a.createElement(Z.a,{style:{marginTop:"4px"}},r.a.createElement(Z.a.Header,null,e.title),r.a.createElement(Z.a.Body,null,r.a.createElement(Z.a.Text,null,e.description),r.a.createElement(h.LinkContainer,{to:"/courses/".concat(e.id)},r.a.createElement(m.a,{variant:"primary"},"mehr ..."))))}))};if(b)return r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."));var O=new Array(c.pager.total_pages).fill(1);return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement("h1",null,"Kurse"),sessionStorage.getItem("admin_role")&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){e.history.push("courses/create")}},"Add"),y())||y())),r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(ee.a,{onClick:function(e){console.log(e.target)}},r.a.createElement(ee.a.First,{href:"courses?page=1"}),c.pager&&c.pager.prev_page&&r.a.createElement(ee.a.Prev,{value:"1",href:"courses?page=".concat(c.pager.prev_page)}),O.map((function(e,t){var a=t+1;return c.pager.current_page===a?r.a.createElement(ee.a.Item,{active:!0},a):r.a.createElement(ee.a.Item,{href:"courses?page=".concat(a)},a)})),c.pager&&c.pager.next_page&&r.a.createElement(ee.a.Next,{value:"1",href:"courses?page=".concat(c.pager.next_page)}),r.a.createElement(ee.a.Last,{href:"courses?page=".concat(c.pager.total_pages)})))))}));var ae=Object(s.o)((function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),E=s[0],h=s[1];Object(n.useEffect)((function(){_(e.match.params.id).then((function(e){console.log(e.data),l(e.data),h(!1)}))}),[]);var b=function(t){(function(e){return A.apply(this,arguments)})(t).then((function(t){h(!1),e.history.push("/courses")})).catch((function(e){return h(!1)}))};return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,E&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(R.a,null,r.a.createElement("h2",null,c.course.title),r.a.createElement("p",null,c.course.description),c.events.map((function(e){return r.a.createElement(Z.a,{style:{marginTop:"4px"}},r.a.createElement(Z.a.Header,null,e.title),r.a.createElement(Z.a.Body,null,r.a.createElement(Z.a.Text,null,e.start," - ",e.end)))})),r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement(m.a,{type:"button",variant:"secondary",onClick:function(){e.history.goBack()}},"Cancel"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){var t;t=c.course.id,e.history.push({pathname:"/courses/".concat(t,"/edit")})}},"Edit"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"danger",onClick:function(){window.confirm("Delete?")&&b(c.course.id)}},"Delete"))))))}));var ne=Object(s.o)((function(e){var t=Object(n.useState)({id:0,description:"",title:""}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),E=s[0],h=s[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),v=g[0],y=g[1];Object(n.useEffect)((function(){"create"!==e.mode?_(e.match.params.id).then((function(e){console.log(e.data),l(e.data.course),h(!1)})):h(!1)}),[]);var O=function(t){"create"===e.mode?function(e){return Y.apply(this,arguments)}(c).then((function(t){h(!1),e.history.push("/courses")})).catch((function(e){return h(!1)})):function(e,t){return L.apply(this,arguments)}(t,c).then((function(t){h(!1),e.history.push("/courses")})).catch((function(e){return h(!1)}))},j=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;l(Object(J.a)({},c,Object(G.a)({},t,a))),y(!0)};return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,E&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(R.a,null,r.a.createElement("label",null,"title"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.title,name:"title",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"description"),r.a.createElement("br",null),r.a.createElement("textarea",{style:{height:"10em",width:"100%",border:"none"},value:c.description,onChange:j,name:"description"}),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(m.a,{disabled:!v,type:"button",variant:"primary",onClick:function(){O(c.id)}},"Save"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"normal",onClick:function(){e.history.goBack()}},"Cancel"))))))})),re=a(99),ce=a(79),le=a(52),oe=(a(140),a(141),Object(ce.b)(z.a)),ue=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(0),s=Object(o.a)(u,2),p=s[0],d=s[1],f=Object(n.useState)({events:[]}),E=Object(o.a)(f,2),h=E[0],b=E[1],g=Object(n.useState)(!0),v=Object(o.a)(g,2),y=v[0],O=v[1],j=function(e){return e.events=e.events.map((function(e,t){return function(e,t){var a=new Date(e.start),n=new Date(e.end),r=z()(a),c=z()(n);return e.title=e.title+" "+r.format("HH:mm")+"-"+c.format("HH:mm"),e.start=a,e.end=n,e}(e)})),e};Object(n.useEffect)((function(){console.log("Calendar"),K().then((function(e){if(console.log("response.data"),console.log(e.data.events),e.data){var t=j(e.data);b({events:t.events})}O(!1)})).catch((function(e){return console.log(e)}))}),[]);var w,k=function(){l(0)},S=function(e){return h.events.find((function(t){return t.id===e}))};return y?r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("div",{style:{height:"100%",minHeight:600,padding:"10px"}},r.a.createElement(ce.a,{localizer:oe,events:h.events,startAccessor:"start",endAccessor:"end",style:{height:500},culture:"de",selectable:!0,onSelectEvent:function(e,t){return function(e,t){console&&console.log(h),d(t.id),l(1),console&&console.log(e,t)}(t,e)},onSelectSlot:function(e){var t=e.start,a=e.end,n=window.prompt("Event name");n&&b({events:[].concat(Object(re.a)(h.events),[{start:t,end:a,title:n}])})}}),r.a.createElement(le.a,{show:c,onHide:k},r.a.createElement(le.a.Header,{closeButton:!0},r.a.createElement(le.a.Title,null,p&&S(p).title)),r.a.createElement(le.a.Body,null,p&&(w=S(p),r.a.createElement(r.a.Fragment,null,"Start: ",r.a.createElement(Q.a,{dateFormat:"DD.MM.YYYY",value:w.start}),"End: ",r.a.createElement(Q.a,{dateFormat:"DD.MM.YYYY",value:w.end})))),r.a.createElement(le.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:k},"Close"),r.a.createElement(m.a,{variant:"primary",onClick:function(){!function(e){B(S(e)),l(0)}(p)}},"Save Changes"))))},se=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(!0),l=Object(o.a)(c,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){H().then((function(e){console.log(e.data),a(e.data.courses),s(!1)}))}),[]),u?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",{style:{background:"#fff",marginTop:"2em"}},r.a.createElement("h1",null,"Dashboard"),r.a.createElement("p",null,"Hallo!"))},ie=Object(s.o)((function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),h=s[0],b=s[1];Object(n.useEffect)((function(){(function(){return x.apply(this,arguments)})().then((function(e){console.log(e),console.log(e.data),l(e.data.users),b(!1)}))}),[]);return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,h&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Benutzer"),sessionStorage.getItem("admin_role")&&r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){e.history.push("users/create")}},"Add"),r.a.createElement(E.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"E-Mail"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,c.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.email,"  ",t.first_name," ",t.last_name),r.a.createElement("td",null,r.a.createElement(m.a,{type:"button",variant:"primary",onClick:function(){var a;a=t.id,e.history.push("users/".concat(a,"/edit"))}},"Edit")))}))))))))}));var me=Object(s.o)((function(e){var t=Object(n.useState)({id:0,username:"",email:""}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=Object(n.useState)(!0),s=Object(o.a)(u,2),E=s[0],h=s[1],b=Object(n.useState)(!1),g=Object(o.a)(b,2),v=g[0],y=g[1];Object(n.useEffect)((function(){"create"!==e.mode?function(e){return T.apply(this,arguments)}(e.match.params.id).then((function(e){console.log(e.data),l(e.data.user),h(!1)})):h(!1)}),[]);var O=function(t){"create"===e.mode?function(e){return C.apply(this,arguments)}(c).then((function(t){h(!1),e.history.push("/users")})).catch((function(e){return h(!1)})):function(e,t){return N.apply(this,arguments)}(t,c).then((function(t){h(!1),e.history.push("/users")})).catch((function(e){return h(!1)}))},j=function(e){var t=e.target.name,a="checkbox"===e.target.type?e.target.checked:e.target.value;l(Object(J.a)({},c,Object(G.a)({},t,a))),y(!0)};return r.a.createElement(p.a,{style:{marginTop:"2em"}},r.a.createElement(d.a,null,r.a.createElement(f.a,null,E&&r.a.createElement(i.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))||r.a.createElement(R.a,null,r.a.createElement("label",null,"email"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.email,name:"email",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"username"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.username,name:"username",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),"create"===e.mode&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"password"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.password,name:"password",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null),r.a.createElement("label",null,"password confirmation"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:c.password_confirmation,name:"password_confirmation",onChange:j,style:{width:"100%"}}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement(m.a,{disabled:!v,type:"button",variant:"primary",onClick:function(){O(c.id)}},"Save"),"\xa0",r.a.createElement(m.a,{type:"button",variant:"normal",onClick:function(){e.history.goBack()}},"Cancel"))))))})),pe=a(42),de=(a(142),function(e){var t=Object(n.useState)({password:"",email:""}),a=Object(o.a)(t,2),c=a[0],l=a[1],u=function(e){l(Object(J.a)({},c,Object(G.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-center h-100"},r.a.createElement("div",{className:"card zoomInUp animated"},r.a.createElement("div",{className:"card-header"},function(e){return r.a.createElement(pe.a,{onSubmit:function(t){return e.onSubmit(t,c)}},r.a.createElement(pe.a.Group,{controlId:"formBasicEmail"},r.a.createElement(pe.a.Label,null,"Email address"),r.a.createElement(pe.a.Control,{type:"email",name:"email",placeholder:"Enter email",value:c.email,onChange:function(e){return u(e)}}),r.a.createElement(pe.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(pe.a.Group,{controlId:"formBasicPassword"},r.a.createElement(pe.a.Label,null,"Password"),r.a.createElement(pe.a.Control,{type:"password",name:"password",placeholder:"Password",value:c.password,onChange:function(e){return u(e)}})),r.a.createElement(m.a,{variant:"primary",type:"submit",className:"login-btn"},"Submit"))}(e)))))}),fe=function(){return r.a.createElement("div",{style:{background:"#fff",marginTop:"2em"}},r.a.createElement("h1",null,"404 Not Found"))},Ee=a(53),he=a(98),be=(a(92),Object(s.o)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{sticky:"top",bg:"light"},r.a.createElement(Ee.a,{className:"mr-auto",variant:"pills"},r.a.createElement(Ee.a.Item,null,r.a.createElement(u.Link,{to:"/courses"}," Courses ")),r.a.createElement(Ee.a.Item,null,r.a.createElement(u.Link,{to:"/calendar"}," Calendar ")),r.a.createElement(Ee.a.Item,null,r.a.createElement(u.Link,{to:"/events"}," Termine ")),sessionStorage.getItem("admin_role")&&r.a.createElement(Ee.a.Item,null,r.a.createElement(u.Link,{to:"/users"}," Users"))),r.a.createElement(m.a,{onClick:function(t){return e.doSignOut(t)},variant:"outline-primary"},"Logout")),e.children)})));var ge=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){sessionStorage.getItem("token")&&c(!0)}),[c]);var l=function(e){e.preventDefault(),console.log("sign out"),function(){return S.apply(this,arguments)}().then((function(e){c(!1),sessionStorage.remotItemt("token")})).catch((function(e){return console.log(e)}))};return!a&&r.a.createElement("div",{className:"login"},r.a.createElement(de,{onSubmit:function(e,t){e.preventDefault(),function(e){return k.apply(this,arguments)}(t).then((function(e){console.log(e),e&&e.is_success&&(c(!0),sessionStorage.setItem("token",e.data.user.authentication_token),sessionStorage.setItem("user_role",e.data.user.user_role),sessionStorage.setItem("admin_role",e.data.user.admin_role))})).catch((function(e){return console.log(e)}))}}))||r.a.createElement(u.BrowserRouter,null,r.a.createElement(s.g,null,r.a.createElement(s.d,{exact:!0,path:"/"},r.a.createElement(be,{doSignOut:l},r.a.createElement(se,null))),r.a.createElement(s.d,{exact:!0,path:"/events"},r.a.createElement(be,{doSignOut:l},r.a.createElement(W,null))),r.a.createElement(s.d,{exact:!0,path:"/events/:id/edit"},r.a.createElement(be,{doSignOut:l},r.a.createElement(V,null))),r.a.createElement(s.d,{exact:!0,path:"/events/create"},r.a.createElement(be,{doSignOut:l},r.a.createElement(V,{mode:"create"}))),r.a.createElement(s.d,{exact:!0,path:"/events/:id"},r.a.createElement(be,{doSignOut:l},r.a.createElement(X,null))),r.a.createElement(s.d,{exact:!0,path:"/courses"},r.a.createElement(be,{doSignOut:l},r.a.createElement(te,null))),r.a.createElement(s.d,{exact:!0,path:"/courses/:id/edit"},r.a.createElement(be,{doSignOut:l},r.a.createElement(ne,null))),r.a.createElement(s.d,{exact:!0,path:"/courses/create"},r.a.createElement(be,{doSignOut:l},r.a.createElement(ne,{mode:"create"}))),r.a.createElement(s.d,{exact:!0,path:"/courses/:id"},r.a.createElement(be,{doSignOut:l},r.a.createElement(ae,null))),r.a.createElement(s.d,{path:"/calendar"},r.a.createElement(be,{doSignOut:l},r.a.createElement(ue,null))),r.a.createElement(s.d,{exact:!0,path:"/users/:id/edit"},r.a.createElement(be,{doSignOut:l},r.a.createElement(me,null))),r.a.createElement(s.d,{path:"/users/create"},r.a.createElement(be,{doSignOut:l},r.a.createElement(me,{mode:"create"}))),r.a.createElement(s.d,{path:"/users"},r.a.createElement(be,{doSignOut:l},r.a.createElement(ie,null))),r.a.createElement(s.d,{path:"/oops",component:fe}),r.a.createElement(s.c,{to:"/oops"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(144);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.48a4f248.chunk.js.map