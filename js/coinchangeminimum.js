/**
 * Created by santhoshkumar on 13/09/15.
 */

var util = require("./util");

//Pre-req : the coin array should be sorted in ascending order for the algorithm to work.
var coinChangeMinNum = function(coins,n){
    var resultMatrix = [];

    this.findAnswer = function (){
        var i,j;
        resultMatrix = util.createArray(0,coins.length,n);

        for(i=1;i<=n;i++){
            resultMatrix[0][i] = Number.MAX_VALUE-2;
        }

        for(i=1;i<=coins.length;i++){
            for(j=1;j<=n;j++){
                if (j >= coins[i-1]){
                    resultMatrix[i][j]=Math.min(resultMatrix[i-1][j],1+resultMatrix[i][j-coins[i-1]]);
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

    this.getMinCoins = function(){
        var i = coins.length,
            j = n,
            minCoins = [];
        while(j !== 0 && i !== 0) {
            if (resultMatrix[i][ j] !== resultMatrix[i - 1][ j]) {
                minCoins.push(coins[i - 1]);
                j -= coins[i-1];
            }else{
                i--;
            }
        }
        return minCoins;
    }

};

module.exports = {
    problem: coinChangeMinNum
};


//var coins = [1,2,4];
//var n = 9;
//
//var coinChange = new coinChangeMinNum(coins,n);
//var result = coinChange.findAnswer();
//console.log("******** Matrix ********");
//console.log(coinChange.getMatrix());
//console.log("******** Result ********");
//console.log("Minimum number of coins to give change: "+result);
//console.log("******** ****** ********");
//console.log(coinChange.getMinCoins());
//console.log("******** ****** ********");
