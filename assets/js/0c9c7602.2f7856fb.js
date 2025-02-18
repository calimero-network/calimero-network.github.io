"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3365],{52571:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"developer-tools/SDK/protocol-sdk/protocol-rs-sdk","title":"Rust Protocol SDK","description":"Calimero SDK Macros for Rust","source":"@site/docs/05-developer-tools/02-SDK/03-protocol-sdk/02-protocol-rs-sdk.mdx","sourceDirName":"05-developer-tools/02-SDK/03-protocol-sdk","slug":"/developer-tools/SDK/protocol-sdk/protocol-rs-sdk","permalink":"/next/developer-tools/SDK/protocol-sdk/protocol-rs-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/05-developer-tools/02-SDK/03-protocol-sdk/02-protocol-rs-sdk.mdx","tags":[],"version":"current","lastUpdatedAt":1739888782000,"sidebarPosition":2,"frontMatter":{"id":"protocol-rs-sdk","title":"Rust Protocol SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Protocol SDK","permalink":"/next/developer-tools/SDK/protocol-sdk/protocol-sdk"},"next":{"title":"TypeScript Client SDK","permalink":"/next/developer-tools/SDK/client-sdk/client-ts-sdk"}}');var s=t(86070),r=t(85248);const a={id:"protocol-rs-sdk",title:"Rust Protocol SDK"},i=void 0,l={},p=[{value:"Calimero SDK Macros for Rust",id:"calimero-sdk-macros-for-rust",level:2},{value:"Core Macros",id:"core-macros",level:2},{value:"#[app::state]",id:"appstate",level:3},{value:"#[app::logic]",id:"applogic",level:3},{value:"#[app::init]",id:"appinit",level:3},{value:"#[app::event]",id:"appevent",level:3},{value:"Event emission",id:"event-emission",level:2},{value:"Complete Example",id:"complete-example",level:2},{value:"Important Notes",id:"important-notes",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"calimero-sdk-macros-for-rust",children:"Calimero SDK Macros for Rust"}),"\n",(0,s.jsx)(n.p,{children:"This guide provides a comprehensive reference of the essential macros provided\nby the Calimero SDK for building Rust applications."}),"\n",(0,s.jsx)(n.h2,{id:"core-macros",children:"Core Macros"}),"\n",(0,s.jsx)(n.h3,{id:"appstate",children:"#[app::state]"}),"\n",(0,s.jsxs)(n.p,{children:["Marks a struct as the application state. The state struct must implement\n",(0,s.jsx)(n.code,{children:"BorshSerialize"})," and ",(0,s.jsx)(n.code,{children:"BorshDeserialize"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[app::state]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\n#[borsh(crate = "calimero_sdk::borsh")]\nstruct MyAppState {\n    // Your state fields here\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"When emitting events, spcify the event type:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[app::state(emits = for<'a> MyEvent<'a>)]\nstruct MyAppState {\n    // Your state fields here\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"applogic",children:"#[app::logic]"}),"\n",(0,s.jsx)(n.p,{children:"Marks an implementation block as containing the application logic."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[app::logic]\nimpl MyAppState {\n    // Your methods here\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"appinit",children:"#[app::init]"}),"\n",(0,s.jsx)(n.p,{children:"Marks a method as the initializer, which is called when the application is first\ndeployed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[app::logic]\nimpl MyAppState {\n    #[app::init]\n    pub fn init() -> Self {\n        Self::default()\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"appevent",children:"#[app::event]"}),"\n",(0,s.jsx)(n.p,{children:"Defines an event type that can be emitted by your application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[app::event]\npub enum MyEvent<'a> {\n    ValueUpdated { key: &'a str, value: &'a str },\n    ValueRemoved { key: &'a str },\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"event-emission",children:"Event emission"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"app::emit!"})," macro to emit events from your application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"app::emit!(MyEvent::ValueUpdated {\n    key: &key,\n    value: &new_value\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"complete-example",children:"Complete Example"}),"\n",(0,s.jsx)(n.p,{children:"Here's a minimal example showing how these macros work together:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};\nuse calimero_sdk::{app, env};\nuse calimero_storage::collections::UnorderedMap;\n\n#[app::event]\npub enum StoreEvent<'a> {\n    ValueSet { key: &'a str, value: &'a str },\n}\n\n#[app::state(emits = for<'a> StoreEvent<'a>)]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\n#[borsh(crate = \"calimero_sdk::borsh\")]\nstruct Store {\n    values: UnorderedMap<String, String>,\n}\n\n#[app::logic]\nimpl Store {\n    #[app::init]\n    pub fn init() -> Self {\n        Self {\n            values: UnorderedMap::new(),\n        }\n    }\n\n    pub fn set(&mut self, key: String, value: String) {\n        self.values.insert(key, value).unwrap();\n        app::emit!(StoreEvent::ValueSet {\n            key: &key,\n            value: &value\n        });\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,s.jsxs)("ol",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.p,{children:"State changes are atomic - if a method fails, all changes are rolled back"})}),(0,s.jsx)("li",{children:"Events are only emitted if the transaction succeeds"}),(0,s.jsx)("li",{children:"Read-only operations have no network overhead"}),(0,s.jsx)("li",{children:(0,s.jsxs)(n.p,{children:["All public methods in the ",(0,s.jsx)(n.code,{children:"#[app::logic]"})," block become available as\napplication endpoints"]})})]}),"\n",(0,s.jsxs)(n.p,{children:["For a detailed guide on building a complete application using these macros, see\nour ",(0,s.jsx)(n.a,{href:"../../../../tutorials/build-app",children:"Tutorial"})," Guide on building a Key Value\nStore."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},85248:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(30758);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);