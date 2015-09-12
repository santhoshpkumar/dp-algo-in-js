/**
 * Created by santhoshkumar on 12/09/15.
 */
var util = require("./util");

function findlcs(a, b){
    var lcs = util.createArray(0,a.length,b.length);

    for(var i = 1; i <= a.length; i++){
        for(var j = 1; j <= b.length; j++){
            if (a[i-1] === b[j-1]){
                lcs[i][j] = 1+lcs[i-1][j-1];
            }else{
                lcs[i][j] = 0;
            }
        }
    }
    return lcs;
}

var a = ['s','a','n','t','h','o','s','h'];
var b = ['s','a','n','2','o','s','h'];

console.log(a);
console.log(b);
var lcs = findlcs(a,b);

for(i = 1; i <= a.length; i++) {
    lcs[i][0] = a[i-1];
}
for( i = 1; i <= b.length; i++) {
    lcs[0][i] = b[i-1];
}
console.log(lcs);
