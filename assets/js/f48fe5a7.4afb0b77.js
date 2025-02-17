"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5649],{5248:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(758);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}},7531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/identity","title":"Identity","description":"Calimero Decentralized Identity","source":"@site/versioned_docs/version-0.3.0/03-core-concepts/03-identity.mdx","sourceDirName":"03-core-concepts","slug":"/core-concepts/identity","permalink":"/core-concepts/identity","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/03-core-concepts/03-identity.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1739811423000,"sidebarPosition":3,"frontMatter":{"id":"identity","title":"Identity"},"sidebar":"tutorialSidebar","previous":{"title":"Terminology","permalink":"/core-concepts/terminology"},"next":{"title":"Contexts","permalink":"/core-concepts/contexts"}}');var r=t(6070),s=t(5248);const o={id:"identity",title:"Identity"},d=void 0,c={},l=[{value:"Calimero Decentralized Identity",id:"calimero-decentralized-identity",level:2},{value:"Network identity",id:"network-identity",level:3},{value:"Network Keys",id:"network-keys",level:4},{value:"Context identity",id:"context-identity",level:3},{value:"Decentralized Identity (DID) document",id:"decentralized-identity-did-document",level:3},{value:"Root keys",id:"root-keys",level:4},{value:"Client keys",id:"client-keys",level:4},{value:"Runtime keys",id:"runtime-keys",level:4},{value:"Encryption keys",id:"encryption-keys",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"calimero-decentralized-identity",children:"Calimero Decentralized Identity"}),"\n",(0,r.jsx)(n.p,{children:"Calimero\u2019s decentralized identity framework is designed to provide secure,\nanonymous, and decentralized control across the network. It leverages multiple\ntypes of cryptographic keys to manage identities and ensure the integrity of\noperations within the network."}),"\n",(0,r.jsx)(n.h3,{id:"network-identity",children:"Network identity"}),"\n",(0,r.jsxs)(n.p,{children:["Network identity is defined within the configuration file on each node. This\nidentity is derived from ",(0,r.jsx)(n.a,{href:"#network-keys",children:"network keys"}),", which generate a unique\n",(0,r.jsx)(n.code,{children:"Peer ID"})," for each node, allowing peers to identify themselves to other peers in\nthe network."]}),"\n",(0,r.jsx)(n.h4,{id:"network-keys",children:"Network Keys"}),"\n",(0,r.jsxs)(n.p,{children:["Network keys are used to authenticate nodes within the network, with each node\nhaving a unique private-public key pair that it uses to verify its identity to\nother nodes. During connection setup, nodes exchange public keys to ensure they\nare communicating with the intended parties. More in\n",(0,r.jsx)(n.a,{href:"../architecture/node/network#identify",children:"Network"})]}),"\n",(0,r.jsx)(n.h3,{id:"context-identity",children:"Context identity"}),"\n",(0,r.jsxs)(n.p,{children:["Context identity allows users to identify themselves within a specific context.\nUsers can have arbitrary number of identities within a specific context which\nremains encapsulated within the context. These identities are linked to\n",(0,r.jsx)(n.a,{href:"#runtime-keys",children:"runtime keys"}),", with each context identity connected to one\nruntime key."]}),"\n",(0,r.jsx)(n.h3,{id:"decentralized-identity-did-document",children:"Decentralized Identity (DID) document"}),"\n",(0,r.jsx)(n.p,{children:"All context-specific identities and node keys are managed through a\nDecentralized Identity (DID) document stored on the node. This document\nincludes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#root-keys",children:"Root Keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#client-keys",children:"Client Keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#runtime-keys",children:"Runtime Keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#encryption-keys",children:"Encryption Keys"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Calimero's key management utilizes multiple keys for various purposes, ensuring\nsecure, anonymous, and decentralized control across the network. This structure\nunderpins secure and efficient operations within the Calimero Network,\nfacilitating both node and application functionalities."}),"\n",(0,r.jsx)(n.h4,{id:"root-keys",children:"Root keys"}),"\n",(0,r.jsx)(n.p,{children:"Root keys provide full access for node operations, including managing root keys,\nlisting identifiers, and generating new client keys. Web3 wallets can be used as\nfundamental for root keys, simplifying the setup process."}),"\n",(0,r.jsx)(n.h4,{id:"client-keys",children:"Client keys"}),"\n",(0,r.jsx)(n.p,{children:"Client keys are generated on login and used by the frontend. Stored in browser\nlocal storage, these keys initiate applications and serves as permissioned\naccess to the node."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Client Key Usage"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Key Creation"}),": Users generate a new keypair in their browser."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verification"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A Verifiable Presentation Request is sent to the node, which responds with\na challenge."}),"\n",(0,r.jsx)(n.li,{children:"The challenge and public key are signed using the root key."}),"\n",(0,r.jsx)(n.li,{children:"Upon node verification of the request and signature, the new key is cleared\nfor JSONRPC API communication from the browser to the node."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Calimero's TypeScript SDK supports developers in building browser and CLI\napplications by simplifying interaction with the network."}),"\n",(0,r.jsx)(n.h4,{id:"runtime-keys",children:"Runtime keys"}),"\n",(0,r.jsx)(n.p,{children:"Runtime keys are used for signing transactions within a context, with the\nappropriate key selected based on the context identity."}),"\n",(0,r.jsx)(n.h4,{id:"encryption-keys",children:"Encryption keys"}),"\n",(0,r.jsxs)(n.p,{children:["Keys used for encrypting and decrypting messages between peers in the context.\nEach context has its own encryption key. More in ",(0,r.jsx)(n.a,{href:"./encryption",children:"Encryption"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);