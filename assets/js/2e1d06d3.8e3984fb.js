"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9502],{8582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(6070),o=t(1503);const l={id:"dev-mode",title:"Dev Mode"},a="Using Dev Mode in meroctl CLI",r={id:"build/dev-mode",title:"Dev Mode",description:"Overview",source:"@site/docs/04-build/04-dev-mode.mdx",sourceDirName:"04-build",slug:"/build/dev-mode",permalink:"/build/dev-mode",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1728638575e3,sidebarPosition:4,frontMatter:{id:"dev-mode",title:"Dev Mode"},sidebar:"tutorialSidebar",previous:{title:"Publish App",permalink:"/build/publish-app"},next:{title:"Tests",permalink:"/build/tests"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Why Use Dev Mode?",id:"why-use-dev-mode",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to Use Dev Mode",id:"how-to-use-dev-mode",level:2},{value:"Parameters:",id:"parameters",level:3},{value:"Automatic Updates",id:"automatic-updates",level:3},{value:"Other useful commands",id:"other-useful-commands",level:3},{value:"From development to Publication",id:"from-development-to-publication",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"using-dev-mode-in-meroctl-cli",children:"Using Dev Mode in meroctl CLI"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:'The meroctl CLI provides a powerful feature called "dev mode" that allows\ndevelopers to test their applications locally before publishing them to the\nnetwork. This mode is particularly useful during the development and testing\nphases of your application.'}),"\n",(0,i.jsx)(n.p,{children:"All of the communication with your node through the meroctl CLI is protected by\nyour nodes private key."}),"\n",(0,i.jsx)(n.h2,{id:"why-use-dev-mode",children:"Why Use Dev Mode?"}),"\n",(0,i.jsx)(n.p,{children:"Dev mode offers several advantages:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Local Testing"}),": Test your application on your local machine without\nneeding to publish it to the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quick Iterations"}),": Make changes to your application and immediately test\nthem without going through the full publication process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Context Creation"}),": Automatically create a context and link it to your\nlocal application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hot Reload-like Functionality"}),': Any changes to the binary will\nautomatically reflect in the context, eliminating the need to "upload" the\napp again after every change.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.p,{children:["Before using dev mode, ensure you have a node and a coordinator node running.\nThis should be done in a separate terminal window. For more information, see the\n",(0,i.jsx)(n.a,{href:"/getting-started/setup",children:"Setup guide"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-dev-mode",children:"How to Use Dev Mode"}),"\n",(0,i.jsx)(n.p,{children:"To list all supported commands for the deamon, run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p merod -- help\n"})}),"\n",(0,i.jsx)(n.p,{children:"To list all supported commands for the cli, run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p meroctl -- help\n"})}),"\n",(0,i.jsx)(n.p,{children:"Supported commands:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"context"})," Manage contexts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"app"})," Manage applications"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"help"})," Print this message or the help of the given subcommand(s)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here's the basic syntax:"}),"\n",(0,i.jsx)(n.p,{children:"All commands share the same prefix:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p meroctl -- --home <path_to_home> --node-name <node_name> <command>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--home"}),": Specifies the path to the home directory. ( In our example we are\nusing ",(0,i.jsx)(n.code,{children:"data"})," as the home directory)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--node-name"}),": Specifies the name of the node."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--path"}),": Specifies the absolute path to your WASM file."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Create dev context using installed app"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p meroctl -- --home <path_to_home> --node-name <node_name> context create --watch <path>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:'$ cargo run -p meroctl -- --home data --node-name node1 context create  --watch ./path/to/binary.wasm\nApplication `<appId>` installed!\nContext `<contextId>` created!\nContext{contextId} -> Application{appId}\n(i) Watching for changes to "./path/to/binary.wasm"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Invite coordinator or other local nodes to participate in the context"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p  meroctl -- --node-name coordinator --home data  context join --context-id contextId\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"Context <contextId> sucesfully joined\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create context command will:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install your application locally."}),"\n",(0,i.jsx)(n.li,{children:"Create a new context."}),"\n",(0,i.jsx)(n.li,{children:"Link the context to your local application."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"automatic-updates",children:"Automatic Updates"}),"\n",(0,i.jsx)(n.p,{children:'One of the key benefits of dev mode is its ability to automatically reflect\nchanges in your application. When you modify and recompile your WASM binary,\nthese changes are immediately available in the context without requiring you to\n"upload" or reinstall the application. This feature provides a seamless\ndevelopment experience, similar to "hot reload" functionality in other\ndevelopment environments.'}),"\n",(0,i.jsx)(n.h3,{id:"other-useful-commands",children:"Other useful commands"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"List existing contexts"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ cargo run -p meroctl -- --home data --node-name node1 context ls\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Create a context for a published application:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ cargo run -p meroctl -- --home data --node-name node1 context create --application-id <appId>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"Context `contextId` created!\nContext{contextId} -> Application{appId}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"from-development-to-publication",children:"From development to Publication"}),"\n",(0,i.jsx)(n.p,{children:"When you're ready to move from local development to publishing your application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Test your application thoroughly using dev mode."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When satisfied with your application's performance, follow the steps in the\nPublish App guide to publish your application to the network."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After publication, you can create contexts for your published application\nusing the --application-id flag instead of dev mode."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Install the local app on node for debugging"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p meroctl -- --home <path_to_home> --node-name <node_name> app install \u2013-path <path>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"Application installed successfully. Application ID: <appId>\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1503:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(758);const o={},l=i.createContext(o);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);