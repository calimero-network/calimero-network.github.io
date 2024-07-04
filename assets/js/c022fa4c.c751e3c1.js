"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7074],{2022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(6070),i=n(5710);const a={id:"blockchain",title:"Blockchain"},r=void 0,c={id:"explore/why-not/blockchain",title:"Blockchain",description:"Why not Blockchain?",source:"@site/docs/01-explore/04-why-not/01-blockchain.mdx",sourceDirName:"01-explore/04-why-not",slug:"/explore/why-not/blockchain",permalink:"/explore/why-not/blockchain",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1720088193e3,sidebarPosition:1,frontMatter:{id:"blockchain",title:"Blockchain"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/explore/intro"},next:{title:"IPFS",permalink:"/explore/why-not/ipfs"}},s={},l=[{value:"Why not Blockchain?",id:"why-not-blockchain",level:2},{value:"Calimero vs Blockchain",id:"calimero-vs-blockchain",level:2}];function h(e){const t={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"why-not-blockchain",children:"Why not Blockchain?"}),"\n",(0,o.jsx)(t.p,{children:"By virtue of blockchain principles, there's a couple of issues that arise. The major one being that everyone has to agree on the state of the canonical chain, and therefore there can be only one network actor at any given time. Different chains implement different strategies for electing this actor to alleviate the risk of compromise, but the fundamental issue remains, and hence, the long-standing problem of scalability."}),"\n",(0,o.jsx)(t.h2,{id:"calimero-vs-blockchain",children:"Calimero vs Blockchain"}),"\n",(0,o.jsx)(t.p,{children:"Calimero fundamentally rethinks the problem and offers an alternative approach, local-first execution with eventual consistency. This means that each actor can independently drive their own local state, and the network will eventually reconcile to the same state. Essentially pegging the scalability threshold to the number of actors in the network, and executions are practically instantaneous."}),"\n",(0,o.jsx)(t.p,{children:"State reconciliation is context-aware, meaning that all activity revolves around an instance of an app. This means that participants of a context only have to synchronize with each other, and not the entire network. This is in stark contrast to blockchains, where everyone is forced to synchronize with everyone else and this competition is reflected in gas fees. Calimero doesn't have gas fees, and the cost of execution is directly borne by the actor."}),"\n",(0,o.jsx)(t.p,{children:"Blockchains achieve integrity through transparency, which is a double-edged sword, essentially precluding you from using it in private environments. Calimero however, leverages the direct-actor relationship to encrypt all network traffic between them, and therefore, the network is inherently private."}),"\n",(0,o.jsx)(t.p,{children:"Calimero is also designed to be embeddable, meaning that client apps themselves become the network actors, and the network is the app itself. This is in stark contrast to blockchains, where the network is a separate entity from the client apps."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5710:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(758);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);