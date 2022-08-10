"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[104],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||n;return r?a.createElement(h,i(i({ref:e},c),{},{components:r})):a.createElement(h,i({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3615:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={title:"Project Setup",slug:"/tutorial/project-setup",sidebar_position:1},i="Setup",l={unversionedId:"getting-started/tutorial/project-setup",id:"getting-started/tutorial/project-setup",title:"Project Setup",description:"This tutorial will walk you through deploying a react javascript application.",source:"@site/docs/getting-started/tutorial/project-setup.md",sourceDirName:"getting-started/tutorial",slug:"/tutorial/project-setup",permalink:"/tutorial/project-setup",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Project Setup",slug:"/tutorial/project-setup",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Tutorial",permalink:"/category/tutorial"},next:{title:"Toolchain Installation",permalink:"/tutorial/install-toolchain"}},s={},p=[{value:"Goals",id:"goals",level:2},{value:"React Tutorial Project",id:"react-tutorial-project",level:2},{value:"About the project",id:"about-the-project",level:3},{value:"SSH Access",id:"ssh-access",level:3}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,"This tutorial will walk you through deploying a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"react")," javascript application."),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy a TruStacks toolchain"),(0,o.kt)("li",{parentName:"ul"},"Deploy the react application in TruStacks"),(0,o.kt)("li",{parentName:"ul"},"Run the application build and release")),(0,o.kt)("h2",{id:"react-tutorial-project"},"React Tutorial Project"),(0,o.kt)("p",null,"To get started, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork")," the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TruStacks/react-tutorial.git"},"react-tutorial")," repository."),(0,o.kt)("h3",{id:"about-the-project"},"About the project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-tutorial")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," derived react application. The project uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TruStacks/workflows/tree/main/workflows/react"},"react")," ",(0,o.kt)("strong",{parentName:"p"},"workflow")," for build and release."),(0,o.kt)("admonition",{title:"What is a Workflow?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Workflows encompass vendor and industry best practices for building software in a specific framework. Using a workflow ensures standard, reliable, and repeatable delivery of your software.")),(0,o.kt)("h3",{id:"ssh-access"},"SSH Access"),(0,o.kt)("p",null,"Your fork of the ",(0,o.kt)("inlineCode",{parentName:"p"},"react-tutorial")," project must be accessible over ssh. You can use an existing ssh key or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"create a new ssh key")," if you don't already have one."),(0,o.kt)("admonition",{title:"using deploy keys",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"TruStacks does not distinguish between deploy keys and user provided ssh keys, but you must ensure that your deploy key has write access.")))}u.isMDXComponent=!0}}]);