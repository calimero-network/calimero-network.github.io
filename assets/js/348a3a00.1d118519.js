"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4939],{5248:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(758);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},9565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/specialized-nodes","title":"Specialized Nodes","description":"Specialized nodes in the Calimero Network are third-party nodes that augment a","source":"@site/versioned_docs/version-0.3.0/03-core-concepts/08-specialized-nodes.mdx","sourceDirName":"03-core-concepts","slug":"/core-concepts/specialized-nodes","permalink":"/core-concepts/specialized-nodes","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/03-core-concepts/08-specialized-nodes.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1739811423000,"sidebarPosition":8,"frontMatter":{"id":"specialized-nodes","title":"Specialized Nodes"},"sidebar":"tutorialSidebar","previous":{"title":"Encryption","permalink":"/core-concepts/encryption"},"next":{"title":"System Overview","permalink":"/architecture/system-overview"}}');var s=t(6070),o=t(5248);const r={id:"specialized-nodes",title:"Specialized Nodes"},a=void 0,c={},l=[{value:"Key Concepts",id:"key-concepts",level:3},{value:"Types of Specialized Nodes",id:"types-of-specialized-nodes",level:3},{value:"Reliability Through Decentralization",id:"reliability-through-decentralization",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Specialized nodes in the Calimero Network are third-party nodes that augment a\ncontext's capacity and reliability. They participate in a context but have\nadditional capabilities, providing various services while maintaining the\ndecentralized nature of the network."}),"\n",(0,s.jsx)(n.h3,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Incentivization"}),": These nodes can be incentivized through contracts on\nblockchains that pay them for their services, ensuring they remain motivated\nto perform their roles effectively."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Permissions and Roles"}),": Specialized nodes can have different levels of\npermissions, ranging from being subscribed to encrypted network events to\nfully participating as part of the context."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"types-of-specialized-nodes",children:"Types of Specialized Nodes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Storage Nodes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Encrypted Transaction Storage"}),": These nodes store encrypted transactions\nwithout the ability to read them. They guarantee 100% uptime, ensuring that\nall transactions are available even when peers are offline. When peers come\nback online, the node provides missed transactions and new transactions for\nreplication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Blob Storage"}),": These nodes also store encrypted blobs of\nnon-state-transitional data, ensuring that all necessary data is always\navailable without holding decryption keys."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Delegated Execution Nodes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Context Maintenance"}),": These nodes fully join a context and maintain the\ncontext state on their end. They can handle resource-intensive executions,\ndelegating specific calls to optimize performance and resource utilization."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Administrative Nodes"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Event Observation and Action"}),": These nodes observe real-world events and\nact on them within the context. For example, in a billionaire's club\ncontext, an administrative node could monitor members' accounts on a\nblockchain and evict them if their balance falls below a certain threshold."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reliability-through-decentralization",children:"Reliability Through Decentralization"}),"\n",(0,s.jsx)(n.p,{children:"Specialized nodes ensure that the context remains operational and consistent,\neven when primary peers are offline. They provide the necessary data and\ntransactions to keep the context up-to-date. The decentralized nature ensures\nthat the state is eventually consistent. Fragmentation does not cause issues as\nthe system reconciles itself when peers come back online, highlighting the\nnetwork's reliability without reliance on any single specialized node."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);