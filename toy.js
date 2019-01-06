var A = new Array(20).fill(0);

var inc = function (N) {
    var l = N.length;
    while (--l >= 0) {
        if (N[l] !== 1) {
            return void N[l]++;
        }
        if (l === 0) { return true; }
        N[l] = 0;
    }
};

do {
    console.log(A.join(""));
} while (!inc(A));
