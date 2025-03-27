"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[837],{33763:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(30758);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},58442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"architecture/node/client-node","title":"Client Node","description":"Runtime","source":"@site/versioned_docs/version-0.4.0/04-architecture/03-node/01-client-node.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/client-node","permalink":"/0.4.0/architecture/node/client-node","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/04-architecture/03-node/01-client-node.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1743093815000,"sidebarPosition":1,"frontMatter":{"id":"client-node","title":"Client Node"},"sidebar":"tutorialSidebar","previous":{"title":"System Overview","permalink":"/0.4.0/architecture/system-overview"},"next":{"title":"Runtime","permalink":"/0.4.0/architecture/node/runtime"}}');var a=t(86070),o=t(33763);const r={id:"client-node",title:"Client Node"},s=void 0,c={},d=[{value:"Runtime",id:"runtime",level:3},{value:"Recommendations for Developers: Thorough testing of applications in a controlled environment is advised before deploying them in production to ensure stability and security. Additionally, developers are encouraged to implement locked update rules to prevent unauthorized modifications to the application&#39;s behavior.",id:"recommendations-for-developers-thorough-testing-of-applications-in-a-controlled-environment-is-advised-before-deploying-them-in-production-to-ensure-stability-and-security-additionally-developers-are-encouraged-to-implement-locked-update-rules-to-prevent-unauthorized-modifications-to-the-applications-behavior",level:4},{value:"Storage",id:"storage",level:3},{value:"Encryption:",id:"encryption",level:3},{value:"Identity Management",id:"identity-management",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Key Management",id:"key-management",level:3},{value:"Application Marketplace",id:"application-marketplace",level:3}];function l(e){const n={h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,a.jsx)(n.p,{children:"Overview: The runtime environment of a client node in the Calimero Network is\ncrucial for the execution of decentralized applications (DApps), particularly\nthose compiled to WebAssembly (WASM)."}),"\n",(0,a.jsx)(n.p,{children:"Functionality:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"State Synchronization: Each node can download and synchronize the state with\nexisting applications, ensuring that all nodes participating in a particular\napplication network are consistent and up-to-date."}),"\n",(0,a.jsx)(n.li,{children:"Application Settings: Nodes can be configured with specific settings for each\napplication, including which WASM modules to run, source URLs for fetching\nthese modules, encryption protocols to be used, and more."}),"\n",(0,a.jsx)(n.li,{children:"Network Topology & Update Rules: Defines the structure of the network and how\nnodes communicate and update each other. Proper update rules are crucial for\napplication security and integrity, particularly in a decentralized setting\nwhere trust is distributed."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"recommendations-for-developers-thorough-testing-of-applications-in-a-controlled-environment-is-advised-before-deploying-them-in-production-to-ensure-stability-and-security-additionally-developers-are-encouraged-to-implement-locked-update-rules-to-prevent-unauthorized-modifications-to-the-applications-behavior",children:"Recommendations for Developers: Thorough testing of applications in a controlled environment is advised before deploying them in production to ensure stability and security. Additionally, developers are encouraged to implement locked update rules to prevent unauthorized modifications to the application's behavior."}),"\n",(0,a.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,a.jsx)(n.p,{children:"Overview: Storage on client nodes involves maintaining the state and data\nrequired for the decentralized applications they support."}),"\n",(0,a.jsx)(n.p,{children:"Functionality:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Local Storage: Each node stores application data locally, contributing to the\noverall decentralized storage model of the network. This ensures that data is\ndistributed across the network, enhancing privacy and resilience against\ncentral points of failure."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"encryption",children:"Encryption:"}),"\n",(0,a.jsx)(n.p,{children:"Data stored on client nodes can be encrypted, providing an additional layer of\nsecurity and privacy for user data."}),"\n",(0,a.jsx)(n.h3,{id:"identity-management",children:"Identity Management"}),"\n",(0,a.jsx)(n.p,{children:"Overview: Managing identities on the Calimero Network is fundamental for\nensuring secure and private interactions between nodes and applications.\nFunctionality:"}),"\n",(0,a.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,a.jsx)(n.p,{children:"Nodes implement mechanisms for authenticating users and applications, ensuring\nthat interactions are secure and that entities are who they claim to be."}),"\n",(0,a.jsx)(n.h3,{id:"key-management",children:"Key Management"}),"\n",(0,a.jsx)(n.p,{children:"The management of cryptographic keys is an integral part of identity management,\nenabling secure communication and data encryption across the network."}),"\n",(0,a.jsx)(n.h3,{id:"application-marketplace",children:"Application Marketplace"}),"\n",(0,a.jsx)(n.p,{children:"Current State: The marketplace for decentralized applications within the\nCalimero Network is facilitated by a smart contract on the NEAR blockchain, with\napplication data and metadata hosted on IPFS. This setup serves as a temporary\nsolution while further community engagement and discussions are underway to\nrefine the marketplace's infrastructure and governance. The Calimero Network's\napproach to client nodes emphasizes security, decentralization, and privacy,\nwith a strong recommendation for users to engage with applications that have\nsecurely locked update mechanisms. These applications are more reliable for\ncritical use cases and are the only ones featured in the official marketplace,\nensuring a curated and trustworthy selection of DApps for users. This framework\ndemonstrates Calimero Network's commitment to building a secure and user-centric\ndecentralized ecosystem."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);