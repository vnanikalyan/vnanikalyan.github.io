"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[8696],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8838:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var t=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],u={slug:"array-funcs",id:"array-funcs",title:"Array functions",authors:["vnk"],tags:["NodeJs","Array","Functions","Javascript"]},i=void 0,s={unversionedId:"NodeJs/array-funcs",id:"NodeJs/array-funcs",title:"Array functions",description:"Array Methods",source:"@site/docs/NodeJs/array-funcs.md",sourceDirName:"NodeJs",slug:"/NodeJs/array-funcs",permalink:"/fr/docs/NodeJs/array-funcs",editUrl:"https://vnanikalyan.github.io/docs/docs/NodeJs/array-funcs.md",tags:[{label:"NodeJs",permalink:"/fr/docs/tags/node-js"},{label:"Array",permalink:"/fr/docs/tags/array"},{label:"Functions",permalink:"/fr/docs/tags/functions"},{label:"Javascript",permalink:"/fr/docs/tags/javascript"}],version:"current",frontMatter:{slug:"array-funcs",id:"array-funcs",title:"Array functions",authors:["vnk"],tags:["NodeJs","Array","Functions","Javascript"]},sidebar:"mySidebar",previous:{title:"Oops in JS",permalink:"/fr/docs/NodeJs/oops-in-js"},next:{title:"Node Mongo DB",permalink:"/fr/docs/NodeJs/CRUD-Series/node-mongo-db"}},c=[{value:"REDUCE",id:"reduce",children:[],level:3},{value:"FILTER",id:"filter",children:[],level:3},{value:"MAP",id:"map",children:[],level:3},{value:"FOREACH",id:"foreach",children:[],level:3}],p={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Array Methods  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"REDUCE"),"- has return type - ",(0,l.kt)("em",{parentName:"li"},"returns a single value")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FILTER"),"- has return type - ",(0,l.kt)("em",{parentName:"li"},"returns a new array"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MAP"),"- has return type  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FOREACH"),"- no return type  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"EVERY"),"- has return type")),(0,l.kt)("h3",{id:"reduce"},"REDUCE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"find the sum of the given numbers array")),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"const numbers = [1, -1, 2, 3];",const:!0,numbers:!0,"":"","[1,":!0,"-1,":!0,"2,":!0,"3];":!0},"\n//This is what I generally do\nfor(const i of numbers)\n    sum += i;\n\nconsole.log(sum);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Array.reduce")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We use this when we want to reduce an array to a single value"),(0,l.kt)("li",{parentName:"ul"},"Single value can be a",(0,l.kt)("br",{parentName:"li"}),"i) Number",(0,l.kt)("br",{parentName:"li"}),"ii) String",(0,l.kt)("br",{parentName:"li"}),"iii) Object"),(0,l.kt)("li",{parentName:"ul"},"returns the final Value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," /*Reduce will take two params\n 1) Callback \n        - accumulator: result will be stored in accumulator \n            - It is like Sum in my way of coding\n        - currentValue: Index Value\n 2) Initial value of accumulator. In our case we initalized it to zero. \n If you remove the initialization value then it will be initialized to the first element in the array, \n here in our case it is 1.*/\n\n const sum = numbers.reduce((accumulator, currentValue)=>{\n    return accumulator + currentValue;\n }, 0);\n")),(0,l.kt)("h3",{id:"filter"},"FILTER"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," //Array.filter\n const numbers = [1, -1, 2, 3];\n\n //To filter only positive numbers from the Array\n //returns a new Array\n\n numbers.filter((value)=>{\n    return value >= 0;\n });\n")),(0,l.kt)("h3",{id:"map"},"MAP"),(0,l.kt)("p",null,"Array.Map  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"to map each element to something  "),(0,l.kt)("li",{parentName:"ul"},"returns a new Array")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const numbers = [1,2,3,4,5];\n\nconst newArr = numbers.map(value => {\n    return value + 1\n})\nconsole.log(newArr)\n")),(0,l.kt)("h3",{id:"foreach"},"FOREACH"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"calls once for each element in the array .for each element in the array.  "),(0,l.kt)("li",{parentName:"ul"},"It doesn't have a return type  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'let txt = "";\nlet numbers = [45, 4, 9, 16, 25];\n\nnumbers.forEach((value)=>{\n    txt = txt + value + "<br>";\n});\n')))}m.isMDXComponent=!0}}]);