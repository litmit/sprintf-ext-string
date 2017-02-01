# sprintf-ext-string

> String formatting extension for 'sprintf-js'

## Overview

 It's the very experimental module to try the new feature that proposed to 
[sprintf-js](https://github.com/alexei/sprintf.js) by me.

 This feature allow to use an user defined type specifiers (any letter) and
bind such specifier with an user defined function. This function will be called
inside `sprintf` to format `sprintf` arguments according desired specification.
An additional formatting modifiers may be passed in the `sprintf` format string if need.

  You can use any existing formatting features of `sprintf` together with such user defined type specifiers
(width, precision, padding and aligning). They will be applied to result of user function.


## Getting Started

Install featured [sprintf-js](https://github.com/litmit/sprintf.js/tree/expandable):
```shell
npm install https://github.com/litmit/sprintf.js.git#expandable
```
Install [this extension](https://github.com/litmit/sprintf-ext-string):
```shell
npm install sprintf-ext-string
```

Now you can code:
```js
var sprintf = require("sprintf-js").sprintf;
require("sprintf-ext-string").bind(sprintf);

var user = { name: "DoLly mollY" };

console.log(sprintf("Hello %(name)-11.5S", user));    // --> Hello DOLLY 
console.log(sprintf("Hello %(name)-11.5[U]S", user)); // --> Hello DOLLY 
console.log(sprintf("Hello %(name)11.5[l]S", user));  // --> Hello       dolly
console.log(sprintf("Hello %(name)11.5[]S", user));   // --> Hello       DoLly

console.log(sprintf("Hello %1$[l]S", user.name));     // --> Hello dolly molly
console.log(sprintf("Hello %1$[C]S", user.name));     // --> Hello DoLly MollY
console.log(sprintf("Hello %1$[Cl]S", user.name));    // --> Hello Dolly Molly

console.log(sprintf("Hello %[F]S", user.name));       // --> Hello DoLly mollY
console.log(sprintf("Hello %[f]S", user.name));       // --> Hello doLly mollY

console.log(sprintf("Hello %[Fl]S", user.name));      // --> Hello Dolly molly
console.log(sprintf("Hello %[fU]S", user.name));      // --> Hello dOLLY MOLLY
```

## String formatting modifiers

* `%S` or `%[U]S` - now yields a string in UPPER CASE
* `%[]S` - yields a string as is (like `%s`)
* `%[l]S` - now yields a string in lower case
* `%[F]S` - now yields a string with first letter in Upper case
* `%[f]S` - now yields a string with first letter in lower case
* `%[Fl]S` - now yields a string with first letter in Upper case and others in Lower case
* `%[fU]S` - now yields a string with first letter in lower case and others in uPPER CASE
* `%[C]S` - now yields a string with first letter in each word in Upper Case
* `%[Cl]S` - now yields a string with first letter in each word in Upper Case and others in Lower case

## See also

### Available extensions for [sprintf-js](https://github.com/litmit/sprintf.js/tree/expandable):
* [sprintf-ext-strftime](https://github.com/litmit/sprintf-ext-strftime) - Date/time formatting extension for `sprintf-js` (via `strftime`)
* [sprintf-ext-string](https://github.com/litmit/sprintf-ext-string) - String formatting extension for `sprintf-js`
