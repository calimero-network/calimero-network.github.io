"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6189],{2002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"core-concepts/blockchains-integration/blockchain-integrations","title":"Blockchain Integrations","description":"Calimero offers integration with multiple blockchain protocols, allowing users","source":"@site/docs/03-core-concepts/06-blockchains-integration/01-blockchain-integration-general.mdx","sourceDirName":"03-core-concepts/06-blockchains-integration","slug":"/core-concepts/blockchains-integration/blockchain-integrations","permalink":"/core-concepts/blockchains-integration/blockchain-integrations","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/03-core-concepts/06-blockchains-integration/01-blockchain-integration-general.mdx","tags":[],"version":"current","lastUpdatedAt":1734537948000,"sidebarPosition":1,"frontMatter":{"id":"blockchain-integrations","title":"Blockchain Integrations"},"sidebar":"tutorialSidebar","previous":{"title":"Applications","permalink":"/core-concepts/applications"},"next":{"title":"Context Contract","permalink":"/core-concepts/blockchains-integration/context-contract"}}');var r=t(6070),i=t(3913);const a={id:"blockchain-integrations",title:"Blockchain Integrations"},c="Blockchain Integrations",s={},l=[{value:"Current Blockchain Integrations",id:"current-blockchain-integrations",level:2},{value:"Operations",id:"operations",level:2},{value:"Functionalities",id:"functionalities",level:2},{value:"Functionality Details",id:"functionality-details",level:2},{value:"Calimero Contracts",id:"calimero-contracts",level:2},{value:"Context Contract",id:"context-contract",level:3},{value:"Proxy Contract",id:"proxy-contract",level:3},{value:"Deployment of Contracts",id:"deployment-of-contracts",level:3},{value:"Context Contract",id:"context-contract-1",level:4},{value:"Proxy Contract",id:"proxy-contract-1",level:4},{value:"Example Application",id:"example-application",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"blockchain-integrations",children:"Blockchain Integrations"})}),"\n",(0,r.jsx)(n.p,{children:"Calimero offers integration with multiple blockchain protocols, allowing users\nto interact with the blockchain and perform read and write operations."}),"\n",(0,r.jsx)(n.h2,{id:"current-blockchain-integrations",children:"Current Blockchain Integrations"}),"\n",(0,r.jsx)(n.p,{children:"Calimero currently supports the following blockchain protocols:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NEAR"}),"\n",(0,r.jsx)(n.li,{children:"Starknet"}),"\n",(0,r.jsx)(n.li,{children:"Internet Computer (ICP)"}),"\n"]}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[Calimero] --\x3e B[Integrations]\nB --\x3e C[NEAR]\nB --\x3e D[Starknet]\nB --\x3e E[ICP]"})}),"\n",(0,r.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read"}),"\n",(0,r.jsx)(n.li,{children:"Read the data from the Calimero contracts."}),"\n",(0,r.jsx)(n.li,{children:"Write"}),"\n",(0,r.jsx)(n.li,{children:"Write data to any contract on the same blockchain protocol through\ncross-contract calls in the Proxy Contract."}),"\n"]}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[Calimero]\nB[Context Contract]\nC[Proxy Contract]\nD[Transfers]\nE[Cross-Contract Calls]\n\nA <--\x3e B\nA <--\x3e C\nC --\x3e D\nC --\x3e E"})}),"\n",(0,r.jsx)(n.h2,{id:"functionalities",children:"Functionalities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cross-contract calls"}),"\n",(0,r.jsx)(n.li,{children:"Transfers"}),"\n",(0,r.jsx)(n.li,{children:"Storage of arbitrary data"}),"\n",(0,r.jsx)(n.li,{children:"Configuration of the internal configuration variables"}),"\n",(0,r.jsx)(n.li,{children:"Proposal creation and execution"}),"\n"]}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[Proxy Contract] --\x3e|Cross-contract Calls| B[Other Contracts]\nA --\x3e|Transfers| C[Token Transfers]\nA --\x3e|Data Storage| D[Key-Value Storage]\nA --\x3e|Configuration| E[Internal Variables]\nE --\x3e|Change Votes Required| F[Vote Configuration]\nE --\x3e|Change Proposal Limits| G[Proposal Limits]"})}),"\n",(0,r.jsx)(n.h2,{id:"functionality-details",children:"Functionality Details"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cross-contract calls"}),": Proxy contract allows making cross-contract calls to\nother contracts on the same blockchain protocol. Users need to specify the\ncontract address, the method to call, and the arguments for that method."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Transfers"}),": Proxy contract allows transferring tokens to the specified\naddress. Users need to specify the recipient address and the amount of tokens\nto transfer."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Storage of arbitrary data"}),": Proxy contract allows storing arbitrary data in\nthe context storage. Users need to specify the key and the value for the data\nto be stored."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration of the internal configuration variables"}),": Configure the\ninternal configuration variables of the Calimero contracts:"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Vote configuration"}),": Number of votes required for a proposals to be\napproved (u32)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proposal limits"}),": Maximum number of proposals that one user can have at the\nsame time(u32)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proposal creation and execution"}),": Proposals are created by users and\ncontain one or multiple actions that are voted on by the users of the context.\nIf a proposal is approved, it is automatically executed by the Calimero Proxy\nContract."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"calimero-contracts",children:"Calimero Contracts"}),"\n",(0,r.jsx)(n.p,{children:"Calimero integrates two types of contracts for each blockchain protocol:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Context Contract"}),"\n",(0,r.jsx)(n.li,{children:"Proxy Contract"}),"\n"]}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[User] --\x3e|Creates Context| B[Context Contract]\nB --\x3e|Creates| C[Context]\nB --\x3e|Adds Admin| D[User as Admin]\nB --\x3e|Deploys| E[Proxy Contract]\nE --\x3e|Handles| F[Proposals, Votes, Execution]\nF --\x3e|Executes Actions| G[Blockchain Operations]"})}),"\n",(0,r.jsx)(n.h3,{id:"context-contract",children:"Context Contract"}),"\n",(0,r.jsx)(n.p,{children:"The Context Contract is responsible for creating contexts, adding and removing\nmembers, editing their privileges, and associating specific applications with a\ncontext."}),"\n",(0,r.jsx)(n.h3,{id:"proxy-contract",children:"Proxy Contract"}),"\n",(0,r.jsx)(n.p,{children:"Each context has its own Proxy Contract instance which is deployed during the\ncontext creation."}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[User] --\x3e|Creates Proposal| B[Proxy Contract]\nB --\x3e|Stores Proposal| C[Proposal Storage]\nC --\x3e|Voting by Members| D{Required Votes Met?}\nD --\x3e|Yes| E[Execute Proposal]\nD --\x3e|No| F[Store Vote Count]"})}),"\n",(0,r.jsx)(n.h3,{id:"deployment-of-contracts",children:"Deployment of Contracts"}),"\n",(0,r.jsx)(n.h4,{id:"context-contract-1",children:"Context Contract"}),"\n",(0,r.jsx)(n.p,{children:"Context Contract is predeployed on each blockchain by the Calimero team."}),"\n",(0,r.jsx)(n.h4,{id:"proxy-contract-1",children:"Proxy Contract"}),"\n",(0,r.jsx)(n.p,{children:"Proxy Contract is deployed during the context creation."}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[Calimero Team] --\x3e|Pre-deploys| B[Context Contract]\nB --\x3e|During Context Creation| C[Proxy Contract]\nC --\x3e|Unique Instance| D[Context-specific Proxy]"})}),"\n",(0,r.jsx)(n.h3,{id:"example-application",children:"Example Application"}),"\n",(0,r.jsx)(n.p,{children:"We have an example application that connects to Calimero Proxy Contract and\nallows creating proposals, voting on them, and executing the approved proposals."}),"\n",(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)(n.mermaid,{value:"graph TD\nA[Application] --\x3e|Connects to| B[Calimero Proxy Contract]\nB --\x3e|Handles| C[Proposals]\nC --\x3e|Create| D[New Proposals]\nC --\x3e|Approve| E[Proposal Voting]\nC --\x3e|Delete| J[Delete Proposal]\nE --\x3e|Check Votes| F{Required Votes Met?}\nF --\x3e|Yes| G[Execute Proposal]\nG --\x3e|Perform Actions| H[Blockchain Operations]\nF --\x3e|No| I[Store Vote Count]"})}),"\n",(0,r.jsxs)(n.p,{children:["Application code can be found\n",(0,r.jsx)(n.a,{href:"https://github.com/calimero-network/demo-blockchain-integrations",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3913:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(758);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);