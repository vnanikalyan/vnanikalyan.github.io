"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[7040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},775:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"flutter-firestore",title:"Flutter Firestore CRUD",authors:["vnk"],tags:["Flutter","Firestore"]},l=void 0,i={type:"mdx",permalink:"/flutter-firestore",source:"@site/src/pages/flutter-firestore.mdx",title:"Flutter Firestore CRUD",description:"CRUD Firestore (Flutter - Dart)",frontMatter:{slug:"flutter-firestore",title:"Flutter Firestore CRUD",authors:["vnk"],tags:["Flutter","Firestore"]}},c=[{value:"CRUD Firestore (Flutter - Dart)",id:"crud-firestore-flutter---dart",level:2},{value:"Retrieve",id:"retrieve",level:3},{value:"Create",id:"create",level:3},{value:"Update",id:"update",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"crud-firestore-flutter---dart"},"CRUD Firestore (Flutter - Dart)"),(0,a.kt)("h3",{id:"retrieve"},"Retrieve"),(0,a.kt)("p",null,"When you want to retrieve data based on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"CollectionName"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"DocumentName"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Future<Map> getData(<CollectionName>, <DocumentName>) async {\n    var x = await Firestore.instance.collection(<CollectionName>)\n                  .document(<DocumentName>).get()\n                  .then((document){\n                                    //return document.data;\n                                    return document;\n                                  });\n\n    print('Data : ${x.data}');\n    return x.data;\n}\n")),(0,a.kt)("p",null,"When you want to retrieve data based on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"CollectionName"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"FieldName"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Future<List> getEvents(context, CollectionName, FieldName) async {\n    var x = await Firestore.instance.collection(CollectionName).where(FieldName, isEqualTo: state.churchId).getDocuments();\n    int length = x.documents.length;\n    List list = new List(length);\n    \n    for(int i=0; i<length; i++){\n        List[i] = x.documents[i].data\n    }\n    return list;\n}\n")),(0,a.kt)("h3",{id:"create"},"Create"),(0,a.kt)("p",null,"Add data when ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"CollectionName"))," is given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"await Firestore.instance.collection(<CollectionName>)\n                .document()\n                .setData({'key_1': value_1,\n                          'key_2': value_2,\n                          'key_3': value_3\n                        });\n")),(0,a.kt)("p",null,"Add data when ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Collection Name"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"DocumentName"))," are given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"await Firestore.instance.collection(<CollectionName>)\n                .document(<DocumentName>)\n                .setData({'key_1': value_1,\n                          'key_2': value_2,\n                          'key_3': value_3\n                         });\n")),(0,a.kt)("h3",{id:"update"},"Update"),(0,a.kt)("p",null,"Update data when ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"CollectionName"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"DocumentName"))," are given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"await Firestore.instance.collection(<CollectionName>)\n                .document(<DocumentName>)\n                .updateData({'key_1': value_1,\n                             'key_2': value_2,\n                             'key_3': value_3\n                            });\n")))}s.isMDXComponent=!0}}]);