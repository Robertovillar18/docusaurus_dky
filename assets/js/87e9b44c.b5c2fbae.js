"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8912],{24239:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(24246),i=(n(27378),n(40624)),r=n(41876),o=n(41428),l=n(7812),c=n(64149),a=n(36712),u=n(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function m({href:e,children:t}){return(0,s.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer),children:t})}function f({href:e,icon:t,title:n,description:r}){return(0,s.jsxs)(m,{href:e,children:[(0,s.jsxs)(u.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),r&&(0,s.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function p({item:e}){const t=(0,r.LM)(e),n=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return t?(0,s.jsx)(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(i=e.description)&&void 0!==i?i:n(e.items.length)}):null;var i}function h({item:e}){const t=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const i=(0,r.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var o;return(0,s.jsx)(f,{href:e.href,icon:t,title:e.label,description:null!==(o=e.description)&&void 0!==o?o:null==i?void 0:i.description})}function g({item:e}){switch(e.type){case"link":return(0,s.jsx)(h,{item:e});case"category":return(0,s.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y({className:e}){const t=(0,r.jA)();return(0,s.jsx)(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return(0,s.jsx)(y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){b(e,t,n[t])}))}return e}({},e));const o=(0,r.MN)(t);return(0,s.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((e,t)=>(0,s.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,s.jsx)(g,{item:e})},t)))})}},7812:(e,t,n)=>{n.d(t,{c:()=>a});var s=n(27378),i=n(4423);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=n.select(t),r=n.pluralForms.indexOf(i);return s[Math.min(r,s.length-1)]}(n,t,e)}}},24163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=n(24246),i=n(71670),r=n(24239);const o={unlisted:!0,tags:["visibility","unlisted"]},l="Some Unlisteds - Subcategory index unlisted",c={id:"tests/visibility/some-unlisteds/unlisted-subcategory/index",title:"Some Unlisteds - Subcategory index unlisted",description:"Doc with unlisted front matter",source:"@site/_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx",sourceDirName:"tests/visibility/some-unlisteds/unlisted-subcategory",slug:"/tests/visibility/some-unlisteds/unlisted-subcategory/",permalink:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/",draft:!1,unlisted:!0,tags:[{inline:!1,label:"Visibility",permalink:"/tests/docs/tags/visibility"},{inline:!1,label:"Unlisted",permalink:"/tests/docs/tags/unlisted"}],version:"current",lastUpdatedBy:"roberto.villar",lastUpdatedAt:1719538525e3,frontMatter:{unlisted:!0,tags:["visibility","unlisted"]},sidebar:"sidebar"},a={},u=[];function d(e){const t={h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"some-unlisteds---subcategory-index-unlisted",children:"Some Unlisteds - Subcategory index unlisted"}),"\n",(0,s.jsx)(t.p,{children:"Doc with unlisted front matter"}),"\n","\n",(0,s.jsx)(r.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}m.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/some-unlisteds/unlisted-subcategory/index.mdx)"},71670:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var s=n(27378);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);