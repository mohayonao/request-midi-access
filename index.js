"use strict";

const window = global.window || {};

function requestMIDIAccess(opts) {
  opts = opts || {};
  if (window.navigator && typeof window.navigator.requestMIDIAccess === "function") {
    return window.navigator.requestMIDIAccess(opts);
  }
  return Promise.reject(new TypeError("Web MIDI API is not supported"));
}

module.exports = requestMIDIAccess;
