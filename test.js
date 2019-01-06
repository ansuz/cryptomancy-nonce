var nonce = require(".");
var assert = require("assert");

var n = nonce.create();
assert(n.length === 24);

// create another nonce
var m = nonce.create();

(function () {
    // increment n an oddly specific number of times
    var i = 256;
    while (i--) { nonce.increment(n); }

    // set m manually
    m[22] = 1;
    m[23] = 0;
}());

// assert that they are the same
assert.deepEqual(n, m);


