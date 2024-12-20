"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8282,8934],{8096:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"developer-tools/CLI/merod","title":"Merod","description":"Merod is a command-line tool that allows you to initialize, configure and run Calimero nodes.","source":"@site/docs/05-developer-tools/01-CLI/01-merod.mdx","sourceDirName":"05-developer-tools/01-CLI","slug":"/developer-tools/CLI/merod","permalink":"/developer-tools/CLI/merod","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/05-developer-tools/01-CLI/01-merod.mdx","tags":[],"version":"current","lastUpdatedAt":1734697738000,"sidebarPosition":1,"frontMatter":{"id":"merod","title":"Merod"},"sidebar":"tutorialSidebar","previous":{"title":"Developer Tools","permalink":"/developer-tools/overview"},"next":{"title":"Meroctl","permalink":"/developer-tools/CLI/meroctl"}}');var s=r(6070),l=r(5248),o=r(1531);const i={id:"merod",title:"Merod"},a=void 0,d={},c=[...o.toc,{value:"Usage",id:"usage",level:2},{value:"Commands:",id:"commands",level:3},{value:"Options:",id:"options",level:3},{value:"Examples:",id:"examples",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Merod is a command-line tool that allows you to initialize, configure and run Calimero nodes."}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Installation"}),(0,s.jsx)("p",{children:(0,s.jsx)(o.default,{})})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod [OPTIONS] --node-name <NAME> <COMMAND>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"commands",children:"Commands:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"})," Configure the node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"init"})," Initialize node configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"run"})," Run a node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"relay"})," Relay incoming requests to specific location"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"help"})," Print this message or the help of the given subcommand(s)"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"Run help to get more information about the available options and commands."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod --help\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"Options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--home <PATH>"})," Directory for config and data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-n"}),", ",(0,s.jsx)(n.code,{children:"--node-name <NAME>"})," Name of node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h"}),", ",(0,s.jsx)(n.code,{children:"--help"})," Print help"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-V"}),", ",(0,s.jsx)(n.code,{children:"--version"})," Print version"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Default location of the config and data directory is ",(0,s.jsx)(n.code,{children:"~/.calimero"}),". You can\nchange the location by using the ",(0,s.jsx)(n.code,{children:"--home"})," option."]})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Command"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"merod --node-name node1 init"})}),(0,s.jsx)(n.td,{children:"Initialize a node with default settings. (server-port = 2428 and swarm-port = 2528`)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"merod --node-name node1 init --server-port 2429 --swarm-port 2529"})}),(0,s.jsx)(n.td,{children:"Initialize a node with custom ports."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mkdir data && merod --home data/ --node-name node1 init"})}),(0,s.jsx)(n.td,{children:"Initialize a node with a custom home directory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"merod --node-name node1 config --server-host 143.34.182.202 --server-port 3000"})}),(0,s.jsx)(n.td,{children:"Configure an existing node with a specific server host and port."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"merod --node-name node1 run"})}),(0,s.jsx)(n.td,{children:"Run a node."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"merod --node-name node2 relay --listen 127.0.0.1:3333"})}),(0,s.jsx)(n.td,{children:"Relay incoming requests to a specific location."})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1531:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"shared/install-merod","title":"install-merod","description":"You can choose to install merod using either the installation script or","source":"@site/docs/shared/install-merod.mdx","sourceDirName":"shared","slug":"/shared/install-merod","permalink":"/shared/install-merod","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/shared/install-merod.mdx","tags":[],"version":"current","lastUpdatedAt":1734697738000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"install-meroctl","permalink":"/shared/install-meroctl"}}');var s=r(6070),l=r(5248),o=r(3505),i=r(7576);const a={},d=void 0,c={},h=[{value:"Steps",id:"steps",level:4},{value:"Steps",id:"steps-1",level:4},{value:"Notes for Shell Environments",id:"notes-for-shell-environments",level:4}];function u(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can choose to install ",(0,s.jsx)(n.code,{children:"merod"})," using either the installation script or\nHomebrew."]}),"\n","\n",(0,s.jsxs)(o.A,{defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Installation Script",value:"script"}],children:[(0,s.jsxs)(i.A,{value:"homebrew",children:[(0,s.jsxs)(n.p,{children:["If you use Homebrew, you can install ",(0,s.jsx)(n.code,{children:"merod"})," directly with the following\nsteps:"]}),(0,s.jsx)(n.h4,{id:"steps",children:"Steps"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the Calimero Homebrew tap:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew tap calimero-network/homebrew-tap\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.code,{children:"merod"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew install merod\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"merod --version\n"})}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"If the version number appears, the installation was successful."})]}),(0,s.jsxs)(i.A,{value:"script",children:[(0,s.jsx)(n.p,{children:"The installation script supports multiple terminal environments and will\nautomatically configure your PATH based on your shell."}),(0,s.jsx)(n.h4,{id:"steps-1",children:"Steps"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Open your terminal and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sSf https://raw.githubusercontent.com/calimero-network/core/master/scripts/install-merod.sh | bash\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Source the updated PATH:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"source <your-shell-config-file>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<your-shell-config-file>"})," with ",(0,s.jsx)(n.code,{children:".bashrc"}),", ",(0,s.jsx)(n.code,{children:".zshrc"}),", or the relevant\nconfiguration file for your shell."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"merod --version\n"})}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"If the version number appears, the installation was successful."}),(0,s.jsx)(n.h4,{id:"notes-for-shell-environments",children:"Notes for Shell Environments"}),(0,s.jsx)(n.p,{children:"The script automatically updates your PATH based on your shell configuration:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bash"}),": Updates ",(0,s.jsx)(n.code,{children:".bashrc"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Zsh"}),": Updates ",(0,s.jsx)(n.code,{children:".zshrc"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fish"}),": Modifies ",(0,s.jsx)(n.code,{children:"~/.config/fish/config.fish"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Csh/Tcsh"}),": Updates ",(0,s.jsx)(n.code,{children:".cshrc"}),"."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["To apply the changes immediately, use the ",(0,s.jsx)(n.code,{children:"source"})," command as described in step\n2 above."]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7576:(e,n,r)=>{r.d(n,{A:()=>o});r(758);var t=r(3526);const s={tabItem:"tabItem_KLga"};var l=r(6070);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:r,children:n})}},3505:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(758),s=r(3526),l=r(8155),o=r(5557),i=r(5536),a=r(7852),d=r(1381),c=r(4012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=u(e),[o,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[d,h]=p({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),f=(()=>{const e=d??x;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=r(2236);const f={tabList:"tabList_B3_y",tabItem:"tabItem_z210"};var b=r(6070);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),c=e=>{const n=e.currentTarget,r=a.indexOf(n),s=i[r].value;s!==t&&(d(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:h,onClick:c,...l,className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},5248:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(758);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);