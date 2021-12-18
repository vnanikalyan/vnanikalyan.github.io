"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[2269],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7117:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return w}});var r=n(7462),a=n(3366),l=n(7294),o=n(3905),u=n(2389),i=n(9443);var c=function(){var e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),p=n(6010),m="tabItem_vU9c";function f(e){var t,n,r,a=e.lazy,o=e.block,u=e.defaultValue,i=e.values,f=e.groupId,d=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=i?i:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=c(),w=y.tabGroupChoices,g=y.setTabGroupChoices,N=(0,l.useState)(b),T=N[0],O=N[1],E=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=w[f];null!=A&&A!==T&&v.some((function(e){return e.value===A}))&&O(A)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=v[n].value;r!==T&&(S(t),O(r),null!=f&&g(f,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":o},d)},v.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,p.Z)("tabs__item",m,{"tabs__item--active":T===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:x,onClick:x},null!=n?n:t)}))),a?(0,l.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,u.Z)();return l.createElement(f,(0,r.Z)({key:String(t)},e))}var h=function(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},v=["components"],k={title:"React Js"},b="AWS",y={type:"mdx",permalink:"/fr/aws",source:"@site/src/pages/aws.md"},w=[],g={toc:w};function N(e){var t=e.components,n=(0,a.Z)(e,v);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws"},"AWS"),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(h,{value:"solutionsarchitect",label:"AWS SAA",mdxType:"TabItem"},"The following are the steps I took to crack the Amazon Solutions Architect - Associate Exam.",(0,o.kt)("p",null,"  Check out my credential ",(0,o.kt)("a",{parentName:"p",href:"https://vnkcertifications.s3.ap-south-1.amazonaws.com/AWS+Certified+Solutions+Architect+-+Associate+certificate.pdf"},"AWS solutions architect associate"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Took this course online ",(0,o.kt)("a",{parentName:"p",href:"https://www.udemy.com/share/102CPBAEMaeV1STHkF/"},"Udemy Course")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Try to do hands-on what all being taught in the course  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It will take 1-2 months (",(0,o.kt)("em",{parentName:"li"},"It's subjective"),")")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:"),"  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Write some practise tests on ",(0,o.kt)("strong",{parentName:"li"},"whizlabs")," - ",(0,o.kt)("em",{parentName:"li"},"They do really help")),(0,o.kt)("li",{parentName:"ul"},"Take atleast a week or two and finish all the mock tests and topic wise tests in whiz labs.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Take the Exam"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Some more useful tips"),(0,o.kt)("br",{parentName:"p"}),"\n","1) You can find some free tests at ",(0,o.kt)("a",{parentName:"p",href:"https://www.knowledgehut.com/practice-tests/aws-solutions-architect-associate"},"link")),(0,o.kt)("p",null,"2) Read the following papers  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Architecting for the cloud: AWS Best Practises  "),(0,o.kt)("li",{parentName:"ul"},"AWS well-architected framework  "),(0,o.kt)("li",{parentName:"ul"},"AWS Disaster Recovery  ")),(0,o.kt)("p",null,"3) READ FAQs  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"aws.amazon.com/vpc/faqs")),(0,o.kt)("p",null,"4) Watch "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AWS training videos")))))}N.isMDXComponent=!0}}]);