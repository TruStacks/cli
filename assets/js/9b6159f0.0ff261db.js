"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(i,".").concat(f)]||p[f]||u[f]||s;return r?n.createElement(g,a(a({ref:t},m),{},{components:r})):n.createElement(g,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const s={},a="Secrets Management",c={unversionedId:"requirements-core-components/secrets-management",id:"requirements-core-components/secrets-management",title:"Secrets Management",description:"The secrets manager is responsible for managing access to sensitive application data.",source:"@site/docs/requirements-core-components/secrets-management.md",sourceDirName:"requirements-core-components",slug:"/requirements-core-components/secrets-management",permalink:"/trustacks/docs/requirements-core-components/secrets-management",draft:!1,editUrl:"https://github.com/TruStacks/trustacks/tree/main/docs/docs/requirements-core-components/secrets-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Complementary Components",permalink:"/trustacks/docs/requirements-core-components/requirements-complementary-components"},next:{title:"Day 1 Orchestration",permalink:"/trustacks/docs/category/day-1-orchestration"}},i={},l=[{value:"General Purpose Secrets",id:"general-purpose-secrets",level:2},{value:"Single Sign On",id:"single-sign-on",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secrets-management"},"Secrets Management"),(0,o.kt)("p",null,"The secrets manager is responsible for managing access to sensitive application data.\nService Accounts"),(0,o.kt)("p",null,"The secrets manager must provide a method for components to store service account credentials for use during CI execution. The secrets manager must also enable easy rotation of service account secrets."),(0,o.kt)("h2",{id:"general-purpose-secrets"},"General Purpose Secrets"),(0,o.kt)("p",null,"All other secrets in the secrets manager must be consumable by the workflow during CI execution via some form of value injection. Secrets must be injected into the CI executor\u2019s dagger plan environment mounted at ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/secrets/*"),". "),(0,o.kt)("p",null,"A tool such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/external-secrets/external-secrets/"},"external-secrets")," in combination with kubernetes volume mounts should be used for secret injection."),(0,o.kt)("h2",{id:"single-sign-on"},"Single Sign On"))}u.isMDXComponent=!0}}]);