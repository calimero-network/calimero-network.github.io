"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{334:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(6070),r=s(5710);const t={id:"network",title:"Network"},o=void 0,l={id:"learn/core-concepts/node/network",title:"Network",description:"Overview",source:"@site/docs/02-learn/03-core-concepts/02-node/05-network.mdx",sourceDirName:"02-learn/03-core-concepts/02-node",slug:"/learn/core-concepts/node/network",permalink:"/learn/core-concepts/node/network",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718191065e3,sidebarPosition:5,frontMatter:{id:"network",title:"Network"},sidebar:"tutorialSidebar",previous:{title:"Storage",permalink:"/learn/core-concepts/node/storage"},next:{title:"Admin Client API",permalink:"/learn/core-concepts/node/admin-client-api"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Node Types",id:"node-types",level:2},{value:"Client Node",id:"client-node",level:3},{value:"Boot Node",id:"boot-node",level:3},{value:"P2P protocols and techniques",id:"p2p-protocols-and-techniques",level:2},{value:"Protocol Descriptions",id:"protocol-descriptions",level:3},{value:"DCUtR (Direct Connection Upgrade through Relay)",id:"dcutr-direct-connection-upgrade-through-relay",level:4},{value:"Gossipsub",id:"gossipsub",level:4},{value:"Identify",id:"identify",level:4},{value:"Kademlia (Kad)",id:"kademlia-kad",level:4},{value:"mDNS (Multicast DNS)",id:"mdns-multicast-dns",level:4},{value:"Ping",id:"ping",level:4},{value:"Relay",id:"relay",level:4},{value:"Rendezvous",id:"rendezvous",level:4},{value:"NAT Traversal Techniques",id:"nat-traversal-techniques",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This document provides an overview of the networking component of Calimero Network, which is implemented using the ",(0,i.jsx)(n.code,{children:"libp2p"})," library. The network consists of two types of peers: client nodes and boot nodes, each serving distinct roles and utilizing specific protocols to facilitate peer-to-peer communication.\nClient node is the component which hosts and runs client applications, communicates and shares data between other client nodes.\nBoot node is the component used for the initial discovery of the peers in the network."]}),"\n",(0,i.jsx)(n.h2,{id:"node-types",children:"Node Types"}),"\n",(0,i.jsx)(n.h3,{id:"client-node",children:"Client Node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deployment:"})," Can run on any machine"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Protocols Utilized:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#dcutr-direct-connection-upgrade-through-relay",children:"dcutr"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#gossipsub",children:"gossipsub"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#identify",children:"identify"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#kademlia-kad",children:"kad"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mdns-multicast-dns",children:"mdns"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ping",children:"ping"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rendezvous",children:"rendezvous"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#relay",children:"relay"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Behavior:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Configuration:"})," A client node can be configured to use zero boot nodes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"External Address:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Direct Public External Address:"})," Nodes with a direct public external address do not require reservation at the relay server. These nodes publish their public external address to the Kademlia DHT, making them directly accessible to other peers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Relayed External Address:"})," Nodes that do not have a direct public external address, typically those behind a NAT or firewall, can obtain a relayed external address by requesting a reservation at a relay server. Once the reservation is accepted, the node publishes its new external address to the rendezvous server. This allows other nodes to discover relayed addresses of a peers in a certain rendezvous namespace. The relay server can be used for the coordination of the hole punching between two nodes. If the hole punching attempt fails, the relay server will bridge the traffic."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Discovery Protocols:"})," ",(0,i.jsx)(n.code,{children:"mDNS"}),", ",(0,i.jsx)(n.code,{children:"rendezvous"})," and ",(0,i.jsx)(n.code,{children:"Kademlia"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Connection Management:"})," A peer, identified via PeerId, can be discovered either via mDNS, rendezvous or Kademlia. mDNS discovery provides local network addresses, rendezvous discovery provides relayed addresses, and Kademlia discovery provides direct public external addresses. The node maintains information about its connections to peers, including the discovery source. For a discovered external address, either relayed or direct public, the node will only attempt to dial the peer if the same peer is not already connected via a discovered local address. This ensures that local connections have higher priority and that there are no unnecessary hole punching attempts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Message Relaying:"})," The node participates in the ",(0,i.jsx)(n.code,{children:"gossipsub"})," protocol, relaying messages to all connected peers that support it. This enables efficient and scalable message dissemination across the network."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"boot-node",children:"Boot Node"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deployment:"})," Must run on a publicly available machine with a static IP address."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Protocols Utilized:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#identify",children:"identify"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#kademlia-kad",children:"kad"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#ping",children:"ping"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#rendezvous",children:"rendezvous"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#relay",children:"relay"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Behavior:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Characteristics:"})," Boot nodes are publicly available, long-running nodes that provide stable entry points to the network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Functions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bootstrap Node:"})," Acts as a well-known peer for the Kademlia protocol, facilitating peer discovery and network join operations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Circuit Relay Server:"})," Serves as a generic relay that provides the medium that facilitates the hole punching, enabling peers to establish direct connections even when they are behind NAT or firewalls. The relay server is used for the coordination of the hole punching between two nodes, and briding traffic if the hole punching attempt fails."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Rendezvous Server:"})," Facilitates peer discovery by allowing nodes to register their presence and query for other peers within a shared rendezvous namespace. This enables dynamic and efficient peer-to-peer connections without relying on a static list of peers."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"p2p-protocols-and-techniques",children:"P2P protocols and techniques"}),"\n",(0,i.jsx)(n.h3,{id:"protocol-descriptions",children:"Protocol Descriptions"}),"\n",(0,i.jsx)(n.h4,{id:"dcutr-direct-connection-upgrade-through-relay",children:"DCUtR (Direct Connection Upgrade through Relay)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DCUtR is used to upgrade connections through relay nodes, allowing peers to establish direct connections even if they are behind NATs or firewalls. Peers initially connect via a relay node, then use the DCUtR protocol to attempt a direct connection, which reduces latency and bandwidth usage."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/blob/master/relay/DCUtR.md",children:"libp2p DCUtR Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"gossipsub",children:"Gossipsub"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Gossipsub is a scalable and efficient pub-sub protocol for message dissemination. It combines the best aspects of gossip protocols and topic-based pub-sub systems. It minimizes bandwidth usage by only gossiping metadata and ensuring that messages are only sent once per peer."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/pubsub/gossipsub",children:"libp2p Gossipsub Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"identify",children:"Identify"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Identify protocol allows peers to identify themselves and share their capabilities with other peers. Peers exchange identification information such as supported protocols, listen addresses, and public keys. This helps peers make informed decisions about connecting and interacting."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/blob/master/identify/README.md",children:"libp2p Identify Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"kademlia-kad",children:"Kademlia (Kad)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kademlia is a distributed hash table (DHT) protocol used for peer discovery and data routing. It uses an XOR metric to ensure efficient and scalable peer lookup. Each node maintains a routing table with information about other nodes, facilitating quick lookups and robust network operation."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/kad-dht",children:"libp2p Kademlia DHT Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"mdns-multicast-dns",children:"mDNS (Multicast DNS)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"mDNS enables local network peer discovery without the need for a central server. It uses multicast DNS to allow peers to find each other on the same local network by broadcasting their presence and listening for broadcasts from other peers."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/discovery/mdns",children:"libp2p mDNS Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ping",children:"Ping"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Ping protocol measures the round-trip time (latency) between peers. It regularly pings connected peers and measures the time it takes for a response. This helps in maintaining healthy connections and understanding network latency."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/go-libp2p-ping",children:"libp2p Ping Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"relay",children:"Relay"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Relay protocol supports relay-based communication, allowing peers to communicate through intermediary nodes when direct connections are not possible. Nodes can use relay nodes to forward their traffic, which is especially useful for nodes behind NATs or firewalls. The protocol includes mechanisms for reserving relay slots and managing relay connections."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/relay",children:"libp2p Relay Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"rendezvous",children:"Rendezvous"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Rendezvous protocol enables peers to discover each other by registering at and querying a shared rendezvous point. This is useful for dynamically finding peers without needing a central directory or pre-established list of peers. Peers register their presence at a rendezvous server and can also query the server to find other peers."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/libp2p/specs/tree/master/rendezvous",children:"libp2p Rendezvous Documentation"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nat-traversal-techniques",children:"NAT Traversal Techniques"}),"\n",(0,i.jsxs)(n.p,{children:["One of the common techniques used for NAT traversal in P2P networks is ",(0,i.jsx)(n.strong,{children:"Hole Punching"}),". This technique allows two peers, each behind a NAT, to establish a direct connection with each other. Here's a brief explanation:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hole Punching:"})," This technique involves three steps:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 1 - Connection to Public Server:"}),' Both peers initially connect to a public server (in this case, the relay server). This creates a NAT mapping (a "hole") for outgoing packets to the server.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 2 - Exchange of Address Information:"})," The server shares the public address information of each peer with the other. This information includes the IP address and port number that the NAT has assigned for the connection to the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Step 3 - Direct Connection:"})," Each peer sends a packet to the other peer's public address. Since a mapping for this address already exists in the NAT (from the connection to the server), the NAT forwards the packet to the appropriate internal address, and a direct connection is established."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This technique is particularly useful in P2P networks, as it allows peers to communicate directly, reducing the load on relay servers and improving network efficiency. However, it's worth noting that hole punching may not work with all types of NATs, and success can depend on the specific NAT implementation and configuration."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://blog.ipfs.tech/2022-01-20-libp2p-hole-punching/",children:"Hole punching in libp2p"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reference:"})," ",(0,i.jsx)(n.a,{href:"https://tailscale.com/blog/how-nat-traversal-works",children:"How NAT traversal works"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5710:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(758);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);