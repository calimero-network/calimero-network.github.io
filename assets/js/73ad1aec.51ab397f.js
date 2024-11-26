"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7420],{1916:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(6070),o=t(5658);const a={id:"client-node",title:"Client Node"},r=void 0,c={id:"learn/core-concepts/node/client-node",title:"Client Node",description:"Runtime",source:"@site/docs/02-learn/03-core-concepts/02-node/01-client-node.mdx",sourceDirName:"02-learn/03-core-concepts/02-node",slug:"/learn/core-concepts/node/client-node",permalink:"/learn/core-concepts/node/client-node",draft:!1,unlisted:!1,editUrl:"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/02-learn/03-core-concepts/02-node/01-client-node.mdx",tags:[],version:"current",lastUpdatedAt:173261641e4,sidebarPosition:1,frontMatter:{id:"client-node",title:"Client Node"},sidebar:"tutorialSidebar",previous:{title:"Identity",permalink:"/learn/core-concepts/identity"},next:{title:"Runtime",permalink:"/learn/core-concepts/node/runtime"}},s={},l=[{value:"Runtime",id:"runtime",level:3},{value:"Recommendations for Developers: Thorough testing of applications in a controlled environment is advised before deploying them in production to ensure stability and security. Additionally, developers are encouraged to implement locked update rules to prevent unauthorized modifications to the application&#39;s behavior.",id:"recommendations-for-developers-thorough-testing-of-applications-in-a-controlled-environment-is-advised-before-deploying-them-in-production-to-ensure-stability-and-security-additionally-developers-are-encouraged-to-implement-locked-update-rules-to-prevent-unauthorized-modifications-to-the-applications-behavior",level:4},{value:"Storage",id:"storage",level:3},{value:"Encryption:",id:"encryption",level:3},{value:"Identity Management",id:"identity-management",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Key Management",id:"key-management",level:3},{value:"Application Marketplace",id:"application-marketplace",level:3}];function d(e){const n={h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsx)(n.p,{children:"Overview: The runtime environment of a client node in the Calimero Network is\ncrucial for the execution of decentralized applications (DApps), particularly\nthose compiled to WebAssembly (WASM)."}),"\n",(0,i.jsx)(n.p,{children:"Functionality:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"State Synchronization: Each node can download and synchronize the state with\nexisting applications, ensuring that all nodes participating in a particular\napplication network are consistent and up-to-date."}),"\n",(0,i.jsx)(n.li,{children:"Application Settings: Nodes can be configured with specific settings for each\napplication, including which WASM modules to run, source URLs for fetching\nthese modules, encryption protocols to be used, and more."}),"\n",(0,i.jsx)(n.li,{children:"Network Topology & Update Rules: Defines the structure of the network and how\nnodes communicate and update each other. Proper update rules are crucial for\napplication security and integrity, particularly in a decentralized setting\nwhere trust is distributed."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"recommendations-for-developers-thorough-testing-of-applications-in-a-controlled-environment-is-advised-before-deploying-them-in-production-to-ensure-stability-and-security-additionally-developers-are-encouraged-to-implement-locked-update-rules-to-prevent-unauthorized-modifications-to-the-applications-behavior",children:"Recommendations for Developers: Thorough testing of applications in a controlled environment is advised before deploying them in production to ensure stability and security. Additionally, developers are encouraged to implement locked update rules to prevent unauthorized modifications to the application's behavior."}),"\n",(0,i.jsx)(n.h3,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(n.p,{children:"Overview: Storage on client nodes involves maintaining the state and data\nrequired for the decentralized applications they support."}),"\n",(0,i.jsx)(n.p,{children:"Functionality:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Local Storage: Each node stores application data locally, contributing to the\noverall decentralized storage model of the network. This ensures that data is\ndistributed across the network, enhancing privacy and resilience against\ncentral points of failure."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"encryption",children:"Encryption:"}),"\n",(0,i.jsx)(n.p,{children:"Data stored on client nodes can be encrypted, providing an additional layer of\nsecurity and privacy for user data."}),"\n",(0,i.jsx)(n.h3,{id:"identity-management",children:"Identity Management"}),"\n",(0,i.jsx)(n.p,{children:"Overview: Managing identities on the Calimero Network is fundamental for\nensuring secure and private interactions between nodes and applications.\nFunctionality:"}),"\n",(0,i.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"Nodes implement mechanisms for authenticating users and applications, ensuring\nthat interactions are secure and that entities are who they claim to be."}),"\n",(0,i.jsx)(n.h3,{id:"key-management",children:"Key Management"}),"\n",(0,i.jsx)(n.p,{children:"The management of cryptographic keys is an integral part of identity management,\nenabling secure communication and data encryption across the network."}),"\n",(0,i.jsx)(n.h3,{id:"application-marketplace",children:"Application Marketplace"}),"\n",(0,i.jsx)(n.p,{children:"Current State: The marketplace for decentralized applications within the\nCalimero Network is facilitated by a smart contract on the NEAR blockchain, with\napplication data and metadata hosted on IPFS. This setup serves as a temporary\nsolution while further community engagement and discussions are underway to\nrefine the marketplace's infrastructure and governance. The Calimero Network's\napproach to client nodes emphasizes security, decentralization, and privacy,\nwith a strong recommendation for users to engage with applications that have\nsecurely locked update mechanisms. These applications are more reliable for\ncritical use cases and are the only ones featured in the official marketplace,\nensuring a curated and trustworthy selection of DApps for users. This framework\ndemonstrates Calimero Network's commitment to building a secure and user-centric\ndecentralized ecosystem."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(758);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);