"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7302],{2018:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/login-with-wallets/icp-wallet","title":"ICP Wallet","description":"Logging in with Internet Identity","source":"@site/docs/06-tutorials/01-login-with-wallets/03-icp-wallet.mdx","sourceDirName":"06-tutorials/01-login-with-wallets","slug":"/tutorials/login-with-wallets/icp-wallet","permalink":"/tutorials/login-with-wallets/icp-wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/06-tutorials/01-login-with-wallets/03-icp-wallet.mdx","tags":[],"version":"current","lastUpdatedAt":1733309504000,"sidebarPosition":3,"frontMatter":{"id":"icp-wallet","title":"ICP Wallet"},"sidebar":"tutorialSidebar","previous":{"title":"Starknet Wallet","permalink":"/tutorials/login-with-wallets/starknet-wallet"},"next":{"title":"Create Context","permalink":"/tutorials/create-context"}}');var l=n(6070),s=n(5658);const r={id:"icp-wallet",title:"ICP Wallet"},a=void 0,o={},c=[{value:"Logging in with Internet Identity",id:"logging-in-with-internet-identity",level:2},{value:"1. User Initiates Login",id:"1-user-initiates-login",level:3},{value:"2. Challenge Preparation",id:"2-challenge-preparation",level:3},{value:"3. Internet Identity Authentication",id:"3-internet-identity-authentication",level:3},{value:"4. Delegation Chain Retrieval",id:"4-delegation-chain-retrieval",level:3},{value:"5. Processing the Authentication Result",id:"5-processing-the-authentication-result",level:3},{value:"6. Login Request Preparation",id:"6-login-request-preparation",level:3},{value:"7. Server-side Verification",id:"7-server-side-verification",level:3},{value:"8. Successful Login",id:"8-successful-login",level:3}];function h(e){const i={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"logging-in-with-internet-identity",children:"Logging in with Internet Identity"}),"\n",(0,l.jsx)(i.p,{children:"The login process with Internet Identity involves these key steps:"}),"\n",(0,l.jsx)(i.h3,{id:"1-user-initiates-login",children:"1. User Initiates Login"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:'The user navigates to the Admin Dashboard and selects the option to "Login\nwith Internet Identity."'}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"2-challenge-preparation",children:"2. Challenge Preparation"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"The system prepares a challenge (encoded as a session public key) before\ninitiating the authentication process."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"3-internet-identity-authentication",children:"3. Internet Identity Authentication"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"A popup window opens, connecting to the Internet Identity service."}),"\n",(0,l.jsx)(i.li,{children:"The user authenticates through this popup."}),"\n",(0,l.jsx)(i.li,{children:"The challenge (session public key) is sent to the II service."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"4-delegation-chain-retrieval",children:"4. Delegation Chain Retrieval"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Upon successful authentication, the II service creates and returns a\ndelegation chain."}),"\n",(0,l.jsx)(i.li,{children:"This delegation chain includes cryptographic proofs of the user's\nauthentication."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"5-processing-the-authentication-result",children:"5. Processing the Authentication Result"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"The application receives the delegation chain from the II service."}),"\n",(0,l.jsx)(i.li,{children:"It processes this data, extracting necessary information like the user's\npublic key."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"6-login-request-preparation",children:"6. Login Request Preparation"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["The application prepares a login request including:","\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"The serialized delegation chain"}),"\n",(0,l.jsx)(i.li,{children:"The original challenge payload"}),"\n",(0,l.jsx)(i.li,{children:"Wallet metadata (ICP canister ID and wallet name)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"7-server-side-verification",children:"7. Server-side Verification"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"The login request is sent to the Calimero server."}),"\n",(0,l.jsx)(i.li,{children:"The server verifies the delegation chain and challenge."}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"8-successful-login",children:"8. Successful Login"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"Upon successful verification, the user is logged in and directed to the\nidentity page."}),"\n",(0,l.jsx)(i.li,{children:"The user's Internet Identity becomes their unique identifier for future\ninteractions within the Calimero ecosystem."}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"This process leverages ICP's delegation chain mechanism for secure,\ndecentralized authentication."})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5658:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(758);const l={},s=t.createContext(l);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);