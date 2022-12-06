"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[203],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4036:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));o(8209);const a={title:"Overview",description:"Provides a high-level overview of the Open Creator Protocol."},i="Overview",l={unversionedId:"open-creator-protocol/overview",id:"open-creator-protocol/overview",title:"Overview",description:"Provides a high-level overview of the Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/00-overview.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/overview",permalink:"/open-creator-protocol/overview",draft:!1,editUrl:"https://github.com/magiceden-oss/docs/tree/main/docs/01-open-creator-protocol/00-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",description:"Provides a high-level overview of the Open Creator Protocol."},sidebar:"sidebar",previous:{title:"Open Creator Protocol",permalink:"/category/open-creator-protocol"},next:{title:"Getting Started",permalink:"/open-creator-protocol/getting-started"}},c={},s=[{value:"How to get started with Open Creator Protocol",id:"how-to-get-started-with-open-creator-protocol",level:2},{value:"Features",id:"features",level:2},{value:"Protected royalties",id:"protected-royalties",level:3},{value:"Open source",id:"open-source",level:3},{value:"Dynamic royalties",id:"dynamic-royalties",level:3},{value:"Freeze trading until mint is done",id:"freeze-trading-until-mint-is-done",level:3},{value:"Create rules for NFT transfers",id:"create-rules-for-nft-transfers",level:3},{value:"Bulk transfers directly on Magic Eden",id:"bulk-transfers-directly-on-magic-eden",level:3}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We understand the ecosystem has been waiting for a solution and are excited to share our feature-packed standard that\nprioritizes principles of flexibility and customization for the creator. Open Creator Protocol, an open source and\nfeature-packed standard built on Solana Token Standard that enables creators to protect royalties."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New collections can launch with our open-source Open Creator Protocol to protect royalties."),(0,n.kt)("li",{parentName:"ul"},"The protocol is entirely open source and built to serve creators."),(0,n.kt)("li",{parentName:"ul"},"Magic Eden will protect royalties on all collections who adopt the protocol. The protocol allows creators to ban\nmarketplaces that have not protected royalties on their collection."),(0,n.kt)("li",{parentName:"ul"},"Existing collections will have the ability to burn and re-mint their existing collections on the Open Creator\nProtocol.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"mdxAdmonitionTitle"},"What about Metaplex?")),(0,n.kt)("p",{parentName:"admonition"},"We intend to support Metaplex\u2019s MIP-1 when it goes live in Q1 2023. MIP-1 will offer a\nmigration path towards royalty protection for existing collections. We also remain open-minded to adopting other\nstandards that receive market adoption and look forward to community feedback.")),(0,n.kt)("h2",{id:"how-to-get-started-with-open-creator-protocol"},"How to get started with Open Creator Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get familiar with deploying the Open Creator Protocol by reading the ",(0,n.kt)("a",{parentName:"li",href:"/open-creator-protocol/getting-started"},"Getting Started")," guide. "),(0,n.kt)("li",{parentName:"ul"},"New creators can mint their collection with the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/magiceden-oss/open_creator_protocol"},"Open Creator Protocol CLI tool"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are interested in applying to Launchpad and using Open Creator Protocol, ",(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/shrMhMDpcvt9nB6cu"},"please fill out an inquiry form"),". Of\ncourse, collections do not need to launch on Launchpad in order to use Open Creator Protocol.")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,"We created this Open Creator Protocol because we wanted to provide tools to creators as soon as possible. We look\nforward to a world where there are different standards and creators can choose what works best for them. See below for\nthe full feature list."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"protected royalties",src:o(4979).Z,width:"1600",height:"1166"})),(0,n.kt)("h3",{id:"protected-royalties"},"Protected royalties"),(0,n.kt)("p",null,"We will protect royalties on all collections who adopt the standard. The protocol allows creators\nto ban marketplaces that have not protected royalties on their collection. For new collections that do not adopt the\nstandard, royalties will remain optional on Magic Eden. We will also welcome the inclusion of other future royalty\nprotection protocols that emerge and gain market adoption."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"open source",src:o(7235).Z,width:"1600",height:"1166"})),(0,n.kt)("h3",{id:"open-source"},"Open source"),(0,n.kt)("p",null,"This is a tool built on top of Solana\u2019s SPL managed-token standard. Creators will be in control of creating\nand managing the rules of their collection."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dynamic royalties",src:o(8357).Z,width:"1600",height:"1166"})),(0,n.kt)("h3",{id:"dynamic-royalties"},"Dynamic royalties"),(0,n.kt)("p",null,"Creators can specify a relationship between an NFT\u2019s sale price and royalty amount via a linear price curve. For\nexample, creators can reduce the nominal value of royalties for buyers who pay a higher price for the NFT."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"freeze trading",src:o(1922).Z,width:"1600",height:"1166"})),(0,n.kt)("h3",{id:"freeze-trading-until-mint-is-done"},"Freeze trading until mint is done"),(0,n.kt)("p",null,"Creators can use Open Creator Protocol to limit trading until after mint is\ncomplete (only time based)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"transfer rules",src:o(7054).Z,width:"1600",height:"1166"})),(0,n.kt)("h3",{id:"create-rules-for-nft-transfers"},"Create rules for NFT transfers"),(0,n.kt)("p",null,"Creators can gamify transferability for collections, including completely non-transferable tokens (or restrictions based\non time, # of transfers, or metadata name)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bulk transfer",src:o(1641).Z,width:"2000",height:"1459"})),(0,n.kt)("h3",{id:"bulk-transfers-directly-on-magic-eden"},"Bulk transfers directly on Magic Eden"),(0,n.kt)("p",null,"Magic Eden is also unveiling bulk transfers on the platform so collectors\ncan move their NFTs freely for collections using the Open Creator Protocol. These bulk transfers will be subject to the\ntoken transferability rules the creator sets."))}d.isMDXComponent=!0},1641:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/bulk_transfer-954f34aa8d1a5a44ca455bc8f18bb6db.webp"},8357:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/dynamic_royalties-912ec9a036bf18a0add8a0ff2280e74a.png"},1922:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/freeze-65f551c464781500dfd21d9ca6b180e2.png"},7235:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/open_sourced-e78dc05926b5f6c3adb073b963041ab1.png"},4979:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/protected_royalties-5bc2245b7ddc7d127624f64ef49ad39b.png"},7054:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/transfer_rules-6020ae17faff8b5c789f5881e07ec77e.png"},8209:(e,t,o)=>{o(7294);Object(function(){var e=new Error("Cannot find module 'mermaid'");throw e.code="MODULE_NOT_FOUND",e}())}}]);