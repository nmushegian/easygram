This package is a thin wrapper around the [ebnf](https://www.npmjs.com/package/ebnf) package by [menduz](https://github.com/menduz).

It locks a version and exposes the usage that I most often use:

```
const { gram } = require('minigram')
const read = gram(`
    <your grammar>
`)
const ast = read('<string to parse')
```

The inner package is at `_ebnf`:

```
const { _ebnf} = require('minigram')
```
