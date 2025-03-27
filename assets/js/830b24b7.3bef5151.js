"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5733],{33763:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(30758);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},81203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"introduction/what-is-calimero","title":"What is Calimero","description":"What is Calimero","source":"@site/versioned_docs/version-0.3.0/01-introduction/01-what-is-calimero.mdx","sourceDirName":"01-introduction","slug":"/introduction/what-is-calimero","permalink":"/0.3.0/introduction/what-is-calimero","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/01-introduction/01-what-is-calimero.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1743077359000,"sidebarPosition":1,"frontMatter":{"id":"what-is-calimero","title":"What is Calimero"},"sidebar":"tutorialSidebar","next":{"title":"Use Cases","permalink":"/0.3.0/introduction/use-cases"}}');var o=t(86070),a=t(33763);const r={id:"what-is-calimero",title:"What is Calimero"},s=void 0,l={},c=[{value:"What is Calimero",id:"what-is-calimero",level:2},{value:"Calimero vs X",id:"calimero-vs-x",level:2},{value:"Calimero vs Blockchain",id:"calimero-vs-blockchain",level:3},{value:"Calimero vs IPFS",id:"calimero-vs-ipfs",level:3},{value:"Calimero vs ZK",id:"calimero-vs-zk",level:3}];function h(e){const n={h2:"h2",h3:"h3",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"what-is-calimero",children:"What is Calimero"}),"\n",(0,o.jsx)(n.p,{children:"Calimero Network is a framework that enables building and running peer-to-peer\nSelf-Sovereign applications focusing on data ownership and harnessing the power\nof verified off-chain computing"}),"\n",(0,o.jsx)(n.h2,{id:"calimero-vs-x",children:"Calimero vs X"}),"\n",(0,o.jsx)(n.h3,{id:"calimero-vs-blockchain",children:"Calimero vs Blockchain"}),"\n",(0,o.jsx)(n.p,{children:"By virtue of blockchain principles, there's a couple of issues that arise. The\nmajor one being that everyone has to agree on the state of the canonical chain,\nand therefore there can be only one network actor at any given time. Different\nchains implement different strategies for electing this actor to alleviate the\nrisk of compromise, but the fundamental issue remains, and hence, the\nlong-standing problem of scalability."}),"\n",(0,o.jsx)(n.p,{children:"Calimero fundamentally rethinks the problem and offers an alternative approach,\nlocal-first execution with eventual consistency. This means that each actor can\nindependently drive their own local state, and the network will eventually\nreconcile to the same state. Essentially pegging the scalability threshold to\nthe number of actors in the network, and executions are practically\ninstantaneous."}),"\n",(0,o.jsx)(n.p,{children:"State reconciliation is context-aware, meaning that all activity revolves around\nan instance of an app. This means that participants of a context only have to\nsynchronize with each other, and not the entire network. This is in stark\ncontrast to blockchains, where everyone is forced to synchronize with everyone\nelse and this competition is reflected in gas fees. Calimero doesn't have gas\nfees, and the cost of execution is directly borne by the actor."}),"\n",(0,o.jsx)(n.p,{children:"Blockchains achieve integrity through transparency, which is a double-edged\nsword, essentially precluding you from using it in private environments.\nCalimero however, leverages the direct-actor relationship to encrypt all network\ntraffic between them, and therefore, the network is inherently private."}),"\n",(0,o.jsx)(n.p,{children:"Calimero is also designed to be embeddable, meaning that client apps themselves\nbecome the network actors, and the network is the app itself. This is in stark\ncontrast to blockchains, where the network is a separate entity from the client\napps."}),"\n",(0,o.jsx)(n.h3,{id:"calimero-vs-ipfs",children:"Calimero vs IPFS"}),"\n",(0,o.jsx)(n.p,{children:"IPFS is a storage solution, it's not designed for generic compute."}),"\n",(0,o.jsx)(n.p,{children:"Calimero is designed to be a general-purpose compute engine that can be used to\nbuild a wide variety of applications. Also worth noting that Calimero does offer\na way to store encrypted data, effectively making it a storage solution as well."}),"\n",(0,o.jsx)(n.h3,{id:"calimero-vs-zk",children:"Calimero vs ZK"}),"\n",(0,o.jsx)(n.p,{children:"Zero-Knowledge (ZK) solutions focus on enhancing privacy and reducing the need\nto reveal data during synchronization, but they don't eliminate the need for\nsynchronization itself."}),"\n",(0,o.jsx)(n.p,{children:"Calimero offers a fundamentally different approach with local-first execution\nand eventual consistency, minimizing synchronization overhead. Additionally, ZK\nsolutions can complement Calimero by providing enhanced privacy features within\nits framework, offering the best of both worlds without inheriting the\nsynchronization complexities of traditional ZK implementations."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);