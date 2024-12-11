"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7154],{7128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-concepts/encryption","title":"Encryption","description":"Encryption in Calimero ensures data security in transit over the network,","source":"@site/docs/03-core-concepts/07-encryption.mdx","sourceDirName":"03-core-concepts","slug":"/core-concepts/encryption","permalink":"/core-concepts/encryption","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/03-core-concepts/07-encryption.mdx","tags":[],"version":"current","lastUpdatedAt":1733958943000,"sidebarPosition":7,"frontMatter":{"id":"encryption","title":"Encryption"},"sidebar":"tutorialSidebar","previous":{"title":"Proxy Contract Interaction Guide","permalink":"/core-concepts/blockchains-integration/proxy-contract-interaction"},"next":{"title":"Specialized Nodes","permalink":"/core-concepts/specialized-nodes"}}');var r=t(6070),s=t(4214);const o={id:"encryption",title:"Encryption"},c=void 0,a={},l=[{value:"Key Principles",id:"key-principles",level:3},{value:"Double Ratchet Algorithm",id:"double-ratchet-algorithm",level:3},{value:"Tree-Based Diffie-Hellman Key Exchange",id:"tree-based-diffie-hellman-key-exchange",level:3}];function d(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Encryption in Calimero ensures data security in transit over the network,\nmaintaining confidentiality and integrity."}),"\n",(0,r.jsx)(n.h3,{id:"key-principles",children:"Key Principles"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Forward Secrecy"}),": Ensuring past messages remain secure even if a key is\ncompromised in the future."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Post-Compromise Security"}),": Ensuring future messages remain secure even\nafter any previous message has been compromised."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Zero Trust in Third Parties"}),": No reliance on intermediaries for security."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Verifiable End-to-End Encryption"}),": Confirming that only the intended\nrecipients can read the messages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Asynchronous Communication"}),": Ability to start communications without\nrecipients being online."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multi-Device Support"}),": Ensuring seamless use across multiple devices."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deniability"}),": Providing plausible deniability for message authorship to\nnon-context members."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Non-Interactive Group Management"}),": Adding and removing context members\nwithout requiring interaction."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"double-ratchet-algorithm",children:"Double Ratchet Algorithm"}),"\n",(0,r.jsx)(n.p,{children:"Each network message uses a distinct encryption key derived from the ratchet\nstate, providing forward secrecy by ensuring that the compromise of one key does\nnot affect the security of previous messages."}),"\n",(0,r.jsx)(n.p,{children:"Each context can configure Diffie-Hellman reset parameters. For one-on-one peer\ninteractions, resets can occur instantaneously, while for larger groups, resets\ncan happen at non-deterministic intervals to balance security and performance."}),"\n",(0,r.jsx)(n.h3,{id:"tree-based-diffie-hellman-key-exchange",children:"Tree-Based Diffie-Hellman Key Exchange"}),"\n",(0,r.jsx)(n.p,{children:"All contexts use a tree-based Diffie-Hellman key exchange. This method\nefficiently manages shared secrets among multiple members, ensuring that keys\nare updated and propagated correctly. The reset of keys occurs at the leaf nodes\nof the tree, guaranteeing post-compromise security."}),"\n",(0,r.jsx)(n.p,{children:"Adding a new member involves existing members using their prekeys to complete an\nX3DH (Triple Diffie-Hellman) exchange, securely adding the new member without\nrequiring direct interaction. Removing a member involves invalidating their keys\nand updating the shared secrets among remaining members, ensuring efficient and\nsecure updates."}),"\n",(0,r.jsx)(n.p,{children:"By leveraging advanced encryption techniques such as the Double Ratchet\nAlgorithm and tree-based Diffie-Hellman key exchange, Calimero ensures that all\ndata in transit is protected, maintaining the confidentiality and integrity of\nnetwork messages."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4214:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(758);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);