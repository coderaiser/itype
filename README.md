# iType

Improved type check.

## Install

```
npm i itype --save
```

## How to use?

```js
var itype = require('itype');

console.og(itype.string('hello'))
// returns
true

console.log(itype('world'));
// returns
'string'

console.log(itype.array([1, 2]));
// returns
true

```

## License

MIT
