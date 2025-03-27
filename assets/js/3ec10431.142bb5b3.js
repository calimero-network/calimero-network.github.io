"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2579],{24228:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"architecture/node/network","title":"Network","description":"Overview","source":"@site/versioned_docs/version-0.5.0/04-architecture/03-node/05-network.mdx","sourceDirName":"04-architecture/03-node","slug":"/architecture/node/network","permalink":"/0.5.0/architecture/node/network","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/versioned_docs/version-0.5.0/04-architecture/03-node/05-network.mdx","tags":[],"version":"0.5.0","lastUpdatedAt":1743093815000,"sidebarPosition":5,"frontMatter":{"id":"network","title":"Network"},"sidebar":"tutorialSidebar","previous":{"title":"Storage","permalink":"/0.5.0/architecture/node/storage"},"next":{"title":"Developer Tools","permalink":"/0.5.0/developer-tools/overview"}}');var r=i(86070),t=i(33763);const o={id:"network",title:"Network"},l=void 0,a={},d=[{value:"Overview",id:"overview",level:2},{value:"Node Types",id:"node-types",level:2},{value:"Client Node",id:"client-node",level:3},{value:"Boot Node",id:"boot-node",level:3},{value:"P2P protocols and techniques",id:"p2p-protocols-and-techniques",level:2},{value:"Protocol Descriptions",id:"protocol-descriptions",level:3},{value:"DCUtR (Direct Connection Upgrade through Relay)",id:"dcutr-direct-connection-upgrade-through-relay",level:4},{value:"Gossipsub",id:"gossipsub",level:4},{value:"Identify",id:"identify",level:4},{value:"Kademlia (Kad)",id:"kademlia-kad",level:4},{value:"mDNS (Multicast DNS)",id:"mdns-multicast-dns",level:4},{value:"Ping",id:"ping",level:4},{value:"Relay",id:"relay",level:4},{value:"Rendezvous",id:"rendezvous",level:4},{value:"NAT Traversal Techniques",id:"nat-traversal-techniques",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["This document provides an overview of the networking component of Calimero\nNetwork, which is implemented using the ",(0,r.jsx)(n.code,{children:"libp2p"})," library. The network consists\nof two types of peers: client nodes and boot nodes, each serving distinct roles\nand utilizing specific protocols to facilitate peer-to-peer communication.\nClient node is the component which hosts and runs client applications,\ncommunicates and shares data between other client nodes. Boot node is the\ncomponent used for the initial discovery of the peers in the network."]}),"\n",(0,r.jsx)(n.h2,{id:"node-types",children:"Node Types"}),"\n",(0,r.jsx)(n.h3,{id:"client-node",children:"Client Node"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deployment:"})," Can run on any machine"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Protocols Utilized:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#dcutr-direct-connection-upgrade-through-relay",children:"dcutr"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#gossipsub",children:"gossipsub"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#identify",children:"identify"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#kademlia-kad",children:"kad"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#mdns-multicast-dns",children:"mdns"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ping",children:"ping"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#rendezvous",children:"rendezvous"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#relay",children:"relay"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Behavior:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration:"})," A client node can be configured to use zero boot nodes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"External Address:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Direct Public External Address:"})," Nodes with a direct public external\naddress do not require reservation at the relay server. These nodes\npublish their public external address to the Kademlia DHT, making them\ndirectly accessible to other peers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Relayed External Address:"})," Nodes that do not have a direct public\nexternal address, typically those behind a NAT or firewall, can obtain a\nrelayed external address by requesting a reservation at a relay server.\nOnce the reservation is accepted, the node publishes its new external\naddress to the rendezvous server. This allows other nodes to discover\nrelayed addresses of a peers in a certain rendezvous namespace. The relay\nserver can be used for the coordination of the hole punching between two\nnodes. If the hole punching attempt fails, the relay server will bridge\nthe traffic."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Discovery Protocols:"})," ",(0,r.jsx)(n.code,{children:"mDNS"}),", ",(0,r.jsx)(n.code,{children:"rendezvous"})," and ",(0,r.jsx)(n.code,{children:"Kademlia"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Connection Management:"})," A peer, identified via PeerId, can be discovered\neither via mDNS, rendezvous or Kademlia. mDNS discovery provides local\nnetwork addresses, rendezvous discovery provides relayed addresses, and\nKademlia discovery provides direct public external addresses. The node\nmaintains information about its connections to peers, including the\ndiscovery source. For a discovered external address, either relayed or\ndirect public, the node will only attempt to dial the peer if the same peer\nis not already connected via a discovered local address. This ensures that\nlocal connections have higher priority and that there are no unnecessary\nhole punching attempts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Message Relaying:"})," The node participates in the ",(0,r.jsx)(n.code,{children:"gossipsub"})," protocol,\nrelaying messages to all connected peers that support it. This enables\nefficient and scalable message dissemination across the network."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"boot-node",children:"Boot Node"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Deployment:"})," Must run on a publicly available machine with a static IP\naddress."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Protocols Utilized:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#identify",children:"identify"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#kademlia-kad",children:"kad"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#ping",children:"ping"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#rendezvous",children:"rendezvous"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#relay",children:"relay"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Behavior:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Characteristics:"})," Boot nodes are publicly available, long-running nodes\nthat provide stable entry points to the network."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Functions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bootstrap Node:"})," Acts as a well-known peer for the Kademlia protocol,\nfacilitating peer discovery and network join operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Circuit Relay Server:"})," Serves as a generic relay that provides the\nmedium that facilitates the hole punching, enabling peers to establish\ndirect connections even when they are behind NAT or firewalls. The relay\nserver is used for the coordination of the hole punching between two\nnodes, and briding traffic if the hole punching attempt fails."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rendezvous Server:"})," Facilitates peer discovery by allowing nodes to\nregister their presence and query for other peers within a shared\nrendezvous namespace. This enables dynamic and efficient peer-to-peer\nconnections without relying on a static list of peers."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"p2p-protocols-and-techniques",children:"P2P protocols and techniques"}),"\n",(0,r.jsx)(n.h3,{id:"protocol-descriptions",children:"Protocol Descriptions"}),"\n",(0,r.jsx)(n.h4,{id:"dcutr-direct-connection-upgrade-through-relay",children:"DCUtR (Direct Connection Upgrade through Relay)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DCUtR is used to upgrade connections through relay nodes, allowing peers to\nestablish direct connections even if they are behind NATs or firewalls. Peers\ninitially connect via a relay node, then use the DCUtR protocol to attempt a\ndirect connection, which reduces latency and bandwidth usage."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/blob/master/relay/DCUtR.md",children:"libp2p DCUtR Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"gossipsub",children:"Gossipsub"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Gossipsub is a scalable and efficient pub-sub protocol for message\ndissemination. It combines the best aspects of gossip protocols and\ntopic-based pub-sub systems. It minimizes bandwidth usage by only gossiping\nmetadata and ensuring that messages are only sent once per peer."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/pubsub/gossipsub",children:"libp2p Gossipsub Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"identify",children:"Identify"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Identify protocol allows peers to identify themselves and share their\ncapabilities with other peers. Peers exchange identification information such\nas supported protocols, listen addresses, and public keys. This helps peers\nmake informed decisions about connecting and interacting."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/blob/master/identify/README.md",children:"libp2p Identify Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"kademlia-kad",children:"Kademlia (Kad)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Kademlia is a distributed hash table (DHT) protocol used for peer discovery\nand data routing. It uses an XOR metric to ensure efficient and scalable peer\nlookup. Each node maintains a routing table with information about other\nnodes, facilitating quick lookups and robust network operation."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/kad-dht",children:"libp2p Kademlia DHT Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"mdns-multicast-dns",children:"mDNS (Multicast DNS)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"mDNS enables local network peer discovery without the need for a central\nserver. It uses multicast DNS to allow peers to find each other on the same\nlocal network by broadcasting their presence and listening for broadcasts from\nother peers."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/discovery/mdns",children:"libp2p mDNS Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"ping",children:"Ping"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Ping protocol measures the round-trip time (latency) between peers. It\nregularly pings connected peers and measures the time it takes for a response.\nThis helps in maintaining healthy connections and understanding network\nlatency."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/go-libp2p-ping",children:"libp2p Ping Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"relay",children:"Relay"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Relay protocol supports relay-based communication, allowing peers to\ncommunicate through intermediary nodes when direct connections are not\npossible. Nodes can use relay nodes to forward their traffic, which is\nespecially useful for nodes behind NATs or firewalls. The protocol includes\nmechanisms for reserving relay slots and managing relay connections."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/relay",children:"libp2p Relay Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"rendezvous",children:"Rendezvous"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Rendezvous protocol enables peers to discover each other by registering at\nand querying a shared rendezvous point. This is useful for dynamically finding\npeers without needing a central directory or pre-established list of peers.\nPeers register their presence at a rendezvous server and can also query the\nserver to find other peers."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/rendezvous",children:"libp2p Rendezvous Documentation"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"nat-traversal-techniques",children:"NAT Traversal Techniques"}),"\n",(0,r.jsxs)(n.p,{children:["One of the common techniques used for NAT traversal in P2P networks is ",(0,r.jsx)(n.strong,{children:"Hole\nPunching"}),". This technique allows two peers, each behind a NAT, to establish a\ndirect connection with each other. Here's a brief explanation:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Hole Punching:"})," This technique involves three steps:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Step 1 - Connection to Public Server:"}),' Both peers initially connect to a\npublic server (in this case, the relay server). This creates a NAT mapping\n(a "hole") for outgoing packets to the server.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Step 2 - Exchange of Address Information:"})," The server shares the public\naddress information of each peer with the other. This information includes\nthe IP address and port number that the NAT has assigned for the connection\nto the server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Step 3 - Direct Connection:"})," Each peer sends a packet to the other peer's\npublic address. Since a mapping for this address already exists in the NAT\n(from the connection to the server), the NAT forwards the packet to the\nappropriate internal address, and a direct connection is established."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This technique is particularly useful in P2P networks, as it allows peers to\ncommunicate directly, reducing the load on relay servers and improving network\nefficiency. However, it's worth noting that hole punching may not work with all\ntypes of NATs, and success can depend on the specific NAT implementation and\nconfiguration."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://blog.ipfs.tech/2022-01-20-libp2p-hole-punching/",children:"Hole punching in libp2p"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Reference:"}),"\n",(0,r.jsx)(n.a,{href:"https://tailscale.com/blog/how-nat-traversal-works",children:"How NAT traversal works"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},33763:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(30758);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);