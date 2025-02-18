"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3569],{17047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developer-tools/SDK/client-sdk/client-ts-sdk","title":"TypeScript Client SDK","description":"Getting Started with Calimero SDK for Typescript","source":"@site/versioned_docs/version-0.3.0/05-developer-tools/02-SDK/04-client-sdk/calimero-client-js.mdx","sourceDirName":"05-developer-tools/02-SDK/04-client-sdk","slug":"/developer-tools/SDK/client-sdk/client-ts-sdk","permalink":"/0.3.0/developer-tools/SDK/client-sdk/client-ts-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.3.0/05-developer-tools/02-SDK/04-client-sdk/calimero-client-js.mdx","tags":[],"version":"0.3.0","lastUpdatedAt":1739888782000,"frontMatter":{"id":"client-ts-sdk","title":"TypeScript Client SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Rust Protocol SDK","permalink":"/0.3.0/developer-tools/SDK/protocol-sdk/protocol-rs-sdk"},"next":{"title":"Admin Dashboard","permalink":"/0.3.0/developer-tools/apps/admin-dashboard"}}');var s=t(86070),o=t(85248);const l={id:"client-ts-sdk",title:"TypeScript Client SDK"},c=void 0,r={},a=[{value:"Getting Started with Calimero SDK for Typescript",id:"getting-started-with-calimero-sdk-for-typescript",level:2},{value:"Core Components",id:"core-components",level:2},{value:"1. RpcClient (JsonRpcClient)",id:"1-rpcclient-jsonrpcclient",level:3},{value:"2. SubscriptionsClient (WsSubscriptionsClient)",id:"2-subscriptionsclient-wssubscriptionsclient",level:3},{value:"3. HttpClient (AxiosHttpClient)",id:"3-httpclient-axioshttpclient",level:3},{value:"4. Authentication Components",id:"4-authentication-components",level:3},{value:"5. Storage Utilities",id:"5-storage-utilities",level:3},{value:"Authentication Setup",id:"authentication-setup",level:2},{value:"1. Client Login Component",id:"1-client-login-component",level:3},{value:"2. Token Management",id:"2-token-management",level:3},{value:"3. Initial Setup",id:"3-initial-setup",level:3},{value:"4. Token Storage",id:"4-token-storage",level:3},{value:"Using RpcClient",id:"using-rpcclient",level:2},{value:"Using SubscriptionsClient",id:"using-subscriptionsclient",level:2},{value:"Contract API Integration",id:"contract-api-integration",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Admin API Endpoints",id:"admin-api-endpoints",level:2},{value:"Protected Endpoints (Requires Authentication)",id:"protected-endpoints-requires-authentication",level:3},{value:"Application Management",id:"application-management",level:4},{value:"Context Management",id:"context-management",level:4},{value:"Identity Management",id:"identity-management",level:4},{value:"Unprotected Endpoints",id:"unprotected-endpoints",level:3},{value:"Authentication",id:"authentication",level:4},{value:"Proposal Management",id:"proposal-management",level:4},{value:"Using Admin API",id:"using-admin-api",level:2},{value:"Important Notes",id:"important-notes",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"getting-started-with-calimero-sdk-for-typescript",children:"Getting Started with Calimero SDK for Typescript"}),"\n",(0,s.jsx)(n.p,{children:"Our TypeScript Client SDK is a powerful tool designed to simplify the process of\ninteracting with decentralized peer-to-peer applications installed on the node."}),"\n",(0,s.jsx)(n.p,{children:"Install the SDK using npm:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @calimero-network/calimero-client\n"})}),"\n",(0,s.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,s.jsx)(n.p,{children:"The TypeScript Client SDK consists of several key components:"}),"\n",(0,s.jsx)(n.h3,{id:"1-rpcclient-jsonrpcclient",children:"1. RpcClient (JsonRpcClient)"}),"\n",(0,s.jsx)(n.p,{children:"Handles communication with the node's RPC server for executing queries and\nmutations."}),"\n",(0,s.jsx)(n.h3,{id:"2-subscriptionsclient-wssubscriptionsclient",children:"2. SubscriptionsClient (WsSubscriptionsClient)"}),"\n",(0,s.jsx)(n.p,{children:"Manages WebSocket connections for real-time updates and event subscriptions."}),"\n",(0,s.jsx)(n.h3,{id:"3-httpclient-axioshttpclient",children:"3. HttpClient (AxiosHttpClient)"}),"\n",(0,s.jsx)(n.p,{children:"Provides HTTP communication capabilities for admin API interactions."}),"\n",(0,s.jsx)(n.h3,{id:"4-authentication-components",children:"4. Authentication Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AccessTokenWrapper"}),": Manages JWT token lifecycle"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ClientLogin"}),": Handles user authentication flow"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SetupModal"}),": Configures node URL and application settings"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-storage-utilities",children:"5. Storage Utilities"}),"\n",(0,s.jsx)(n.p,{children:"Manages local storage for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Access tokens"}),"\n",(0,s.jsx)(n.li,{children:"Refresh tokens"}),"\n",(0,s.jsx)(n.li,{children:"Application URLs"}),"\n",(0,s.jsx)(n.li,{children:"Context identities"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"authentication-setup",children:"Authentication Setup"}),"\n",(0,s.jsx)(n.h3,{id:"1-client-login-component",children:"1. Client Login Component"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ClientLogin } from '@calimero-network/calimero-client';\n\nconst LoginPage = () => {\n    return (\n        <ClientLogin\n            getNodeUrl={() => process.env.NEXT_PUBLIC_API_URL}\n            getApplicationId={() => process.env.NEXT_PUBLIC_APPLICATION_ID}\n            successRedirect={() => navigate('/dashboard')}\n        />\n    );\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-token-management",children:"2. Token Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { AccessTokenWrapper } from '@calimero-network/calimero-client';\n\nconst App = () => {\n    return (\n        <AccessTokenWrapper\n            getNodeUrl={() => process.env.NEXT_PUBLIC_API_URL}\n        >\n            <YourApp />\n        </AccessTokenWrapper>\n    );\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-initial-setup",children:"3. Initial Setup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { SetupModal } from '@calimero-network/calimero-client';\n\nconst Setup = () => {\n    return (\n        <SetupModal\n            successRoute={() => navigate('/dashboard')}\n            getNodeUrl={() => localStorage.getItem('nodeUrl')}\n            setNodeUrl={(url) => localStorage.setItem('nodeUrl', url)}\n            getApplicationId={() => localStorage.getItem('appId')}\n            setApplicationId={(id) => localStorage.setItem('appId', id)}\n        />\n    );\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-token-storage",children:"4. Token Storage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import {\n  setAccessToken,\n  getAccessToken,\n  setRefreshToken,\n  getRefreshToken,\n  clearJWT,\n} from '@calimero-network/calimero-client';\n\n// Store tokens\nsetAccessToken(accessToken);\nsetRefreshToken(refreshToken);\n\n// Retrieve tokens\nconst accessToken = getAccessToken();\nconst refreshToken = getRefreshToken();\n\n// Clear tokens on logout\nclearJWT();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-rpcclient",children:"Using RpcClient"}),"\n",(0,s.jsxs)(n.p,{children:["Important: Always use the ",(0,s.jsx)(n.code,{children:"execute"})," method instead of deprecated ",(0,s.jsx)(n.code,{children:"query"})," or\n",(0,s.jsx)(n.code,{children:"mutate"})," methods."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { JsonRpcClient } from '@calimero-network/calimero-client';\n\n// Initialize client\nconst rpcClient = new JsonRpcClient(\n  process.env.NEXT_PUBLIC_API_URL,\n  '/jsonrpc',\n);\n\n// Define interfaces\ninterface CreatePost {\n  title: string;\n  text: string;\n}\n\ninterface Post {\n  id: string;\n  title: string;\n  text: string;\n}\n\n// Execute a method\nconst response = await rpcClient.execute<CreatePost, Post>({\n  applicationId: process.env.NEXT_PUBLIC_APPLICATION_ID,\n  method: 'create_post',\n  argsJson: {\n    title: 'My First Post',\n    text: 'Hello Calimero!',\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"using-subscriptionsclient",children:"Using SubscriptionsClient"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { WsSubscriptionsClient } from '@calimero-network/calimero-client';\n\n// Initialize client\nconst wsClient = new WsSubscriptionsClient(\n  process.env.NEXT_PUBLIC_API_URL,\n  '/ws',\n);\n\n// Connect to WebSocket\nawait wsClient.connect();\n\n// Subscribe to application events\nwsClient.subscribe([process.env.NEXT_PUBLIC_APPLICATION_ID]);\n\n// Handle incoming events\nwsClient.addCallback((event) => {\n  switch (event.type) {\n    case 'StateMutation':\n      console.log('State updated:', event.data.newRoot);\n      break;\n    case 'ExecutionEvent':\n      console.log('Event:', event.data);\n      break;\n  }\n});\n\n// Cleanup\nwsClient.disconnect();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"contract-api-integration",children:"Contract API Integration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { ContractApiDataSource } from '@calimero-network/calimero-client';\n\nconst contractApi = new ContractApiDataSource(httpClient);\n\n// Get proposals\nconst proposals = await contractApi.getContractProposals();\n\n// Get proposal details\nconst details = await contractApi.getProposalDetails(proposalId);\n\n// Get number of approvals\nconst approvals = await contractApi.getNumberOfApprovals(proposalId);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface ErrorResponse {\n  code?: number;\n  message: string;\n}\n\ntry {\n  const result = await rpcClient.execute(params);\n  if (result.error) {\n    if (result.error.code === 401) {\n      // Handle authentication error\n      clearJWT();\n      redirectToLogin();\n    }\n    console.error('RPC Error:', result.error.message);\n  }\n} catch (error) {\n  console.error('Unexpected error:', error);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"admin-api-endpoints",children:"Admin API Endpoints"}),"\n",(0,s.jsx)(n.h3,{id:"protected-endpoints-requires-authentication",children:"Protected Endpoints (Requires Authentication)"}),"\n",(0,s.jsx)(n.h4,{id:"application-management",children:"Application Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/root-key"})," - Create root key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/install-application"})," - Install application"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/uninstall-application"})," - Uninstall application"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/applications"})," - List applications"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/applications/:app_id"})," - Get application details"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"context-management",children:"Context Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts"})," - Create context"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts"})," - List contexts"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id"})," - Get context details"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DELETE /admin-api/contexts/:context_id"})," - Delete context"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/users"})," - Get context users"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/client-keys"})," - Get context client keys"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/storage"})," - Get context storage"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/identities"})," - Get context identities"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts/invite"})," - Invite to context"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts/join"})," - Join context"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"identity-management",children:"Identity Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/identity/context"})," - Generate context identity"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DELETE /admin-api/identity/keys"})," - Delete auth keys"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/generate-jwt-token"})," - Generate JWT token"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/did"})," - Fetch DID"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DELETE /admin-api/did"})," - Delete DID"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"unprotected-endpoints",children:"Unprotected Endpoints"}),"\n",(0,s.jsx)(n.h4,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/health"})," - Health check"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/certificate"})," - Get certificate"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/request-challenge"})," - Request challenge"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/add-client-key"})," - Add client key"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/refresh-jwt-token"})," - Refresh JWT token"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"proposal-management",children:"Proposal Management"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/proposals/:proposal_id/approvals/count"})," -\nGet proposal approvals count"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/proposals/:proposal_id/approvals/users"})," -\nGet proposal approvers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/proposals/count"})," - Get active proposals\ncount"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts/:context_id/proposals"})," - Get proposals"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/proposals/:proposal_id"})," - Get proposal\ndetails"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts/:context_id/proposals/get-context-value"})," - Get\ncontext value"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"POST /admin-api/contexts/:context_id/proposals/context-storage-entries"})," - Get\ncontext storage entries"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"GET /admin-api/contexts/:context_id/proxy-contract"})," - Get proxy contract"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-admin-api",children:"Using Admin API"}),"\n",(0,s.jsx)(n.p,{children:"Any endpoints not exposed throught the SDK you can use like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { AxiosHttpClient } from '@calimero-network/calimero-client';\n\nconst httpClient = new AxiosHttpClient(axios);\n\n// Example: Get context details\nconst contextDetails = await httpClient.get<ContextDetails>(\n  `${nodeUrl}/admin-api/contexts/${contextId}`,\n);\n\n// Example: Create context\nconst createContext = await httpClient.post<ContextResponse>(\n  `${nodeUrl}/admin-api/contexts`,\n  contextData,\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Always use the ",(0,s.jsx)(n.code,{children:"execute"})," method for RPC calls instead of deprecated ",(0,s.jsx)(n.code,{children:"query"}),"\nor ",(0,s.jsx)(n.code,{children:"mutate"})]}),"\n",(0,s.jsx)(n.li,{children:"Implement proper error handling for both RPC and WebSocket operations"}),"\n",(0,s.jsx)(n.li,{children:"Ensure proper cleanup of WebSocket connections when they're no longer needed"}),"\n",(0,s.jsx)(n.li,{children:"Store sensitive information securely using the provided storage utilities"}),"\n",(0,s.jsx)(n.li,{children:"Use the built-in token refresh mechanism to maintain sessions"}),"\n",(0,s.jsx)(n.li,{children:"All protected endpoints require valid JWT authentication"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},85248:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(30758);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);