"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5815],{3292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(6070),o=t(5658);const r={id:"near-integration",title:"NEAR Integration"},s="NEAR Protocol Integration",a={id:"integrations/blockchains/near-integration",title:"NEAR Integration",description:"Calimero offers integration with the NEAR Protocol, allowing users to",source:"@site/docs/07-integrations/02-blockchains/01-near-integration.mdx",sourceDirName:"07-integrations/02-blockchains",slug:"/integrations/blockchains/near-integration",permalink:"/integrations/blockchains/near-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/07-integrations/02-blockchains/01-near-integration.mdx",tags:[],version:"current",lastUpdatedAt:1733131696e3,sidebarPosition:1,frontMatter:{id:"near-integration",title:"NEAR Integration"},sidebar:"tutorialSidebar",previous:{title:"Extendability",permalink:"/integrations/extendability"},next:{title:"Starknet Integration",permalink:"/integrations/blockchains/starknet-integration"}},c={},l=[{value:"Logging in with NEAR Wallet",id:"logging-in-with-near-wallet",level:2},{value:"1. User Initiates Login",id:"1-user-initiates-login",level:3},{value:"2. Server Issues Challenge",id:"2-server-issues-challenge",level:3},{value:"3. Redirect to MyNearWallet",id:"3-redirect-to-mynearwallet",level:3},{value:"4. Signature Sent to Backend",id:"4-signature-sent-to-backend",level:3},{value:"5. Signature Verification",id:"5-signature-verification",level:3},{value:"6. Successful Login",id:"6-successful-login",level:3},{value:"Blockchain Integration - NEAR",id:"blockchain-integration---near",level:2},{value:"1. Current Setup",id:"1-current-setup",level:3},{value:"Key Components of the NEAR Contracts",id:"key-components-of-the-near-contracts",level:4},{value:"Contexts (Context Contract)",id:"contexts-context-contract",level:5},{value:"Proxy Contract",id:"proxy-contract",level:5},{value:"How to Use NEAR Protocol with Calimero",id:"how-to-use-near-protocol-with-calimero",level:2},{value:"<strong>Explore Blockchain Applications</strong>",id:"explore-blockchain-applications",level:3}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"near-protocol-integration",children:"NEAR Protocol Integration"})}),"\n",(0,i.jsx)(n.p,{children:"Calimero offers integration with the NEAR Protocol, allowing users to\nauthenticate using their NEAR accounts. This integration provides access to\nessential blockchain functionalities, enabling users to read data directly from\nthe NEAR blockchain and perform write operations securely."}),"\n",(0,i.jsx)(n.h2,{id:"logging-in-with-near-wallet",children:"Logging in with NEAR Wallet"}),"\n",(0,i.jsx)(n.p,{children:"Calimero allows users to authenticate via their NEAR wallet, ensuring secure\naccess to the Admin Dashboard. The process of logging in with a NEAR wallet\ninvolves the following steps:"}),"\n",(0,i.jsx)(n.h3,{id:"1-user-initiates-login",children:"1. User Initiates Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The user navigates to the Admin Dashboard and selects the option to "Login\nwith NEAR Wallet."'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-server-issues-challenge",children:"2. Server Issues Challenge"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Upon selecting the login option, the server generates a challenge. This\nchallenge is then presented to the user for signing."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-redirect-to-mynearwallet",children:"3. Redirect to MyNearWallet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The user is redirected to the ",(0,i.jsx)(n.a,{href:"https://mynearwallet.com/",children:"MyNearWallet"})," page,\nwhere they will be asked to sign the server-issued challenge using their NEAR\nwallet."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-signature-sent-to-backend",children:"4. Signature Sent to Backend"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After the user signs the challenge, the signature is sent back to the server\nfor verification."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"5-signature-verification",children:"5. Signature Verification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The backend verifies the signature to ensure its authenticity. If the\nsignature is valid, the user's public key is extracted from the signature and\nadded as the user's unique identifier."}),"\n",(0,i.jsx)(n.li,{children:"This public key serves as the user's Decentralized Identifier (DID), not as a\ncontext-specific identity. The DID enables decentralized authentication,\nensuring that the user can interact with the platform securely across\ndifferent contexts and applications."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"6-successful-login",children:"6. Successful Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Once verified, the user is successfully logged into the Admin Dashboard, with\ntheir public key (DID) serving as their user ID for future interactions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This login flow ensures a secure and seamless authentication process leveraging\nNEAR's robust blockchain-based security."}),"\n",(0,i.jsx)(n.h2,{id:"blockchain-integration---near",children:"Blockchain Integration - NEAR"}),"\n",(0,i.jsx)(n.p,{children:"Calimero offers robust integration with the NEAR Protocol, leveraging its\nblockchain capabilities to facilitate secure and efficient interactions. This\nsection focuses on the setup of the NEAR smart contracts used for configuration\nmanagement, highlighting the key concepts of contexts, members, privileges, and\nthe new proxy contract functionality."}),"\n",(0,i.jsx)(n.h3,{id:"1-current-setup",children:"1. Current Setup"}),"\n",(0,i.jsxs)(n.p,{children:["The current setup uses NEAR smart contracts to manage configuration variables\nessential to the network\u2019s structure. This setup includes two primary contracts:\nthe ",(0,i.jsx)(n.strong,{children:"Context Contract"})," and the ",(0,i.jsx)(n.strong,{children:"Proxy Contract"}),". Together, they store\nessential information related to user roles, privileges, and network contexts\nand provide a flexible structure for proposals and actions. Proposals serve as a\nway to put decisions up for a vote, and if approved, the specified action is\nexecuted, enabling interactions with other accounts and contracts."]}),"\n",(0,i.jsx)(n.h4,{id:"key-components-of-the-near-contracts",children:"Key Components of the NEAR Contracts"}),"\n",(0,i.jsx)(n.h5,{id:"contexts-context-contract",children:"Contexts (Context Contract)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Definition"}),": Contexts represent the network or domain that users are part\nof. They define the boundaries within which transactions and interactions\noccur."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Creation and Management"}),": When a new context is created, a subaccount is\nautomatically generated, and a new instance of the Proxy Contract is deployed\non this subaccount."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Role of Context Contract"}),": The Context Contract is responsible for creating\ncontexts, adding members, editing their privileges, and associating specific\napplications with a context."]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"proxy-contract",children:"Proxy Contract"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Definition"}),": The Proxy Contract is deployed on a subaccount for each new\ncontext and serves as a governance mechanism within the context. It supports a\ndecentralized process for making and implementing decisions through a proposal\nand voting system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The Proxy Contract allows context members to create proposals\nthat outline specific actions, which must then be voted on by other members of\nthe context. Only if a proposal receives the required number of votes will the\nspecified action be executed, ensuring that decisions are made collectively."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Proposal Creation"}),": Any member of a context can create a proposal in the\nProxy Contract. Proposals are requests to perform certain actions and contain\ndetailed information about the proposed action. These actions can include:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Cross-Contract Calls"}),": Interactions with other smart contracts on the\nNEAR blockchain."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Fund Transfers"}),": Moving funds from the Proxy Contract to a designated\naddress."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configuration Adjustments"}),": Modifying configuration settings within the\nProxy Contract itself."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Voting and Approval Process"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Eligibility Check"}),": The Proxy Contract first verifies that the proposal\ncreator is a registered member of the context by interacting with the\nContext Contract."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Voting Requirements"}),": Context members review and vote on the proposal.\nEach proposal has a vote threshold defined in the Proxy Contract\nconfiguration, which specifies the minimum number of votes required for\napproval."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Proposal Approval"}),": If the proposal reaches the necessary vote count, the\nProxy Contract proceeds with executing the proposed action."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Execution of Actions"}),": Once a proposal is approved, the Proxy Contract\nperforms the specified action, ensuring a secure and automated implementation\nof context decisions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Funding Mechanism"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Members are responsible for ensuring the Proxy Contract is funded to support\nproposal execution. Funds must be available in the Proxy Contract account to\ncover actions involving transactions or resource allocation."}),"\n",(0,i.jsx)(n.li,{children:"This mechanism encourages members to manage the resources needed to\nimplement proposals effectively and to be aware of contract balances."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Benefits and Use Cases"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Decentralized Governance"}),": The Proxy Contract offers a structured,\ntransparent way for members to propose and approve changes, fostering a\ncollaborative environment within each context."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flexible Interaction"}),": By supporting cross-contract calls, fund\ntransfers, and configuration updates, the Proxy Contract allows contexts to\ninteract with other contracts and adjust settings dynamically as needs\nevolve."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security and Verification"}),": The built-in membership check and voting\nthresholds ensure only authorized members can propose and approve actions,\nmaintaining a secure and controlled process for context operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Together, the Context and Proxy Contracts allow for secure, decentralized\nmanagement of roles, permissions, and interactions, facilitating both governance\nand operational actions within each context."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-near-protocol-with-calimero",children:"How to Use NEAR Protocol with Calimero"}),"\n",(0,i.jsx)(n.p,{children:"If you are looking to use NEAR Protocol for your own development, you can follow\nthe examples provided in our repository to perform read operations and interact\nwith the blockchain."}),"\n",(0,i.jsx)(n.h3,{id:"explore-blockchain-applications",children:(0,i.jsx)(n.strong,{children:"Explore Blockchain Applications"})}),"\n",(0,i.jsx)(n.p,{children:"For further examples of how to interact with the blockchain, check out our\ncomprehensive blockchain applications in the repository. These applications\nillustrate advanced integrations, including cross-contract interactions, and\ngovernance mechanisms through the Proxy and Context Contracts. You can find a\nvariety of sample applications that showcase the capabilities of NEAR Protocol\nwithin the Calimero network environment."}),"\n",(0,i.jsxs)(n.p,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://github.com/calimero-network/",children:"Calimero GitHub Repository"})," to\nexplore these applications and see practical implementations of blockchain\nfunctionalities. These examples are designed to help you implement similar\ncapabilities in your own projects, leveraging Calimero\u2019s NEAR integration for\nrobust, decentralized applications."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"If you need additional details or specific code snippets, please let us know."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);