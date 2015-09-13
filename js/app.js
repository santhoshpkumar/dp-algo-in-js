/**
 * Created by santhoshkumar on 12/09/15.
 */

var coinChangeMinNumOfCoins =  require("./coinchangeminimum");
var coinChangeNoOfWays =  require("./coinchangeways");

var coins = [1,2,5,10];
var changeNeededFor = 10;
var answer, result;

console.log("Coins: "+coins);
console.log("Change required for: "+changeNeededFor);
answer = new coinChangeNoOfWays.problem(coins,changeNeededFor);
result = answer.findAnswer();
console.log("Total number of ways to give change: "+result);

answer = new coinChangeMinNumOfCoins.problem(coins,changeNeededFor);
result = answer.findAnswer();
console.log("Minimum number of coins to give change: "+result);
console.log("Change: "+answer.getMinCoins().join("+")+" = "+changeNeededFor);



