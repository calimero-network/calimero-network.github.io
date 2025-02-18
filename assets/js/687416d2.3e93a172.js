"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2275],{36186:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(30758),r=n(13526),l=n(61929),o=n(25557),i=n(22532),s=n(47954),c=n(72635),u=n(53117);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),x=(()=>{const e=c??b;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(89200);const x={tabList:"tabList_T9Y8",tabItem:"tabItem_iJx9"};var v=n(86070);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{s.push(e)},onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:l}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function j(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},59297:(e,t,n)=>{n.d(t,{A:()=>o});n(30758);var a=n(13526);const r={tabItem:"tabItem_j4oX"};var l=n(86070);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},69585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tutorials/install-application","title":"Install application","description":"We have created simple and easy to use example application called only-peers.","source":"@site/versioned_docs/version-0.4.0/06-tutorials/06-install-application.mdx","sourceDirName":"06-tutorials","slug":"/tutorials/install-application","permalink":"/tutorials/install-application","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.4.0/06-tutorials/06-install-application.mdx","tags":[],"version":"0.4.0","lastUpdatedAt":1739888782000,"sidebarPosition":6,"frontMatter":{"id":"install-application","title":"Install application"},"sidebar":"tutorialSidebar","previous":{"title":"Publish App","permalink":"/tutorials/publish-app"},"next":{"title":"Only Peers","permalink":"/tutorials/awesome-projects/only-peers"}}');var r=n(86070),l=n(85248),o=n(36186),i=n(59297);const s={id:"install-application",title:"Install application"},c=void 0,u={},d=[{value:"Create new context",id:"create-new-context",level:3},{value:"Try out Only-peers application",id:"try-out-only-peers-application",level:3}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["We have created simple and easy to use example application called ",(0,r.jsx)(t.code,{children:"only-peers"}),".\nApplication enables writing posts and leaving comments. To try out application\nyou need to create new context where application will be installed."]}),"\n",(0,r.jsx)(t.h3,{id:"create-new-context",children:"Create new context"}),"\n",(0,r.jsx)(t.p,{children:"To create new context, node CLI has to be used."}),"\n",(0,r.jsx)(t.p,{children:"If the node doesn't have application installed, you need to install the\napplication first. If the application is already installed, you can skip this\nstep."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"meroctl --node-name node1 app install --path /path/to/app\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If you want to install an application that is published in the registry, check\n",(0,r.jsx)(t.code,{children:"meroctl --node-name node1 app install -h"})," for options"]})}),"\n",(0,r.jsx)(t.p,{children:"After the application is installed, you can create new context:"}),"\n",(0,r.jsxs)(o.A,{defaultValue:"near",values:[{label:"Near",value:"near"},{label:"Starknet",value:"starknet"},{label:"ICP",value:"icp"},{label:"Stellar",value:"stellar"}],children:[(0,r.jsx)(i.A,{value:"near",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --application-id <app-id> --protocol near\n"})})}),(0,r.jsx)(i.A,{value:"starknet",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --application-id <app-id> --protocol starknet\n"})})}),(0,r.jsx)(i.A,{value:"icp",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --application-id <app-id> --protocol icp\n"})})}),(0,r.jsx)(i.A,{value:"stellar",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"meroctl --node-name node1 context create --application-id <app-id> --protocol stellar\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"You are now part of the context and can start using the application."}),"\n",(0,r.jsx)(t.h3,{id:"try-out-only-peers-application",children:"Try out Only-peers application"}),"\n",(0,r.jsx)(t.p,{children:"We have built and deployed a demo app so you can try it out immediately."}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to ",(0,r.jsx)(t.a,{href:"https://calimero-network.github.io/only-peers-client/",children:"https://calimero-network.github.io/only-peers-client/"})," to access app\nfrontend."]}),"\n",(0,r.jsxs)(t.p,{children:["You will be asked to setup the app by the adding the node url. It is the same\nurl you used while starting the node in\n",(0,r.jsx)(t.a,{href:"../getting-started/setup",children:"Getting-started"})," ",(0,r.jsx)(t.code,{children:"http://localhost:NODE_PORT"})," After\nsetting up node url, you will be asked to login."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.em,{children:"NOTE:"})})," Use your wallet which you have already added as root key in\n",(0,r.jsx)(t.a,{href:"../developer-tools/apps/admin-dashboard",children:"Admin Dashboard"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You are now ready to use the app. Enjoy!"})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85248:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(30758);const r={},l=a.createContext(r);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);