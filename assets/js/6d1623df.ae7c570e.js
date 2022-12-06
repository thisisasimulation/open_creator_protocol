"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));n(8209);const i={title:"Architecture",description:"Describes the architecture and design of the Open Creator Protocol."},a="Architecture",c={unversionedId:"open-creator-protocol/architecture",id:"open-creator-protocol/architecture",title:"Architecture",description:"Describes the architecture and design of the Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/03-architecture.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/architecture",permalink:"/open-creator-protocol/architecture",draft:!1,editUrl:"https://github.com/magiceden-oss/docs/tree/main/docs/01-open-creator-protocol/03-architecture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Architecture",description:"Describes the architecture and design of the Open Creator Protocol."},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/open-creator-protocol/configuration"},next:{title:"Mint SDK",permalink:"/category/mint-sdk"}},p={},l=[{value:"On-chain Policy Engine",id:"on-chain-policy-engine",level:2}],s={toc:l};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"OCP uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana-program-library/tree/master/managed-token"},"SPL managed-token")," as the\nbase for holding the freeze authority of the spl-token. And managed-token has 1:1\nfeature parity of the spl-token in terms of the token interfaces like ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"approve"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"revoke"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"burn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"close"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"init_account")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mint_to"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"high level architecture design",src:n(1656).Z,width:"930",height:"952"})),(0,o.kt)("h2",{id:"on-chain-policy-engine"},"On-chain Policy Engine"),(0,o.kt)("p",null,"Action context is the context used to build the json rules engine. OCP's solution is a JSON rules engine DSL to define\nwhat can be applied to the context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ActionCtx {\n    pub action: String,\n    pub program_ids: Vec<String>,\n    pub mint: String,\n    pub mint_state: MintStateCtx,\n    pub mint_account: Option<MintAccountCtx>,\n    pub metadata: Option<MetadataCtx>,\n    pub payer: Option<String>,\n    pub from: Option<String>, // owner of the from_account, and many action's initiator\n    pub to: Option<String>,   // owner of the to_account\n    pub last_memo_signer: Option<String>,\n    pub last_memo_data: Option<String>,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"policy engine",src:n(3631).Z,width:"930",height:"490"})))}u.isMDXComponent=!0},1656:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/high_level-3a464ff41d36f003d1ba0e898f24ae50.png"},3631:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policy_account-2cda622e48189428ff3e3790045f875d.png"},8209:(e,t,n)=>{n(7294);Object(function(){var e=new Error("Cannot find module 'mermaid'");throw e.code="MODULE_NOT_FOUND",e}())}}]);