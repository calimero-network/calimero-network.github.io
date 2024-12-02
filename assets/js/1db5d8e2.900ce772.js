"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9650],{8082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(6070),a=n(5658);const s={id:"admin-dashboard",title:"Admin Dashboard"},l=void 0,o={id:"getting-started/admin-dashboard",title:"Admin Dashboard",description:"Node is gated with authentication. In order to interact with the node from any",source:"@site/docs/03-getting-started/02-admin-dashboard.mdx",sourceDirName:"03-getting-started",slug:"/getting-started/admin-dashboard",permalink:"/getting-started/admin-dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/03-getting-started/02-admin-dashboard.mdx",tags:[],version:"current",lastUpdatedAt:1733131696e3,sidebarPosition:2,frontMatter:{id:"admin-dashboard",title:"Admin Dashboard"},sidebar:"tutorialSidebar",previous:{title:"Initialize And Run Node",permalink:"/getting-started/initialize-and-run"},next:{title:"Create Context",permalink:"/getting-started/setup-your-first-context/create-context"}},c={},d=[{value:"Access Admin Dashboard",id:"access-admin-dashboard",level:3},{value:"Setup",id:"setup",level:3},{value:"Login",id:"login",level:3},{value:"Add new root key",id:"add-new-root-key",level:3},{value:"Applications",id:"applications",level:3},{value:"Publish new application",id:"publish-new-application",level:4},{value:"Install available application",id:"install-available-application",level:4},{value:"Context",id:"context",level:3},{value:"Start new context",id:"start-new-context",level:4},{value:"Export",id:"export",level:3}];function r(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Node is gated with authentication. In order to interact with the node from any\napp, you need to register a decentralized identity. We have build an Admin\nDashboard which is a web application designed to streamline the management of\nnode states within your system. Connected with the API provided by the Admin\nClient API, this user interface offers a user-friendly platform for overseeing\nand controlling various aspects of your node infrastructure."}),"\n",(0,i.jsx)(t.h3,{id:"access-admin-dashboard",children:"Access Admin Dashboard"}),"\n",(0,i.jsx)(t.p,{children:"The node operates as a server for the Admin Dashboard and can be accessed\ndirectly through a web browser."}),"\n",(0,i.jsxs)(t.p,{children:["The Admin Dashboard is locally available at\n",(0,i.jsx)(t.code,{children:"http://localhost:NODE_PORT/admin-dashboard/"})," but you can also use application\ndeployed on Github Pages at\n",(0,i.jsx)(t.code,{children:"https://calimero-network.github.io/admin-dashboard/"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"NOTE:"})})," Update ",(0,i.jsx)(t.code,{children:"NODE_PORT"})," in the placeholder ",(0,i.jsx)(t.code,{children:"http://localhost:NODE_PORT"}),"\nwith the ",(0,i.jsx)(t.code,{children:"--server-port"})," value defined during node setup in\n",(0,i.jsx)(t.a,{href:"/getting-started/initialize-and-run",children:"Getting-started"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"After the initial setup you will see the setup page where you need to enter node\nURL."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SetupPage",src:n(4861).A+"",width:"1249",height:"795"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": Error occurs if the entered URL is not valid node url or the node is\nnot running"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SetupPageError",src:n(4391).A+"",width:"1322",height:"799"})}),"\n",(0,i.jsx)(t.h3,{id:"login",children:"Login"}),"\n",(0,i.jsx)(t.p,{children:'After button "Set node url" is clicked you will be redirected to select wallet\npage.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"WalletSelector",src:n(3514).A+"",width:"1247",height:"796"})}),"\n",(0,i.jsx)(t.p,{children:"In this example we will be using Metamask with Ethereum Mainnet."}),"\n",(0,i.jsx)(t.p,{children:'Press "Connect wallet" button to invoke Metamask extension which is needed to\ncontinue login process.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ConnectWallet",src:n(9731).A+"",width:"1229",height:"764"})}),"\n",(0,i.jsx)(t.p,{children:"When wallet is connected you will be shown the next screen with displayed\nconnected wallet address."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ConnectedAccount",src:n(2224).A+"",width:"1249",height:"795"})}),"\n",(0,i.jsx)(t.p,{children:'To finish login process press "Sign authentication transaction" which will\nenvoke Metamask to sign transaction.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SignLoginTxn",src:n(582).A+"",width:"358",height:"619"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),': Displayed "BNB 2" text is just a wallet name and this is configued\nin Metamask. You might have default wallet name "Account" or "Account 1"']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"On the first login, your selected wallet will be used as a root key to use\nfurther functionalities."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": If you logout and try to login with different wallet that is not the\nroot key you will get the next error"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SinginError",src:n(2119).A+"",width:"449",height:"566"})}),"\n",(0,i.jsx)(t.p,{children:"After this request is confimed you will be redirected to the Identity page of\nthe Admin Dashboard where you can see your root key."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"IdentityPage",src:n(9944).A+"",width:"1249",height:"796"})}),"\n",(0,i.jsx)(t.h3,{id:"add-new-root-key",children:"Add new root key"}),"\n",(0,i.jsx)(t.p,{children:'To add new root key press the "Add new root key" button and you will go through\nthe same process.'}),"\n",(0,i.jsx)(t.p,{children:"In this example we will be using Metamask again but this time we will use BNB\nChain network with different wallet."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"AddNewRootKey",src:n(4767).A+"",width:"1247",height:"797"})}),"\n",(0,i.jsx)(t.p,{children:"Again, sign the transaction."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ConfirmNewRootKey",src:n(9968).A+"",width:"363",height:"619"})}),"\n",(0,i.jsx)(t.p,{children:"You will be redirected back the Identity page and in the list you can see that\nthe new root key with BNB network was added."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"NewRootkeyList",src:n(9245).A+"",width:"1252",height:"799"})}),"\n",(0,i.jsx)(t.h3,{id:"applications",children:"Applications"}),"\n",(0,i.jsx)(t.p,{children:'Navigate to "Applications" tab to view table of available, owned or installed\napplications.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Applications",src:n(8506).A+"",width:"1248",height:"796"})}),"\n",(0,i.jsx)(t.h4,{id:"publish-new-application",children:"Publish new application"}),"\n",(0,i.jsx)(t.p,{children:'To publish new application click on the "Publish new application" button and you\nwill be redirected to next page.'}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": For this step you will need a NEAR blockchain account because the\nPackage Manager application is a smart contract deployed on the NEAR\nblockchain."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This is needed because from your account you interact with the smart contract\ndeployed on the NEAR blockchain"}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["You can create NEAR blockchain account with\n",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com/",children:"MyNEARWallet"})]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Package Manager contains metadata of applications used by the node"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Metadata for each application contains:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Package name ",(0,i.jsx)(t.code,{children:"String"})]}),"\n",(0,i.jsxs)(t.li,{children:["Description ",(0,i.jsx)(t.code,{children:"String"}),' - optional and can be set to "-"']}),"\n",(0,i.jsxs)(t.li,{children:["Repository URL ",(0,i.jsx)(t.code,{children:"String"}),' - optional and can be set to "-"']}),"\n",(0,i.jsxs)(t.li,{children:["Path ",(0,i.jsx)(t.code,{children:"String"})," - IPFS URL to the application binary, filled automatically when\napplication wasm is uploaded"]}),"\n",(0,i.jsxs)(t.li,{children:["Version ",(0,i.jsx)(t.code,{children:"String"}),' - has "X.X.X" format (e.g. 0.0.1 or 1.0.0)']}),"\n",(0,i.jsxs)(t.li,{children:["Noted ",(0,i.jsx)(t.code,{children:"String"}),' - optional and can be set to "-"']}),"\n",(0,i.jsxs)(t.li,{children:["Hash ",(0,i.jsx)(t.code,{children:"String"})," - Hash value of application wasm, filled automatically when\napplication wasm is uploaded"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"PublishApp",src:n(8430).A+"",width:"1244",height:"798"})}),"\n",(0,i.jsxs)(t.p,{children:['After you fill in the Package name, Description, Repository URL click on the\n"Upload wasm" button and select your application ',(0,i.jsx)(t.code,{children:".wasm"})," file (e.g. only-peers\napplication wasm)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SelectWasmFile",src:n(2401).A+"",width:"810",height:"451"})}),"\n",(0,i.jsx)(t.p,{children:"After file was uploaded to IPFS, Path and Hash field will be filled\nautomatically and only thing left is to fill in version and notes."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"UploadedWasm",src:n(400).A+"",width:"898",height:"555"})}),"\n",(0,i.jsx)(t.p,{children:'After you click the "Publish" button, application will be published in the\nPackage Manager contract and it will be available in the available applications\nlist.'}),"\n",(0,i.jsx)(t.p,{children:"You will get a status popup message."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ApplicationPublished",src:n(7927).A+"",width:"497",height:"171"})}),"\n",(0,i.jsx)(t.h4,{id:"install-available-application",children:"Install available application"}),"\n",(0,i.jsx)(t.p,{children:'To install one of the available application from the Package Manager click on\nthe "install new application" button.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Applications",src:n(8506).A+"",width:"1248",height:"796"})}),"\n",(0,i.jsx)(t.p,{children:"You will be redirected to install page where you can browse available\napplications or upload a new one."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"InstallApplication",src:n(3185).A+"",width:"1248",height:"797"})}),"\n",(0,i.jsx)(t.p,{children:'On "Browse" button click you will get a available application list where you can\nselect application you want to install.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"BrowseApplications",src:n(9747).A+"",width:"1145",height:"273"})}),"\n",(0,i.jsx)(t.p,{children:'On selection the application Metadata will be displayed and you can press\n"install application" button to install the application.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"BrowseApplications",src:n(466).A+"",width:"1247",height:"800"})}),"\n",(0,i.jsx)(t.p,{children:"On sucessfull installation you will get status popup."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ApplicationInstalled",src:n(2772).A+"",width:"535",height:"200"})}),"\n",(0,i.jsx)(t.h3,{id:"context",children:"Context"}),"\n",(0,i.jsx)(t.p,{children:"Preview context which you have already joined or invited. You can also create a\nnew context."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ContextList",src:n(6579).A+"",width:"1246",height:"796"})}),"\n",(0,i.jsx)(t.h4,{id:"start-new-context",children:"Start new context"}),"\n",(0,i.jsx)(t.p,{children:'To start new context press the "Start new context" button on previous page.'}),"\n",(0,i.jsx)(t.p,{children:"You can select application with which you want to create a new context or you\ncan upload a new application."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"StartContextSelect",src:n(8047).A+"",width:"1320",height:"796"})}),"\n",(0,i.jsx)(t.p,{children:"If your application requires initialization parameters, you can select the\n'Initialize application state' option during startup."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": To understand this lets take two examples."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Consider a JavaScript class MyClass. In some cases, you can create an\ninstance using ",(0,i.jsx)(t.code,{children:"new MyClass()"})," if there are no initialization parameters\nrequired."]}),"\n",(0,i.jsxs)(t.li,{children:["However, if your class requires specific parameters for initialization, you\nneed to pass them like this: ",(0,i.jsx)(t.code,{children:"new MyClass({ application_name: name })"}),".\nThis is similar to your WASM application's requirement for initialization\nparameters during its startup process."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"StartContextSelected",src:n(4624).A+"",width:"1247",height:"795"})}),"\n",(0,i.jsx)(t.p,{children:'On button "Start" click the new context will be created and you will get status\npopup.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Context installed",src:n(8113).A+"",width:"529",height:"193"})}),"\n",(0,i.jsx)(t.p,{children:"You can now see created context in the context list."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ContextListInstalled",src:n(5776).A+"",width:"1247",height:"799"})}),"\n",(0,i.jsx)(t.h3,{id:"export",children:"Export"}),"\n",(0,i.jsx)(t.p,{children:"Allows you to export you identity on current device and import it on new device."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ContextList",src:n(7510).A+"",width:"1248",height:"798"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},9245:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/10new-root-key-added-24f3a7b3c573e4a599ddc8cd970cf30f.png"},8506:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/12applications-21abaddc8de1479b7716aa22b142bf0c.png"},400:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/13filled-in-fields-ec772e882d2ce524f7e65ae5edf95bdd.png"},7927:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/13published-application-1ee6b729e2c7255e5965e794b1c06e62.png"},2401:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/13select-wasm-c1584e741991c4251c473a1fdf66e327.png"},8430:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/13upload-new-app-58a2ecd6e94bd3e666f7586abab475e1.png"},9747:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/14browse-applications-9e98f5d045104d38a97f101006256b99.png"},3185:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/14install-application-c094be7b6bc7f90fcd68e5de3463f435.png"},466:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/15install-application-0470cad323295a3ab65167fa2017b53a.png"},2772:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/16application-installed-71d5b558454fb9816080c3b90e99bb05.png"},6579:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/18context-list-a18cb6d8b9ebd28d97c2abceff78154e.png"},8047:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/19start-context-select-8ec58995af1ea93efff0d362d7738d21.png"},4861:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/1setup-node-url-34001124f987a1c89da445494deebd5c.png"},4624:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/20start-context-selected-5cdfc911bf581c37e518bc343313afb5.png"},8113:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/21context-installed-c9464712c8452e13cf9c86df947f8f51.png"},5776:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/22context-list-d7aa2127df8a5a9735c4d3bcd4f76fd1.png"},7510:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/23export-identity-083848da6a7637e79b071b96b44ffd94.png"},3514:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2select-wallet-96c27afc6607a800a4f698f7459375ac.png"},9731:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/3connect-wallet-9585c0e9ce96b9b33dc28e8a5b0b3d30.png"},2224:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/4logged-in-acc-c3f51404ab55814bf7844bd973e1d5e7.png"},582:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/5metamask-sign-msg-login-e744d32c007f9b1a9d10931c8401a2cd.png"},9944:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/6identity-29a8f560fe919c7ee606a2beed7e9eaf.png"},2119:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/7no-root-key-login-e16c042f69f6d6036b24116265658a25.png"},4767:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/8add-new-root-key-e37682ad9c32dfcfdb603e5727473e01.png"},9968:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/9add-root-key-txn-a4c5c13a38da00dd3f75d7a1ba68e499.png"},4391:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/setup-node-url-error-2509e61875b603d7860680da8a3453fd.png"},5658:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(758);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);