/**
 * Created by santhoshkumar on 12/09/15.
 */

var util = require("./util");

var solveLCS = function(a,b) {
    var lcs;
    var max = 0;

    var BuildMatrix = function() {
        lcs = util.createArray(0, a.length, b.length);
        for (var i = 1; i <= a.length; i++) {
            for (var j = 1; j <= b.length; j++) {
                if (a[i - 1] === b[j - 1]) {
                    lcs[i][j] = 1 + lcs[i - 1][j - 1];
                } else {
                    lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
                }
                if (lcs[i][j] > max){
                    max = lcs[i][j];
                }
            }
        }
    };

    this.findMax = function(){
        BuildMatrix();
        return max;
    };

    this.getMatrix = function(){
        return lcs;
    };
};

var a = ['s','a','n','t','h','o','s','h'];
var b = ['s','a','n','2','o','s'];
var i;

var lcs = new solveLCS(a,b);
console.log("********** Result **********");
console.log("Max Sub Sequence length: "+lcs.findMax());

var resultMatrix = lcs.getMatrix();

for(i = 1; i <= a.length; i++) {
    resultMatrix[i][0] = a[i-1];
}
for(i = 1; i <= b.length; i++) {
    resultMatrix[0][i] = b[i-1];
}

console.log("********** Matrix **********");
console.log(resultMatrix);
