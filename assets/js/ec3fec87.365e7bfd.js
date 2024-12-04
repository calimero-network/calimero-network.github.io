"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9251],{6932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorials/login-with-wallets/near-wallet","title":"Near Wallet","description":"Logging in with NEAR Wallet","source":"@site/docs/06-tutorials/01-login-with-wallets/01-near-wallet.mdx","sourceDirName":"06-tutorials/01-login-with-wallets","slug":"/tutorials/login-with-wallets/near-wallet","permalink":"/tutorials/login-with-wallets/near-wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/06-tutorials/01-login-with-wallets/01-near-wallet.mdx","tags":[],"version":"current","lastUpdatedAt":1733309504000,"sidebarPosition":1,"frontMatter":{"id":"near-wallet","title":"Near Wallet"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorials","permalink":"/tutorials/overview"},"next":{"title":"Starknet Wallet","permalink":"/tutorials/login-with-wallets/starknet-wallet"}}');var l=n(6070),s=n(5658);const r={id:"near-wallet",title:"Near Wallet"},a=void 0,o={},c=[{value:"Logging in with NEAR Wallet",id:"logging-in-with-near-wallet",level:2},{value:"1. User Initiates Login",id:"1-user-initiates-login",level:3},{value:"2. Server Issues Challenge",id:"2-server-issues-challenge",level:3},{value:"3. Redirect to MyNearWallet",id:"3-redirect-to-mynearwallet",level:3},{value:"4. Signature Sent to Backend",id:"4-signature-sent-to-backend",level:3},{value:"5. Signature Verification",id:"5-signature-verification",level:3},{value:"6. Successful Login",id:"6-successful-login",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"logging-in-with-near-wallet",children:"Logging in with NEAR Wallet"}),"\n",(0,l.jsx)(t.p,{children:"Calimero allows users to authenticate via their NEAR wallet, ensuring secure\naccess to the Admin Dashboard. The process of logging in with a NEAR wallet\ninvolves the following steps:"}),"\n",(0,l.jsx)(t.h3,{id:"1-user-initiates-login",children:"1. User Initiates Login"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:'The user navigates to the Admin Dashboard and selects the option to "Login\nwith NEAR Wallet."'}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"2-server-issues-challenge",children:"2. Server Issues Challenge"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Upon selecting the login option, the server generates a challenge. This\nchallenge is then presented to the user for signing."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"3-redirect-to-mynearwallet",children:"3. Redirect to MyNearWallet"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["The user is redirected to the ",(0,l.jsx)(t.a,{href:"https://mynearwallet.com/",children:"MyNearWallet"})," page,\nwhere they will be asked to sign the server-issued challenge using their NEAR\nwallet."]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"4-signature-sent-to-backend",children:"4. Signature Sent to Backend"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"After the user signs the challenge, the signature is sent back to the server\nfor verification."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"5-signature-verification",children:"5. Signature Verification"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"The backend verifies the signature to ensure its authenticity. If the\nsignature is valid, the user's public key is extracted from the signature and\nadded as the user's unique identifier."}),"\n",(0,l.jsx)(t.li,{children:"This public key serves as the user's Decentralized Identifier (DID), not as a\ncontext-specific identity. The DID enables decentralized authentication,\nensuring that the user can interact with the platform securely across\ndifferent contexts and applications."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"6-successful-login",children:"6. Successful Login"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Once verified, the user is successfully logged into the Admin Dashboard, with\ntheir public key (DID) serving as their user ID for future interactions."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"This login flow ensures a secure and seamless authentication process leveraging\nNEAR's robust blockchain-based security."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(758);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);