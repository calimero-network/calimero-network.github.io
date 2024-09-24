"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9229],{6663:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(6070),t=i(6247);const a={id:"applications",title:"Applications"},o=void 0,r={id:"learn/core-concepts/applications",title:"Applications",description:"Applications in Calimero define the core logic governing how peers interact",source:"@site/docs/02-learn/03-core-concepts/03-applications.mdx",sourceDirName:"02-learn/03-core-concepts",slug:"/learn/core-concepts/applications",permalink:"/learn/core-concepts/applications",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172716628e4,sidebarPosition:3,frontMatter:{id:"applications",title:"Applications"},sidebar:"tutorialSidebar",previous:{title:"Admin Client API",permalink:"/learn/core-concepts/node/admin-client-api"},next:{title:"Contexts",permalink:"/learn/core-concepts/contexts"}},l={},c=[{value:"Examples of Applications",id:"examples-of-applications",level:3},{value:"Benefits of Decentralized Applications",id:"benefits-of-decentralized-applications",level:3},{value:"Security and Data Management",id:"security-and-data-management",level:3},{value:"Building Applications",id:"building-applications",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Applications in Calimero define the core logic governing how peers interact\nwithin a decentralized network. Developers can programmatically augment the\nprotocol to create customized functionalities, supporting a wide range of\napplications tailored to various use cases, from direct messaging and\ncommunication channels to interactive games and collaborative editing."}),"\n",(0,s.jsx)(n.h3,{id:"examples-of-applications",children:"Examples of Applications"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Communication Platforms"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Direct Messages and Channels"}),": Support for private, encrypted messaging\nbetween users and group communications in shared, secure spaces. This setup\ncan scale from one-on-one conversations to large group discussions, similar\nto Slack channels or Discord communities."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Community Platforms"}),": Decentralized alternatives to platforms like\nReddit or Hacker News, enabling independent contexts for different\npurposes, fostering discussions, and sharing content securely."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Interactive Games"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Privacy-Focused Games"}),": These games require the privacy of each player's\nmoves until both have played, ensuring fair play and maintaining the\nconfidentiality of strategies. Examples include:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Rock-Paper-Scissors"}),": Players' choices are revealed simultaneously\nafter both have made their moves."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Battleship"}),": The positions of ships are kept secret until revealed\nthrough gameplay."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Non-Privacy Games"}),": These games do not require concealment of moves and\nallow all actions to be visible to both players. Examples include:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Chess"}),": A strategy game where all moves are visible to both players,\nwith game logic running locally."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Checkers"}),": Another strategy game where all moves are open and visible\nto both players."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Collaborative Work"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document Collaboration"}),": Real-time collaboration on documents, akin to\nGoogle Docs, but decentralized and secure."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Creative Projects"}),": Shared canvases or environments for drawing,\ndesigning, or working on various creative projects, where all contributions\nare securely encrypted."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"benefits-of-decentralized-applications",children:"Benefits of Decentralized Applications"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Resilience"}),": Distributed application logic ensures the system functions\nsmoothly even if some devices go offline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Autonomy"}),": Users control their data and activities without relying on a\ncentral authority."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scalability"}),": The system scales effectively as more users join due to\noptimistic execution, with state being conflict-free and eventually\nreconciled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Privacy"}),": Keeping data local and encrypted prevents exposure to third\nparties, crucial for sensitive information."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"security-and-data-management",children:"Security and Data Management"}),"\n",(0,s.jsx)(n.p,{children:"All non-state-transitional data, such as attached files in DMs, collaborative\ndocument assets, and game resources, inherit the same level of security as\nstate-transitional transactions. This ensures that all forms of data within the\nCalimero network are encrypted and secure."}),"\n",(0,s.jsx)(n.p,{children:"Calimero also functions as a decentralized filesystem for these\nnon-state-transitional, encrypted blobs of data. Similar to BitTorrent or IPFS,\nnodes can lazily share the data without needing any centralized storage options.\nThis decentralized approach allows for efficient and secure data distribution\nacross the network."}),"\n",(0,s.jsx)(n.h3,{id:"building-applications",children:"Building Applications"}),"\n",(0,s.jsx)(n.p,{children:"Developers can leverage Calimero's framework to programmatically build and\naugment a wide range of applications using provided tools and documentation.\nThis includes setting up the development environment and deploying applications\nwithin the network."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Development Tools"})," Calimero offers the Rust SDK and intuitive APIs,\nenabling developers to create applications that integrate seamlessly with the\nnetwork."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Documentation and Support"})," Comprehensive documentation and community\nsupport assist developers in every step of the application development\nprocess, ensuring that they can build and deploy high-quality, secure\napplications efficiently."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6247:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(758);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);