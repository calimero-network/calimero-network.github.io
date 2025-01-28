"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1420],{2138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"architecture/node/runtime","title":"Runtime","description":"The runtime environment in the Calimero Network is essential for executing","source":"@site/docs/04-architecture/03-node/02-runtime.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/runtime","permalink":"/next/architecture/node/runtime","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/04-architecture/03-node/02-runtime.mdx","tags":[],"version":"current","lastUpdatedAt":1738106777000,"sidebarPosition":2,"frontMatter":{"id":"runtime","title":"Runtime"},"sidebar":"tutorialSidebar","previous":{"title":"Client Node","permalink":"/next/architecture/node/client-node"},"next":{"title":"Server","permalink":"/next/architecture/node/server"}}');var s=t(6070),r=t(5248);const a={id:"runtime",title:"Runtime"},o=void 0,c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The runtime environment in the Calimero Network is essential for executing\ndecentralized applications (DApps). It acts as a bridge between the application\nlogic, the network, and storage layers, ensuring seamless operation and\nintegration. The runtime ensures secure, isolated, and efficient execution of\napplications by managing resources effectively, supporting real-time event\nhandling, enabling scalability, and providing robust storage and transaction\nmanagement."}),"\n",(0,s.jsx)(n.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Security and Isolation"}),": The runtime provides a secure execution\nenvironment for Calimero applications using WebAssembly (WASM). Each\napplication is sandboxed in the WASM VM, ensuring proper isolation and\npreventing interference between applications. This setup also ensures that\napplications cannot access unauthorized resources, maintaining a secure\nenvironment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Multi-Application Support"}),": The runtime allows multiple applications to run\nconcurrently on the same node and supports multiple instances (contexts) of\nthe same application, each with its own state. This capability enhances the\nflexibility and scalability of the network."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Scoped Storage"}),": The runtime manages storage by partitioning it and\ngoverning where each context stores its state. These implementation details\nare abstracted from the app developer, ensuring that storage management is\nhandled seamlessly and securely."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Atomic Transactions"}),": The runtime guarantees atomic transactions, ensuring\nthat if a transaction fails, it is completely rolled back with no state\nupdates or side effects detected. This guarantees consistency and reliability\nin the application's state and any connected clients."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log Collection and Relaying Events"}),": The runtime facilitates log collection\nand relays events emitted by the applications to connected clients, enabling\nreal-time monitoring and interaction."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resource Management"}),": The runtime defines resource limits for applications\nto ensure fair usage and prevent malicious behavior. This includes limiting\nCPU, memory, and network usage to prevent any single application from\nmonopolizing system resources or compromising the host system."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Task Management and Performance"}),": The runtime keeps track of WASM instances\nup to a defined threshold, effortlessly queueing transactions to reuse live\ninstances and shutting down stale ones to reclaim system resources. These\noptimizations ensure efficient resource utilization and improved performance."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5248:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(758);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);