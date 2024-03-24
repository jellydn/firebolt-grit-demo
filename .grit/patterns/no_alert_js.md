---
title: No alert
tags: ['code-quality', 'logging']
level: error
---

```grit
engine marzano(0.1)
language js

`alert($_)`

```

## Test Case 1

```ts
const msg = "Hello";
alert(msg);
```

```ts
const msg = "Hello";
```
