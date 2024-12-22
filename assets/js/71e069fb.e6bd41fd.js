"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1663],{7151:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"tutorials/invitations-and-joinings","title":"Invitations and Joinings","description":"Invite to context with Admin Dashboard","source":"@site/docs/06-tutorials/03-invitations-and-joinings.mdx","sourceDirName":"06-tutorials","slug":"/tutorials/invitations-and-joinings","permalink":"/tutorials/invitations-and-joinings","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/06-tutorials/03-invitations-and-joinings.mdx","tags":[],"version":"current","lastUpdatedAt":1734895889000,"sidebarPosition":3,"frontMatter":{"id":"invitations-and-joinings","title":"Invitations and Joinings"},"sidebar":"tutorialSidebar","previous":{"title":"Create Context","permalink":"/tutorials/create-context"},"next":{"title":"Key-Value Store tutorial","permalink":"/tutorials/build-app"}}');var s=n(6070),a=n(5248);const o={id:"invitations-and-joinings",title:"Invitations and Joinings"},c=void 0,d={},r=[{value:"Invite to context with Admin Dashboard",id:"invite-to-context-with-admin-dashboard",level:2},{value:"Invite node to context using interactive CLI",id:"invite-node-to-context-using-interactive-cli",level:2},{value:"Step-by-Step Process",id:"step-by-step-process",level:3}];function l(t){const e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"invite-to-context-with-admin-dashboard",children:"Invite to context with Admin Dashboard"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Currently not available"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"invite-node-to-context-using-interactive-cli",children:"Invite node to context using interactive CLI"}),"\n",(0,s.jsx)(e.p,{children:"Inviting to the context consists of 3 steps:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Identity Exchange: The peer wishing to join (invitee) shares their identity\nwith the existing member (invitor)."}),"\n",(0,s.jsx)(e.li,{children:"Create Invitation: The invitor generates an invitation payload for the\ncontext."}),"\n",(0,s.jsx)(e.li,{children:"Accept Invitation: The invitee signs the invitation payload to confirm their\nidentity and join the context."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"In the example below, Node 2 is the invitee, and Node 1 is the invitor."}),"\n",(0,s.jsx)(e.h3,{id:"step-by-step-process",children:"Step-by-Step Process"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Invitee Generates and Shares Identity To join the context, the invitee must\nfirst create and share their identity with the invitor. This can be done\nusing the following command:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"identity new\n"})}),"\n",(0,s.jsx)(e.p,{children:"This generates a private and public key pair, where the public key is the\ninviteeContextIdentity. Share this public key with the invitor."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity new\n\u2502 Private Key: 6i52ykNTqSqCgfDPYiKktListssSP9YwxLMzApDZe5U7\n\u2502 Public Key: 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Create Identity",src:n(1333).A+"",width:"2142",height:"1388"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"Invitor Creates an Invitation Once the invitee\u2019s public key is shared, the\ninvitor generates an invitation to the context using the following command:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 1"',children:"context invite {contextId} {invitorContextIdentity} {inviteeContextIdentity}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context invite 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9\n\u2502 Invited 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9 to context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Invitation Payload: axDfZcWCw7jc3i7MeG9JqhsYrNXRSvg6hXVWYpdsxNRhAjKD35S5FruCzyRWHYHzQyN1QbSVyRKRiTwz8Kbq4aj2dSdmi7HNxwcjTS5JkK1xwJMA8ogYuWHhDj4jfLdukPZb2SavC8cq3npFydinVZ\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Context Invite",src:n(2664).A+"",width:"2128",height:"1516"})}),"\n",(0,s.jsx)(e.p,{children:"To check the invitor's identity, use this command:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 1"',children:"identity ls {contextId}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity ls 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Identity                                     |  Owned \u2502\n| DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 | *\n"})}),"\n",(0,s.jsx)(e.p,{children:"Listed identity is invitorContextIdentity used above."}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"Invitee Accepts the Invitation After receiving the invitation payload from\nthe invitor, the invitee can accept the invitation by signing it with their\nprivate key:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"context join {inviteePrivateKey} {invitationPayload}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context join 6i52ykNTqSqCgfDPYiKktListssSP9YwxLMzApDZe5U7 axDfZcWCw7jc3i7MeG9JqhsYrNXRSvg6hXVWYpdsxNRhAjKD35S5FruCzyRWHYHzQyN1QbSVyRKRiTwz8Kbq4aj2dSdmi7HNxwcjTS5JkK1xwJMA8ogYuWHhDj4jfLdukPZb2SavC8cq3npFydinVZ\n2024-10-07T12:18:51.809231Z  INFO calimero_context: Subscribed to context context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n2024-10-07T12:18:51.811102Z  INFO calimero_context: Joined context with pending catchup context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Joined context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn as 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9, waiting for catchup to complete...\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Context Join",src:n(2660).A+"",width:"2134",height:"1292"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"Verifying Context Membership To confirm successful joining of the context,\nthe invitee can list their contexts with the following command:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"context ls\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"context ls\n\u2502 Context ID                                   | Application ID                               | Last Transaction\n\u2502 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn | Ahe2vLWLgswJARv5LsafXp7uJyb2Ba9GjzUSeLc71gUF | b3ipivssRRm1ehRTSpUD3GKdUpvi3vq311pCT4iLvui\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Context List",src:n(1575).A+"",width:"2136",height:"170"})}),"\n",(0,s.jsxs)(e.ol,{start:"5",children:["\n",(0,s.jsx)(e.li,{children:"The invitee can also list identities in the context"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Node 2"',children:"identity ls {contextId}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:'title="Example"',children:"identity ls 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\n\u2502 Identity                                     | Owned\n\u2502 3yBQQvn2G8ghWk2ZwmLFYxJQgM1YmDtiigi84nGpZBb9 | *\n\u2502 DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5 |\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Context Identity List",src:n(7644).A+"",width:"982",height:"138"})})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1333:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/3-create-identity-da349b463a046d0b8330b7b1449280f1.png"},2664:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/4-context-invite-db1950a8fb0a6c93914618946ef325fc.png"},2660:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/5-context-join-f28f7dbdb96d1eee6698a1f2ac7b3e95.png"},7644:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/6-identity-list-65e6bedbf9a5e5dd214dd08a5aab547b.png"},1575:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/8-context-list-ebd87670b93106c3917a01cb28c2d8ef.png"},5248:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var i=n(758);const s={},a=i.createContext(s);function o(t){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(a.Provider,{value:e},t.children)}}}]);