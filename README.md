<h1 align="center">Welcome to firebolt-grit-demo 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.3.1-blue.svg?cacheSeconds=2592000" />
</p>

>This project showcases how Grit, simple web app with Firebolt, can automate tasks like code migrations with Grit CLI or Github action. 

[![IT Man - Automate Your Codebase: #GritQL &amp; The Future of Software Maintenance with #Grit](https://i.ytimg.com/vi/pRGxJRxCwII/hqdefault.jpg)](https://www.youtube.com/watch?v=pRGxJRxCwII)

## Pre-requisites

- [Bun — A fast all-in-one JavaScript runtime](https://bun.sh/)
- [Grit CLI](https://docs.grit.io/cli/quickstart)
- [pre-commit](https://pre-commit.com/)
- [Docker](https://www.docker.com/) or [OrbStack](https://orbstack.dev/)

## Install

```sh
bun install
```

## Development

```sh
bun run dev
```

## Build

```sh
bun run build
```

## [Grit](https://grit.io)

### List all patterns

```sh
grit list
```

### Check the current pattern

```sh
grit check
```

[![Grit Demo 1](https://i.gyazo.com/b63f67c598010a058995921d2415826f.gif)](https://gyazo.com/b63f67c598010a058995921d2415826f)

### Describe the pattern

```sh
grit patterns describe <pattern>
```

For example, to describe the `no_console_log` pattern, you can run the following command:

```sh
grit patterns describe no_console_log

# Remove console.log

Remove `console.log` statements.

- Name: no_console_log
- Language: TSX
- Tags: logging

# Body

engine marzano(0.1)
language js

`console.log($arg)` => . where {
  $arg <: not within catch_clause()
}

# Samples

## Removes a simple `console.log` statement

Input                 | Output
--------------------- | ---------------------
// Do not remove this | // Do not remove this
console.error('foo'); | console.error('foo');
console.log('foo');   |
--------------------- | ---------------------


## Removes the statement in a function

Input                 | Output
--------------------- | ---------------
function f() {        | function f() {}
  console.log('foo'); |
}                     |
--------------------- | ---------------


## Works in a list as well

Input                                                               | Output
------------------------------------------------------------------- | --------------------
server.listen(PORT, console.log(`Server started on port ${PORT}`)); | server.listen(PORT);
------------------------------------------------------------------- | --------------------


## Doesn't remove `console.log` in a catch clause

Input                 | Output
--------------------- | ---------------------
try {                 | try {
} catch (e) {         | } catch (e) {
  console.log('foo'); |   console.log('foo');
}                     | }
--------------------- | ---------------------


## Works on multiple console logs in the same file

Input                 | Output
--------------------- | ---------------------
// Do not remove this | // Do not remove this
console.error('foo'); | console.error('foo');
console.log('foo');   |
console.log('bar');   |
--------------------- | ---------------------

```

### Apply the pattern

```sh
grit apply <pattern>
```

[![Grit Apply Demo](https://i.gyazo.com/e5c010fd20ccfaa7b1b489e956b6ba6c.gif)](https://gyazo.com/e5c010fd20ccfaa7b1b489e956b6ba6c)

### Edit the pattern with Grit Studio

```sh
grit pattern edit <pattern>
```

For example, to edit the `no_alert_js` pattern, you can run the following command:

```sh
grit patterns edit .grit/patterns/no_alert_js.md
Open in Grit studio: https://app.grit.io/studio?pattern_file=eJyFkLFuAjEMhl%2FFCpWOk7ijrIfo0qVTp25NdbHASg%2FlnDYxrVrEu2MCQmxsyW9%2Fn2zvzTqyEIvpTNM0lmWQQB28RsBASTRAnzt4r9ZxQ833DsMgf9UMqhC9H9hXH5YD%2FVDo4BcTWy4Wy5MbhWXnnE%2BDPokVIhgx%2FSPH6WO7qJVH9jv0BNtcmgs2fehrB6sncO5iKNoJvFEWeMZMsLgURDFdQ%2BMxe1iBNS8UQrRmafns0rxeXiV3kNJlZuYL5VPP0p4mn%2BtHKHGec%2ByLs9%2FmdtyYwxHclHC9
```

## Docker

```sh
docker-compose up
```

## Deploy to Fly.io

```sh
fly launch
```

## Pre-commit

```sh
pre-commit install
```

## Resources

- [Available Patterns | Grit](https://docs.grit.io/patterns)
- [Firebolt](https://firebolt.dev/)
- [Panda CLI - Panda CSS](https://panda-css.com/docs/installation/cli)
- [Biome, toolchain of the web](https://biomejs.dev/)
- [GritQL Tutorial](https://docs.grit.io/tutorials/gritql)

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

