(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(26)},16:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),i=t.n(o),c=(t(16),t(3)),l=t(8),s=t(2),u=t(9),f=t(4),m=t.n(f),d=t(10),v=t(5),b={padding:"2rem 0rem"},p={margin:"1rem 0rem"},w=function(e){var n=e.db,t=Object(a.useState)({firstname:"",lastname:""}),o=Object(c.a)(t,2),i=o[0],l=o[1];Object(a.useEffect)(function(){return n.version(1).stores({formData:"id,value"}),n.transaction("rw",n.formData,Object(d.a)(m.a.mark(function e(){var t,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.formData.get("firstname");case 2:return t=e.sent,e.next=5,n.formData.get("lastname");case 5:if(a=e.sent,t){e.next=9;break}return e.next=9,n.formData.add({id:"firstname",value:""});case 9:if(a){e.next=12;break}return e.next=12,n.formData.add({id:"lastname",value:""});case 12:l({firstname:t?t.value:"",lastname:a?a.value:""});case 13:case"end":return e.stop()}},e,this)}))).catch(function(e){console.log(e.stack||e)}),function(){return n.close()}},[n]);var f=Object(a.useCallback)(function(e){return function(t){n.formData.put({id:e,value:t}),l(function(n){return Object(u.a)({},n,Object(s.a)({},e,t))})}},[n]),w=Object(a.useCallback)(function(e){return function(n){return f(e)(n.target.value)}},[n]),g=Object(a.useCallback)(function(e){e.preventDefault(),f("firstname")(""),f("lastname")("")},[n]);return r.a.createElement("form",{style:b,onSubmit:g},r.a.createElement("span",null,"First name:"),r.a.createElement("br",null),r.a.createElement("input",{style:p,type:"text",name:"firstname",value:i.firstname,onChange:w("firstname")}),r.a.createElement("br",null),r.a.createElement("span",null,"Last name:"),r.a.createElement("br",null),r.a.createElement("input",{style:p,type:"text",name:"lastname",value:i.lastname,onChange:w("lastname")}),r.a.createElement("br",null),r.a.createElement(v.Online,null,r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement(v.Offline,null,"You are currently offline!"))},g=function(){var e=Object(a.useState)(!0),n=Object(c.a)(e,2),t=n[0],o=n[1];return r.a.createElement("div",{style:{margin:"2rem auto",width:"200px"}},r.a.createElement("button",{onClick:function(){return o(!t)}},"".concat(t?"Close":"Open"," Form")),t&&r.a.createElement(w,{db:new l.a("FormDatabase")}))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-indexeddb-example",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-indexeddb-example","/service-worker.js");h?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(n,e)})}}()}},[[11,2,1]]]);
//# sourceMappingURL=main.9873b4b0.chunk.js.map