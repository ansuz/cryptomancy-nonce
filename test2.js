var nonce = require(".");

var n = nonce.create();

setInterval(function () {
    console.log(n);
    nonce.increment(n);
}, 1);
