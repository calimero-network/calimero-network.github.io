"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9664],{4316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tutorials/awesome-projects/building-with-icp","title":"Building with Internet Computer (ICP)","description":"Step-by-Step Guide to Building an Application for Calimero with Internet","source":"@site/docs/06-tutorials/07-awesome-projects/03-building-with-icp.mdx","sourceDirName":"06-tutorials/07-awesome-projects","slug":"/tutorials/awesome-projects/building-with-icp","permalink":"/next/tutorials/awesome-projects/building-with-icp","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/06-tutorials/07-awesome-projects/03-building-with-icp.mdx","tags":[],"version":"current","lastUpdatedAt":1739280228000,"sidebarPosition":3,"frontMatter":{"id":"building-with-icp","title":"Building with Internet Computer (ICP)"},"sidebar":"tutorialSidebar","previous":{"title":"Private DAO","permalink":"/next/tutorials/awesome-projects/demo-blockchain-integration"},"next":{"title":"Blockchain interaction with Proxy Contract","permalink":"/next/tutorials/proxy-contract-interaction"}}');var a=t(6070),r=t(5248),o=t(1922),l=t(1756);const s={id:"building-with-icp",title:"Building with Internet Computer (ICP)"},c="Building with Internet Computer (ICP)",d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Configuring a Local Devnet",id:"configuring-a-local-devnet",level:2},{value:"Context and Proxy Contract",id:"context-and-proxy-contract",level:2},{value:"Context contract",id:"context-contract",level:3},{value:"Proxy contract",id:"proxy-contract",level:3},{value:"Initialize and Start Nodes",id:"initialize-and-start-nodes",level:4},{value:"Install application",id:"install-application",level:4},{value:"Fund Proxy Contract",id:"fund-proxy-contract",level:4},{value:"Blockchain Demo Application",id:"blockchain-demo-application",level:2},{value:"Change Approval Threshold Proposal",id:"change-approval-threshold-proposal",level:3},{value:"Cross-Contract Call Proposal",id:"cross-contract-call-proposal",level:3},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"building-with-internet-computer-icp",children:"Building with Internet Computer (ICP)"})}),"\n",(0,a.jsx)(n.p,{children:"Step-by-Step Guide to Building an Application for Calimero with Internet\nComputer (ICP)"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial will cover the following topics:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Starting a Local Devnet"})," - Setting and configuring a local devnet using\ndfx through a script."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Configuring Nodes"})," - Setting and configuring nodes, installing demo\napplication, creating context and inviting nodes into the context."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Installing a Blockchain Demo Application"})," - Setup demo application that\ncontains all functionalities for interaction with smart contracts."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Creating a Proposal"}),' - Creating a proposal to execute cross-contract call\nto "Greet" smart contract deployed in step 3.']}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"For easier guidance, we have named each terminal block by their purpose."})}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"To follow this tutorial, you'll need the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Calimero ICP Devnet -\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/icp-devnet",children:"Repository"})]}),"\n",(0,a.jsxs)(n.li,{children:["Calimero Core - Installation instructions -\n",(0,a.jsx)(n.a,{href:"/getting-started/setup#installation",children:"Instructions"})]}),"\n",(0,a.jsxs)(n.li,{children:["Demo Blockchain Integrations -\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/demo-blockchain-integrations",children:"Repository"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You also need following tools:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Cargo"}),": Version ",(0,a.jsx)(n.code,{children:"1.86.0-nightly"})," used for tutorial -\n",(0,a.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"url"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"DFX"})," (Dfinity SDK): Version ",(0,a.jsx)(n.code,{children:"0.24.3"})," used for tutorial -\n",(0,a.jsx)(n.a,{href:"https://internetcomputer.org/docs/current/developer-docs/getting-started/install",children:"url"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Candid Extractor"}),": Version ",(0,a.jsx)(n.code,{children:"0.1.5"})," used for tutorial -\n",(0,a.jsx)(n.a,{href:"https://crates.io/crates/candid-extractor",children:"url"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Pnpm"}),": Version ",(0,a.jsx)(n.code,{children:"9.6.0"})," used for tutorial -\n",(0,a.jsx)(n.a,{href:"https://pnpm.io/installation",children:"url"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuring-a-local-devnet",children:"Configuring a Local Devnet"}),"\n",(0,a.jsx)(n.p,{children:"We have prepared a script that will deploy the contracts and create needed\naccounts on local environment. The script does the following:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creates accounts needed for ledger deployment."}),"\n",(0,a.jsx)(n.li,{children:"Deploys the context, ledger and example external contract."}),"\n",(0,a.jsx)(n.li,{children:"Funds the deployed context contract for initial usage."}),"\n",(0,a.jsx)(n.li,{children:"Calls required initial methods on deployed contracts."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Scripts are located in Calimero ICP Devnet repository. First clone the\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/icp-devnet",children:"repository"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal"',children:"git clone https://github.com/calimero-network/icp-devnet\n\ncd icp-devnet\n\nchmod +x ./deploy_devnet_addon.sh\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"The repository contains two scripts:"}),"\n",(0,a.jsxs)(o.A,{defaultValue:"fresh",groupId:"deployment_script",values:[{label:"Create new dfx environment",value:"fresh"},{label:"Install on existing dfx environment",value:"addon"}],children:[(0,a.jsxs)(l.A,{value:"fresh",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"deploy_devnet_fresh.sh"})," - Starts fresh dfx environment and deploys the contracts and needed accounts."]}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This script will delete the current dfx environment and create a new one."})})]}),(0,a.jsxs)(l.A,{value:"addon",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"deploy_devnet_addon.sh"})," - Deploys the contracts and creates needed account on already existing dfx environment."]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"dfx environment needs to be started before running this script."})})]})]}),"\n",(0,a.jsxs)(n.p,{children:["For this tutorial we will be using ",(0,a.jsx)(n.code,{children:"deploy_devnet_fresh.sh"})," script."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal"',children:"./deploy_devnet_fresh.sh\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal | Output of successful deployment"',children:"=== Deployment Summary ===\nContext Contract ID: bkyz2-fmaaa-aaaaa-qaaaq-cai\nLedger Contract ID: bd3sg-teaaa-aaaaa-qaaba-cai\nDemo External Contract ID: be2us-64aaa-aaaaa-qaabq-cai\n\nAccount Information:\nMinting Account: 8b768d662eeebfcbe55b180a7ac0ccb46e2ccd59cacd0b4ec3404f0c8d8b8086\nInitial Account: 670183527b941adeae9e1552525853af7812d9441758c668b2e3b8553dead7a0\nArchive Principal: kbwrg-ggsyr-4zl47-3z7by-owf4g-draak-xj2ni-mcvwv-6wqxc-nkjam-gae\nRecipient Principal: mfefj-dsyoh-rb3b2-3yagk-rvb2p-wcb2v-fhu2n-fel2f-wqzjn-yhtxx-hqe\n\nDeployment completed successfully!\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Leave this terminal open as you will need values in later steps."})}),"\n",(0,a.jsx)(n.h2,{id:"context-and-proxy-contract",children:"Context and Proxy Contract"}),"\n",(0,a.jsx)(n.h3,{id:"context-contract",children:"Context contract"}),"\n",(0,a.jsx)(n.p,{children:"Calimero context contract is used to create and manage contexts and their\nmembers."}),"\n",(0,a.jsx)("lb",{}),"\n",(0,a.jsxs)(n.p,{children:["More information about context contract can be found\n",(0,a.jsx)(n.a,{href:"/core-concepts/blockchains-integration#context-contract",children:"here"}),". To see the\ncontext contract implementation, refer to the\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/core/tree/master/contracts/icp/context-config",children:"calimero-network/core"}),"\nrepository."]}),"\n",(0,a.jsx)(n.h3,{id:"proxy-contract",children:"Proxy contract"}),"\n",(0,a.jsx)(n.p,{children:"Proxy contract is used to handle blockchain operations such as cross-contract\ncalls and trasnfers as well as storing variables."}),"\n",(0,a.jsx)("lb",{}),"\n",(0,a.jsxs)(n.p,{children:["More information about proxy contract can be found\n",(0,a.jsx)(n.a,{href:"/core-concepts/blockchains-integration#functionality-details",children:"here"}),". To see the\nproxy contract implementation, refer to the\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/core/tree/master/contracts/icp/context-proxy",children:"calimero-network/core"}),"\nrepository. ## Setting up and configuring nodes"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"By deafult proposal needs 3 approvals before it is executed so we will setup 3\nnodes."})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Initialize and start 3 nodes"}),"\n",(0,a.jsxs)(n.li,{children:["Install\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/demo-blockchain-integrations/tree/master/logic",children:"blockchain demo application"})]}),"\n",(0,a.jsx)(n.li,{children:"Create context for blockchain demo application"}),"\n",(0,a.jsx)(n.li,{children:"Invite all nodes in the same context"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"initialize-and-start-nodes",children:"Initialize and Start Nodes"}),"\n",(0,a.jsx)(n.p,{children:"Open 3 terminals side by side."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"merod --node-name node1 init --server-port 2427 --swarm-port 2527\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node2 Terminal"',children:"merod --node-name node2 init --server-port 2428 --swarm-port 2528\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node3 Terminal"',children:"merod --node-name node3 init --server-port 2429 --swarm-port 2529\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output should look like this:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/12_init_cali_nodes.png",alt:"init-nodes"}),"\n",(0,a.jsxs)(n.p,{children:["You can verify nodes initialization files by looking into ",(0,a.jsx)(n.code,{children:"~/.calimero"})," folder."]}),"\n",(0,a.jsxs)(n.p,{children:["More on node initialization can be found ",(0,a.jsx)(n.a,{href:"/getting-started/setup/",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Now we are going to start the nodes with the commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"merod --node-name node1 run\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node2 Terminal"',children:"merod --node-name node2 run\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node3 Terminal"',children:"merod --node-name node3 run\n"})}),"\n",(0,a.jsx)(n.p,{children:"After running the nodes you should see the similar to this one:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/14_start_cali_nodes.png",alt:"running-nodes"}),"\n",(0,a.jsx)(n.h4,{id:"install-application",children:"Install application"}),"\n",(0,a.jsx)(n.p,{children:"Inside the node1 terminal we are going to install blockchain demo application."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Clone the\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/demo-blockchain-integrations",children:"Demo Blockchain Integrations"}),"\nrepository."]}),"\n",(0,a.jsxs)(n.li,{children:["Navigate to the ",(0,a.jsx)(n.code,{children:"logic"})," directory."]}),"\n",(0,a.jsxs)(n.li,{children:["Build the application using the ",(0,a.jsx)(n.code,{children:"build.sh"})," script, script will compile wasm\nfile in /res directory."]}),"\n",(0,a.jsxs)(n.li,{children:["Copy the ",(0,a.jsx)(n.code,{children:"blockchain.wasm"})," file path"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Applications are installed with the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"application install file <PATH_TO_blockchain.wasm_FILE>\n>Installed application: <APPLICATION_ID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"After installing the application we can create context:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"context create <APPLICATION_ID> --protocol icp\n>Created context <CONTEXT_ID> with identity <CONTEXT_IDENTITY>\n"})}),"\n",(0,a.jsx)(n.p,{children:"After creating context we need to add node2 and node3 to it."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("br",{})," To be able to do that we need to create identities for node2 and node3\nwith whom they will join to the created context."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node2 Terminal"',children:"identity new\n>> Private key: <PRIVATE_KEY>\n>> Public key: <PUBLIC_KEY>\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node3 Terminal"',children:"identity new\n>> Private key: <PRIVATE_KEY>\n>> Public key: <PUBLIC_KEY>\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output should look like this:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/16_create_new_identity.png",alt:"create-identity"}),"\n",(0,a.jsx)(n.p,{children:"After creating identities we can invite node2 and node3 to join the created\ncontext."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"context invite <CONTEXT_ID> <CONTEXT_IDENTITY> <PUBLIC_KEY_OF_NODE2>\n>> Invitation payload: <INVITATION_PAYLOAD>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will generate a invitation payload which can node2 use to join the context.\nCopy the invitation payload and do the following command in node2 terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node2 Terminal"',children:"context join <PRIVATE_KEY_OF_NODE2> <INVITATION_PAYLOAD>\n>> Joined context <CONTEXT_ID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Repeat the same steps for Node3."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"context invite <CONTEXT_ID> <CONTEXT_IDENTITY> <PUBLIC_KEY_OF_NODE3>\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node3 Terminal"',children:"context join <PRIVATE_KEY_OF_NODE3> <INVITATION_PAYLOAD>\n>> Joined context <CONTEXT_ID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output in terminal after inviting and joining nodes should look like this:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/16_invite_nodes.png",alt:"join-context"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["More on invitations and joining the context can be found\n",(0,a.jsx)(n.a,{href:"https://calimero-network.github.io/tutorials/invitations-and-joinings",children:"here"})]}),"\n",(0,a.jsx)(n.p,{children:"Lastly we can check if all nodes are connected in context with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"context ls\n> <CONTEXT_ID>\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"identity ls <CONTEXT_ID>\n"})}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/18_verify_context.png",alt:"context-members"}),"\n",(0,a.jsx)(n.p,{children:"We can see there are 3 nodes connected in context."}),"\n",(0,a.jsx)(n.h4,{id:"fund-proxy-contract",children:"Fund Proxy Contract"}),"\n",(0,a.jsx)(n.p,{children:"We have now installed the application and created context. To be able to fully\nuse proxy contract we need to fund it. To get proxy contract address we need to\nuse API GET call to retrieve it from the node."}),"\n",(0,a.jsx)(n.p,{children:"The 3 running nodes are located on:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://localhost:2427",children:"https://localhost:2427"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://localhost:2428",children:"https://localhost:2428"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://localhost:2429",children:"https://localhost:2429"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Any of them can be queried to get the value of proxy contract id."}),"\n",(0,a.jsxs)(n.p,{children:["API endpoint to fetch proxy contract id is:\n",(0,a.jsx)(n.code,{children:"http://localhost:2428/admin-api/contexts/CONTEXT_ID/proxy-contract"})]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"CONTEXT_ID can be copied from previous steps"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["And for our case it is:\n",(0,a.jsx)(n.code,{children:"http://localhost:2428/admin-api/contexts/7krojDziAKRWP8KrUD8aYGL3z5peScNxPXaBWTKCFr2h/proxy-contract"})]}),"\n",(0,a.jsx)(n.p,{children:"Example of request in postman:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/19_get_proxy_contract.png",alt:"context-members"}),"\n",(0,a.jsx)(n.p,{children:"With proxy contract id we can now fund it using dfx native commands. Reopen the\nterminal you used to execute devnet deployment script and do the following\ncommands:"}),"\n",(0,a.jsx)(n.p,{children:"Switch to initial identity."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal Terminal"',children:'dfx identity use initial\n>Using identity: "initial".\n'})}),"\n",(0,a.jsx)(n.p,{children:"To fund the contract we are going to use command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"dfx canister call <LEDGER_CONTRACT_ID> icrc1_transfer '(\n  record {\n    to = record {\n      owner = principal \"<PROXY_CONTRACT_ID>\";\n      subaccount = null;\n    };\n    amount = 1_000_000_000;\n    fee = null;\n    memo = null;\n    from_subaccount = null;\n    created_at_time = null;\n  }\n)'\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"LEDGER_CONTRACT_ID - this value can be viewed when ./deploy_devnet.sh script\nfinishes."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("br",{})," In our case value its: ",(0,a.jsx)(n.code,{children:"bd3sg-teaaa-aaaaa-qaaba-cai"})]}),"\n",(0,a.jsx)(n.p,{children:"PROXY_CONTRACT_ID - value we got in previous step."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("br",{})," In our case value its: ",(0,a.jsx)(n.code,{children:"b77ix-eeaaa-aaaaa-qaada-cai"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal Terminal"',children:"dfx canister call bd3sg-teaaa-aaaaa-qaaba-cai icrc1_transfer '(\n  record {\n    to = record {\n      owner = principal \"b77ix-eeaaa-aaaaa-qaada-cai\";\n      subaccount = null;\n    };\n    amount = 1_000_000_000;\n    fee = null;\n    memo = null;\n    from_subaccount = null;\n    created_at_time = null;\n  }\n)'\n> (variant { Ok = 1 : nat })\n"})}),"\n",(0,a.jsx)(n.p,{children:"And verify the contract balance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="ICP Setup Terminal Terminal"',children:"dfx canister call bd3sg-teaaa-aaaaa-qaaba-cai icrc1_balance_of '(\n  record {\n    owner = principal \"b77ix-eeaaa-aaaaa-qaada-cai\";\n    subaccount = null;\n  }\n)'\n> (1_000_000_000 : nat)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"blockchain-demo-application",children:"Blockchain Demo Application"}),"\n",(0,a.jsx)(n.p,{children:"This application is used to demonstrate how to interact with Calimero Proxy\ncontract through creating, approving and executing proposals."}),"\n",(0,a.jsx)(n.p,{children:"The proxy contract supports the following types of proposals:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"External function call"})," - Enables cross-contract call execution."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Transfer"})," - Allows transferring funds."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Set approval threshold"})," - Specifies the number of approvals required for\nproposal execution."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Set active proposal limit"})," - Defines the maximum number of active\nproposals."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Set context variables"})," - Allows setting key-value pairs for context\nvariables."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"While the demo focuses on specific functionality, you can customize the\napplication to suit your needs. Instead of building a complete frontend, this\ndemo serves as a foundation that you can extend to create a fully-featured\nfrontend application tailored to your requirements."}),"\n",(0,a.jsx)(n.p,{children:"Navigate to frontend directory and install dependencies."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd demo-blockchain-integrations/app && pnpm install\n"})}),"\n",(0,a.jsx)(n.p,{children:"Since we have 3 nodes we will need to setup frontend for each of them. Open 3\nterminals side by side and run the following commands in each of them from /app\ndirectory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal 1 | Terminal 2 | Terminal 3"',children:"pnpm run dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"After running the frontend you should see the following output in each of the\nterminals:"}),"\n",(0,a.jsx)("img",{src:"/icp-tutorial/Demo_blockchain_app_start.png",alt:"frontend-running"}),"\n",(0,a.jsx)(n.p,{children:"Open the applications in by clicking on the link in each of the terminals and\nyou will see form with input fields for node URL and application ID."}),"\n",(0,a.jsx)(n.p,{children:"To get application ID you can use following command from any of node terminals:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="Node1 Terminal"',children:"application ls\n> <APPLICATION_ID>\n"})}),"\n",(0,a.jsx)(n.p,{children:"The node URL of the nodes are respectively:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://localhost:2427",children:"http://localhost:2427"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://localhost:2428",children:"http://localhost:2428"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"http://localhost:2429",children:"http://localhost:2429"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After submitting the form you will be redirected to admin dashboard where you\nwill see the login page with wallet selector."}),"\n",(0,a.jsx)("lb",{}),"\n",(0,a.jsx)(n.p,{children:"Select a wallet you wish to login with and afterwards you will be prompted to\nselect the context and context identity you wish to use."}),"\n",(0,a.jsx)("lb",{}),"\n",(0,a.jsx)(n.p,{children:"After selecting both you will be logged in and automatically redirected to the\napplication."}),"\n",(0,a.jsx)(n.h3,{id:"change-approval-threshold-proposal",children:"Change Approval Threshold Proposal"}),"\n",(0,a.jsx)(n.p,{children:"First we are going to create an approval threshold change proposal so future\nproposals can be executed by only 1 node. As mentioned earlier each proposal by\ndefault needs 3 approvals to be executed."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'Click on "Create Proposal" button and select "Change number of approvals\nneeded" from dropdown.'}),"\n",(0,a.jsx)(n.li,{children:"In the input field set the number of approvals to 1 (this means that proposal\nwill be executed on creation)."}),"\n",(0,a.jsx)(n.li,{children:'Click on "Create Proposal" button to create the proposal.'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After proposal is created you will get the alert that proposal is created and it\nwill be shown in other frontend applications by selecting it in select field."}),"\n",(0,a.jsx)(n.p,{children:'After selecting proposal on other frontend applications (node2 and node3) you\ncan see that it is created and can be approved by clicking on "Approve Proposal"\nbutton.'}),"\n",(0,a.jsx)(n.h3,{id:"cross-contract-call-proposal",children:"Cross-Contract Call Proposal"}),"\n",(0,a.jsx)(n.p,{children:"At this point proposal approval threshold is 1, meaning proposal will be\nexecuted on creation. This means when we create cross-contract call proposal it\nwill insantly be executed."}),"\n",(0,a.jsx)(n.p,{children:"We have created a demo external contract that contains following methods:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"test_method_no_transfer"})," - This method does not require a deposit for\nexecution, it sets sent arguments in its storage."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"test_method"})," - This method requires a deposit for execution, it first\ntransfers the funds to the contract from proxy contract and then sets sent\narguments in its storage, if the transfer is completed successfully."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"get_calls"})," - This method returns all calls stored in the contract."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"clear_state"})," - This method clears the storage of the contract."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You can see the contract itself and its implementation\n",(0,a.jsx)(n.a,{href:"https://github.com/calimero-network/core/tree/master/contracts/icp/context-proxy/mock/external",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"When creating cross-contract call proposal we need to provide following values:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Contract ID"}),": br5f7-7uaaa-aaaaa-qaaca-cai - Address of the external\ncontract - shown in terminal output of dfx deployment script for demo external\ncontract"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Method Name"}),": test_method_no_transfer - Name of the method that will be\ncalled"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Deposit"}),": 0 - Deposit for transfer, in this case we are not transferring\nany funds so we can set it to 0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Arguments"}),": someKey: someValue - Key and value pairs for arguments that are\nsent to the external contract"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"After we create proposal it will be executed, and the success of the execution\ncan be checked by running following command in terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="DFX terminal"',children:"dfx canister call <DEMO_EXTERNAL_CONTRACT_ID> get_calls\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"caution",children:[(0,a.jsx)(n.p,{children:"It's important to note that in this tutorial, we use a function call that does\nnot require a deposit for execution."}),(0,a.jsx)(n.p,{children:"On the other hand, there are examples where cross-contract calls require a\ndeposit. For instance, in the case of an ERC20 token implementation, the\nfollowing steps typically occur:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"The contract detects that an attached deposit is present."}),"\n",(0,a.jsx)(n.li,{children:"It calls the deployed ledger contract to enable the external contract (the\ncontract being called) to withdraw funds. Before doing so, it sets the\nallowance to 0 to prevent vulnerabilities related to the Attack Vector."}),"\n",(0,a.jsx)(n.li,{children:"It then calls the ledger contract again to set the allowance equal to the\ndeposit attached to the call."}),"\n",(0,a.jsx)(n.li,{children:"The external contract is called, and it must contain logic to withdraw the\nfunds that have been allocated for it in the ledger contract."}),"\n",(0,a.jsx)(n.li,{children:"After the cross-contract call is completed, the proxy contract sets the\nallowance back to 0 to ensure security."}),"\n"]})]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"This tutorial has covered all the essential steps developers need to build an\napplication for Calimero and ICP, from setting up the environment to deploying a\nfully functional smart contract. By following this guide, you should now have a\nsolid understanding of the development workflow and how to build your own ICP\napplication for Calimero."}),"\n",(0,a.jsx)(n.p,{children:"Feel free to use our demo applications as a starting point to build and\ncustomize your own application. If you have any questions or need assistance,\ndon't hesitate to reach out to us on Socials. We're here to help!"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1756:(e,n,t)=>{t.d(n,{A:()=>o});t(758);var i=t(3526);const a={tabItem:"tabItem_j4oX"};var r=t(6070);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,o),hidden:t,children:n})}},1922:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(758),a=t(3526),r=t(246),o=t(5557),l=t(1723),s=t(8171),c=t(7960),d=t(343);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=x({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),j=(()=>{const e=c??m;return u({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&s(j)}),[j]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=t(3753);const j={tabList:"tabList_T9Y8",tabItem:"tabItem_iJx9"};var f=t(6070);function b(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==i&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{s.push(e)},onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},5248:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(758);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);