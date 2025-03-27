"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1592],{8416:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(30758),i=t(13526),o=t(27130),s=t(25557),l=t(69059),a=t(41295),u=t(39924),c=t(6096);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,o=h(e),[s,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,c.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:i}),b=(()=>{const e=u??g;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&a(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(26241);const b={tabList:"tabList_z352",tabItem:"tabItem_du3W"};var x=t(86070);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=a.indexOf(n),i=l[t].value;i!==r&&(u(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{a.push(e)},onKeyDown:d,onClick:c,...o,className:(0,i.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},21738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>r,toc:()=>g});const r=JSON.parse('{"id":"getting-started/build-from-source","title":"Build From Source","description":"Setup For Contributors","source":"@site/versioned_docs/version-0.4.0/02-getting-started/02-build-from-source.mdx","sourceDirName":"02-getting-started","slug":"/getting-started/build-from-source","permalink":"/getting-started/build-from-source","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/02-getting-started/02-build-from-source.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1743077359000,"sidebarPosition":2,"frontMatter":{"id":"build-from-source","title":"Build From Source"},"sidebar":"tutorialSidebar","previous":{"title":"Setup","permalink":"/getting-started/setup"},"next":{"title":"Terminology","permalink":"/core-concepts/terminology"}}');var i=t(86070),o=t(33763);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p merod -- --node-name node1 init --server-port 2428 --swarm-port 2528\n"})}),"\n",(0,i.jsx)(n.p,{children:"Node configuration file contains protocol defined metadata."}),"\n",(0,i.jsx)("img",{src:"/init/node-config.png",alt:"node-config"})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}function a(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo run -p merod -- --node-name node1 run\n"})}),"\n",(0,i.jsx)(n.p,{children:"Wait for a few moments and node logs should appear."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Node running",src:t(62853).A+"",width:"1712",height:"602"})}),"\n",(0,i.jsx)(n.p,{children:"When you see something like this that means that node is now ready for use."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var c=t(8416),d=t(77932);const h={id:"build-from-source",title:"Build From Source"},p=void 0,m={},g=[{value:"Setup For Contributors",id:"setup-for-contributors",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Setup steps",id:"setup-steps",level:3},{value:"1. Clone repository from GitHub",id:"1-clone-repository-from-github",level:3},{value:"2. Position in the root of the project",id:"2-position-in-the-root-of-the-project",level:3},{value:"3. Initialize and run node",id:"3-initialize-and-run-node",level:3},{value:"1. Initialize node",id:"1-initialize-node",level:4},{value:"2. Run node",id:"2-run-node",level:4},{value:"1. First build the image",id:"1-first-build-the-image",level:4},{value:"2. Then setup and run the nodes defined in <code>docker-compose.yml</code> file",id:"2-then-setup-and-run-the-nodes-defined-in-docker-composeyml-file",level:4},{value:"3. Connect to the available node by listing running containers",id:"3-connect-to-the-available-node-by-listing-running-containers",level:4}];function f(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"setup-for-contributors",children:"Setup For Contributors"}),"\n",(0,i.jsx)(n.p,{children:"If you want to contribute to the Calimero framework or customize its\nfunctionality, you can build it from source."}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensure Rust is installed. If not, follow the instructions on the\n",(0,i.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust website"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If Rust dependencies fail, ensure your Rust installation is up-to-date:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rustup update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify that you have all required permissions to run the node."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For further support, open an issue on\n",(0,i.jsx)(n.a,{href:"https://github.com/calimero-network/core/issues",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"setup-steps",children:"Setup steps"}),"\n",(0,i.jsx)(n.p,{children:"Setup consists of few steps and is around 9 minutes long. (mostly waiting for\nproject dependencies to download)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone repository from GitHub (1min)"}),"\n",(0,i.jsx)(n.li,{children:"Position in the root of the project (< 1min)"}),"\n",(0,i.jsx)(n.li,{children:"Initialize and run node (~7 mins)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-clone-repository-from-github",children:"1. Clone repository from GitHub"}),"\n","\n",(0,i.jsxs)(c.A,{defaultValue:"ssh",values:[{label:"SSH",value:"ssh"},{label:"HTTPS",value:"https"}],children:[(0,i.jsx)(d.A,{value:"https",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Clone using HTTPS"',children:"git clone https://github.com/calimero-network/core.git\n"})})}),(0,i.jsx)(d.A,{value:"ssh",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Clone using SSH"',children:"git clone git@github.com:calimero-network/core.git\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"2-position-in-the-root-of-the-project",children:"2. Position in the root of the project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd core\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-initialize-and-run-node",children:"3. Initialize and run node"}),"\n",(0,i.jsx)(n.p,{children:"You can do it in two ways."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Using CLI"}),"\n",(0,i.jsx)(n.li,{children:"Using Docker compose"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If this is your first time initializing the node, the process may take a little\nbit more time until all dependencies are downloaded. It will take around 7\nminutes but can vary depending on your internet connection."}),"\n",(0,i.jsxs)(c.A,{defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Docker Compose",value:"docker"}],children:[(0,i.jsxs)(d.A,{value:"cli",children:[(0,i.jsx)(n.h4,{id:"1-initialize-node",children:"1. Initialize node"}),(0,i.jsx)(l,{}),(0,i.jsx)(n.h4,{id:"2-run-node",children:"2. Run node"}),(0,i.jsx)(u,{})]}),(0,i.jsxs)(d.A,{value:"docker",children:[(0,i.jsx)(n.h4,{id:"1-first-build-the-image",children:"1. First build the image"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker buildx build -t 'merod' .\n"})}),(0,i.jsxs)(n.h4,{id:"2-then-setup-and-run-the-nodes-defined-in-docker-composeyml-file",children:["2. Then setup and run the nodes defined in ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker compose up\n"})}),(0,i.jsx)(n.h4,{id:"3-connect-to-the-available-node-by-listing-running-containers",children:"3. Connect to the available node by listing running containers"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"docker ps\n"})}),(0,i.jsx)(n.p,{children:"and then attach to the selected container"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"docker attach core-app_node_run-1\n"})}),(0,i.jsx)(n.p,{children:"Wait for a few moments and node logs should appear."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Node running",src:t(62853).A+"",width:"1712",height:"602"})}),(0,i.jsx)(n.p,{children:"When you see something like this that means that node is now ready for use."})]})]})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},33763:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(30758);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}},62853:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/node-running-50b1a27fb9d7f62407382281da4692ab.png"},77932:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const i={tabItem:"tabItem_mmy8"};var o=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}}}]);