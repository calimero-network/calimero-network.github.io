"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8262],{3465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/terminology","title":"Terminology","description":"As projects grow, it\'s important to have a shared vocabulary to help communicate","source":"@site/docs/03-core-concepts/01-terminology.mdx","sourceDirName":"03-core-concepts","slug":"/core-concepts/terminology","permalink":"/core-concepts/terminology","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/03-core-concepts/01-terminology.mdx","tags":[],"version":"current","lastUpdatedAt":1733309504000,"sidebarPosition":1,"frontMatter":{"id":"terminology","title":"Terminology"},"sidebar":"tutorialSidebar","previous":{"title":"Setup","permalink":"/getting-started/setup"},"next":{"title":"Identity","permalink":"/core-concepts/identity"}}');var o=n(6070),r=n(5658);const s={id:"terminology",title:"Terminology"},a=void 0,c={},l=[];function d(e){const t={li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"As projects grow, it's important to have a shared vocabulary to help communicate\neffectively. This page provides a list of terms used in the documentation and\nthroughout the codebase."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Node"})," is any individual device or computer that participates in the\nnetwork. To avoid confusion with network layer used in the protocol, instead\nof network we are using term ",(0,o.jsx)(t.strong,{children:"Context"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Peer"})," is a specific instance of a node within a P2P network that interacts\nwith other peers. Peer represents user."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Peer Id"})," is a unique identifier assigned to each peer in the network. It is\nused to distinguish between different peers and ensure that messages are\ndelivered to the correct recipient."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Context"})," is the core of the Calimero ecosystem. It is an application\nspecific network designed to enable direct communication between users,\neliminating the need for intermediaries"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Application"})," is a software program designed to perform specific tasks or\nsolve particular problems. To ensure compatibility and functionality, it\nshould be developed according to the protocol SDK instructions provided. Once\ndeveloped, the application should be published in a format that others can use\nduring runtime, specifically in WebAssembly (WASM) format. Developer can also\nbuild frontend for an application, deployed separately, allowing users to\ninteract with an app directly. This user interface facilitates interaction\nwith the underlying software, making the application accessible and\nuser-friendly."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Root key"})," is the public part of a wallet cryptographic key pair used to\nverify the signature of sensitive actions. This public key is used to ensure\nthat any data or actions signed with the corresponding private key can be\ntrusted. Essentially, the root key serves as a trust anchor, enabling users to\nvalidate the authenticity and integrity of operations or communications\nassociated with the node. It does not grant direct control over the node but\nensures that actions authenticated with the private part of the root key are\nlegitimate."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Client key"})," is a cryptographic key tailored for each user session, acting\nas a session key or token. Each client key must be signed with the root key to\nbe valid which is done automatically during login. This ensures that only\nsessions authenticated by the trusted root key can interact with the node."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Specialized node"})," is third-party node that augment a context's capacity and\nreliability. It participates in a context but have additional capabilities,\nproviding various services while maintaining the decentralized nature of the\nnetwork."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(758);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);