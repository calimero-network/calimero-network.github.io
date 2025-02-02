"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4101],{59:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"developer-tools/CLI/meroctl","title":"Meroctl","description":"Meroctl is a command-line tool that enables you to interact with your Calimero","source":"@site/docs/05-developer-tools/01-CLI/02-meroctl.mdx","sourceDirName":"05-developer-tools/01-CLI","slug":"/developer-tools/CLI/meroctl","permalink":"/next/developer-tools/CLI/meroctl","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/05-developer-tools/01-CLI/02-meroctl.mdx","tags":[],"version":"current","lastUpdatedAt":1738506759000,"sidebarPosition":2,"frontMatter":{"id":"meroctl","title":"Meroctl"},"sidebar":"tutorialSidebar","previous":{"title":"Merod","permalink":"/next/developer-tools/CLI/merod"},"next":{"title":"Protocol SDK","permalink":"/next/developer-tools/SDK/protocol-sdk/protocol-sdk"}}');var l=s(6070),r=s(5248),i=s(1938),o=s(951);function c(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["You can choose to install ",(0,l.jsx)(n.code,{children:"meroctl"})," using either the installation script or\nHomebrew."]}),"\n","\n",(0,l.jsxs)(i.A,{defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Installation Script",value:"script"}],children:[(0,l.jsxs)(o.A,{value:"homebrew",children:[(0,l.jsxs)(n.p,{children:["If you use Homebrew, you can install ",(0,l.jsx)(n.code,{children:"meroctl"})," directly with the following\nsteps:"]}),(0,l.jsx)(n.h4,{id:"steps",children:"Steps"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Add the Calimero Homebrew tap:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew tap calimero-network/homebrew-tap\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Install ",(0,l.jsx)(n.code,{children:"merod"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew install meroctl\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"meroctl --version\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"If the version number appears, the installation was successful."})]}),(0,l.jsxs)(o.A,{value:"script",children:[(0,l.jsx)(n.p,{children:"The installation script supports multiple terminal environments and will\nautomatically configure your PATH based on your shell."}),(0,l.jsx)(n.h4,{id:"steps-1",children:"Steps"}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Open your terminal and run:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl -sSf https://raw.githubusercontent.com/calimero-network/core/master/scripts/install-meroctl.sh | bash\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Source the updated PATH:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"source <your-shell-config-file>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Replace ",(0,l.jsx)(n.code,{children:"<your-shell-config-file>"})," with ",(0,l.jsx)(n.code,{children:".bashrc"}),", ",(0,l.jsx)(n.code,{children:".zshrc"}),", or the relevant\nconfiguration file for your shell."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"meroctl --version\n"})}),"\n"]}),"\n"]}),(0,l.jsx)(n.p,{children:"If the version number appears, the installation was successful."}),(0,l.jsx)(n.h4,{id:"notes-for-shell-environments",children:"Notes for Shell Environments"}),(0,l.jsx)(n.p,{children:"The script automatically updates your PATH based on your shell configuration:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Bash"}),": Updates ",(0,l.jsx)(n.code,{children:".bashrc"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Zsh"}),": Updates ",(0,l.jsx)(n.code,{children:".zshrc"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Fish"}),": Modifies ",(0,l.jsx)(n.code,{children:"~/.config/fish/config.fish"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Csh/Tcsh"}),": Updates ",(0,l.jsx)(n.code,{children:".cshrc"}),"."]}),"\n"]}),(0,l.jsxs)(n.p,{children:["To apply the changes immediately, use the ",(0,l.jsx)(n.code,{children:"source"})," command as described in step\n2 above."]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}const d={id:"meroctl",title:"Meroctl"},h=void 0,u={},x=[{value:"Steps",id:"steps",level:4},{value:"Steps",id:"steps-1",level:4},{value:"Notes for Shell Environments",id:"notes-for-shell-environments",level:4},{value:"Usage",id:"usage",level:2},{value:"Commands:",id:"commands",level:3},{value:"Options:",id:"options",level:3},{value:"Examples:",id:"examples",level:3},{value:"Manage Applications",id:"manage-applications",level:3},{value:"Manage Contexts",id:"manage-contexts",level:3},{value:"Manage Identities",id:"manage-identities",level:3},{value:"Command for managing proxy contract",id:"command-for-managing-proxy-contract",level:3},{value:"Show a number of connected peers",id:"show-a-number-of-connected-peers",level:3},{value:"Executing read and write RPC calls",id:"executing-read-and-write-rpc-calls",level:3},{value:"Setup two nodes inside the same context",id:"setup-two-nodes-inside-the-same-context",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Meroctl is a command-line tool that enables you to interact with your Calimero\nnode directly from the shell."}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Installation"}),(0,l.jsx)("p",{children:(0,l.jsx)(a,{})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl [OPTIONS] --node-name <NAME> <COMMAND>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"commands",children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"app"})," Command for managing applications"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"context"})," Command for managing contexts"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"identity"})," Command for managing applications"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"proxy"})," Command for managing proxy contract"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"call"})," Executing read and write RPC calls"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"peers"})," Show a number of connected peers"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"bootstrap"})," Setup two nodes inside the same context"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"help"})," Print this message or the help of the given subcommand(s)"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsx)(n.p,{children:"Run help to get more information about the available options and commands."}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --help\n"})})]}),"\n",(0,l.jsx)(n.h3,{id:"options",children:"Options:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--home <PATH>"})," Directory for config and data"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-n"}),", ",(0,l.jsx)(n.code,{children:"--node-name <NAME>"})," Name of node"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-h"}),", ",(0,l.jsx)(n.code,{children:"--help"})," Print help"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-output-format <FORMAT>"})," [default: plain-text] [possible values:\njson, plain-text]"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"-V"}),", ",(0,l.jsx)(n.code,{children:"--version"})," Print version"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["Default location of the config and data directory is ",(0,l.jsx)(n.code,{children:"~/.calimero"}),". You can\nchange the location by using the ",(0,l.jsx)(n.code,{children:"--home"})," option."]})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsx)(n.p,{children:"All of the communication with your node through the meroctl CLI is protected by\nyour nodes private key."})}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Command"})}),(0,l.jsx)(n.th,{children:(0,l.jsx)(n.strong,{children:"Description"})})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meroctl --node-name <NAME> app <COMMAND>"})}),(0,l.jsx)(n.td,{children:"Command for managing applications"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meroctl --node-name <NAME> context <COMMAND>"})}),(0,l.jsx)(n.td,{children:"Command for managing contexts"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meroctl --node-name <NAME> identity <COMMAND>"})}),(0,l.jsx)(n.td,{children:"Command for managing identities"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meroctl --node-name <NAME> proxy <COMMAND>"})}),(0,l.jsx)(n.td,{children:"Command for managing proxy contract"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meroctl --node-name <NAME> call [OPTIONS] --as <EXECUTOR> <CONTEXT_ID> <METHOD>"})}),(0,l.jsx)(n.td,{children:"Executing read and write RPC calls"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"manage-applications",children:"Manage Applications"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> app <COMMAND>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"get"})," Fetch application details"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"install"})," Install an application"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"list"})," List installed applications"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"manage-contexts",children:"Manage Contexts"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> context <COMMAND>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"list"})," List all contexts"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"create"})," Create a new context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"join"})," Join an application context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"invite"})," Create invitation to a context for a invitee"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"get"})," Fetch details about the context"]}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsxs)("summary",{children:[(0,l.jsx)(n.code,{children:"get"})," subcommands"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"info"})," Get context information"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"client-keys"})," Get client keys"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"storage"})," Get storage information"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"identities (-owned)"})," Get all identities in the context. Use ",(0,l.jsx)(n.code,{children:"--owned"})," to get\nonly owned identities"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:"Terminal",children:"meroctl --node-name <NAME> context get <contextId> <SUBCOMMAND>\n"})}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"delete"})," Delete an context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"watch"})," Watch events from a context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"update"})," Update app in context"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"peers"})," Show a number of connected peers"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"manage-identities",children:"Manage Identities"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> identity <COMMAND>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"generate"})," Generate public/private key pair used for context identity"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"command-for-managing-proxy-contract",children:"Command for managing proxy contract"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:" meroctl --node-name <NAME> proxy <COMMAND>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"get"})," Fetch details about the proxy contract"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"show-a-number-of-connected-peers",children:"Show a number of connected peers"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> peers\n"})}),"\n",(0,l.jsx)(n.h3,{id:"executing-read-and-write-rpc-calls",children:"Executing read and write RPC calls"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> call [OPTIONS] --as <EXECUTOR> <CONTEXT_ID> <METHOD>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Arguments:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<CONTEXT_ID>"})," ContextId of the context"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<METHOD>"})," Method to fetch details"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Options:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--args <ARGS>"})," JSON arguments to pass to the method"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--as <EXECUTOR>"})," Public key of the executor"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"--id <ID>"})," Id of the RPC execute call [default: dontcare]"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"setup-two-nodes-inside-the-same-context",children:"Setup two nodes inside the same context"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name <NAME> bootstrap <COMMAND> --merod-path <MEROD_PATH> --protocol <PROTOCOL> --app-path [APP_PATH]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Command initializes and run ",(0,l.jsx)(n.code,{children:"node1"})," and ",(0,l.jsx)(n.code,{children:"node2"})," in the same context."]}),"\n",(0,l.jsx)(n.p,{children:"Arguments:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<MEROD_PATH>"})," Full path to\n",(0,l.jsx)(n.a,{href:"https://calimero-network.github.io/developer-tools/CLI/merod",children:"merod"})," binary."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<PROTOCOL>"})," One of supported protocols for context creation. (e.g. near,\nstarknet, icp)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"<APP_PATH>"})," Path to the app wasm file. If not specified, the default\n",(0,l.jsx)(n.a,{href:"https://github.com/calimero-network/core-app-template",children:"core-template-app"}),"\nwill be used"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Commands:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"start"}),": Start bootstrap process"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},951:(e,n,s)=>{s.d(n,{A:()=>i});s(758);var t=s(3526);const l={tabItem:"tabItem_j4oX"};var r=s(6070);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,i),hidden:s,children:n})}},1938:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(758),l=s(3526),r=s(8789),i=s(5557),o=s(5272),c=s(5374),a=s(9775),d=s(4802);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:l}}=e;return{value:n,label:s,attributes:t,default:l}}))}(s);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const l=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,r=u(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[a,h]=m({queryString:s,groupId:l}),[p,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,d.Dv)(s);return[l,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:l}),g=(()=>{const e=a??p;return x({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=s(1364);const g={tabList:"tabList_T9Y8",tabItem:"tabItem_iJx9"};var f=s(6070);function b(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),l=o[s].value;l!==t&&(a(n),i(l))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{c.push(e)},onKeyDown:h,onClick:d,...r,className:(0,l.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,l.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},5248:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(758);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);