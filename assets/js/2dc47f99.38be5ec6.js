"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9413],{8427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"architecture/node/server","title":"Server","description":"The server is a core component for interacting with a Calimero node. Calimero","source":"@site/docs/04-architecture/03-node/03-server.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/server","permalink":"/next/architecture/node/server","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/04-architecture/03-node/03-server.mdx","tags":[],"version":"current","lastUpdatedAt":1738106777000,"sidebarPosition":3,"frontMatter":{"id":"server","title":"Server"},"sidebar":"tutorialSidebar","previous":{"title":"Runtime","permalink":"/next/architecture/node/runtime"},"next":{"title":"Storage","permalink":"/next/architecture/node/storage"}}');var i=n(6070),s=n(5248);const a={id:"server",title:"Server"},o=void 0,c={},l=[{value:"Core Capabilities",id:"core-capabilities",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The server is a core component for interacting with a Calimero node. Calimero\ncan be embedded with your client to make it a self-contained node, or it can run\nas a remote node that multiple clients can connect to, allowing centralized\nstate management."}),"\n",(0,i.jsx)(t.h3,{id:"core-capabilities",children:"Core Capabilities"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"JSON-RPC API"}),": Provides a standardized way for clients to query or mutate\nthe state of their counterpart applications on the node, ensuring seamless\nintegration and communication."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"WebSocket Interface"}),": Allows clients to subscribe to events emitted from\napplications, enabling real-time reactions to activity triggered by other\npeers in the network."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Admin API"}),": Manages various aspects of the node, including:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Context Administration"}),": Create, delete, invite others to contexts, and\naccept invitations."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Storage Management"}),": Track usage, view raw state storage for each\ncontext, and view encrypted blobs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State Management"}),": Manually garbage collect state-transitional\ntransactions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Network Management"}),": Manually connect to peers and manage blocklists."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Application Management"}),": Manage installed applications, create contexts\nfrom applications, delete applications if no contexts are associated, and\nmanually sideload applications."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Peer Identity Management"}),": Rotate peer identities without affecting\ncontext identities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Node Metrics"}),": Track network bandwidth usage, both total and by context,\nto manage resource usage effectively."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5248:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(758);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);