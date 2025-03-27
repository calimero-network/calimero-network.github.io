"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3885],{8416:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(30758),s=t(13526),l=t(27130),i=t(25557),a=t(69059),o=t(41295),c=t(39924),d=t(6096);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=m({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),j=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=t(26241);const j={tabList:"tabList_z352",tabItem:"tabItem_du3W"};var g=t(86070);function b(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=a[t].value;s!==r&&(c(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},33763:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(30758);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}},62853:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/node-running-50b1a27fb9d7f62407382281da4692ab.png"},74494:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var r=t(86070),s=t(33763),l=t(8416),i=t(77932);const a=[{value:"Steps",id:"steps",level:4},{value:"Steps",id:"steps-1",level:4},{value:"Notes for Shell Environments",id:"notes-for-shell-environments",level:4}];function o(e){const n={code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can choose to install ",(0,r.jsx)(n.code,{children:"merod"})," using either the installation script or\nHomebrew."]}),"\n","\n",(0,r.jsxs)(l.A,{defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Installation Script",value:"script"}],children:[(0,r.jsxs)(i.A,{value:"homebrew",children:[(0,r.jsxs)(n.p,{children:["If you use Homebrew, you can install ",(0,r.jsx)(n.code,{children:"merod"})," directly with the following\nsteps:"]}),(0,r.jsx)(n.h4,{id:"steps",children:"Steps"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Add the Calimero Homebrew tap:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew tap calimero-network/homebrew-tap\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.code,{children:"merod"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"brew install merod\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"merod --version\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"If the version number appears, the installation was successful."})]}),(0,r.jsxs)(i.A,{value:"script",children:[(0,r.jsx)(n.p,{children:"The installation script supports multiple terminal environments and will\nautomatically configure your PATH based on your shell."}),(0,r.jsx)(n.h4,{id:"steps-1",children:"Steps"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open your terminal and run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -sSf https://raw.githubusercontent.com/calimero-network/install-sh/master/install-merod.sh | bash\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Source the updated PATH:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source <your-shell-config-file>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"<your-shell-config-file>"})," with ",(0,r.jsx)(n.code,{children:".bashrc"}),", ",(0,r.jsx)(n.code,{children:".zshrc"}),", or the relevant\nconfiguration file for your shell."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"merod --version\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"If the version number appears, the installation was successful."}),(0,r.jsx)(n.h4,{id:"notes-for-shell-environments",children:"Notes for Shell Environments"}),(0,r.jsx)(n.p,{children:"The script automatically updates your PATH based on your shell configuration:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bash"}),": Updates ",(0,r.jsx)(n.code,{children:".bashrc"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Zsh"}),": Updates ",(0,r.jsx)(n.code,{children:".zshrc"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fish"}),": Modifies ",(0,r.jsx)(n.code,{children:"~/.config/fish/config.fish"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Csh/Tcsh"}),": Updates ",(0,r.jsx)(n.code,{children:".cshrc"}),"."]}),"\n"]}),(0,r.jsxs)(n.p,{children:["To apply the changes immediately, use the ",(0,r.jsx)(n.code,{children:"source"})," command as described in step\n2 above."]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},77584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"getting-started/setup","title":"Setup","description":"This guide will help you set up Calimero in your device.","source":"@site/versioned_docs/version-0.4.0/02-getting-started/01-setup.mdx","sourceDirName":"02-getting-started","slug":"/getting-started/setup","permalink":"/getting-started/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/02-getting-started/01-setup.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1743077359000,"sidebarPosition":1,"frontMatter":{"id":"setup","title":"Setup"},"sidebar":"tutorialSidebar","previous":{"title":"Key Features","permalink":"/introduction/key-features"},"next":{"title":"Build From Source","permalink":"/getting-started/build-from-source"}}');var s=t(86070),l=t(33763),i=t(74494);t(8416),t(77932);const a={id:"setup",title:"Setup"},o="Setup",c={},d=[{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Installation",id:"installation",level:3},...i.RM,{value:"Next Steps",id:"next-steps",level:3},{value:"1. Initialize node",id:"1-initialize-node",level:4},{value:"2. Run node",id:"2-run-node",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"setup",children:"Setup"})}),"\n",(0,s.jsx)(n.p,{children:"This guide will help you set up Calimero in your device."}),"\n",(0,s.jsx)(n.p,{children:"There are two main paths:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install via Script or Homebrew"})," (Recommended): Quickly install ",(0,s.jsx)(n.code,{children:"merod"})," for\nmost users."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"./build-from-source",children:(0,s.jsx)(n.strong,{children:"Build from Source"})}),": For developers who want to\ncontribute or modify the framework."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,s.jsx)(n.p,{children:"Calimero currently supports the following operating systems and architectures:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Operating Systems"}),": macOS, Linux"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Architectures"}),": x86_64, arm64 (Apple Silicon)"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If your platform is not supported, please\n",(0,s.jsx)(n.a,{href:"https://github.com/calimero-network/core/issues",children:"create an issue on GitHub"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(i.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"Initialize and run node"}),"\n",(0,s.jsx)(n.p,{children:"If this is your first time initializing the node, the process may take a little\nbit more time until all dependencies are downloaded. It will take around 7\nminutes but can vary depending on your internet connection."}),"\n",(0,s.jsx)(n.h4,{id:"1-initialize-node",children:"1. Initialize node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod --node-name node1 init --server-port 2428 --swarm-port 2528\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Node configuration file contains protocol defined metada. Node file is located\nunder ",(0,s.jsx)(n.code,{children:"~/.calimero"})," folder."]}),"\n",(0,s.jsx)("img",{src:"/init/node-config.png",alt:"node-config"}),"\n",(0,s.jsx)(n.h4,{id:"2-run-node",children:"2. Run node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod --node-name node1 run\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wait for a few moments and node logs should appear."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Node running",src:t(62853).A+"",width:"1712",height:"602"})}),"\n",(0,s.jsx)(n.p,{children:"When you see something like this that means that node is now ready for use."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},77932:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var r=t(13526);const s={tabItem:"tabItem_mmy8"};var l=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}}}]);