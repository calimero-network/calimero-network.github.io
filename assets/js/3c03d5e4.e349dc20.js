"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8552],{5248:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(758);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}},6654:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/proxy-contract-interaction","title":"Blockchain interaction with Proxy Contract","description":"Overview","source":"@site/versioned_docs/version-0.3.0/06-tutorials/07-proxy-contract-interaction.mdx","sourceDirName":"06-tutorials","slug":"/tutorials/proxy-contract-interaction","permalink":"/tutorials/proxy-contract-interaction","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/06-tutorials/07-proxy-contract-interaction.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1739811423000,"sidebarPosition":7,"frontMatter":{"id":"proxy-contract-interaction","title":"Blockchain interaction with Proxy Contract"},"sidebar":"tutorialSidebar","previous":{"title":"Building with Internet Computer (ICP)","permalink":"/tutorials/awesome-projects/building-with-icp"},"next":{"title":"The Data Sovereignty Manifesto","permalink":"/resources/manifesto"}}');var o=r(6070),s=r(5248);const a={id:"proxy-contract-interaction",title:"Blockchain interaction with Proxy Contract"},i=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Backend Implementation",id:"backend-implementation",level:2},{value:"API Types",id:"api-types",level:2},{value:"API Implementation",id:"api-implementation",level:2},{value:"Creating Proposals",id:"creating-proposals",level:2},{value:"1. External Function Call",id:"1-external-function-call",level:3},{value:"2. Token Transfer",id:"2-token-transfer",level:3},{value:"3. Set Context Value",id:"3-set-context-value",level:3},{value:"4. Set Number of Approvals",id:"4-set-number-of-approvals",level:3},{value:"5. Set Active Proposals Limit",id:"5-set-active-proposals-limit",level:3},{value:"Approving Proposals",id:"approving-proposals",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Best Practices",id:"best-practices",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"The Calimero proxy contract enables cross-chain interactions through a\nproposal-based system. The integration consists of:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Backend Application (Rust)"}),"\n",(0,o.jsx)(n.li,{children:"Frontend Application (TypeScript/React)"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["More info on blockchain integrations can be found in the\n",(0,o.jsx)(n.a,{href:"../core-concepts/blockchains-integration",children:"Blockchains Integration"})," section."]})}),"\n",(0,o.jsx)(n.h2,{id:"backend-implementation",children:"Backend Implementation"}),"\n",(0,o.jsx)(n.p,{children:"The backend contract handles proposal creation and management. Here's the core\nfunctionality:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"#[app::logic]\nimpl AppState {\n    pub fn create_new_proposal(&mut self, request: CreateProposalRequest) -> Result<ProposalId, Error> {\n        // Implementation handles different types of proposals:\n        // 1. ExternalFunctionCall\n        // 2. Transfer\n        // 3. SetContextValue\n        // 4. SetNumApprovals\n        // 5. SetActiveProposalsLimit\n    }\n\n    pub fn approve_proposal(&self, proposal_id: ProposalId) -> Result<(), Error> {\n        Self::external().approve(proposal_id);\n        env::emit(&Event::ApprovedProposal { id: proposal_id });\n        Ok(())\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api-types",children:"API Types"}),"\n",(0,o.jsx)(n.p,{children:"Define your types for the integration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// types.ts\nexport enum ProposalActionType {\n  ExternalFunctionCall = 'ExternalFunctionCall',\n  Transfer = 'Transfer',\n  SetNumApprovals = 'SetNumApprovals',\n  SetActiveProposalsLimit = 'SetActiveProposalsLimit',\n  SetContextValue = 'SetContextValue',\n}\n\nexport interface CreateProposalRequest {\n  action_type: ProposalActionType;\n  params: {\n    receiver_id?: string;\n    method_name?: string;\n    args?: string;\n    deposit?: string;\n    gas?: string;\n    amount?: string;\n    num_approvals?: number;\n    active_proposals_limit?: number;\n    key?: string;\n    value?: string;\n  };\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"api-implementation",children:"API Implementation"}),"\n",(0,o.jsx)(n.p,{children:"Create a data source to handle API calls:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// LogicApiDataSource.ts\nexport class LogicApiDataSource implements ClientApi {\n  async createProposal(\n    request: CreateProposalRequest,\n  ): ApiResponse<CreateProposalResponse> {\n    const params: RpcQueryParams<typeof request> = {\n      contextId: getContextId(),\n      method: ClientMethod.CREATE_PROPOSAL,\n      argsJson: { request },\n      executorPublicKey: jwtObject.executor_public_key,\n    };\n\n    return await getJsonRpcClient().execute(params, config);\n  }\n\n  async approveProposal(\n    request: ApproveProposalRequest,\n  ): ApiResponse<ApproveProposalResponse> {\n    // Implementation\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"creating-proposals",children:"Creating Proposals"}),"\n",(0,o.jsx)(n.p,{children:"Here are examples of creating different types of proposals:"}),"\n",(0,o.jsx)(n.h3,{id:"1-external-function-call",children:"1. External Function Call"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const request: CreateProposalRequest = {\n  action_type: 'ExternalFunctionCall',\n  params: {\n    receiver_id: 'contract.near',\n    method_name: 'transfer',\n    args: JSON.stringify({ amount: '100' }),\n    deposit: '1000000000000000000000', // 1 NEAR\n    gas: '30000000000000', // 30 TGas\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-token-transfer",children:"2. Token Transfer"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const request: CreateProposalRequest = {\n  action_type: 'Transfer',\n  params: {\n    receiver_id: 'recipient.near',\n    amount: '1000000000000000000000', // 1 NEAR\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-set-context-value",children:"3. Set Context Value"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const request: CreateProposalRequest = {\n  action_type: 'SetContextValue',\n  params: {\n    key: 'my_key',\n    value: 'my_value',\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-set-number-of-approvals",children:"4. Set Number of Approvals"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const request: CreateProposalRequest = {\n  action_type: 'SetNumApprovals',\n  params: {\n    num_approvals: 3,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"5-set-active-proposals-limit",children:"5. Set Active Proposals Limit"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const request: CreateProposalRequest = {\n  action_type: 'SetActiveProposalsLimit',\n  params: {\n    active_proposals_limit: 10,\n  },\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"approving-proposals",children:"Approving Proposals"}),"\n",(0,o.jsx)(n.p,{children:"To approve a proposal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"const approvalRequest: ApproveProposalRequest = {\n  proposal_id: 'proposal-id-here',\n};\n\nawait logicApiDataSource.approveProposal(approvalRequest);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,o.jsx)(n.p,{children:"The implementation includes comprehensive error handling:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"try {\n  const result = await logicApiDataSource.createProposal(request);\n  if (result?.error) {\n    console.error('Error:', result.error);\n    // Handle error appropriately\n  }\n} catch (error) {\n  console.error('Unexpected error:', error);\n  // Handle unexpected errors\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Input Validation"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Validate all parameters before sending"}),"\n",(0,o.jsx)(n.li,{children:"Use appropriate types for amounts (strings for large numbers)"}),"\n",(0,o.jsx)(n.li,{children:"Format JSON strings properly"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Implement proper error handling"}),"\n",(0,o.jsx)(n.li,{children:"Log important operations"}),"\n",(0,o.jsx)(n.li,{children:"Handle all possible error cases"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Gas Management"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use appropriate gas limits"}),"\n",(0,o.jsx)(n.li,{children:"Default to 30 TGas for NEAR"}),"\n",(0,o.jsx)(n.li,{children:"Monitor gas usage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Need help? Join our ",(0,o.jsx)(n.a,{href:"https://discord.gg/calimero",children:"Discord"})," or check our\n",(0,o.jsx)(n.a,{href:"https://github.com/calimero-network/docs",children:"GitHub"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);