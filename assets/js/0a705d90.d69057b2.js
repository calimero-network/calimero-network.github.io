"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5815],{3292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(6070),r=t(5658);const s={id:"near-integration",title:"NEAR Integration"},a="NEAR Protocol Integration",o={id:"integrations/blockchains/near-integration",title:"NEAR Integration",description:"Calimero offers integration with the NEAR Protocol, allowing users to",source:"@site/docs/07-integrations/02-blockchains/01-near-integration.mdx",sourceDirName:"07-integrations/02-blockchains",slug:"/integrations/blockchains/near-integration",permalink:"/integrations/blockchains/near-integration",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729676844e3,sidebarPosition:1,frontMatter:{id:"near-integration",title:"NEAR Integration"},sidebar:"tutorialSidebar",previous:{title:"Extendability",permalink:"/integrations/extendability"},next:{title:"Starknet Integration",permalink:"/integrations/blockchains/starknet-integration"}},l={},c=[{value:"Logging in with NEAR Wallet",id:"logging-in-with-near-wallet",level:2},{value:"1. User Initiates Login",id:"1-user-initiates-login",level:3},{value:"2. Server Issues Challenge",id:"2-server-issues-challenge",level:3},{value:"3. Redirect to MyNearWallet",id:"3-redirect-to-mynearwallet",level:3},{value:"4. Signature Sent to Backend",id:"4-signature-sent-to-backend",level:3},{value:"5. Signature Verification",id:"5-signature-verification",level:3},{value:"6. Successful Login",id:"6-successful-login",level:3},{value:"Blockchain Integration - NEAR",id:"blockchain-integration---near",level:2},{value:"1. Current Setup",id:"1-current-setup",level:3},{value:"Key Components of the NEAR Contract",id:"key-components-of-the-near-contract",level:4},{value:"Contexts",id:"contexts",level:5},{value:"Members",id:"members",level:5},{value:"Privileges",id:"privileges",level:5},{value:"Application",id:"application",level:5},{value:"2. Smart Contract Functionalities",id:"2-smart-contract-functionalities",level:3},{value:"<strong>Verify Context Members</strong>",id:"verify-context-members",level:4},{value:"<strong>Transaction Flow Challenges</strong>",id:"transaction-flow-challenges",level:3},{value:"How to Use NEAR Protocol with Calimero",id:"how-to-use-near-protocol-with-calimero",level:2},{value:"<strong>Read Calls Example</strong>",id:"read-calls-example",level:3},{value:"<strong>Mutable (Write) Calls</strong>",id:"mutable-write-calls",level:3},{value:"Current Issues with Write Methods",id:"current-issues-with-write-methods",level:2},{value:"Ongoing Improvements",id:"ongoing-improvements",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"near-protocol-integration",children:"NEAR Protocol Integration"})}),"\n",(0,i.jsx)(n.p,{children:"Calimero offers integration with the NEAR Protocol, allowing users to\nauthenticate using their NEAR accounts. This integration provides access to\nessential blockchain functionalities, enabling users to read data directly from\nthe NEAR blockchain and perform write operations securely."}),"\n",(0,i.jsx)(n.h2,{id:"logging-in-with-near-wallet",children:"Logging in with NEAR Wallet"}),"\n",(0,i.jsx)(n.p,{children:"Calimero allows users to authenticate via their NEAR wallet, ensuring secure\naccess to the Admin Dashboard. The process of logging in with a NEAR wallet\ninvolves the following steps:"}),"\n",(0,i.jsx)(n.h3,{id:"1-user-initiates-login",children:"1. User Initiates Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The user navigates to the Admin Dashboard and selects the option to "Login\nwith NEAR Wallet."'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-server-issues-challenge",children:"2. Server Issues Challenge"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Upon selecting the login option, the server generates a challenge. This\nchallenge is then presented to the user for signing."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-redirect-to-mynearwallet",children:"3. Redirect to MyNearWallet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The user is redirected to the ",(0,i.jsx)(n.a,{href:"https://mynearwallet.com/",children:"MyNearWallet"})," page,\nwhere they will be asked to sign the server-issued challenge using their NEAR\nwallet."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-signature-sent-to-backend",children:"4. Signature Sent to Backend"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After the user signs the challenge, the signature is sent back to the server\nfor verification."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-signature-verification",children:"5. Signature Verification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The backend verifies the signature to ensure its authenticity. If the\nsignature is valid, the user's public key is extracted from the signature and\nadded as the user's unique identifier."}),"\n",(0,i.jsx)(n.li,{children:"This public key serves as the user's Decentralized Identifier (DID), not as a\ncontext-specific identity. The DID enables decentralized authentication,\nensuring that the user can interact with the platform securely across\ndifferent contexts and applications."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"6-successful-login",children:"6. Successful Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once verified, the user is successfully logged into the Admin Dashboard, with\ntheir public key (DID) serving as their user ID for future interactions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This login flow ensures a secure and seamless authentication process leveraging\nNEAR's robust blockchain-based security."}),"\n",(0,i.jsx)(n.h2,{id:"blockchain-integration---near",children:"Blockchain Integration - NEAR"}),"\n",(0,i.jsx)(n.p,{children:"Calimero offers robust integration with the NEAR Protocol, leveraging its\nblockchain capabilities to facilitate secure and efficient interactions. This\nsection focuses on the current setup of the NEAR smart contract used for\nconfiguration management, highlighting the key concepts of contexts, members,\nand privileges."}),"\n",(0,i.jsx)(n.h3,{id:"1-current-setup",children:"1. Current Setup"}),"\n",(0,i.jsx)(n.p,{children:"The current setup uses a NEAR smart contract to manage configuration variables\ncritical to the network\u2019s structure. This contract stores essential information\nrelated to user roles, privileges, and network contexts, providing a secure\nenvironment for managing blockchain operations."}),"\n",(0,i.jsx)(n.h4,{id:"key-components-of-the-near-contract",children:"Key Components of the NEAR Contract"}),"\n",(0,i.jsx)(n.h5,{id:"contexts",children:"Contexts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contexts represent the network or domain that users are part of. They define\nthe boundaries within which transactions and interactions occur."}),"\n",(0,i.jsx)(n.li,{children:"Each context governs the scope of user actions, specifying the rules and\npermissions for interacting with the blockchain."}),"\n",(0,i.jsx)(n.li,{children:"Contexts ensure that operations are segregated, and users only perform actions\nwithin their assigned domain."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"members",children:"Members"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Members are users who belong to a specific context."}),"\n",(0,i.jsx)(n.li,{children:"Each member has a defined role, which determines their level of access and the\nactions they can perform within that context."}),"\n",(0,i.jsx)(n.li,{children:"Membership is key to verifying and authorizing transactions, ensuring that\nonly permitted users can initiate operations within their assigned context."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"privileges",children:"Privileges"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Privileges define the specific roles and access levels of each member within a\ncontext."}),"\n",(0,i.jsx)(n.li,{children:"These roles control which operations (such as submitting transactions, reading\ndata, or interacting with the contract) a user can perform."}),"\n",(0,i.jsx)(n.li,{children:"Privileges help to maintain security and governance within the network,\nensuring that only authorized members can execute critical operations."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"application",children:"Application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The application is a structured data object within the smart contract that\nstores application-specific configuration details."}),"\n",(0,i.jsx)(n.li,{children:"It contains essential information such as context rules, membership data, and\nprivilege definitions."}),"\n",(0,i.jsx)(n.li,{children:"The application\u2019s structure allows customization based on the requirements of\nthe dApp (decentralized application) utilizing the contract, providing\nflexibility for different use cases."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-smart-contract-functionalities",children:"2. Smart Contract Functionalities"}),"\n",(0,i.jsx)(n.p,{children:"The NEAR smart contract is responsible for ensuring that only verified users can\nperform operations within the platform. The functionalities related to\nconfiguration management include:"}),"\n",(0,i.jsx)(n.h4,{id:"verify-context-members",children:(0,i.jsx)(n.strong,{children:"Verify Context Members"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When a user initiates a transaction, the contract checks whether the user is a\nregistered member of the context."}),"\n",(0,i.jsx)(n.li,{children:"It ensures that the user has the required privileges to perform the specific\naction within that context, thereby safeguarding the network against\nunauthorized operations."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"transaction-flow-challenges",children:(0,i.jsx)(n.strong,{children:"Transaction Flow Challenges"})}),"\n",(0,i.jsx)(n.p,{children:"Despite the robust integration, some challenges have been observed in the\ntransaction flow, particularly regarding how transactions are propagated and\nhandled within the context."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-near-protocol-with-calimero",children:"How to Use NEAR Protocol with Calimero"}),"\n",(0,i.jsx)(n.p,{children:"If you are looking to use NEAR Protocol for your own development, you can follow\nthe examples provided in our repository to perform read operations and interact\nwith the blockchain."}),"\n",(0,i.jsx)(n.h3,{id:"read-calls-example",children:(0,i.jsx)(n.strong,{children:"Read Calls Example"})}),"\n",(0,i.jsxs)(n.p,{children:["You can find an example of a read call within the ",(0,i.jsx)(n.code,{children:"gen-ext"})," example in the\nCalimero GitHub repository:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/calimero-network/core/blob/master/apps/gen-ext/src/lib.rs",children:"gen-ext Example (Read Call)"})}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates how to execute a read call on the NEAR blockchain to\nfetch data securely and efficiently."}),"\n",(0,i.jsx)(n.h3,{id:"mutable-write-calls",children:(0,i.jsx)(n.strong,{children:"Mutable (Write) Calls"})}),"\n",(0,i.jsxs)(n.p,{children:["Please note that ",(0,i.jsx)(n.strong,{children:"mutable (write) calls are currently unstable"}),". We have been\nactively working on resolving issues related to write operations and their\npropagation across the network."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"current-issues-with-write-methods",children:"Current Issues with Write Methods"}),"\n",(0,i.jsx)(n.p,{children:"While Calimero offers seamless read operations on the NEAR blockchain, we are\nworking out some technical details to enable write (mutable) operations."}),"\n",(0,i.jsx)(n.h3,{id:"ongoing-improvements",children:"Ongoing Improvements"}),"\n",(0,i.jsx)(n.p,{children:"We're working on local-first, optimistic execution, which will ensure\ntransactions are only executed once, and are appropriately signed which will\nprevent duplicate submissions."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(758);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);