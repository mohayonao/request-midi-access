"use strict";

const assert = require("assert");
const test = require("eatest");
const webmidi = require("web-midi-test-api");

test.fork("not browser", () => {
  global.window = null;

  const requestMIDIAccess = require(".");

  return requestMIDIAccess().catch((e) => {
    assert(e.message === "Web MIDI API is not supported");
  });
});

test.fork("not supported", () => {
  global.window = {};
  global.window.navigator = {};

  const requestMIDIAccess = require(".");

  return requestMIDIAccess().catch((e) => {
    assert(e.message === "Web MIDI API is not supported");
  });
});

test.fork("supported", () => {
  global.window = {};
  global.window.navigator = {};
  global.window.navigator.requestMIDIAccess = webmidi.requestMIDIAccess;

  const requestMIDIAccess = require(".");

  return requestMIDIAccess().then((access) => {
    assert(access.inputs instanceof Map);
    assert(access.outputs instanceof Map);
  });
});
