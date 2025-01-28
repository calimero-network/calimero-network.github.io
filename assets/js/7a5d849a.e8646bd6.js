"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[930],{543:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"tutorials/build-app","title":"Key-Value Store tutorial","description":"Building a Key-Value Store with Calimero SDK","source":"@site/docs/06-tutorials/04-build-app.mdx","sourceDirName":"06-tutorials","slug":"/tutorials/build-app","permalink":"/next/tutorials/build-app","draft":false,"unlisted":false,"editUrl":"https://github.com/calimero-network/calimero-network.github.io/edit/master/docs/06-tutorials/04-build-app.mdx","tags":[],"version":"current","lastUpdatedAt":1738106777000,"sidebarPosition":4,"frontMatter":{"id":"build-app","title":"Key-Value Store tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"Invitations and Joinings","permalink":"/next/tutorials/invitations-and-joinings"},"next":{"title":"Publish App","permalink":"/next/tutorials/publish-app"}}');var r=i(6070),s=i(5248);const o={id:"build-app",title:"Key-Value Store tutorial"},a=void 0,l={},c=[{value:"Building a Key-Value Store with Calimero SDK",id:"building-a-key-value-store-with-calimero-sdk",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setting Up Your Project",id:"setting-up-your-project",level:3},{value:"Writing Your Application",id:"writing-your-application",level:3},{value:"Building Your Application",id:"building-your-application",level:3},{value:"Deploying Your Application",id:"deploying-your-application",level:3},{value:"Writing Efficient Code with Calimero SDK",id:"writing-efficient-code-with-calimero-sdk",level:3},{value:"Handling Errors with Calimero SDK",id:"handling-errors-with-calimero-sdk",level:3},{value:"Error Report Comparison",id:"error-report-comparison",level:4},{value:"Emitting Events with Calimero SDK",id:"emitting-events-with-calimero-sdk",level:3},{value:"Ensuring Atomicity and Event Reliability in Calimero Applications",id:"ensuring-atomicity-and-event-reliability-in-calimero-applications",level:3},{value:"Atomic State Changes",id:"atomic-state-changes",level:4},{value:"Reliable Event Emission",id:"reliable-event-emission",level:4},{value:"Local-First Efficiency",id:"local-first-efficiency",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"building-a-key-value-store-with-calimero-sdk",children:"Building a Key-Value Store with Calimero SDK"}),"\n",(0,r.jsx)(n.p,{children:"The Calimero SDK for Rust empowers developers to build applications that compile\nto WebAssembly (Wasm) and run securely within the Calimero virtual machine. This\nguide will walk you through creating a complete key-value store application and\npreparing it for deployment."}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Before you begin, ensure you have Rust installed on your system. If not, follow\nthe official Rust installation guide for your platform:\n",(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust Installation Guide"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["You should ensure you have the ",(0,r.jsx)(n.code,{children:"wasm32-unknown-unknown"})," target installed. Run\nthe following command in your terminal to install the target:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"rustup target add wasm32-unknown-unknown\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-your-project",children:"Setting Up Your Project"}),"\n",(0,r.jsx)(n.p,{children:"To create a new project, initialize a Rust library project using Cargo. Run the\nfollowing command in your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cargo new --lib kv-store\n"})}),"\n",(0,r.jsx)(n.p,{children:"You should have a tree that looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ tree kv-store\nkv-store\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n2 directories, 2 files\n"})}),"\n",(0,r.jsxs)(n.p,{children:["At this point, we can ",(0,r.jsx)(n.code,{children:"cd"})," into the ",(0,r.jsx)(n.code,{children:"kv-store"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"cd kv-store\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Next, you need to specify the crate-type as ",(0,r.jsx)(n.code,{children:"cdylib"})," in your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file\nto generate a dynamic library that can be compiled to Wasm:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="File: Cargo.toml"',children:'[lib]\ncrate-type = ["cdylib"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can now configure your project to use the Calimero SDK by adding it as a\ndependency in your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="File: Cargo.toml"',children:'[dependencies]\ncalimero-sdk = { git = "https://github.com/calimero-network/core" }\ncalimero-storage = { git = "https://github.com/calimero-network/core" }\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, we need to specify a custom build profile for the most compact Wasm\noutput:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="File: Cargo.toml"',children:'[profile.app-release]\ninherits = "release"\ncodegen-units = 1\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n'})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)("summary",{children:[" Your ",(0,r.jsx)(n.code,{children:"Cargo.toml"})," file should now look like this "]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",metastring:'title="File: Cargo.toml" showLineNumbers',children:'[package]\nname = "kv-store"\nversion = "0.1.0"\nedition = "2021"\n\n# highlight-start\n[lib]\ncrate-type = ["cdylib"]\n# highlight-end\n\n# highlight-start\n[dependencies]\ncalimero-sdk = { git = "https://github.com/calimero-network/core" }\ncalimero-storage = { git = "https://github.com/calimero-network/core" }\n# highlight-end\n\n# highlight-start\n[profile.app-release]\ninherits = "release"\ncodegen-units = 1\nopt-level = "z"\nlto = true\ndebug = false\npanic = "abort"\noverflow-checks = true\n# highlight-end\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:["And finally, create a ",(0,r.jsx)(n.code,{children:"build.sh"})," script to compile your application into Wasm\nformat, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="File: build.sh" showLineNumbers',children:'#!/bin/bash\nset -e\n\ncd "$(dirname $0)"\n\nTARGET="${CARGO_TARGET_DIR:-../../target}"\n\nrustup target add wasm32-unknown-unknown\n\ncargo build --target wasm32-unknown-unknown --profile app-release\n\nmkdir -p res\n\ncp $TARGET/wasm32-unknown-unknown/app-release/kv_store.wasm ./res/\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can optionally choose to install and use\n",(0,r.jsx)(n.a,{href:"https://github.com/WebAssembly/binaryen",children:(0,r.jsx)(n.code,{children:"wasm-opt"})}),", for an additional\noptimization step in the build script. This step is not required but can help\nreduce the size of the generated Wasm file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="File: build.sh"',children:"if command -v wasm-opt > /dev/null; then\n  wasm-opt -Oz ./res/kv_store.wasm -o ./res/kv_store.wasm\nfi\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Don't forget to make the ",(0,r.jsx)(n.code,{children:"build.sh"})," script executable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"chmod +x build.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this point, your project structure should look like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ tree\n.\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n2 directories, 3 files\n"})}),"\n",(0,r.jsx)(n.h3,{id:"writing-your-application",children:"Writing Your Application"}),"\n",(0,r.jsxs)(n.p,{children:["Now, let's create a simple key-value store application using the Calimero SDK.\nStart by defining your application logic in ",(0,r.jsx)(n.code,{children:"lib.rs"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs" showLineNumbers',children:'use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};\nuse calimero_sdk::app;\n\n#[app::state]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\n#[borsh(crate = "calimero_sdk::borsh")]\nstruct KvStore {}\n\n#[app::logic]\nimpl KvStore {\n    #[app::init]\n    pub fn init() -> KvStore {\n        KvStore {}\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"KvStore"})," struct represents the state of your application, which will be\nborsh-encoded in the app-scoped state partition on the node's storage. The\n",(0,r.jsx)(n.code,{children:"#[app::state]"})," attribute macro marks the struct as the application state,\npermitting its use by Calimero SDK."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"#[app::logic]"})," attribute macro marks the implementation block as the\napplication logic, allowing you to define the methods that interact with the\napplication state. An initializer method (named ",(0,r.jsx)(n.code,{children:"init"}),") is denoted by the\n",(0,r.jsx)(n.code,{children:"#[app::init]"})," attribute macro, which is called when the application is executed\nagainst a freshly created context."]}),"\n",(0,r.jsxs)(n.p,{children:["Consider a method like ",(0,r.jsx)(n.code,{children:"get"})," that retrieves a value from the key-value store:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn get(&self, key: &str) -> Result<Option<String>, Error> {\n    // Snip...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The inputs must be deserializable from the transaction data, and the output must\nbe serializable to the response data. The ",(0,r.jsx)(n.code,{children:"Option"})," type is used to represent the\npossibility of the key not being present in the store. The ",(0,r.jsx)(n.code,{children:"Error"})," type is used\nto represent the possible error conditions that may occur during the execution\nof the method."]}),"\n",(0,r.jsx)(n.p,{children:"And now, here's a complete example of a key-value store application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs" showLineNumbers',children:'use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};\nuse calimero_sdk::types::Error;\nuse calimero_sdk::{app, env};\nuse calimero_storage::collections::UnorderedMap;\n\n#[app::state]\n#[derive(Default, BorshSerialize, BorshDeserialize)]\n#[borsh(crate = "calimero_sdk::borsh")]\nstruct KvStore {\n    entries: UnorderedMap<String, String>,\n}\n\n#[app::logic]\nimpl KvStore {\n    #[app::init]\n    pub fn init() -> KvStore {\n        // highlight-start\n        KvStore {\n            items: UnorderedMap::new(),\n        }\n        // highlight-end\n    }\n\n    // highlight-start\n    pub fn set(&mut self, key: String, value: String) -> Result<(), Error> {\n        env::log(&format!("Setting key: {:?} to value: {:?}", key, value));\n\n        self.entries.insert(key, value)?;\n\n        Ok(())\n    }\n    // highlight-end\n\n    // highlight-start\n    pub fn entries(&self) -> Result<BTreeMap<String, String>, Error> {\n        env::log("Getting all entries");\n\n        Ok(self.items.entries()?.collect())\n    }\n    // highlight-end\n\n    // highlight-start\n    pub fn get(&self, key: &str) -> Result<Option<String>, Error> {\n        env::log(&format!("Getting key: {:?}", key));\n\n        self.items.get(key).map_err(Into::into)\n    }\n    // highlight-end\n\n    // highlight-start\n    pub fn remove(&mut self, key: &str) -> Result<Option<String>, Error> {\n        env::log(&format!("Removing key: {:?}", key));\n\n        self.items.remove(key).map_err(Into::into)\n    }\n    // highlight-end\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"building-your-application",children:"Building Your Application"}),"\n",(0,r.jsxs)(n.p,{children:["Once your application logic is defined, run the ",(0,r.jsx)(n.code,{children:"./build.sh"})," script to compile\nyour application into Wasm format. This script will generate ",(0,r.jsx)(n.code,{children:"kv_store.wasm"})," in\nthe ",(0,r.jsx)(n.code,{children:"res"})," folder of your application."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="Terminal"',children:"$ ./build.sh\ninfo: component 'rust-std' for target 'wasm32-unknown-unknown' is up to date\n   # Snip...\n   Compiling calimero-sdk v0.1.0\n   Compiling calimero-storage v0.1.0\n   Compiling kv-store v0.1.0 (/apps/kv-store)\n    Finished `app-release` profile [optimized] target(s) in 1.20s\n\n$ tree\n.\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u251c\u2500\u2500 res\n\u2502\xa0\xa0 \u2514\u2500\u2500 kv_store.wasm\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 lib.rs\n\n3 directories, 4 files\n"})}),"\n",(0,r.jsx)(n.h3,{id:"deploying-your-application",children:"Deploying Your Application"}),"\n",(0,r.jsxs)(n.p,{children:["After successfully building your application, you can upload the compiled\n",(0,r.jsx)(n.code,{children:"kv_store.wasm"})," to the registry for use by a live Calimero node."]}),"\n",(0,r.jsx)(n.h3,{id:"writing-efficient-code-with-calimero-sdk",children:"Writing Efficient Code with Calimero SDK"}),"\n",(0,r.jsx)(n.p,{children:"In the following code snippet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:"pub fn get(&self, key: &str) -> Result<Option<String>, Error> {\n    // Snip...\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"you'll notice that we prioritize using references instead of owned values. This\napproach optimizes performance and memory usage by minimizing unnecessary data\ncopying."}),"\n",(0,r.jsxs)(n.p,{children:["For input parameters, such as ",(0,r.jsx)(n.code,{children:"&str"})," and ",(0,r.jsx)(n.code,{children:"&[u8]"}),", utilizing references allows\nyou to avoid unnecessary copying of data. Similarly, for output values, you can\nreturn references to data that live as long as ",(0,r.jsx)(n.code,{children:"&self"})," or any of the input\nparameters. By doing so, you reduce memory overhead and improve the overall\nefficiency of your application."]}),"\n",(0,r.jsx)(n.h3,{id:"handling-errors-with-calimero-sdk",children:"Handling Errors with Calimero SDK"}),"\n",(0,r.jsxs)(n.p,{children:["When designing methods that may potentially fail, it's recommended to return a\n",(0,r.jsx)(n.code,{children:"Result"})," type with an error variant representing the possible failure cases.\nThis enables you to handle errors more effectively and communicate error\nconditions to users of your application. This is recommended over using the\n",(0,r.jsx)(n.code,{children:"Error"})," type exported from ",(0,r.jsx)(n.code,{children:"calimero_sdk"})," and over panicking. Both of which only\nreturn a string message."]}),"\n",(0,r.jsx)(n.h4,{id:"error-report-comparison",children:"Error Report Comparison"}),"\n",(0,r.jsx)(n.p,{children:"Let's take the following cases (all of which fail when the key does not exist);"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"calimero_sdk::types::Error"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["This is provided for convenience, since most errors already don't implement\n",(0,r.jsx)(n.code,{children:"Serialize"}),", and so they cannot be immediately returned. This first converts\nthe error to a string and then returns it. Which then JSON-encodes the string\nrepresentation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:'use calimero_sdk::types::Error;\n\npub fn get(&self, key: &str) -> Result<String, Error> {\n    self.items.get(key)?.ok_or_else(|| Error::msg("key not found"))\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This failure will result in this outcome:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"ExecutionError([ 107, 75, 101, 121, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 34 ])\n"})}),"\n",(0,r.jsx)(n.p,{children:"which can be decoded to"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"key not found"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.code,{children:"Error"})," can be constructed with ",(0,r.jsx)(n.code,{children:"?"})," so long as the source error\nimplements ",(0,r.jsx)(n.code,{children:"std::error::Error"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Behaviourally similar to\n",(0,r.jsx)(n.a,{href:"https://docs.rs/anyhow/latest/anyhow/struct.Error.html",children:(0,r.jsx)(n.code,{children:"anyhow::Error"})})," or\n",(0,r.jsx)(n.a,{href:"https://docs.rs/eyre/latest/eyre/struct.Report.html",children:(0,r.jsx)(n.code,{children:"eyre::Report"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using a custom error type (recommended):"}),"\n",(0,r.jsx)(n.p,{children:"For structured error handling, we recommend defining a custom error type that\nencodes all the possible error variants for that method. This allows you to\nprovide more context about the error condition and handle different error\nscenarios more effectively. As opposed to string parsing."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:'use calimero_sdk::serde::Serialize;\n\n#[derive(Debug, Serialize)]\n#[serde(crate = "calimero_sdk::serde")]\n#[serde(tag = "kind", content = "data")]\npub enum Error<\'a> {\n    NotFound(&\'a str),\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:"pub fn get<'a>(&self, key: &'a str) -> Result<String, Error<'a>> {\n    // Snip...\n    Err(Error::NotFound(key))\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This failure will result in this outcome:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"ExecutionError([ 123, 34, 107, 105, 110, 100, 34, 58, 34, 78, 111, 116, 70, 111, 117, 110, 100, 34, 44, 34, 100, 97, 116, 97, 34, 58, 34, 116, 104, 105, 110, 103, 34, 125 ])\n"})}),"\n",(0,r.jsx)(n.p,{children:"which can be decoded to"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "kind": "NotFound", "data": "thing" }\n'})}),"\n",(0,r.jsx)(n.p,{children:"As will most likely be the case, you may need to work with storage errors\nwhile you've defined a custom error type."}),"\n",(0,r.jsxs)(n.p,{children:["In this case, you can pull in\n",(0,r.jsx)(n.a,{href:"https://docs.rs/thiserror/latest/thiserror/",children:(0,r.jsx)(n.code,{children:"thiserror"})})," to help."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:'use thiserror::Error;\n\n#[derive(Debug, Error, Serialize)]\n#[serde(crate = "calimero_sdk::serde")]\n#[serde(tag = "kind", content = "data")]\npub enum Error<\'a> {\n    #[error("key not found: {0}")]\n    NotFound(&\'a str),\n    #[error("store error: {0}")]\n    StoreError(#[from] StoreError),\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:"pub fn get<'a>(&self, key: &'a str) -> Result<String, Error<'a>> {\n    // Snip...\n    self.items.get(key)?.ok_or_else(|| Error::NotFound(key))\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"An example store error would then be represented as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"ExecutionError(\n    [\n        123, 34, 107, 105, 110, 100, 34, 58, 34, 83, 116, 111, 114, 101, 69, 114, 114, 111, 114, 34, 44, 34, 100, 97, 116, 97, 34, 58,\n        34, 73, 110, 100, 101, 120, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 32, 102, 111, 114, 32, 73, 68, 58, 32, 57, 51, 49, 53,\n        97, 98, 101, 49, 101, 97, 101, 48, 102, 102, 53, 98, 48, 48, 52, 53, 51, 97, 100, 97, 102, 99, 99, 53, 102, 101, 102, 50, 49, 100,\n        55, 52, 49, 51, 57, 55, 101, 50, 49, 99, 53, 49, 53, 51, 55, 99, 51, 54, 52, 52, 50, 52, 50, 48, 56, 55, 52, 57, 99, 57, 34, 125,\n    ],\n)\n"})}),"\n",(0,r.jsx)(n.p,{children:"which can be decoded to"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "kind": "StoreError",\n  "data": "Index not found for ID: 9315abe1eae0ff5b00453adafcc5fef21d741397e21c51537c364424208749c9"\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Panic (ideally, development only)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:'pub fn get(&self, key: &str) -> String {\n    self.items.get(key).expect("store error").expect("key not found")\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"A non-existent key would then lead to this outcome:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'HostError(\n    Panic {\n        context: Guest,\n        message: "key not found",\n        location: At {\n            file: "apps/kv-store/src/lib.rs",\n            line: 98,\n            column: 14,\n        },\n    },\n)\n'})}),"\n",(0,r.jsx)(n.p,{children:"And a storage error, would produce this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'HostError(\n    Panic {\n        context: Guest,\n        message: "store error: StorageError(IndexNotFound(Id { bytes: [123, 240, 135, 21, 77, 143, 81, 169, 15, 202, 99, 210, 167, 165, 188, 156, 87, 146, 7, 211, 100, 92, 169, 189, 124, 115, 200, 242, 240, 73, 68, 123] }))",\n        location: At {\n            file: "apps/kv-store/src/lib.rs",\n            line: 98,\n            column: 14,\n        },\n    },\n)\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By following the second (recommended) approach, you can handle errors more\ngracefully and provide meaningful feedback to users of your Calimero\napplication."}),"\n",(0,r.jsx)(n.p,{children:"And the first approach, if you want a hassle-free method of dealing with errors."}),"\n",(0,r.jsx)(n.h3,{id:"emitting-events-with-calimero-sdk",children:"Emitting Events with Calimero SDK"}),"\n",(0,r.jsxs)(n.p,{children:["To facilitate real-time monitoring of state transitions within your Calimero\napplication, you can emit events using the ",(0,r.jsx)(n.code,{children:"app::emit!"})," macro provided by the\nCalimero SDK. Event emission is particularly useful for handling live state\ntransitions triggered by other actors, allowing subscribed clients to receive\nimmediate updates about relevant actions."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's focus on emitting events for mutating calls, specifically ",(0,r.jsx)(n.code,{children:"set"})," and\n",(0,r.jsx)(n.code,{children:"remove"})," methods:"]}),"\n",(0,r.jsxs)(n.p,{children:["First, define your custom events using the ",(0,r.jsx)(n.code,{children:"#[app::event]"})," proc macro. In this\nexample, we'll define events for setting a new key-value pair (",(0,r.jsx)(n.code,{children:"Inserted"}),"),\nupdating an existing value (",(0,r.jsx)(n.code,{children:"Updated"}),"), and removing a key-value pair\n(",(0,r.jsx)(n.code,{children:"Removed"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:"use calimero_sdk::app;\n\n#[app::event]\npub enum Event<'a> {\n    Inserted { key: &'a str, value: &'a str },\n    Updated { key: &'a str, value: &'a str },\n    Removed { key: &'a str },\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Each event variant can carry additional data to provide context about the event."}),"\n",(0,r.jsx)(n.p,{children:"Now, you need to associate the event with the application logic by annotating\nthe application state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:"// highlight-start\n#[app::state(emits = for<'a> Event<'a>)]\n// highlight-end\n#[derive(Default, BorshSerialize, BorshDeserialize)]\n#[borsh(crate = \"calimero_sdk::borsh\")]\nstruct KvStore {\n    // Snip...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And finally, within your application logic methods, emit events using the\n",(0,r.jsx)(n.code,{children:"app::emit!"})," macro:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:'title="File: src/lib.rs"',children:'pub fn set(&mut self, key: String, value: String) -> Result<(), Error> {\n    if self.items.contains(&key)? {\n        app::emit!(Event::Updated {\n            key: &key,\n            value: &value,\n        });\n    } else {\n        app::emit!(Event::Inserted {\n            key: &key,\n            value: &value,\n        });\n    }\n\n    self.items.insert(key, value)?;\n\n    Ok(())\n}\n\npub fn remove(&mut self, key: &str) -> Result<String, Error> {\n    app::emit!(Event::Removed { key });\n\n    self.entries.remove(key)?.ok_or_else(|| Error::msg("key not found"))\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In each method, we emit the corresponding event with relevant data. This allows\nexternal observers to react to these events and take appropriate actions."}),"\n",(0,r.jsx)(n.p,{children:"By emitting events, you can ensure connected clients receive real-time updates\nabout state transitions within your Calimero application, enabling them to\nrespond to changes as they occur."}),"\n",(0,r.jsx)(n.h3,{id:"ensuring-atomicity-and-event-reliability-in-calimero-applications",children:"Ensuring Atomicity and Event Reliability in Calimero Applications"}),"\n",(0,r.jsx)(n.p,{children:"In Calimero applications, ensuring atomicity of state changes and reliability of\nevent emission is crucial for maintaining data consistency and facilitating\nreliable communication between actors. Here's how atomicity and event\nreliability are enforced:"}),"\n",(0,r.jsx)(n.h4,{id:"atomic-state-changes",children:"Atomic State Changes"}),"\n",(0,r.jsxs)(n.p,{children:["When a method call fails, whether due to panics or returning an ",(0,r.jsx)(n.code,{children:"Err"}),", all state\nchanges made up to that point are discarded. This ensures that if an operation\ncannot be completed successfully, the application's state remains consistent and\nunaffected by partial updates. By enforcing atomicity, Calimero promotes data\nintegrity and prevents inconsistencies that may arise from incomplete\ntransactions."]}),"\n",(0,r.jsx)(n.h4,{id:"reliable-event-emission",children:"Reliable Event Emission"}),"\n",(0,r.jsx)(n.p,{children:"Similarly, event emission in Calimero applications is tied to the successful\nexecution of transactions. Events are only relayed when a transaction has been\nsuccessfully executed, ensuring that external observers receive updates about\nstate changes reliably. By linking event emission to transaction execution,\nCalimero guarantees that event notifications accurately reflect the\napplication's current state, enhancing the reliability and consistency of\ncommunication between actors."}),"\n",(0,r.jsx)(n.p,{children:"This also means it doesn't matter if the event emission is done before or after\nthe state change, as the event will only be emitted if the state change is\nsuccessful."}),"\n",(0,r.jsx)(n.p,{children:"By adhering to these principles of atomicity and event reliability, Calimero\napplications maintain data integrity and enable robust interaction between\ndifferent components, facilitating the development of secure and dependable\ndecentralized systems."}),"\n",(0,r.jsx)(n.h3,{id:"local-first-efficiency",children:"Local-First Efficiency"}),"\n",(0,r.jsxs)(n.p,{children:["Read-only operations (like ",(0,r.jsx)(n.code,{children:"get"}),") have no network overhead, as they don't modify\nstate and can be executed locally."]}),"\n",(0,r.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"You've now learned how to set up a Rust project using the Calimero SDK, write a\nsimple application, build it into Wasm, and prepare it for deployment.\nExperiment with different features and functionalities to create powerful and\nsecure applications with Calimero."}),"\n",(0,r.jsx)(n.p,{children:"Happy coding! \ud83d\ude80"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5248:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(758);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);