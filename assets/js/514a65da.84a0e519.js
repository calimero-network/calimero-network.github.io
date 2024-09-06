"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3182],{5081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(6070),r=t(5296);const a={id:"storage",title:"Storage"},o=void 0,i={id:"learn/core-concepts/node/storage",title:"Storage",description:"The storage component in the Calimero Network is essential for managing and",source:"@site/docs/02-learn/03-core-concepts/02-node/04-storage.mdx",sourceDirName:"02-learn/03-core-concepts/02-node",slug:"/learn/core-concepts/node/storage",permalink:"/learn/core-concepts/node/storage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172562338e4,sidebarPosition:4,frontMatter:{id:"storage",title:"Storage"},sidebar:"tutorialSidebar",previous:{title:"Server",permalink:"/learn/core-concepts/node/server"},next:{title:"Network",permalink:"/learn/core-concepts/node/network"}},c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The storage component in the Calimero Network is essential for managing and\nmaintaining the data generated and utilized by decentralized applications\n(DApps). It ensures data integrity, security, and efficient access, enabling\nseamless operation of applications within the network."}),"\n",(0,s.jsx)(n.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Generic Storage Interface"}),": Calimero provides a flexible storage interface\nthat allows app developers to choose their preferred database. By default,\nCalimero uses RocksDB, but it can also support LevelDB, Sled, TigerBeetle,\nSQLite, or even cloud storage solutions like S3."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Context State Storage"}),": The context state is backed by a Patricia-Trie\nstructure flattened into the key-value map of the datastore. This structure\nensures efficient state management and retrieval."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Blobs"}),": The storage system handles non-state-transitional, encrypted\nblobs of data, similar to BitTorrent or IPFS. Nodes can lazily share these\ndata blobs without needing centralized storage, ensuring efficient and secure\ndata distribution across the network. By default, the blobstore is the local\nfilesystem, but it can be configured to use any cloud storage option or\ncontent-addressed storage like IPFS."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Data Encryption"}),": All data stored within the network is encrypted at rest,\nensuring that sensitive information remains protected. This includes both\nstate-transitional data and non-state-transitional data like attached files in\nDMs or collaborative document assets."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Efficient Data Operations"}),": The storage component is optimized for quick\ndata operations, ensuring that applications can access, retrieve, and update\nthe data they need promptly. Caching mechanisms are employed to further\nimprove data access speeds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Garbage Collection"}),": The system includes mechanisms for garbage collection\nusing reference counting for trie data, allowing for the cleanup of obsolete\nor redundant data. This helps in maintaining optimal storage performance and\nresource utilization."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Metrics and Monitoring"}),": The storage component provides detailed metrics on\nstorage usage, including total usage and breakdowns by context. This allows\nfor effective monitoring and management of storage resources."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5296:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(758);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);