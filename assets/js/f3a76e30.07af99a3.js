"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[4705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={slug:"container-basics",id:"container-basics",title:"Container Basics",authors:["vnk"],tags:["Containers","Docker","Podman","Kernel"],custom_edit_url:null},i=void 0,s={unversionedId:"Containers/container-basics",id:"Containers/container-basics",title:"Container Basics",description:"Any container image you take It will not have kernel. It will use the Host kernel.",source:"@site/docs/Containers/basics.md",sourceDirName:"Containers",slug:"/Containers/container-basics",permalink:"/docs/Containers/container-basics",draft:!1,editUrl:null,tags:[{label:"Containers",permalink:"/docs/tags/containers"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Podman",permalink:"/docs/tags/podman"},{label:"Kernel",permalink:"/docs/tags/kernel"}],version:"current",frontMatter:{slug:"container-basics",id:"container-basics",title:"Container Basics",authors:["vnk"],tags:["Containers","Docker","Podman","Kernel"],custom_edit_url:null},sidebar:"containers",next:{title:"Container Custom Process",permalink:"/docs/Containers/container custom process"}},c={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Any container image you take It will not have kernel. It will use the Host kernel.\nFor example: ubuntu docker image will have its rootfs (supports apt-get etc) but eventually when it is run. It is just a process\non the host which will be using host's kernel."),(0,o.kt)("p",null,"Container Enginer (CE)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Docker\n2. CRI-O\n3. containerd\n")),(0,o.kt)("p",null,"docker is the most popular one."),(0,o.kt)("p",null,"Underlying the CEs will use the container runtime"),(0,o.kt)("p",null,"Container Runtime (CR)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. runc\n2. runhcs (for Windows machines)\n3. crun\n4. runv\n")))}p.isMDXComponent=!0}}]);