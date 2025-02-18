"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2897],{3900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"architecture/node/storage","title":"Storage","description":"The storage component in the Calimero Network is essential for managing and","source":"@site/docs/04-architecture/03-node/04-storage.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/storage","permalink":"/next/architecture/node/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/04-architecture/03-node/04-storage.mdx","tags":[],"version":"current","lastUpdatedAt":1739888782000,"sidebarPosition":4,"frontMatter":{"id":"storage","title":"Storage"},"sidebar":"tutorialSidebar","previous":{"title":"Server","permalink":"/next/architecture/node/server"},"next":{"title":"Network","permalink":"/next/architecture/node/network"}}');var i=n(86070),s=n(85248);const a={id:"storage",title:"Storage"},o=void 0,c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The storage component in the Calimero Network is essential for managing and\nmaintaining the data generated and utilized by decentralized applications\n(DApps). It ensures data integrity, security, and efficient access, enabling\nseamless operation of applications within the network."}),"\n",(0,i.jsx)(t.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Generic Storage Interface"}),": Calimero provides a flexible storage interface\nthat allows app developers to choose their preferred database. By default,\nCalimero uses RocksDB, but it can also support LevelDB, Sled, TigerBeetle,\nSQLite, or even cloud storage solutions like S3."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Context State Storage"}),": The context state is backed by a Patricia-Trie\nstructure flattened into the key-value map of the datastore. This structure\nensures efficient state management and retrieval."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Blobs"}),": The storage system handles non-state-transitional, encrypted\nblobs of data, similar to BitTorrent or IPFS. Nodes can lazily share these\ndata blobs without needing centralized storage, ensuring efficient and secure\ndata distribution across the network. By default, the blobstore is the local\nfilesystem, but it can be configured to use any cloud storage option or\ncontent-addressed storage like IPFS."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data Encryption"}),": All data stored within the network is encrypted at rest,\nensuring that sensitive information remains protected. This includes both\nstate-transitional data and non-state-transitional data like attached files in\nDMs or collaborative document assets."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Efficient Data Operations"}),": The storage component is optimized for quick\ndata operations, ensuring that applications can access, retrieve, and update\nthe data they need promptly. Caching mechanisms are employed to further\nimprove data access speeds."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Garbage Collection"}),": The system includes mechanisms for garbage collection\nusing reference counting for trie data, allowing for the cleanup of obsolete\nor redundant data. This helps in maintaining optimal storage performance and\nresource utilization."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Metrics and Monitoring"}),": The storage component provides detailed metrics on\nstorage usage, including total usage and breakdowns by context. This allows\nfor effective monitoring and management of storage resources."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85248:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);