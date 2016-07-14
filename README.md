# request-midi-access
[![Build Status](http://img.shields.io/travis/mohayonao/request-midi-access.svg?style=flat-square)](https://travis-ci.org/mohayonao/request-midi-access)
[![NPM Version](http://img.shields.io/npm/v/request-midi-access.svg?style=flat-square)](https://www.npmjs.org/package/request-midi-access)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> requestMIDIAccess for all


## Installation

```
npm install --save request-midi-access
```

or copy and paste

```js
function requestMIDIAccess(opts) {
  opts = opts || {};
  if (window.navigator && typeof window.navigator.requestMIDIAccess === "function") {
    return window.navigator.requestMIDIAccess(opts);
  }
  return Promise.reject(new TypeError("Web MIDI API is not supported"));
}
```

## How to use

```js
const requestMIDIAccess = require("request-midi-access");

requestMIDIAccess().then((access) => {
  // Web MIDI API is supported
}, (e) => {
  console.log(e);
  // → TypeError "Web MIDI API is not supported"
});
```

## License

MIT
