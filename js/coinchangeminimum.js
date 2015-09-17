/**
 * Created by santhoshkumar on 13/09/15.
 *
 * Problem:
 * Given coins of certain denominations and a total,
 * how many minimum coins would you need to make this total.
 *
 */

var util = require("./util");

//Pre-req : the coin array should be sorted in ascending order for the algorithm to work.
var CoinChangeMinNum = function(coins, n){
    var resultMatrix = [];
    var resultCoins = [];

    var generateMatrix = function(){
        var i, j;
        resultMatrix = util.createArray(0,coins.length,n);

        for(i=1; i<=n; i++){
            resultMatrix[0][i] = Number.MAX_VALUE-2;
        }

        for(i=1;i<=coins.length;i++){
            for(j=1; j<=n; j++){
                if (j >= coins[i-1]){
                    resultMatrix[i][j]=Math.min(resultMatrix[i-1][j],1+resultMatrix[i][j-coins[i-1]]);
                }else{
                    resultMatrix[i][j]=resultMatrix[i-1][j];
                }
            }
        }
    };

    var findCoins = function(){
        var i = coins.length,
            j = n;
        while(j !== 0 && i !== 0) {
            if (resultMatrix[i][ j] !== resultMatrix[i - 1][ j]) {
                resultCoins.push(coins[i - 1]);
                j -= coins[i-1];
            }else{
                i--;
            }
        }
    };

    this.findAnswer = function (){
        generateMatrix();
        findCoins();
        return resultCoins.length;
    };

    this.getMatrix = function(){
        return resultMatrix.slice(); // return a copy
    };

    this.getMinCoins = function(){
        return resultCoins.slice(); // return a copy
    }

};

module.exports = {
    problem: CoinChangeMinNum
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

//Coins = [1,2,4];
//Change for: 9
//[   [ 0, MAX, MAX, MAX, MAX, MAX, MAX, MAX, MAX, MAX ],
//    [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
//    [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
//    [ 0, 1, 1, 2, 1, 2, 2, 3, 2, 3 ] ]
//******** Result ********
//Minimum number of coins to give change: 3
//******** ****** ********
//[ 4, 4, 1 ]
//******** ****** ********
