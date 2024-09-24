"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2226],{4798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(6070),s=t(6247);const o={id:"contexts",title:"Contexts"},r=void 0,a={id:"learn/core-concepts/contexts",title:"Contexts",description:"Contexts are the core of the Calimero ecosystem. These are application specific",source:"@site/docs/02-learn/03-core-concepts/04-context.mdx",sourceDirName:"02-learn/03-core-concepts",slug:"/learn/core-concepts/contexts",permalink:"/learn/core-concepts/contexts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172716628e4,sidebarPosition:4,frontMatter:{id:"contexts",title:"Contexts"},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/learn/core-concepts/applications"},next:{title:"Specialized Nodes",permalink:"/learn/advanced-concepts/specialized-nodes"}},c={},l=[{value:"<strong>How Contexts Work:</strong>",id:"how-contexts-work",level:4}];function d(e){const n={h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Contexts are the core of the Calimero ecosystem. These are application specific\nnetworks designed to enable direct communication between users, eliminating the\nneed for intermediaries. Here's a closer look at how they operate:"}),"\n",(0,i.jsx)(n.h4,{id:"how-contexts-work",children:(0,i.jsx)(n.strong,{children:"How Contexts Work:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialization"}),": A user selects a WebAssembly (WASM) module from a\nrepository, which contains the logic and rules for the application. With\nthis, they initiate a new Application Network, creating a unique identity for\nthis specific network and setting the initial parameters and update\nstrategies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Joining the Network"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inviting Peers"}),": The initial user can invite others directly or set up\nAccess Control Lists (ACLs) to govern how new members can join the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"New Member Process"}),": When a new user joins, they generate a unique\nidentity for the network, download the relevant WASM module, and\nsynchronize with the existing data on the network. This process ensures\nthey're up to speed and ready to engage fully with the network's\nactivities."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Interaction"}),": Within the network, users can query and modify data\naccording to the application's rules. Each Application Network autonomously\nmanages data interactions, ensuring consistency and integrity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Security and Privacy"}),": All communications within an Application Network\nare secured with end-to-end encryption, utilizing the Double Ratchet\nAlgorithm. This ensures that data exchanged between peers remains private and\nsecure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Offline Capability and Consistency"}),": Calimero's design is 'offline-first,'\naccommodating the reality that peers may not always be online. When a peer\ngoes offline and later returns, they synchronize with the network to update\nand reconcile any changes, maintaining eventual consistency across the\nnetwork's state."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Governance and Updates"}),": Application Networks can be governed by the users\nthemselves, with decisions made through a consensus mechanism. Updates to the\nnetwork, including changes to the WASM module or network parameters, can be\nproposed and voted on by the network's members."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extending network capabilities"}),": In addition to the core components of\nApplication Networks, Calimero introduces Specialized Nodes to further\nenhance network capabilities. These nodes are designed to perform specific\nfunctions that go beyond the standard operations of client nodes, such as\nheavy data processing, advanced encryption tasks, or providing additional\nstorage solutions. They play a crucial role in scaling the network's\nfunctionality and performance, ensuring that even as demand grows, the\nnetwork remains efficient and responsive. Specialized Nodes can be deployed\nby any participant in the network, including Calimero, third-party\ndevelopers, or users themselves, offering a flexible and decentralized\napproach to augmenting the network's capabilities. By leveraging these nodes,\nApplication Networks can meet the diverse needs of different applications,\nensuring that each network can be customized and optimized for its unique\nrequirements, all while maintaining the overarching principles of privacy,\nsecurity, and decentralization inherent to Calimero."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6247:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(758);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);