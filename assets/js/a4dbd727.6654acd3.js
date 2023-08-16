"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[4078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"Intro",id:"Intro",title:"Introduction",authors:["vnk"],tags:["NodeJs","Multi Threading"],custom_edit_url:null},i=void 0,s={unversionedId:"NodeJs/Multi-Threading/Intro",id:"NodeJs/Multi-Threading/Intro",title:"Introduction",description:"Multi-Threading in NodeJs can be acheived by the module - worker_threads",source:"@site/docs/NodeJs/Multi-Threading/Intro.md",sourceDirName:"NodeJs/Multi-Threading",slug:"/NodeJs/Multi-Threading/Intro",permalink:"/docs/NodeJs/Multi-Threading/Intro",draft:!1,editUrl:null,tags:[{label:"NodeJs",permalink:"/docs/tags/node-js"},{label:"Multi Threading",permalink:"/docs/tags/multi-threading"}],version:"current",frontMatter:{slug:"Intro",id:"Intro",title:"Introduction",authors:["vnk"],tags:["NodeJs","Multi Threading"],custom_edit_url:null},sidebar:"mySidebar",previous:{title:"Node Oracle DB",permalink:"/docs/NodeJs/CRUD-Series/node-oracle-db"}},l={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Multi-Threading in NodeJs can be acheived by the module - ",(0,o.kt)("strong",{parentName:"p"},"worker_threads"),"\nThis module is one of the core Node Apis. We can run the synchronous tasks using this module."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Little Wisdom")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Always run the threads equal to the number of the CPU Cores. "),(0,o.kt)("li",{parentName:"ol"},"Understand thread initialization overhead over parallelism. In some cases its better to run the tasks in main thread instead in worker as the thread initiation might cost more than saving the time complexity.")),(0,o.kt)("p",null,"The following is an example where we are calculating the sum of the given array elements using multi-threading"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst { isMainThread, Workder, WorkerData, parentPort} = require('node:worker_threads')\nconst { eventEmitter } = require('node:events')\n\nclass MyEmitter extends EventEmitter {}\nconst myEmitter = new MyEmitter()\n\nlet sum = 0\n\nif(isMainThread) {\n    console.log('In Main Thread')\n\n    const worker = new Worker(__filename, {workerData: [1,2,3,4,5]})\n    console.log('worker.threadId - ', worker.threadId)\n    worker.on('message', message => {\n        console.log(message)\n        myEmitter.emit('message', Number(message))\n    })\n\n    //Second worker\n    const worker = new Worker(__filename, {workerData: [6,7,8,9,10]})\n    console.log('worker.threadId - ', worker.threadId)\n    worker.on('message', message => {\n        console.log(message)\n        myEmitter.emit('message', Number(message))\n    })\n\n    myEmitter.on('message', message => {\n        sum += message\n        console.log('sum - ', sum)\n    })\n    \n} else {\n    const sum = workderData.reduce((acc, val) => acc + val, 0)\n    parentPort.postMessage(sum)\n}\n\n")))}d.isMDXComponent=!0}}]);