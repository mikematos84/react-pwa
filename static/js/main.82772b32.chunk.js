(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var o,a=t(0),r=t.n(a),c=t(4),i=t.n(c),l=(t(11),t(12),t(13),t(1)),s=(t(14),function(e){var n=Object(a.useState)(null),t=Object(l.a)(n,2),o=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(l.a)(i,2),u=s[0],f=s[1];Object(a.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),c(e),f(!0)})),window.addEventListener("appinstalled",(function(e){console.log("a2hs installed")}))}),[]);return u&&r.a.createElement("div",{className:"AppInstall"},r.a.createElement("div",null,"Customer App Installer React PWA ",r.a.createElement("button",{onClick:function(){f(!1),o.prompt(),o.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))}},"Install")))}),u=t(2),f=t.n(u),d=t(5),p=function(e){var n=Object(a.useState)(null),t=Object(l.a)(n,2),o=t[0],c=t[1],i=Object(a.useRef)();Object(a.useEffect)((function(){return s(),function(){}}),[]),Object(a.useEffect)((function(){o&&i.current&&!i.current.srcObject&&(i.current.srcObject=o)}),[o]);var s=function(){var e=Object(d.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}});case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{ref:i,onCanPlay:function(){i.current.play()},autoPlay:!0,playsInline:!0,muted:!0}))},v=(o=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))},function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(o,null))}),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa","/service-worker.js");h?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(n,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.82772b32.chunk.js.map