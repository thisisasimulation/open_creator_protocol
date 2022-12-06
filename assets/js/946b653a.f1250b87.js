"use strict";(self.webpackChunkocp_docs=self.webpackChunkocp_docs||[]).push([[811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(8209);const o={title:"Configuration",description:"Describes the configuration options of Open Creator Protocol."},i="Configuration",l={unversionedId:"open-creator-protocol/configuration",id:"open-creator-protocol/configuration",title:"Configuration",description:"Describes the configuration options of Open Creator Protocol.",source:"@site/docs/01-open-creator-protocol/02-configuration.md",sourceDirName:"01-open-creator-protocol",slug:"/open-creator-protocol/configuration",permalink:"/open_creator_protocol/open-creator-protocol/configuration",draft:!1,editUrl:"https://github.com/magiceden-oss/open_creator_protocol/tree/main/docs/01-open-creator-protocol/02-configuration.md",tags:[],version:"current",lastUpdatedAt:1670347324,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:2,frontMatter:{title:"Configuration",description:"Describes the configuration options of Open Creator Protocol."},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/open_creator_protocol/open-creator-protocol/getting-started"},next:{title:"Architecture",permalink:"/open_creator_protocol/open-creator-protocol/architecture"}},p={},s=[{value:"Example Rules",id:"example-rules",level:3},{value:"Example JSON",id:"example-json",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Create a policy without a dynamic royalty setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_COMMAND=create_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\n')),(0,r.kt)("p",null,"Create a policy with a dynamic royalty setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_COMMAND=create_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\nCLI_DYNAMIC_ROYALTY_PRICE_LINEAR=\'{"startPrice":0,"endPrice":5000000000,"startMultiplierBp":10000,"endMultiplierBp":0}\' \\\n')),(0,r.kt)("p",null,"Update a policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CLI_POLICY_PUBKEY=TODO \\\nCLI_COMMAND=update_policy \\\nCLI_AUTHORITY=./keypair.json \\\nCLI_RPC=https://api.devnet.solana.com \\\nCLI_JSON_RULE=\'{"conditions":{"field":"action","operator":"string_not_equals","value":""},"events":[]}\' \\\nCLI_DYNAMIC_ROYALTY_PRICE_LINEAR=\'{"startPrice":0,"endPrice":5000000000,"startMultiplierBp":10000,"endMultiplierBp":0}\' \\\n')),(0,r.kt)("h3",{id:"example-rules"},"Example Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sample Use Cases"),(0,r.kt)("th",{parentName:"tr",align:null},"Policy (json_rule)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow For All"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program IDs Allowlist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "program_ids", "operator": "string_is_subset", "value": ["1111111111111111111111111111111"]}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program IDs Denylist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "program_ids", "operator": "string_does_not_contain_any", "value": ["1111111111111111111111111111111"]}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Soulbound Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/transferred_count", "operator": "int_less_than", "value": 1 }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Semi Soulbound Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/transferred_count", "operator": "int_less_than", "value": n }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Timestamp Constraint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/derived_datetime/utc_timestamp", "operator": "int_greater_than", "value": 1669881409}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Cooldown Token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "mint_state/derived_cooldown", "operator": "int_greater_than", "value": 3600 }'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata Name Filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "metadata/name", "operator": "string_has_substring", "value": "FROZEN"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata URI Filter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "metadata/uri", "operator": "string_has_substring", "value": "IPFS"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single Transfer Destination"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{ "field": "to", "operator": "string_equals", "value": ["1111111111111111111111111111111"]}'))))),(0,r.kt)("admonition",{title:"Transfer Logic",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Here's a full example of how a creator can leverage OCP to personalize the transferability. The logic works like this:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is not ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", pass"),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", then one cannot transfer if the ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata/name")," contains a keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"FROZEN")),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer"),", then one cannot transfer to a specific address if the ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata/name")," doesn't contain ",(0,r.kt)("inlineCode",{parentName:"li"},"WINNER"),"."))),(0,r.kt)("h3",{id:"example-json"},"Example JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "events": [],\n  "conditions": {\n    "or": [\n      {\n        "field": "action",\n        "operator": "string_not_equals",\n        "value": "transfer"\n      },\n      {\n        "and": [\n          {\n            "not": {\n              "field": "metadata/name",\n              "operator": "string_has_substring",\n              "value": "FROZEN"\n            }\n          },\n          {\n            "or": [\n              {\n                "field": "to",\n                "operator": "string_not_equals",\n                "value": "DWuopEsTrg5qWMSMVT1hoiVTRQG9PkGJZSbXiKAxHYbn"\n              },\n              {\n                "field": "metadata/name",\n                "operator": "string_has_substring",\n                "value": "WINNER"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n}\n')))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);