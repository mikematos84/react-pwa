(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(5),i=t.n(c),s=(t(11),t(12),t(2)),l=(t(13),function(e){var n=Object(a.useState)(null),t=Object(s.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],f=l[1];Object(a.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),c(e),f(!0)})),window.addEventListener("appinstalled",(function(e){console.log("a2hs installed")}))}),[]);return u&&o.a.createElement("div",{className:"AppInstall"},o.a.createElement("div",null,"Customer App Installer React PWA ",o.a.createElement("button",{onClick:function(){f(!1),r.prompt(),r.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))}},"Install")))}),u=t(1),f=t.n(u),d=t(3),p=(t(15),function(e){var n=Object(a.useState)({}),t=Object(s.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],p=l[1],v=Object(a.useRef)(),m=Object(a.useRef)();Object(a.useEffect)((function(){k()}),[]),Object(a.useEffect)((function(){var e=[];r.ondataavailable=function(n){return e.push(n.data)},r.onstop=function(n){var t=new Blob(e,{type:"video/mp4"});e=[];var r=(window.URL||window.webkitURL).createObjectURL(t);g(r)},r.onerror=function(e){console.log("Error recording stream"),console.log(e.error)},console.log("MediaRecorder ready")}),[r]),Object(a.useEffect)((function(){console.log("MediaRecorder state: ".concat(r.state))}),[r.state]);var w=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("recording"!==r.state){e.next=2;break}return e.abrupt("return");case 2:r.start(),p(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inactive"!==r.state){e.next=2;break}return e.abrupt("return");case 2:return r.stop(),p(!1),e.next=6,k();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){m.current&&(console.log("Playback URL: ".concat(e)),m.current.src=e)},b=function(e){v.current&&(v.current.srcObject=e)},E=function(e){return new Promise((function(n,t){try{var r=new MediaRecorder(e);console.log("New MediaRecorder created"),n(r)}catch(a){console.log("Error in creating new MediaRecorder"),t(a)}}))},k=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(d.a)(f.a.mark((function e(n,t){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(d.a)(f.a.mark((function e(n,t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}});case 3:r=e.sent,console.log("Stream fetched"),n(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in fetching stream"),t(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}());case 3:return r=e.sent,b(r),e.next=7,E(r);case 7:a=e.sent,c(a),n(a),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error in initializing MediaRecorder of fetching media devices stream"),t(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("button",{onClick:u?h:w,className:u?"recording":""},u?"Stop":"Start"," Recording ")),o.a.createElement("div",null,o.a.createElement("h3",null,"Recorder"),o.a.createElement("video",{className:"recorder",ref:v,autoPlay:!0,playsInline:!0,muted:!0})),o.a.createElement("div",null,o.a.createElement("h3",null,"Playback"),o.a.createElement("video",{className:"player",controls:!0,ref:m,autoPlay:!0,playsInline:!0})))}),v=(r=function(e){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Camera"),o.a.createElement(p,null))},function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null),o.a.createElement(r,null))}),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.ca9aaac0.chunk.js.map