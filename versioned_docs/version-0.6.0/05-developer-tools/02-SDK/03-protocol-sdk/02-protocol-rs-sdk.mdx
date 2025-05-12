---
id: protocol-rs-sdk
title: Rust Protocol SDK
---

## Calimero SDK Macros for Rust

This guide provides a comprehensive reference of the essential macros provided
by the Calimero SDK for building Rust applications.

## Core Macros

### #[app::state]

Marks a struct as the application state. The state struct must implement
`BorshSerialize` and `BorshDeserialize`.

```rust
#[app::state]
#[derive(Default, BorshSerialize, BorshDeserialize)]
#[borsh(crate = "calimero_sdk::borsh")]
struct MyAppState {
    // Your state fields here
}
```

When emitting events, spcify the event type:

```rust
#[app::state(emits = for<'a> MyEvent<'a>)]
struct MyAppState {
    // Your state fields here
}
```

### #[app::logic]

Marks an implementation block as containing the application logic.

```rust
#[app::logic]
impl MyAppState {
    // Your methods here
}
```

### #[app::init]

Marks a method as the initializer, which is called when the application is first
deployed.

```rust
#[app::logic]
impl MyAppState {
    #[app::init]
    pub fn init() -> Self {
        Self::default()
    }
}
```

### #[app::event]

Defines an event type that can be emitted by your application.

```rust
#[app::event]
pub enum MyEvent<'a> {
    ValueUpdated { key: &'a str, value: &'a str },
    ValueRemoved { key: &'a str },
}
```

## Event emission

Use the `app::emit!` macro to emit events from your application:

```rust
app::emit!(MyEvent::ValueUpdated {
    key: &key,
    value: &new_value
});
```

## Complete Example

Here's a minimal example showing how these macros work together:

```rust
use calimero_sdk::borsh::{BorshDeserialize, BorshSerialize};
use calimero_sdk::{app, env};
use calimero_storage::collections::UnorderedMap;

#[app::event]
pub enum StoreEvent<'a> {
    ValueSet { key: &'a str, value: &'a str },
}

#[app::state(emits = for<'a> StoreEvent<'a>)]
#[derive(Default, BorshSerialize, BorshDeserialize)]
#[borsh(crate = "calimero_sdk::borsh")]
struct Store {
    values: UnorderedMap<String, String>,
}

#[app::logic]
impl Store {
    #[app::init]
    pub fn init() -> Self {
        Self {
            values: UnorderedMap::new(),
        }
    }

    pub fn set(&mut self, key: String, value: String) {
        self.values.insert(key, value).unwrap();
        app::emit!(StoreEvent::ValueSet {
            key: &key,
            value: &value
        });
    }
}
```

## Important Notes

<ol>
  <li>
    State changes are atomic - if a method fails, all changes are rolled back
  </li>
  <li>Events are only emitted if the transaction succeeds</li>
  <li>Read-only operations have no network overhead</li>
  <li>
    All public methods in the `#[app::logic]` block become available as
    application endpoints
  </li>
</ol>

For a detailed guide on building a complete application using these macros, see
our [Tutorial](../../../../tutorials/build-app) Guide on building a Key Value
Store.
