/**
 * Created by santhoshkumar on 13/09/15.
 *
 * Problem:
 * Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n.
 * Determine the maximum value obtainable by cutting up the rod and selling the pieces.
 * For example, if length of the rod is 8 and the values of different pieces are given as following,
 * then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6)
 *
 * length   | 1   2   3   4   5   6   7   8
 * --------------------------------------------
 * price    | 1   5   8   9  10  17  17  20
 *
 * And if the prices are as following, then the maximum obtainable value is 24 (by cutting in eight pieces of length 1)
 *
 * length   | 1   2   3   4   5   6   7   8
 * --------------------------------------------
 * price    | 3   5   8   9  10  17  17  20
 *
 */

var util = require("./util");

var RodCutting = function(spotCost){
    var resultMatrix = [];

    this.findAnswer = function (){
        var i,j;
        resultMatrix = util.createArray(0,spotCost.length,spotCost.length);

        for(i=1;i<=spotCost.length;i++){
            for(j=1;j<=spotCost.length;j++){
                if (j >= i){
                    resultMatrix[i][j]=Math.max(resultMatrix[i-1][j],spotCost[i-1]+resultMatrix[i][j-i]);
                }else{
                    resultMatrix[i][j]=resultMatrix[i-1][j];
                }
            }
        }

        return resultMatrix[spotCost.length][spotCost.length];
    };

    this.getMatrix = function(){
        return resultMatrix;
    };

    this.geCutPositions = function(){
        var i = spotCost.length,
            j = spotCost.length,
            cutPositions = [];
        while(j !== 0 && i !== 0) {
            if (resultMatrix[i][ j] !== resultMatrix[i - 1][ j]) {
                cutPositions.push(spotCost[i - 1]);
                j -= i;
            }else{
                i--;
            }
        }
        return cutPositions;
    };
};

var cost = [ 3 ,  5 ,  8 ,  9 , 10 , 17 , 17 , 20];
var res = new RodCutting(cost);
console.log("Maximum Value: "+res.findAnswer());
console.log(res.geCutPositions());