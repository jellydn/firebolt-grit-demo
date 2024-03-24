---
title: Convert console.info to console.debug
tags: ['code-quality', 'logging']
level: warn
---

# Convert console.info to console.debug

```grit
engine marzano(0.1)
language js

`console.info` => `console.debug`

```

## Test Case 1

```ts
console.info('Hello, World!');
```

```ts
console.debug('Hello, World!');
```

## Test Case 2

```ts
console.info('Hello, World!');
console.warn('This is a warning!');
```

```ts
console.debug('Hello, World!');
console.warn('This is a warning!');
```