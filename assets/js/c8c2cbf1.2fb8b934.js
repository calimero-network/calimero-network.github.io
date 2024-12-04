"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8373],{6679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"throubleshooting/ssl-tls","title":"SSL/TLS","description":"SSL/TLS Support","source":"@site/docs/08-throubleshooting/02-ssl.mdx","sourceDirName":"08-throubleshooting","slug":"/throubleshooting/ssl-tls","permalink":"/throubleshooting/ssl-tls","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/08-throubleshooting/02-ssl.mdx","tags":[],"version":"current","lastUpdatedAt":1733309504000,"sidebarPosition":2,"frontMatter":{"id":"ssl-tls","title":"SSL/TLS"},"sidebar":"tutorialSidebar","previous":{"title":"General","permalink":"/throubleshooting/overview"},"next":{"title":"GitHub","permalink":"/contributing/github"}}');var s=n(6070),r=n(5658);const c={id:"ssl-tls",title:"SSL/TLS"},o=void 0,l={},d=[{value:"SSL/TLS Support",id:"ssltls-support",level:3},{value:"Steps to Add the Certificate to Your Device",id:"steps-to-add-the-certificate-to-your-device",level:3},{value:"Rules for Generating SSL Certificates",id:"rules-for-generating-ssl-certificates",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"ssltls-support",children:"SSL/TLS Support"}),"\n",(0,s.jsx)(t.p,{children:"To be able to access the the node from external source on the same network you\nwill need to install the generated self-signed certificate."}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"NOTE:"})})," Installing the SSL certificate is only necessary if you plan to\naccess the node from an external source on the same network. If you are\nrunning the application locally, you do not need to install the certificate."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"steps-to-add-the-certificate-to-your-device",children:"Steps to Add the Certificate to Your Device"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Locate the Certificate"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the certificate from\n",(0,s.jsx)(t.code,{children:"http://localhost:<server-port>/admin-api/certificate"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"<server-port>"})," is the port number used as an argument in the\n",(0,s.jsx)(t.code,{children:"--server-port"})," flag in the section\n",(0,s.jsx)(t.a,{href:"../getting-started/setup",children:"Initialize and start your node (separate terminal)"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["For example: ",(0,s.jsx)(t.code,{children:"bash http://localhost:2428/admin-api/certificate"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Add the Certificate to Trusted Certificates"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"For Windows"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.code,{children:"Run"})," dialog (Win + R) and type ",(0,s.jsx)(t.code,{children:"mmc"})," to open the Microsoft\nManagement Console."]}),"\n",(0,s.jsxs)(t.li,{children:["Go to ",(0,s.jsx)(t.code,{children:"File"})," -> ",(0,s.jsx)(t.code,{children:"Add/Remove Snap-in..."}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"Certificates"})," and click ",(0,s.jsx)(t.code,{children:"Add"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.code,{children:"Computer account"}),", then ",(0,s.jsx)(t.code,{children:"Next"})," and ",(0,s.jsx)(t.code,{children:"Finish"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Expand ",(0,s.jsx)(t.code,{children:"Certificates (Local Computer)"})," ->\n",(0,s.jsx)(t.code,{children:"Trusted Root Certification Authorities"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Right-click ",(0,s.jsx)(t.code,{children:"Certificates"}),", then ",(0,s.jsx)(t.code,{children:"All Tasks"})," -> ",(0,s.jsx)(t.code,{children:"Import..."}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Follow the prompts to import the certificate file."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"For macOS"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Double-click the certificate file."}),"\n",(0,s.jsxs)(t.li,{children:["This will open the ",(0,s.jsx)(t.code,{children:"Keychain Access"})," application."]}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.code,{children:"System"})," from the list of keychains."]}),"\n",(0,s.jsxs)(t.li,{children:["Drag and drop the certificate into the ",(0,s.jsx)(t.code,{children:"System"})," keychain."]}),"\n",(0,s.jsx)(t.li,{children:"Authenticate with your administrator password if prompted."}),"\n",(0,s.jsxs)(t.li,{children:["Right-click the certificate and select ",(0,s.jsx)(t.code,{children:"Get Info"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Expand the ",(0,s.jsx)(t.code,{children:"Trust"})," section and select ",(0,s.jsx)(t.code,{children:"Always Trust"})," from the\n",(0,s.jsx)(t.code,{children:"When using this certificate"})," dropdown."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"For Linux"}),":"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Copy the certificate to ",(0,s.jsx)(t.code,{children:"/usr/local/share/ca-certificates/"})," (or\n",(0,s.jsx)(t.code,{children:"/etc/pki/ca-trust/source/anchors/"})," depending on your distribution)."]}),"\n",(0,s.jsxs)(t.li,{children:["Run ",(0,s.jsx)(t.code,{children:"sudo update-ca-certificates"})," (or ",(0,s.jsx)(t.code,{children:"sudo update-ca-trust extract"})," for\nRed Hat-based distributions)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Restart Your Browser"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Close and reopen your web browser to ensure it recognizes the newly added\ncertificate."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"rules-for-generating-ssl-certificates",children:"Rules for Generating SSL Certificates"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If a certificate doesn't exist, a new one will be generated based on your\ncurrent local IP address."}),"\n",(0,s.jsx)(t.li,{children:"If a certificate exists for the current IP address, it will be used."}),"\n",(0,s.jsx)(t.li,{children:"If a certificate exists but is not configured for the current IP address, a\nnew certificate will be created."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"NOTE:"})})," Every time a new certificate is generated (e.g., on the first\nstart of the server or when the IP address changes), you will need to add it\nto your device's trusted certificates."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(758);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);