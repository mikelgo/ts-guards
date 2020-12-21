# ts-guards

This library provides a small set of utility functions for checking the types of various
data types like: object, array, number, boolean and string.

## Get started

To get started simply add the library to your project by `npm install @mikelgo/ts-guards` and simply
use the utility functions where you need it. E.g.:

```typescript
import { isString } from "@mikelgo/ts-guards";

// somewhere in your code
function heavyComputation(arg: any) {
  if (isString(arg)) {
    // do something
  }
}
```

### Important hint
The utility function `isObject` will *not* return `true` for `null` and `array`'s. This is by design.

The default JavaScript-behavior of treating arrays and also null-values as objects, is in a lot of 
cases not what you usually want. To prevent this you, usually need additional checks like 
`if (typeof something === 'object' && !Array.isArray(something))`. This library will already take care of such things.

## Included type guards
* `isArray`
* `isObject`
* `isBoolean`
* `IsNumber`
* `IsString`
