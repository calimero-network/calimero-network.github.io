"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4700],{4517:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(6070),i=s(5658);const r={id:"tests",title:"Tests"},a="Run tests",c={id:"build/tests",title:"Tests",description:"We have script for running tests which prepares environment and runs tests.",source:"@site/docs/04-build/05-tests.mdx",sourceDirName:"04-build",slug:"/build/tests",permalink:"/build/tests",draft:!1,unlisted:!1,editUrl:"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/04-build/05-tests.mdx",tags:[],version:"current",lastUpdatedAt:1730878525e3,sidebarPosition:5,frontMatter:{id:"tests",title:"Tests"},sidebar:"tutorialSidebar",previous:{title:"Dev Mode",permalink:"/build/dev-mode"},next:{title:"GitHub",permalink:"/contribute/github"}},o={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"run-tests",children:"Run tests"})}),"\n",(0,n.jsx)(t.p,{children:"We have script for running tests which prepares environment and runs tests.\nScript can either run all tests or only tests that are affected by changes in\nfiles."}),"\n",(0,n.jsx)(t.p,{children:"Run all tests"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"./scripts/test.sh --all\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Run tests in crates defind by changed files and tests in crates that are using\nthose files. ",(0,n.jsx)(t.code,{children:"changed_files"})," list contains file paths divided by space."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal"',children:"./scripts/test.sh --local {changed_files}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5658:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(758);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);