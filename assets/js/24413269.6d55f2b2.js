"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5512],{7133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"shared/node-init-source","title":"node-init-source","description":"<Tabs","source":"@site/docs/shared/node-init-source.mdx","sourceDirName":"shared","slug":"/shared/node-init-source","permalink":"/shared/node-init-source","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/shared/node-init-source.mdx","tags":[],"version":"current","lastUpdatedAt":1734699364000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"node-init-binary","permalink":"/shared/node-init-binary"}}');var a=n(6070),o=n(5248),s=n(3505),l=n(7576);const i={},c=void 0,u={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.A,{defaultValue:"near",groupId:"protocol",values:[{label:"NEAR",value:"near"},{label:"Starknet",value:"starknet"},{label:"ICP",value:"icp"}],children:[(0,a.jsx)(l.A,{value:"near",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"   cargo run -p merod -- --node-name node1 init --server-port 2428 --swarm-port 2528\n"})})}),(0,a.jsx)(l.A,{value:"starknet",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"   cargo run -p merod -- --node-name node1 init --server-port 2428 --swarm-port 2528 --protocol starknet\n"})})}),(0,a.jsx)(l.A,{value:"icp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"   cargo run -p merod -- --node-name node1 init --server-port 2428 --swarm-port 2528 --protocol icp\n"})})})]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["A ",(0,a.jsx)(t.code,{children:"--protocol"})," flag defines which chain will be used in the node context. NEAR\nis default protocol so it doesn't need to be specified. List of supported\nprotocols can be found in the\n",(0,a.jsx)(t.a,{href:"../core-concepts/blockchains-integration",children:"Blockchains integration"})]})}),"\n",(0,a.jsx)(t.p,{children:"Node configuration file contains protocol defined metada."}),"\n",(0,a.jsxs)(s.A,{defaultValue:"near",groupId:"protocol",values:[{label:"NEAR",value:"near"},{label:"Starknet",value:"starknet"},{label:"ICP",value:"icp"}],children:[(0,a.jsx)(l.A,{value:"near",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"NearConfig",src:n(391).A+"",width:"834",height:"306"})})}),(0,a.jsx)(l.A,{value:"starknet",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"SnConfig",src:n(2524).A+"",width:"1320",height:"310"})})}),(0,a.jsx)(l.A,{value:"icp",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ICPConfig",src:n(5383).A+"",width:"778",height:"316"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},7576:(e,t,n)=>{n.d(t,{A:()=>s});n(758);var r=n(3526);const a={tabItem:"tabItem_KLga"};var o=n(6070);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},3505:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(758),a=n(3526),o=n(8155),s=n(5557),l=n(5536),i=n(7852),c=n(1381),u=n(4012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2236);const g={tabList:"tabList_B3_y",tabItem:"tabItem_z210"};var v=n(6070);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function A(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},5383:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/icp-config-ceda025dead6d3c8de0513840466dd31.png"},391:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/near-config-7f7de7e5e857b8d6dca8bda6b8a39f0d.png"},2524:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/sn-config-a1900f2dc94f3dcd2cd7204c62421de2.png"},5248:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(758);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);