(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(12),l=n.n(o),i=(n(25),n(9)),u=function(e){var t=Object(r.useState)(null),n=Object(i.a)(t,2),a=n[0],o=n[1],l=Object(r.useState)(!1),u=Object(i.a)(l,2),s=u[0],d=u[1];Object(r.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),o(e),d(!0)})),window.addEventListener("appinstalled",(function(e){console.log("a2hs installed")}))}),[]);return s&&c.a.createElement("div",{className:"AppInstall"},c.a.createElement("div",null,"Customer App Installer React PWA ",c.a.createElement("button",{onClick:function(){d(!1),a.prompt(),a.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))}},"Install")))},s=n(6),d=n(7),m=function(e){return c.a.createElement("ul",{className:"navigation"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/default-camera-input"},"Default Camera Input")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/media-recorder-capture"},"MediaRecorder Capture")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/sandbox"},"Sandbox")))},f=window.navigator.userAgent.toLowerCase(),p=window.navigator.vendor.toLocaleLowerCase(),E=function(){return!("undefined"===typeof MediaRecorder)},v=function(){return c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"User Agent"),c.a.createElement("td",null,f.toString())),c.a.createElement("tr",null,c.a.createElement("td",null,"Is iOS"),c.a.createElement("td",null,/iphone|ipad|ipod/.test(f).toString())),c.a.createElement("tr",null,c.a.createElement("td",null,"Is Safari"),c.a.createElement("td",null,/apple/.test(p).toString())),c.a.createElement("tr",null,c.a.createElement("td",null,"Has MediaRecorder"),c.a.createElement("td",null,E().toString())),c.a.createElement("tr",null,c.a.createElement("td",null,"Environment"),c.a.createElement("td",null,"production")),c.a.createElement("tr",null,c.a.createElement("td",null,"Public URL"),c.a.createElement("td",null,"/react-pwa"))))},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e.pathname;return t.substring(t.lastIndexOf("/")+1).split("?")[0]},w=function(e){return c.a.createElement("div",{className:b(e.location)},c.a.createElement("div",null,"Determining best video capture method..."),E()?c.a.createElement(d.a,{to:"/media-recorder-capture"}):c.a.createElement(d.a,{to:"/default-camera-input"}))},g=function(e){return c.a.createElement("div",{className:b(e.location)},c.a.createElement("div",null,"Not Found"))},h=n(4),y=n.n(h),k=n(10),O=function(e){var t=Object(r.useState)({}),n=Object(i.a)(t,2),a=n[0],o=n[1],u=Object(r.useState)(!1),s=Object(i.a)(u,2),d=s[0],m=s[1],f=Object(r.useRef)(),p=Object(r.useRef)();Object(r.useEffect)((function(){O()}),[]),Object(r.useEffect)((function(){var e=[];a.ondataavailable=function(t){return e.push(t.data)},a.onstop=function(t){var n=new Blob(e,{type:"video/mp4"});e=[];var a=(window.URL||window.webkitURL).createObjectURL(n);w(a),E(a)},a.onerror=function(e){console.log("Error recording stream"),console.log(e.error)},console.log("MediaRecorder ready")}),[a]);var E=function(e){var t=c.a.createElement("a",{href:e,download:"Recording.mp4"},"Download"),n=document.getElementById("download-link");l.a.render(t,n)};Object(r.useEffect)((function(){console.log("MediaRecorder state: ".concat(a.state))}),[a.state]);var v=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("recording"!==a.state){e.next=2;break}return e.abrupt("return");case 2:a.start(),m(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inactive"!==a.state){e.next=2;break}return e.abrupt("return");case 2:return a.stop(),m(!1),e.next=6,O();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){p.current&&(console.log("Playback URL: ".concat(e)),p.current.src=e)},g=function(e){f.current&&(f.current.srcObject=e)},h=function(e){return new Promise((function(t,n){try{var a=new MediaRecorder(e);console.log("New MediaRecorder created"),t(a)}catch(r){console.log("Error in creating new MediaRecorder"),n(r)}}))},O=function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(k.a)(y.a.mark((function e(t,n){var a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(k.a)(y.a.mark((function e(t,n){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}});case 3:a=e.sent,console.log("Stream fetched"),t(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in fetching stream"),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 3:return a=e.sent,g(a),e.next=7,h(a);case 7:r=e.sent,o(r),t(r),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error in initializing MediaRecorder of fetching media devices stream"),n(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"MediaRecorder"),c.a.createElement("div",null,c.a.createElement("button",{onClick:d?b:v,className:d?"recording":""},d?"Stop":"Start"," Recording ")),c.a.createElement("div",null,c.a.createElement("h3",null,"MediaRecorderCapture"),c.a.createElement("video",{className:"recorder",ref:f,autoPlay:!0,playsInline:!0,muted:!0})),c.a.createElement("div",null,c.a.createElement("h3",null,"Playback"),c.a.createElement("video",{className:"player",controls:!0,ref:p,autoPlay:!0,playsInline:!0})),c.a.createElement("div",{id:"download-link"}))},R=function(e){return c.a.createElement("div",{className:b(e.location)},c.a.createElement(O,null))},j=function(e){var t=Object(r.useRef)();Object(r.useEffect)((function(){n()}),[]);var n=function(){var e=document.getElementById("file-input");e.addEventListener("change",(function(n){t.current.src=(window.webkitURL||window.URL).createObjectURL(e.files[0])}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Camera Input"),c.a.createElement("input",{type:"file",accept:"video/*",id:"file-input",capture:"user"}),c.a.createElement("div",null,c.a.createElement("h3",null,"Playback"),c.a.createElement("video",{className:"player",controls:!0,ref:t,autoPlay:!0,playsInline:!0})))},x=function(e){return c.a.createElement("div",{className:b(e.location)},c.a.createElement(j,null))},S=n(35),L=function(e){var t=Object(S.a)();return c.a.createElement("div",{className:b(e.location)},c.a.createElement("pre",null,JSON.stringify(t,null,2)))},N=(a=function(e){return c.a.createElement(s.a,{basename:"/react-pwa"},c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement("div",{className:"App"},c.a.createElement(m,null),v(),c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/",exact:!0,component:w}),c.a.createElement(d.b,{path:"/default-camera-input",component:x}),c.a.createElement(d.b,{path:"/media-recorder-capture",component:R}),c.a.createElement(d.b,{path:"/sandbox",component:L}),c.a.createElement(d.b,{component:g})))))},function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(a,null))}),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(c.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-pwa","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.56a80b2e.chunk.js.map