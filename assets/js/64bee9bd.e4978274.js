"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2074],{3330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(6070),r=t(5658);const s={id:"encryption",title:"Encryption"},a=void 0,o={id:"learn/advanced-concepts/encryption",title:"Encryption",description:"Encryption in Calimero ensures data security in transit over the network,",source:"@site/docs/02-learn/04-advanced-concepts/02-encryption.mdx",sourceDirName:"02-learn/04-advanced-concepts",slug:"/learn/advanced-concepts/encryption",permalink:"/learn/advanced-concepts/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/02-learn/04-advanced-concepts/02-encryption.mdx",tags:[],version:"current",lastUpdatedAt:1729944587e3,sidebarPosition:2,frontMatter:{id:"encryption",title:"Encryption"},sidebar:"tutorialSidebar",previous:{title:"Specialized Nodes",permalink:"/learn/advanced-concepts/specialized-nodes"},next:{title:"Setup",permalink:"/getting-started/setup"}},c={},l=[{value:"Key Principles",id:"key-principles",level:3},{value:"Double Ratchet Algorithm",id:"double-ratchet-algorithm",level:3},{value:"Tree-Based Diffie-Hellman Key Exchange",id:"tree-based-diffie-hellman-key-exchange",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Encryption in Calimero ensures data security in transit over the network,\nmaintaining confidentiality and integrity."}),"\n",(0,i.jsx)(n.h3,{id:"key-principles",children:"Key Principles"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Forward Secrecy"}),": Ensuring past messages remain secure even if a key is\ncompromised in the future."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Post-Compromise Security"}),": Ensuring future messages remain secure even\nafter any previous message has been compromised."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Zero Trust in Third Parties"}),": No reliance on intermediaries for security."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Verifiable End-to-End Encryption"}),": Confirming that only the intended\nrecipients can read the messages."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Asynchronous Communication"}),": Ability to start communications without\nrecipients being online."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Multi-Device Support"}),": Ensuring seamless use across multiple devices."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deniability"}),": Providing plausible deniability for message authorship to\nnon-context members."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Non-Interactive Group Management"}),": Adding and removing context members\nwithout requiring interaction."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"double-ratchet-algorithm",children:"Double Ratchet Algorithm"}),"\n",(0,i.jsx)(n.p,{children:"Each network message uses a distinct encryption key derived from the ratchet\nstate, providing forward secrecy by ensuring that the compromise of one key does\nnot affect the security of previous messages."}),"\n",(0,i.jsx)(n.p,{children:"Each context can configure Diffie-Hellman reset parameters. For one-on-one peer\ninteractions, resets can occur instantaneously, while for larger groups, resets\ncan happen at non-deterministic intervals to balance security and performance."}),"\n",(0,i.jsx)(n.h3,{id:"tree-based-diffie-hellman-key-exchange",children:"Tree-Based Diffie-Hellman Key Exchange"}),"\n",(0,i.jsx)(n.p,{children:"All contexts use a tree-based Diffie-Hellman key exchange. This method\nefficiently manages shared secrets among multiple members, ensuring that keys\nare updated and propagated correctly. The reset of keys occurs at the leaf nodes\nof the tree, guaranteeing post-compromise security."}),"\n",(0,i.jsx)(n.p,{children:"Adding a new member involves existing members using their prekeys to complete an\nX3DH (Triple Diffie-Hellman) exchange, securely adding the new member without\nrequiring direct interaction. Removing a member involves invalidating their keys\nand updating the shared secrets among remaining members, ensuring efficient and\nsecure updates."}),"\n",(0,i.jsx)(n.p,{children:"By leveraging advanced encryption techniques such as the Double Ratchet\nAlgorithm and tree-based Diffie-Hellman key exchange, Calimero ensures that all\ndata in transit is protected, maintaining the confidentiality and integrity of\nnetwork messages."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(758);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);