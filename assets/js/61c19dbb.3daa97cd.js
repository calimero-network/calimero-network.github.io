"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1367],{9383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(6070),r=t(5658);const s={id:"setup",title:"Setup"},o=void 0,a={id:"getting-started/setup",title:"Setup",description:"Before you start, make sure you are familiar with",source:"@site/docs/03-getting-started/01-setup.mdx",sourceDirName:"03-getting-started",slug:"/getting-started/setup",permalink:"/getting-started/setup",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1729676844e3,sidebarPosition:1,frontMatter:{id:"setup",title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/learn/advanced-concepts/encryption"},next:{title:"Admin Dashboard",permalink:"/getting-started/admin-dashboard"}},l={},c=[{value:"Setup your local node",id:"setup-your-local-node",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"CLI Setup",id:"cli-setup",level:3},{value:"Initialize and start coordinator node (separate terminal)",id:"initialize-and-start-coordinator-node-separate-terminal",level:4},{value:"Initialize and start your node (separate terminal)",id:"initialize-and-start-your-node-separate-terminal",level:4},{value:"Docker Setup",id:"docker-setup",level:3},{value:"SSL/TLS Support",id:"ssltls-support",level:3},{value:"Steps to Add the Certificate to Your Device",id:"steps-to-add-the-certificate-to-your-device",level:3},{value:"Rules for Generating SSL Certificates",id:"rules-for-generating-ssl-certificates",level:3},{value:"Congratulations on Setting Up Your Node!",id:"congratulations-on-setting-up-your-node",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Before you start, make sure you are familiar with\n",(0,i.jsx)(n.a,{href:"/learn/terminology",children:"Calimero Terminology"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"setup-your-local-node",children:"Setup your local node"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Clone repository from GitHub."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"git clone https://github.com/calimero-network/core.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"git clone git@github.com:calimero-network/core.git\n"})}),"\n",(0,i.jsx)(n.p,{children:"Position in the root of the project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd core\n"})}),"\n",(0,i.jsx)(n.p,{children:"And create a data folder for all configuration files."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"mkdir data\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure you have Rust installed on your machine. If not, you can install it by\nfollowing the instructions on the\n",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust website"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"NOTE:"})})," Use minimum rust version 1.80.0"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cli-setup",children:"CLI Setup"}),"\n",(0,i.jsx)(n.p,{children:"Setup coordinator node used for managing the network transactions and peer nodes\nrepresenting the network participants."}),"\n",(0,i.jsx)(n.h4,{id:"initialize-and-start-coordinator-node-separate-terminal",children:"Initialize and start coordinator node (separate terminal)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p merod -- --node-name coordinator --home data init --server-port 2427 --swarm-port 2527\ncargo run -p merod -- --node-name coordinator --home data run --node-type coordinator\n"})}),"\n",(0,i.jsx)(n.h4,{id:"initialize-and-start-your-node-separate-terminal",children:"Initialize and start your node (separate terminal)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p merod -- --node-name node1 --home data init --server-port 2428 --swarm-port 2528\ncargo run -p merod -- --node-name node1 --home data run\n"})}),"\n",(0,i.jsx)(n.p,{children:"Node is now initialized and ready for use."}),"\n",(0,i.jsx)(n.h3,{id:"docker-setup",children:"Docker Setup"}),"\n",(0,i.jsx)(n.p,{children:"You can also use Docker to setup the nodes. The outcome is the same as using\nCLI. If you have already used CLI, you can skip this step."}),"\n",(0,i.jsx)(n.p,{children:"First build the image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker buildx build -t 'merod' .\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then setup and run the nodes defined in ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker compose up\n"})}),"\n",(0,i.jsx)(n.p,{children:"Connect to the available node by listing running containers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker ps\n"})}),"\n",(0,i.jsx)(n.p,{children:"and then attach to the selected container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"docker attach core-app_node_run-1\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Coordinator Terminal"',children:"docker attach core-coordinator_run-1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wait for a few moments and node logs should appear."}),"\n",(0,i.jsx)(n.h3,{id:"ssltls-support",children:"SSL/TLS Support"}),"\n",(0,i.jsx)(n.p,{children:"To be able to access the the node from external source on the same network you\nwill need to install the generated self-signed certificate."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"NOTE:"})})," Installing the SSL certificate is only necessary if you plan to\naccess the node from an external source on the same network. If you are\nrunning the application locally, you do not need to install the certificate."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-add-the-certificate-to-your-device",children:"Steps to Add the Certificate to Your Device"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Locate the Certificate"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the certificate from\n",(0,i.jsx)(n.code,{children:"http://localhost:<server-port>/admin-api/certificate"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"<server-port>"})," is the port number used as an argument in the\n",(0,i.jsx)(n.code,{children:"--server-port"})," flag in the section\n",(0,i.jsx)(n.a,{href:"#initialize-and-start-your-node-separate-terminal",children:"Initialize and start your node (separate terminal)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For example: ",(0,i.jsx)(n.code,{children:"bash http://localhost:2428/admin-api/certificate"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add the Certificate to Trusted Certificates"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For Windows"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"Run"})," dialog (Win + R) and type ",(0,i.jsx)(n.code,{children:"mmc"})," to open the Microsoft\nManagement Console."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"File"})," -> ",(0,i.jsx)(n.code,{children:"Add/Remove Snap-in..."}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Certificates"})," and click ",(0,i.jsx)(n.code,{children:"Add"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"Computer account"}),", then ",(0,i.jsx)(n.code,{children:"Next"})," and ",(0,i.jsx)(n.code,{children:"Finish"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Expand ",(0,i.jsx)(n.code,{children:"Certificates (Local Computer)"})," ->\n",(0,i.jsx)(n.code,{children:"Trusted Root Certification Authorities"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Right-click ",(0,i.jsx)(n.code,{children:"Certificates"}),", then ",(0,i.jsx)(n.code,{children:"All Tasks"})," -> ",(0,i.jsx)(n.code,{children:"Import..."}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Follow the prompts to import the certificate file."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For macOS"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Double-click the certificate file."}),"\n",(0,i.jsxs)(n.li,{children:["This will open the ",(0,i.jsx)(n.code,{children:"Keychain Access"})," application."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.code,{children:"System"})," from the list of keychains."]}),"\n",(0,i.jsxs)(n.li,{children:["Drag and drop the certificate into the ",(0,i.jsx)(n.code,{children:"System"})," keychain."]}),"\n",(0,i.jsx)(n.li,{children:"Authenticate with your administrator password if prompted."}),"\n",(0,i.jsxs)(n.li,{children:["Right-click the certificate and select ",(0,i.jsx)(n.code,{children:"Get Info"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Expand the ",(0,i.jsx)(n.code,{children:"Trust"})," section and select ",(0,i.jsx)(n.code,{children:"Always Trust"})," from the\n",(0,i.jsx)(n.code,{children:"When using this certificate"})," dropdown."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"For Linux"}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy the certificate to ",(0,i.jsx)(n.code,{children:"/usr/local/share/ca-certificates/"})," (or\n",(0,i.jsx)(n.code,{children:"/etc/pki/ca-trust/source/anchors/"})," depending on your distribution)."]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"sudo update-ca-certificates"})," (or ",(0,i.jsx)(n.code,{children:"sudo update-ca-trust extract"})," for\nRed Hat-based distributions)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Restart Your Browser"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Close and reopen your web browser to ensure it recognizes the newly added\ncertificate."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rules-for-generating-ssl-certificates",children:"Rules for Generating SSL Certificates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If a certificate doesn't exist, a new one will be generated based on your\ncurrent local IP address."}),"\n",(0,i.jsx)(n.li,{children:"If a certificate exists for the current IP address, it will be used."}),"\n",(0,i.jsx)(n.li,{children:"If a certificate exists but is not configured for the current IP address, a\nnew certificate will be created."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"NOTE:"})})," Every time a new certificate is generated (e.g., on the first\nstart of the server or when the IP address changes), you will need to add it\nto your device's trusted certificates."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"congratulations-on-setting-up-your-node",children:"Congratulations on Setting Up Your Node!"}),"\n",(0,i.jsx)(n.p,{children:"Your next step is to add an authentication mechanism to your node by adding a\ndecentralized identity."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(758);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);