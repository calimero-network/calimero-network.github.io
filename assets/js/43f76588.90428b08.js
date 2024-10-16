"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8478],{3202:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(6070),r=i(1503);const s={id:"icp-integration",title:"ICP Integration"},o="Internet Computer Protocol (ICP) Integration",a={id:"integrations/blockchains/icp-integration",title:"ICP Integration",description:"Calimero offers integration with the Internet Computer Protocol (ICP), allowing users to authenticate using their Internet Identity (II). This integration provides a secure and user-friendly way to access the Admin Dashboard using ICP's robust authentication system.",source:"@site/docs/07-integrations/02-blockchains/03-icp-integration.mdx",sourceDirName:"07-integrations/02-blockchains",slug:"/integrations/blockchains/icp-integration",permalink:"/integrations/blockchains/icp-integration",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729079495e3,sidebarPosition:3,frontMatter:{id:"icp-integration",title:"ICP Integration"},sidebar:"tutorialSidebar",previous:{title:"Starknet Integration",permalink:"/integrations/blockchains/starknet-integration"}},l={},c=[{value:"Logging in with Internet Identity",id:"logging-in-with-internet-identity",level:2},{value:"1. User Initiates Login",id:"1-user-initiates-login",level:3},{value:"2. Challenge Preparation",id:"2-challenge-preparation",level:3},{value:"3. Internet Identity Authentication",id:"3-internet-identity-authentication",level:3},{value:"4. Delegation Chain Retrieval",id:"4-delegation-chain-retrieval",level:3},{value:"5. Processing the Authentication Result",id:"5-processing-the-authentication-result",level:3},{value:"6. Login Request Preparation",id:"6-login-request-preparation",level:3},{value:"7. Server-side Verification",id:"7-server-side-verification",level:3},{value:"8. Successful Login",id:"8-successful-login",level:3},{value:"Current Limitations",id:"current-limitations",level:2},{value:"Authentication-Only Functionality",id:"authentication-only-functionality",level:3},{value:"Future Developments",id:"future-developments",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"internet-computer-protocol-icp-integration",children:"Internet Computer Protocol (ICP) Integration"})}),"\n",(0,t.jsx)(n.p,{children:"Calimero offers integration with the Internet Computer Protocol (ICP), allowing users to authenticate using their Internet Identity (II). This integration provides a secure and user-friendly way to access the Admin Dashboard using ICP's robust authentication system."}),"\n",(0,t.jsx)(n.h2,{id:"logging-in-with-internet-identity",children:"Logging in with Internet Identity"}),"\n",(0,t.jsx)(n.p,{children:"The login process with Internet Identity involves these key steps:"}),"\n",(0,t.jsx)(n.h3,{id:"1-user-initiates-login",children:"1. User Initiates Login"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The user navigates to the Admin Dashboard and selects the option to "Login with Internet Identity."'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"2-challenge-preparation",children:"2. Challenge Preparation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The system prepares a challenge (encoded as a session public key) before initiating the authentication process."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"3-internet-identity-authentication",children:"3. Internet Identity Authentication"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A popup window opens, connecting to the Internet Identity service."}),"\n",(0,t.jsx)(n.li,{children:"The user authenticates through this popup."}),"\n",(0,t.jsx)(n.li,{children:"The challenge (session public key) is sent to the II service."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"4-delegation-chain-retrieval",children:"4. Delegation Chain Retrieval"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upon successful authentication, the II service creates and returns a delegation chain."}),"\n",(0,t.jsx)(n.li,{children:"This delegation chain includes cryptographic proofs of the user's authentication."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"5-processing-the-authentication-result",children:"5. Processing the Authentication Result"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The application receives the delegation chain from the II service."}),"\n",(0,t.jsx)(n.li,{children:"It processes this data, extracting necessary information like the user's public key."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"6-login-request-preparation",children:"6. Login Request Preparation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The application prepares a login request including:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The serialized delegation chain"}),"\n",(0,t.jsx)(n.li,{children:"The original challenge payload"}),"\n",(0,t.jsx)(n.li,{children:"Wallet metadata (ICP canister ID and wallet name)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"7-server-side-verification",children:"7. Server-side Verification"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The login request is sent to the Calimero server."}),"\n",(0,t.jsx)(n.li,{children:"The server verifies the delegation chain and challenge."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"8-successful-login",children:"8. Successful Login"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upon successful verification, the user is logged in and directed to the identity page."}),"\n",(0,t.jsx)(n.li,{children:"The user's Internet Identity becomes their unique identifier for future interactions within the Calimero ecosystem."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This process leverages ICP's delegation chain mechanism for secure, decentralized authentication."}),"\n",(0,t.jsx)(n.h2,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,t.jsx)(n.h3,{id:"authentication-only-functionality",children:"Authentication-Only Functionality"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"At present, the ICP integration is primarily focused on authentication and login functionality."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"future-developments",children:"Future Developments"}),"\n",(0,t.jsx)(n.p,{children:"We are actively working on expanding the ICP integration to include:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Read Operations"}),": Implementing secure methods to read data from the Internet Computer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Write Operations"}),": Developing functionality for users to perform write operations on ICP canisters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stay tuned for updates as we continue to enhance our ICP integration capabilities."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1503:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(758);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);