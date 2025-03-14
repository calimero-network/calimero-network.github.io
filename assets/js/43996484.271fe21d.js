"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1e3],{85248:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(30758);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},96209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"architecture/node/storage","title":"Storage","description":"The storage component in the Calimero Network is essential for managing and","source":"@site/versioned_docs/version-0.3.0/04-architecture/03-node/04-storage.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/storage","permalink":"/0.3.0/architecture/node/storage","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/04-architecture/03-node/04-storage.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1741937892000,"sidebarPosition":4,"frontMatter":{"id":"storage","title":"Storage"},"sidebar":"tutorialSidebar","previous":{"title":"Server","permalink":"/0.3.0/architecture/node/server"},"next":{"title":"Network","permalink":"/0.3.0/architecture/node/network"}}');var r=n(86070),s=n(85248);const a={id:"storage",title:"Storage"},o=void 0,c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The storage component in the Calimero Network is essential for managing and\nmaintaining the data generated and utilized by decentralized applications\n(DApps). It ensures data integrity, security, and efficient access, enabling\nseamless operation of applications within the network."}),"\n",(0,r.jsx)(t.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Generic Storage Interface"}),": Calimero provides a flexible storage interface\nthat allows app developers to choose their preferred database. By default,\nCalimero uses RocksDB, but it can also support LevelDB, Sled, TigerBeetle,\nSQLite, or even cloud storage solutions like S3."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Context State Storage"}),": The context state is backed by a Patricia-Trie\nstructure flattened into the key-value map of the datastore. This structure\nensures efficient state management and retrieval."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Data Blobs"}),": The storage system handles non-state-transitional, encrypted\nblobs of data, similar to BitTorrent or IPFS. Nodes can lazily share these\ndata blobs without needing centralized storage, ensuring efficient and secure\ndata distribution across the network. By default, the blobstore is the local\nfilesystem, but it can be configured to use any cloud storage option or\ncontent-addressed storage like IPFS."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Data Encryption"}),": All data stored within the network is encrypted at rest,\nensuring that sensitive information remains protected. This includes both\nstate-transitional data and non-state-transitional data like attached files in\nDMs or collaborative document assets."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Efficient Data Operations"}),": The storage component is optimized for quick\ndata operations, ensuring that applications can access, retrieve, and update\nthe data they need promptly. Caching mechanisms are employed to further\nimprove data access speeds."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Garbage Collection"}),": The system includes mechanisms for garbage collection\nusing reference counting for trie data, allowing for the cleanup of obsolete\nor redundant data. This helps in maintaining optimal storage performance and\nresource utilization."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Metrics and Monitoring"}),": The storage component provides detailed metrics on\nstorage usage, including total usage and breakdowns by context. This allows\nfor effective monitoring and management of storage resources."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);