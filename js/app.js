/**
 * Created by santhoshkumar on 12/09/15.
 */

var coinChangeMinNumOfCoins =  require("./coinchangeminimum");
var coinChangeNoOfWays =  require("./coinchangeways");

var coins = [1,2,4];
var n = 10;
var answer, result;

answer = new coinChangeMinNumOfCoins.problem(coins,n);
result = answer.findAnswer();
console.log("Minimum number of coins to give change: "+result);

answer = new coinChangeNoOfWays.problem(coins,n);
result = answer.findAnswer();
console.log("Total number of ways to give change: "+result);

