"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[3875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,v=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"aws-events-input",id:"aws-events-input",title:"AWS Events - Input parameter",authors:["vnk"],tags:["AWS","SAA","AWS Certification"],custom_edit_url:null},i=void 0,l={unversionedId:"AWS/cloudformation/aws-events-input",id:"AWS/cloudformation/aws-events-input",title:"AWS Events - Input parameter",description:"AWS CF Script to trigger a lambda based on CRON expression with input values",source:"@site/docs/AWS/cloudformation/aws-events-input.md",sourceDirName:"AWS/cloudformation",slug:"/AWS/cloudformation/aws-events-input",permalink:"/docs/AWS/cloudformation/aws-events-input",draft:!1,editUrl:null,tags:[{label:"AWS",permalink:"/docs/tags/aws"},{label:"SAA",permalink:"/docs/tags/saa"},{label:"AWS Certification",permalink:"/docs/tags/aws-certification"}],version:"current",frontMatter:{slug:"aws-events-input",id:"aws-events-input",title:"AWS Events - Input parameter",authors:["vnk"],tags:["AWS","SAA","AWS Certification"],custom_edit_url:null},sidebar:"aws",previous:{title:"Solutions Architect Certificate",permalink:"/docs/AWS/aws-saa"}},s={},u=[{value:"AWS CF Script to trigger a lambda based on CRON expression with <em>input values</em>",id:"aws-cf-script-to-trigger-a-lambda-based-on-cron-expression-with-input-values",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"aws-cf-script-to-trigger-a-lambda-based-on-cron-expression-with-input-values"},"AWS CF Script to trigger a lambda based on CRON expression with ",(0,a.kt)("em",{parentName:"h4"},"input values")),(0,a.kt)("p",null,"We are able to give either of two values to Schedule Property"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"rate(5 minutes) or rate(1 hour) etc"),(0,a.kt)("li",{parentName:"ol"},"cron Expression"))),(0,a.kt)("p",null,"And the Input property will take only a string. If we want to send multiple key value pairs then convert that JSON to String and give it as a value to the Input parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"AWSTemplateFormatVersion: '2010-09-09'\nTransform: AWS::Serverless-2016-10-31\n\nResources:\n  TestTestVnk:\n      Type: AWS::Serverless::Function\n      Properties:\n        FunctionName: 'testvnk-lambda'\n        CodeUri:\n          Bucket: 'testvnk-s3'\n          Key: 'testVnk.zip'\n        Handler: index.handler\n        Timeout: 30\n        Runtime: 'nodejs14.x'      \n        VpcConfig:\n          SecurityGroupIds: \n            - 'sg-xyz'\n          SubnetIds: \n            - 'subnet-xyz'\n            - 'subnet-xyz'\n        Role: '<give Role ARN>'\n        Environment:\n          Variables:          \n            REGION: 'ap-south-1'\n        Events:\n          Schedule:\n            Type: Schedule\n            Properties:\n              Schedule: rate(5 minutes)\n              Input: \"{\\\"job\\\": \\\"cleanup\\\", \\\"table\\\": \\\"dummy\\\"}\"\n")),(0,a.kt)("p",null,"The lambda will receive Input string as an object. Based on the received object you can write your own logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'exports.handler = function(event, context, callback){\n    console.log(\'EVENT - \', event)\n    callback(null, event);\n}\n\n//Output\nEVENT - {job: "cleanup", table: "dummy"}\n\n')))}p.isMDXComponent=!0}}]);