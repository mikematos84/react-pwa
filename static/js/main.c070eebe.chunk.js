(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{32:function(e,t,n){e.exports=n(65)},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=(n(37),n(2)),l=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!1),u=Object(i.a)(l,2),s=u[0],d=u[1];Object(a.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),o(e),d(!0)})),window.addEventListener("appinstalled",(function(e){console.log("a2hs installed")}))}),[]);return s&&r.a.createElement("div",{className:"AppInstall"},r.a.createElement("div",null,"Customer App Installer React PWA ",r.a.createElement("button",{onClick:function(){d(!1),c.prompt(),c.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))}},"Install")))},u=n(8),s=n(10),d=function(e){return r.a.createElement("ul",{className:"navigation"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/default-camera-input"},"Default Camera Input")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/media-recorder-capture"},"MediaRecorder Capture")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/sandbox"},"Sandbox")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/vad-time-slicing"},"VAD Time Slicing")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/convert-vad-data"},"Convert VAD Data")))},m=(window.navigator.userAgent.toLowerCase(),window.navigator.vendor.toLocaleLowerCase(),function(){return!("undefined"===typeof MediaRecorder)}),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pathname;if(t)return t.substring(t.lastIndexOf("/")+1).split("?")[0]},p={location:{},match:{}},v=r.a.createContext(p),b=function(e){return function(t){var n=Object(a.useState)(p),c=Object(i.a)(n,2),o=c[0],l=c[1];return r.a.createElement(v.Provider,{value:{navigation:o,setNavigation:l}},r.a.createElement(e,{props:t}))}},h=function(e){return function(t){var n=Object(a.useContext)(v).setNavigation;return Object(a.useEffect)((function(){var e=t.location,a=t.match;n({location:e,match:a})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(e,{props:t}))}},E=h((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Determining best video capture method..."),m()?r.a.createElement(s.a,{to:"/media-recorder-capture"}):r.a.createElement(s.a,{to:"/default-camera-input"}))})),g=h((function(e){return r.a.createElement("div",{className:"wrapper content"},r.a.createElement("div",null,"Not Found"))})),w=n(1),j=n.n(w),O=n(7),y=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)(!1),s=Object(i.a)(u,2),d=s[0],m=s[1],f=Object(a.useRef)(),p=Object(a.useRef)();Object(a.useEffect)((function(){y()}),[]),Object(a.useEffect)((function(){var e=[];c.ondataavailable=function(t){return e.push(t.data)},c.onstop=function(t){var n=new Blob(e,{type:"video/mp4"});e=[];var a=(window.URL||window.webkitURL).createObjectURL(n);E(a),v(a)},c.onerror=function(e){console.log("Error recording stream"),console.log(e.error)},console.log("MediaRecorder ready")}),[c]);var v=function(e){var t=r.a.createElement("a",{href:e,download:"Recording.mp4"},"Download"),n=document.getElementById("download-link");o.a.render(t,n)};Object(a.useEffect)((function(){console.log("MediaRecorder state: ".concat(c.state))}),[c.state]);var b=function(){var e=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("recording"!==c.state){e.next=2;break}return e.abrupt("return");case 2:c.start(),m(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("inactive"!==c.state){e.next=2;break}return e.abrupt("return");case 2:return c.stop(),m(!1),e.next=6,y();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){p.current&&(console.log("Playback URL: ".concat(e)),p.current.src=e)},g=function(e){f.current&&(f.current.srcObject=e)},w=function(e){return new Promise((function(t,n){try{var a=new MediaRecorder(e);console.log("New MediaRecorder created"),t(a)}catch(r){console.log("Error in creating new MediaRecorder"),n(r)}}))},y=function(){var e=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(O.a)(j.a.mark((function e(t,n){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(O.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!0,video:{facingMode:"user"}});case 3:a=e.sent,console.log("Stream fetched"),t(a),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error in fetching stream"),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}());case 3:return a=e.sent,g(a),e.next=7,w(a);case 7:r=e.sent,l(r),t(r),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error in initializing MediaRecorder of fetching media devices stream"),n(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"MediaRecorder"),r.a.createElement("div",null,r.a.createElement("button",{onClick:d?h:b,className:d?"recording":""},d?"Stop":"Start"," Recording ")),r.a.createElement("div",null,r.a.createElement("h3",null,"MediaRecorderCapture"),r.a.createElement("video",{className:"recorder",ref:f,autoPlay:!0,playsInline:!0,muted:!0})),r.a.createElement("div",null,r.a.createElement("h3",null,"Playback"),r.a.createElement("video",{className:"player",controls:!0,ref:p,autoPlay:!0,playsInline:!0})),r.a.createElement("div",{id:"download-link"}))},S=h((function(e){return Object(a.useEffect)((function(){console.log(e)}),[]),r.a.createElement(y,null)})),x=function(e){var t=Object(a.useRef)();Object(a.useEffect)((function(){n()}),[]);var n=function(){var e=document.getElementById("file-input");e.addEventListener("change",(function(n){t.current.src=(window.webkitURL||window.URL).createObjectURL(e.files[0])}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Camera Input"),r.a.createElement("input",{type:"file",accept:"video/*",id:"file-input",capture:"user"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Playback"),r.a.createElement("video",{className:"player",controls:!0,ref:t,autoPlay:!0,playsInline:!0})))},k=function(e){return r.a.createElement(x,null)},C=n(67),R=h((function(e){var t=Object(C.a)();return r.a.createElement("div",{className:"wrapper content"},r.a.createElement("pre",null,JSON.stringify(t,null,2)))})),N=n(15),A=n(31),L=n.n(A),P=n(12),D=n.n(P),U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D.a.post("http://localhost:3001/save",{filename:e,data:t}).then((function(e){}))},M=h((function(e){var t=Object(a.useState)("inactive"),n=Object(i.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(0),u=Object(i.a)(l,2),s=u[0],d=u[1],m=Object(a.useState)([]),f=Object(i.a)(m,2),p=(f[0],f[1]),v=[],b=Object(a.useState)([]),h=Object(i.a)(b,2),E=h[0],g=h[1],w=[];return Object(a.useEffect)((function(){var e=document.querySelector("video"),t={};e.onloadedmetadata=function(){window.AudioContext=window.AudioContext||window.webkitAudioContext;var n=new AudioContext,a=e.captureStream(),r={fftSize:1024,bufferLen:1024,smoothingTimeConstant:.2,minCaptureFreq:85,maxCaptureFreq:255,noiseCaptureDuration:1e3,minNoiseLevel:.4,maxNoiseLevel:.7,avgNoiseMultiplier:1.2,onVoiceStart:function(){o("active");var t={seconds:e.currentTime,voiceState:"active"};g((function(e){return[].concat(Object(N.a)(e),[t])})),w.push(t)},onVoiceStop:function(){o("inactive");var t={seconds:e.currentTime,voiceState:"inactive"};g((function(e){return[].concat(Object(N.a)(e),[t])})),w.push(t)},onUpdate:function(t){d(t);var n={seconds:e.currentTime,voiceActivity:t};p((function(e){return[].concat(Object(N.a)(e),[n])})),v.push(n)}};(t=L()(n,a,r)).disconnect()},e.onplay=function(){console.log("video playing"),t.connect()},e.onpause=function(){console.log("video paused"),t.disconnect()},e.onended=function(){console.log("video ended"),t.disconnect(),console.log(w),U("vad-realtime-time-slices.json",w),setTimeout((function(){console.log(v),U("vad-realtime-activity-data.json",v)}),1e3)}}),[]),r.a.createElement("div",{className:"wrapper content"},r.a.createElement("h3",null,"VAD Time Slicing"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",null,r.a.createElement("video",{controls:!0,width:"100%",crossOrigin:"anonymous",src:"http://localhost:3001/President_Obamas_best_speeches.mp4"})),r.a.createElement("div",null,r.a.createElement("div",null,"Voice State: ",r.a.createElement("strong",null,c)),r.a.createElement("div",null,"Current voice activity value: ",r.a.createElement("strong",null,s)),r.a.createElement("pre",null,JSON.stringify(E,null,2)))))}));Object.defineProperty(Array.prototype,"cleanupTimeSlice",{value:function(){return this.map((function(e){return delete e.seconds,delete e.voiceState,e}))}});var _,I=h((function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=(n[0],n[1]),o=Object(a.useState)({}),l=Object(i.a)(o,2),u=l[0],s=l[1],d=Object(a.useState)({}),m=Object(i.a)(d,2),f=(m[0],m[1],Object(a.useState)({})),p=Object(i.a)(f,2),v=(p[0],p[1],Object(a.useState)({})),b=Object(i.a)(v,2);b[0],b[1];Object(a.useEffect)((function(){h(),E(),g(),w()}),[]);var h=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:3001/President_Obamas_best_speeches_no_audio-non-stream.json");case 2:t=e.sent,console.log(t.data.map((function(e){return delete e.audioData,e})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:3001/President_Obamas_best_speeches_no_audio-stream.json");case 2:t=e.sent,console.log(t.data.map((function(e){return delete e.audioData,e})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(O.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:3001/vad-realtime-time-slices.json");case 2:t=e.sent,c(t.data),n=y(t.data).filter((function(e){return"active"===e.voiceState})).cleanupTimeSlice(),U("vad-realtime-time-slices-converted.json",n),s(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(O.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://localhost:3001/vad-realtime-activity-data.json");case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){return e.map((function(t,n){if("active"===t.voiceState){var a=n+1,r=e[a];a<e.length&&(t.duration=r.seconds-t.seconds,t.startTime=t.seconds)}return t}))};return r.a.createElement("div",{className:"wrapper content"},"Converted VAD Data",r.a.createElement("pre",null,JSON.stringify(u,null,2)))})),T=b((_=function(e){var t=Object(a.useContext)(v).navigation;return r.a.createElement(u.a,{basename:"/react-pwa"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement("div",{className:"App ".concat(f(t.location))},r.a.createElement(d,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:E}),r.a.createElement(s.b,{path:"/default-camera-input",component:k}),r.a.createElement(s.b,{path:"/media-recorder-capture",component:S}),r.a.createElement(s.b,{path:"/sandbox",component:R}),r.a.createElement(s.b,{path:"/vad-time-slicing",component:M}),r.a.createElement(s.b,{path:"/convert-vad-data",component:I}),r.a.createElement(s.b,{component:g})))))},function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement(_,null))})),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-pwa","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.c070eebe.chunk.js.map