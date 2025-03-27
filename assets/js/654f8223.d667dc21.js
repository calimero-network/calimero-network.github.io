"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7958],{33763:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(30758);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},90447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"architecture/node/server","title":"Server","description":"The server is a core component for interacting with a Calimero node. Calimero","source":"@site/versioned_docs/version-0.4.0/04-architecture/03-node/03-server.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/server","permalink":"/0.4.0/architecture/node/server","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/04-architecture/03-node/03-server.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1743093815000,"sidebarPosition":3,"frontMatter":{"id":"server","title":"Server"},"sidebar":"tutorialSidebar","previous":{"title":"Runtime","permalink":"/0.4.0/architecture/node/runtime"},"next":{"title":"Storage","permalink":"/0.4.0/architecture/node/storage"}}');var r=n(86070),s=n(33763);const o={id:"server",title:"Server"},a=void 0,c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The server is a core component for interacting with a Calimero node. Calimero\ncan be embedded with your client to make it a self-contained node, or it can run\nas a remote node that multiple clients can connect to, allowing centralized\nstate management."}),"\n",(0,r.jsx)(t.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"JSON-RPC API"}),": Provides a standardized way for clients to query or mutate\nthe state of their counterpart applications on the node, ensuring seamless\nintegration and communication."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WebSocket Interface"}),": Allows clients to subscribe to events emitted from\napplications, enabling real-time reactions to activity triggered by other\npeers in the network."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Admin API"}),": Manages various aspects of the node, including:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Context Administration"}),": Create, delete, invite others to contexts, and\naccept invitations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Storage Management"}),": Track usage, view raw state storage for each\ncontext, and view encrypted blobs."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"State Management"}),": Manually garbage collect state-transitional\ntransactions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Network Management"}),": Manually connect to peers and manage blocklists."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Application Management"}),": Manage installed applications, create contexts\nfrom applications, delete applications if no contexts are associated, and\nmanually sideload applications."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Peer Identity Management"}),": Rotate peer identities without affecting\ncontext identities."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Node Metrics"}),": Track network bandwidth usage, both total and by context,\nto manage resource usage effectively."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);