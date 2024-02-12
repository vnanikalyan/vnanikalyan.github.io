"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[5910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=i(n),m=s,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:s,l[1]=a;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=n(7462),s=(n(7294),n(3905));const o={slug:"unit-tests-jest",id:"unit-tests-jest",title:"Using Jest",authors:["vnk"],tags:["NodeJs","unit-tests","Jest"],custom_edit_url:null},l=void 0,a={unversionedId:"NodeJs/unit-tests-jest",id:"NodeJs/unit-tests-jest",title:"Using Jest",description:"How to mock functions called from another functions within the same file?",source:"@site/docs/NodeJs/unit-tests-jest.md",sourceDirName:"NodeJs",slug:"/NodeJs/unit-tests-jest",permalink:"/docs/NodeJs/unit-tests-jest",draft:!1,editUrl:null,tags:[{label:"NodeJs",permalink:"/docs/tags/node-js"},{label:"unit-tests",permalink:"/docs/tags/unit-tests"},{label:"Jest",permalink:"/docs/tags/jest"}],version:"current",frontMatter:{slug:"unit-tests-jest",id:"unit-tests-jest",title:"Using Jest",authors:["vnk"],tags:["NodeJs","unit-tests","Jest"],custom_edit_url:null},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/docs/NodeJs/Multi-Threading/Intro"}},u={},i=[],c={toc:i};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How to mock functions called from another functions within the same file?"),"  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"we need to use ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("em",{parentName:"strong"},"jest.spyOn")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\nexports.handler = function() =>{\n    // Add two numbers\n    const sum = add(5,4)\n    const mul = mul(5,4)\n\n    console.log('sum - ', sum)\n    console.log('mul - ', mul)\n\n    return [sum, mul]\n}\n\nfunction add(x, y) {\n    return x + y    \n}\n\nfunction mul(x, y) {\n    return x * y\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// index.test.js\nconst testFile = require('./index')\n\ndescribe('handler', ()=->{\n    afterEach(()=>{\n        jest.mockAllClear()\n    })\n\n    test('handler', ()=>{\n        const sumSpy = jest.spyOn(testFile, 'sum')\n        sumSpy.mockResolvedValue(()=>5)\n\n        const mulSpy = jest.spyOn(testFile, 'mul')\n        mulSpy.mockResolvedValue(()=>7)\n        \n        const result = hanlder()\n        expect(result).toEqual([5,5])\n    })\n\n    test('sum', ()=>{\n        const result = add(5,4)\n        expect(result).toEqual(9)\n    })\n})\n")))}p.isMDXComponent=!0}}]);