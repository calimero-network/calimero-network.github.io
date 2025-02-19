"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8926],{3454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>j,default:()=>A,frontMatter:()=>b,metadata:()=>a,toc:()=>v});const a=JSON.parse('{"id":"tutorials/create-context","title":"Create Context","description":"Initialize node","source":"@site/versioned_docs/version-0.4.0/06-tutorials/02-create-context.mdx","sourceDirName":"06-tutorials","slug":"/tutorials/create-context","permalink":"/tutorials/create-context","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/06-tutorials/02-create-context.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1739983450000,"sidebarPosition":2,"frontMatter":{"id":"create-context","title":"Create Context"},"sidebar":"tutorialSidebar","previous":{"title":"ICP Wallet","permalink":"/tutorials/login-with-wallets/icp-wallet"},"next":{"title":"Invitations and Joinings","permalink":"/tutorials/invitations-and-joinings"}}');var r=n(86070),l=n(85248),i=n(66782),o=n(56045);function s(e){const t={admonition:"admonition",code:"code",li:"li",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.A,{defaultValue:"near",values:[{label:"Near",value:"near"},{label:"Starknet",value:"starknet"},{label:"ICP",value:"icp"},{label:"Stellar",value:"stellar"}],children:[(0,r.jsx)(o.A,{value:"near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --watch <application_path> --protocol near\n"})})}),(0,r.jsx)(o.A,{value:"starknet",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --watch <application_path> --protocol starknet\n"})})}),(0,r.jsx)(o.A,{value:"icp",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --watch <application_path> --protocol icp\n"})})}),(0,r.jsx)(o.A,{value:"stellar",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --watch <application_path> --protocol stellar\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--watch"})," flag enables watching for changes of wasm files and updating context\nwith the new version"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--protocol"})," flag specifies the protocol to use for the context"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"--as"})," flag creates an alias for your identity in your context, you can use it\ninstead of the PublicKey"]}),"\n"]})})]})}function c(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}function d(e){const t={admonition:"admonition",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"install-the-application",children:"Install the Application"}),"\n",(0,r.jsx)(t.p,{children:"Run the following command to install the application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"application install url {url}\xa0{metadata}\n"})}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"metadata example:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'\'{"contractAppId": "<application_id>"}\'\n'})})]}),"\n",(0,r.jsx)(t.h3,{id:"create-a-new-context",children:"Create a New Context"}),"\n",(0,r.jsxs)(i.A,{defaultValue:"near",values:[{label:"Near",value:"near"},{label:"Starknet",value:"starknet"},{label:"ICP",value:"icp"},{label:"Stellar",value:"stellar"}],children:[(0,r.jsx)(o.A,{value:"near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"context create {applicationId} --protocol near\n"})})}),(0,r.jsx)(o.A,{value:"starknet",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"context create {applicationId} --protocol starknet\n"})})}),(0,r.jsx)(o.A,{value:"icp",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"context create {applicationId} --protocol icp\n"})})}),(0,r.jsx)(o.A,{value:"stellar",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Node Terminal"',children:"context create {applicationId} --protocol stellar\n"})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"--protocol"})," flag specifies the protocol to use for the context."]})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Output"',children:"2024-10-07T11:55:36.658396Z  INFO calimero_context: Subscribed to context context_id=567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn\nCreated context 567C5Gg4mxHMPKy2wLJ4uvb3DHsbcpVDYUsuAWgTPgXn with\nidentity DaSkad6DK7f6fUhjz1CvNW7L4TkWZmWqAcwysZHG3Xs5\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Create context",src:n(48737).A+"",width:"2144",height:"1250"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e){const t={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-a-context-using-the-admin-dashboard",children:"Create a context using the Admin Dashboard"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:'Navigate to the "Contexts" tab and click the "Start New Context" button.'}),"\n",(0,r.jsx)(t.li,{children:'Use the "Browse" button to select an application from the list.'}),"\n",(0,r.jsx)(t.li,{children:"Choose application."}),"\n",(0,r.jsx)(t.li,{children:'Press "Start" to initiate the context creation process with the selected\napplication.'}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Visit ",(0,r.jsx)(t.a,{href:"../../developer-tools/apps/admin-dashboard",children:"Admin Dashboard Page"})," to view\ndetailed instructions with images."]}),"\n",(0,r.jsx)(t.p,{children:"After the context is created, you will be redirected to the context dashboard.\nKeep this page open as you will need the Context ID later."})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}var x=n(16331);function m(e){const t={code:"code",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod --node-name node1 run\n"})}),"\n",(0,r.jsx)(t.p,{children:"Wait for a few moments and node logs should appear."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Node running",src:n(62853).A+"",width:"1712",height:"602"})}),"\n",(0,r.jsx)(t.p,{children:"When you see something like this that means that node is now ready for use."})]})}function g(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}const b={id:"create-context",title:"Create Context"},j=void 0,f={},v=[{value:"Initialize node",id:"initialize-node",level:3},...x.RM,{value:"Run node",id:"run-node",level:3},{value:"Create a New Context",id:"create-a-new-context",level:3},{value:"Install the Application",id:"install-the-application",level:3},{value:"Create a New Context",id:"create-a-new-context",level:3},{value:"Create a context using the Admin Dashboard",id:"create-a-context-using-the-admin-dashboard",level:2}];function w(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"initialize-node",children:"Initialize node"}),"\n",(0,r.jsx)(x.Ay,{}),"\n",(0,r.jsx)(t.h3,{id:"run-node",children:"Run node"}),"\n",(0,r.jsx)(g,{}),"\n",(0,r.jsx)(t.h3,{id:"create-a-new-context",children:"Create a New Context"}),"\n",(0,r.jsxs)(i.A,{defaultValue:"meroctl",values:[{label:"Meroctl",value:"meroctl"},{label:"Interactive cli",value:"interactive-cli"},{label:"Admin Dashboard",value:"admin-dashboard"}],children:[(0,r.jsx)(o.A,{value:"meroctl",children:(0,r.jsx)(c,{})}),(0,r.jsx)(o.A,{value:"interactive-cli",children:(0,r.jsx)(u,{})}),(0,r.jsx)(o.A,{value:"admin-dashboard",children:(0,r.jsx)(p,{})})]}),"\n",(0,r.jsx)(t.p,{children:"You have now created a new context."}),"\n",(0,r.jsx)(t.p,{children:"To create an alias for this context, use:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"context alias add my_context <context_id>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next step is to invite users to join your context. Continue with\n",(0,r.jsx)(t.a,{href:"./invitations-and-joinings",children:"invitations and joinings"}),"."]})]})}function A(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}},16331:(e,t,n)=>{n.d(t,{Ay:()=>o,RM:()=>l});var a=n(86070),r=n(85248);const l=[];function i(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"merod --node-name node1 init --server-port 2428 --swarm-port 2528\n"})}),"\n",(0,a.jsx)(t.p,{children:"Node configuration file contains protocol defined metadata."}),"\n",(0,a.jsx)("img",{src:"/init/node-config.png",alt:"node-config"})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},48737:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2-create-context-3a7bde85050cb57aab0686c0b40d39d3.png"},56045:(e,t,n)=>{n.d(t,{A:()=>i});n(30758);var a=n(13526);const r={tabItem:"tabItem_j4oX"};var l=n(86070);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},62853:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/node-running-50b1a27fb9d7f62407382281da4692ab.png"},66782:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(30758),r=n(13526),l=n(61929),i=n(25557),o=n(22532),s=n(47954),c=n(72635),d=n(53117);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,u]=x({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=n(89200);const b={tabList:"tabList_T9Y8",tabItem:"tabItem_iJx9"};var j=n(86070);function f(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{s.push(e)},onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function w(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function A(e){const t=(0,g.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},85248:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(30758);const r={},l=a.createContext(r);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);