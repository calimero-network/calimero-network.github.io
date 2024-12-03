"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4931],{787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"getting-started/setup-your-first-context/create-context","title":"Create Context","description":"Create a context using the Admin Dashboard","source":"@site/docs/03-getting-started/03-setup-your-first-context/01-create-context.mdx","sourceDirName":"03-getting-started/03-setup-your-first-context","slug":"/getting-started/setup-your-first-context/create-context","permalink":"/getting-started/setup-your-first-context/create-context","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/03-getting-started/03-setup-your-first-context/01-create-context.mdx","tags":[],"version":"current","lastUpdatedAt":1733218267000,"sidebarPosition":1,"frontMatter":{"id":"create-context","title":"Create Context"},"sidebar":"tutorialSidebar","previous":{"title":"Admin Dashboard","permalink":"/getting-started/admin-dashboard"},"next":{"title":"Invite To Context","permalink":"/getting-started/setup-your-first-context/invite-to-context"}}');var i=n(6070),s=n(5658);const c={id:"create-context",title:"Create Context"},o=void 0,r={},l=[{value:"Create a context using the Admin Dashboard",id:"create-a-context-using-the-admin-dashboard",level:2},{value:"Create context using interactive CLI",id:"create-context-using-interactive-cli",level:2},{value:"Step 1: Install the Application",id:"step-1-install-the-application",level:3},{value:"Step 2: Create a New Context",id:"step-2-create-a-new-context",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"create-a-context-using-the-admin-dashboard",children:"Create a context using the Admin Dashboard"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Navigate to the "Contexts" tab and click the "Start New Context" button.'}),"\n",(0,i.jsx)(t.li,{children:'Use the "Browse" button to select an application from the list.'}),"\n",(0,i.jsx)(t.li,{children:'Choose the "Template Application" option.'}),"\n",(0,i.jsx)(t.li,{children:'Press "Start" to initiate the context creation process with the selected\napplication.'}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Visit ",(0,i.jsx)(t.a,{href:"/getting-started/admin-dashboard",children:"Admin Dashboard Page"})," to view detailed\ninstructions with images."]}),"\n",(0,i.jsx)(t.p,{children:"After the context is created, you will be redirected to the context dashboard.\nKeep this page open as you will need the Context ID later."}),"\n",(0,i.jsx)(t.h2,{id:"create-context-using-interactive-cli",children:"Create context using interactive CLI"}),"\n",(0,i.jsxs)(t.p,{children:["After you starting the node following\n",(0,i.jsx)(t.a,{href:"/getting-started/init-and-run-node",children:"instructions"}),", interactive CLI will be available\nwithin the same terminal."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Interactive CLI",src:n(6746).A+"",width:"2138",height:"1256"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": You can see available commands in terminal: call, peers, pool, gc,\ncontext, application. In this example we will be using commands for ",(0,i.jsx)(t.code,{children:"context"}),"\nand ",(0,i.jsx)(t.code,{children:"application"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-install-the-application",children:"Step 1: Install the Application"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command to install the application:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"application install url {url}\xa0{metadata}\n"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": metadata example:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'\'{"contractAppId": "<application_id>"}\'\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You can find the application ",(0,i.jsx)(t.code,{children:"URL"})," and ",(0,i.jsx)(t.code,{children:"contractAppId"})," by opening Application\nDetails from Applications section of the Admin Dashboard."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also install an app that you have available locally with ",(0,i.jsx)(t.code,{children:"file"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"application install file {path/to/file}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Application details",src:n(6113).A+"",width:"2418",height:"654"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"contractApplicationId"})," is the id of application stored in the contract. Value\nis optional but if provided, it enables Admin Dashboard to extract and display\nthe application metadata."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Example"',children:'application install url https://blobby-public.euw3.prod.gcp.calimero.network/bafkreihl5o6etrnpy7dlgixz3onbfb3og4dll2yqsqaebqakuldk6e2qya \'{"contractAppId": "980265ba072119a9074e429dea477e1c084a94e8d9f645c0158680e6942fb99e"}\'\n|\xa0Downloading application..\n\u2502 Installed application: Ahe2vLWLgswJARv5LsafXp7uJyb2Ba9GjzUSeLc71gUF\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Application install",src:n(8489).A+"",width:"2104",height:"1054"})}),"\n",(0,i.jsx)(t.h3,{id:"step-2-create-a-new-context",children:"Step 2: Create a New Context"}),"\n",(0,i.jsxs)(t.p,{children:["Conext can be created from the ",(0,i.jsx)(t.a,{href:"/getting-started/admin-dashboard",children:"Admin Dashboard Page"}),"\nor with interactive CLI."]}),"\n",(0,i.jsx)(t.p,{children:"After the application is successfully installed, you can create a new context\nwith the installed application using this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"context create {applicationId}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Example"',children:"context create Ahe2vLWLgswJARv5LsafXp7uJyb2Ba9GjzUSeLc71gUF\n2024-10-07T11:55:36.658396Z  INFO calimero_context: Subscribed to context context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\nCreated context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn with\nidentity DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create context",src:n(4043).A+"",width:"2144",height:"1250"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6113:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/application-details-for-context-creation-c6bad15db650370162b5f187fe61b93d.png"},6746:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/0-interactive-cli-292babf32a8222076a6f90c6c54d768c.png"},8489:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1-install-app-24cb8f2f6694b7c59c30c50ddfddcccb.png"},4043:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2-create-context-3a7bde85050cb57aab0686c0b40d39d3.png"},5658:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var a=n(758);const i={},s=a.createContext(i);function c(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);