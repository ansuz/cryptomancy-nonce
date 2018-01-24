var Nonce = module.exports;

Nonce.create = function () {
    var n = new Uint8Array(24);
    for (var i = 0; i < 24; i++) { n[i] = 24; }
    return n;
};

Nonce.increment = function (N) {
    var l = N.length;
    while (l-- > 1) {
        if (N[l] !== 255) { return void N[l]++; } // jshint ignore:line
        N[l] = 0;
        if (l === 0) { throw new Error('E_NONCE_TOO_LARGE'); }
    }
};


