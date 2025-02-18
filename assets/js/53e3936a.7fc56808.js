"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5688],{85248:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(30758);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},88642:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorials/awesome-projects/demo-blockchain-integration","title":"Private DAO","description":"An example application that connects to Calimero Proxy Contract and allows","source":"@site/versioned_docs/version-0.3.0/06-tutorials/07-awesome-projects/02-demo-blockchain-integration.mdx","sourceDirName":"06-tutorials/07-awesome-projects","slug":"/tutorials/awesome-projects/demo-blockchain-integration","permalink":"/0.3.0/tutorials/awesome-projects/demo-blockchain-integration","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/06-tutorials/07-awesome-projects/02-demo-blockchain-integration.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1739888782000,"sidebarPosition":2,"frontMatter":{"id":"demo-blockchain-integration","title":"Private DAO"},"sidebar":"tutorialSidebar","previous":{"title":"Only Peers","permalink":"/0.3.0/tutorials/awesome-projects/only-peers"},"next":{"title":"Building with Internet Computer (ICP)","permalink":"/0.3.0/tutorials/awesome-projects/building-with-icp"}}');var r=o(86070),i=o(85248);const a={id:"demo-blockchain-integration",title:"Private DAO"},s=void 0,c={},l=[];function p(e){const t={a:"a",mermaid:"mermaid",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"An example application that connects to Calimero Proxy Contract and allows\ncreating proposals, voting on them, and executing the approved proposals."}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"2rem"},children:(0,r.jsx)(t.mermaid,{value:"graph TD\nA[Application] --\x3e|Connects to| B[Calimero Proxy Contract]\nB --\x3e|Handles| C[Proposals]\nC --\x3e|Create| D[New Proposals]\nC --\x3e|Approve| E[Proposal Voting]\nC --\x3e|Delete| J[Delete Proposal]\nE --\x3e|Check Votes| F{Required Votes Met?}\nF --\x3e|Yes| G[Execute Proposal]\nG --\x3e|Perform Actions| H[Blockchain Operations]\nF --\x3e|No| I[Store Vote Count]"})}),"\n",(0,r.jsxs)(t.p,{children:["Full source code is available in our GitHub\n",(0,r.jsx)(t.a,{href:"https://github.com/calimero-network/demo-blockchain-integrations",children:"repository"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);