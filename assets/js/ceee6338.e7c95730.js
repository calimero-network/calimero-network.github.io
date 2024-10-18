"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1745],{6692:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(6070),s=n(2907);const o={id:"invite-to-context",title:"Invite To Context"},a=void 0,c={id:"getting-started/setup-your-first-context/invite-to-context",title:"Invite To Context",description:"Invite to context with Admin Dashboard",source:"@site/docs/03-getting-started/03-setup-your-first-context/02-invite-to-context.mdx",sourceDirName:"03-getting-started/03-setup-your-first-context",slug:"/getting-started/setup-your-first-context/invite-to-context",permalink:"/getting-started/setup-your-first-context/invite-to-context",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172928488e4,sidebarPosition:2,frontMatter:{id:"invite-to-context",title:"Invite To Context"},sidebar:"tutorialSidebar",previous:{title:"Create Context",permalink:"/getting-started/setup-your-first-context/create-context"},next:{title:"Explore the app",permalink:"/getting-started/setup-your-first-context/explore-the-app"}},r={},d=[{value:"Invite to context with Admin Dashboard",id:"invite-to-context-with-admin-dashboard",level:2},{value:"Invite node to context using interactive CLI",id:"invite-node-to-context-using-interactive-cli",level:2},{value:"Step-by-Step Process",id:"step-by-step-process",level:3}];function l(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"invite-to-context-with-admin-dashboard",children:"Invite to context with Admin Dashboard"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"Currently not available"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"invite-node-to-context-using-interactive-cli",children:"Invite node to context using interactive CLI"}),"\n",(0,i.jsx)(e.p,{children:"Inviting to the context consists of 3 steps:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Identity Exchange: The peer wishing to join (invitee) shares their identity\nwith the existing member (invitor)."}),"\n",(0,i.jsx)(e.li,{children:"Create Invitation: The invitor generates an invitation payload for the\ncontext."}),"\n",(0,i.jsx)(e.li,{children:"Accept Invitation: The invitee signs the invitation payload to confirm their\nidentity and join the context."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"In the example below, Node 2 is the coordinator node (invitee), and Node 1 is\nthe user node (invitor)."}),"\n",(0,i.jsx)(e.h3,{id:"step-by-step-process",children:"Step-by-Step Process"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Invitee Generates and Shares Identity To join the context, the invitee must\nfirst create and share their identity with the invitor. This can be done\nusing the following command:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"identity new\n"})}),"\n",(0,i.jsx)(e.p,{children:"This generates a private and public key pair, where the public key is the\ninviteeContextIdentity. Share this public key with the invitor."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity new\n\u2502 Private Key: 6i52ykNTqSqCgfDPYiKktListssSP9YwxLMzApDZe5U7\n\u2502 Public Key: 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Create Identity",src:n(9111).A+"",width:"2142",height:"1388"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"Invitor Creates an Invitation Once the invitee\u2019s public key is shared, the\ninvitor generates an invitation to the context using the following command:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 1"',children:"context invite {contextId} {invitorContextIdentity} {inviteeContextIdentity}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context invite 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9\n\u2502 Invited 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9 to context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Invitation Payload: axDfZcWCw7jc3i7MeG9JqhsYrNXRSvg6hXVWYpdsxNRhAjKD35S5FruCzyRWHYHzQyN1QbSVyRKRiTwz8Kbq4aj2dSdmi7HNxwcjTS5JkK1xwJMA8ogYuWHhDj4jfLdukPZb2SavC8cq3npFydinVZ\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Context Invite",src:n(4354).A+"",width:"2128",height:"1516"})}),"\n",(0,i.jsx)(e.p,{children:"To check the invitor's identity, use this command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 1"',children:"identity ls {contextId}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity ls 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Identity                                     |  Owned \u2502\n| DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 | *\n"})}),"\n",(0,i.jsx)(e.p,{children:"Listed identity is invitorContextIdentity used above."}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"Invitee Accepts the Invitation After receiving the invitation payload from\nthe invitor, the invitee can accept the invitation by signing it with their\nprivate key:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"context join {inviteePrivateKey} {invitationPayload}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context join 6i52ykNTqSqCgfDPYiKktListssSP9YwxLMzApDZe5U7 axDfZcWCw7jc3i7MeG9JqhsYrNXRSvg6hXVWYpdsxNRhAjKD35S5FruCzyRWHYHzQyN1QbSVyRKRiTwz8Kbq4aj2dSdmi7HNxwcjTS5JkK1xwJMA8ogYuWHhDj4jfLdukPZb2SavC8cq3npFydinVZ\n2024-10-07T12:18:51.809231Z  INFO calimero_context: Subscribed to context context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n2024-10-07T12:18:51.811102Z  INFO calimero_context: Joined context with pending catchup context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Joined context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn as 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9, waiting for catchup to complete...\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Context Join",src:n(9274).A+"",width:"2134",height:"1292"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsx)(e.li,{children:"Verifying Context Membership To confirm successful joining of the context,\nthe invitee can list their contexts with the following command:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"context ls\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context ls\n\u2502 Context ID                                   | Application ID                               | Last Transaction\n\u2502 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn | Ahe2vLWLgswJARv5LsafXp7uJyb2Ba9GjzUSeLc71gUF | b3ipivssRRm1ehRTSpUD3GKdUpvi3vq311pCT4iLvui\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Context List",src:n(6373).A+"",width:"2136",height:"170"})}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsx)(e.li,{children:"The invitee can also list identities in the context"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"identity ls {contextId}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity ls 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Identity                                     | Owned\n\u2502 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9 | *\n\u2502 DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 |\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Context Identity List",src:n(7290).A+"",width:"982",height:"138"})})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},9111:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/3-create-identity-da349b463a046d0b8330b7b1449280f1.png"},4354:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/4-context-invite-db1950a8fb0a6c93914618946ef325fc.png"},9274:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/5-context-join-f28f7dbdb96d1eee6698a1f2ac7b3e95.png"},7290:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/6-identity-list-65e6bedbf9a5e5dd214dd08a5aab547b.png"},6373:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/8-context-list-ebd87670b93106c3917a01cb28c2d8ef.png"},2907:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>c});var i=n(758);const s={},o=i.createContext(s);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);