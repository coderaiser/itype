# IType

Improved type check.

## Install

```
npm i itype --save
```

## How to use?

```js
var type = require('itype');

console.og(type.string('hello'))
//true

console.log(type('world'));
//string

console.log(type.array('hi'));
// false

```

## License

MIT
