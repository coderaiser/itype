# IType

Improved type check.

## Install

```
npm i itype --save
```

## How to use?

```js
var type = require('itype');

console.og(itype.string('hello'))
//true

console.log(itype('world'));
//string

console.log(itype.array('hi'));
// false

```

## License

MIT
