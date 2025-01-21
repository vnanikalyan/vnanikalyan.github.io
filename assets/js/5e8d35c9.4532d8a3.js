"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[3285],{5680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>v});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?t.createElement(v,i(i({ref:r},p),{},{components:n})):t.createElement(v,i({ref:r},p))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5528:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(8168),o=(n(6540),n(5680));const a={slug:"docker-files",id:"docker-files-java",title:"Java",authors:["vnk"],tags:["Dockerfiles","Devops"],custom_edit_url:null},i=void 0,l={unversionedId:"Devops/dockerfiles/docker-files-java",id:"Devops/dockerfiles/docker-files-java",title:"Java",description:"",source:"@site/docs/Devops/dockerfiles/java.md",sourceDirName:"Devops/dockerfiles",slug:"/Devops/dockerfiles/docker-files",permalink:"/docs/Devops/dockerfiles/docker-files",draft:!1,editUrl:null,tags:[{label:"Dockerfiles",permalink:"/docs/tags/dockerfiles"},{label:"Devops",permalink:"/docs/tags/devops"}],version:"current",frontMatter:{slug:"docker-files",id:"docker-files-java",title:"Java",authors:["vnk"],tags:["Dockerfiles","Devops"],custom_edit_url:null},sidebar:"devops",previous:{title:"node-18",permalink:"/docs/Devops/githubactions/github-actions"},next:{title:"node",permalink:"/docs/Devops/dockerfiles/docker-files"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:r,...n}=e;return(0,o.yg)(u,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-dockerfile"},'FROM alpine:3.17\n\nARG USER=nani\nARG USER_ID=199\nARG GROUP=nani\nARG GROUP_ID=199\nARG WORK_DIR=/app\n\nWORKDIR ${WORK_DIR}\n\nRUN apk update && \\\n    apk add openjdk8 --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community;\n\n# set the JAVA location # For java 17 replace 8 with 17\nENV JAVA_HOME /usr/lib/jvm/java-8-openjdk\nRUN export JAVA_HOME\n\nADD target/*.jar app.jar\n\n#Create non-root user\nRUN addgroup -g ${GROUP_ID} -S ${GROUP} && adduser -u ${USER_ID} -S ${USER} -G ${GROUP}\nRUN chown -R ${USER}:${GROUP} ${WORK_DIR}\nUSER ${USER}\n\nEXPOSE 8080\n\nENTRYPOINT [ "java", "-jar", "./app.jar" ]\n')))}d.isMDXComponent=!0}}]);