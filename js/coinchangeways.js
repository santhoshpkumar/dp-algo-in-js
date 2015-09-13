/**
 * Created by santhoshkumar on 12/09/15.
 */

var util = require("./util");

//Pre-req : the coin array should be sorted in ascending order for the algorithm to work.
var coinChangeNoOfWays = function(coins,n){
    var resultMatrix = [];

    this.findAnswer = function (){
        var i,j;
        resultMatrix = util.createArray(0,coins.length,n);

        for(i=1;i<=coins.length;i++){
            resultMatrix[i][0] = 1;
        }

        for(i=1;i<=coins.length;i++){
            for(j=1;j<=n;j++){
                if (j >= coins[i-1]){
                    resultMatrix[i][j]=(resultMatrix[i-1][j])+(resultMatrix[i][j-coins[i-1]]);
                }else{
                    resultMatrix[i][j]=resultMatrix[i-1][j];
                }
            }
        }

        return resultMatrix[coins.length][n];
    };

    this.getMatrix = function(){
        return resultMatrix;
    };

};

module.exports = {
    problem: coinChangeNoOfWays
};

//var coins = [1,2,5];
//var n = 10;
//
//var coinChange = new coinChangeNoOfWays(coins,n);
//var result = coinChange.findAnswer();
//console.log("******** Matrix ********");
//console.log(coinChange.getMatrix());
//console.log("******** Result ********");
//console.log("Total number of ways to give change: "+result);
//console.log("******** ****** ********");

//Coins = [1,2,5];
//Change for = 10
//******** Matrix ********
//[   [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
//    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
//    [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6 ],
//    [ 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 10 ] ]
//******** Result ********
//Total number of ways to give change: 10
//******** ****** ********
