/**
 * Created by santhoshkumar on 12/09/15.
 */

var coinChangeMinNumOfCoins =  require("./coinchangeminimum");
var coinChangeNoOfWays =  require("./coinchangeways");
var LIS = require("./longestincreasingsubsequence");
var MSIS = require("./maximumsumincreasingsubsequence");
var util = require("./util");

//Pre-req : the coin array should be sorted in ascending order for the algorithm to work.
//var coins = [1,2,5,10];
// TODO : remove the duplicates from the array


/**
 * Coin Change:
 * Minimum number of coins
 * Number of ways to give change
 *
 */
console.log("***************************************");
console.log("*            Coin Change              *");
console.log("***************************************");

var coins = [2,5,3,6];
// Util uses insertion sort to sort the given array
coins = util.sort(coins);
var changeNeededFor = 11;
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

/**
 *
 * Longest increasing sub sequence
 * Maximum sum increasing sub sequence
 *
 */

console.log("***************************************");
console.log("* Longest increasing sub sequence     *");
console.log("* Maximum sum increasing sub sequence *");
console.log("***************************************");

var sampleArray = [2,30,1,8,3,9,2,5];
var problem = new LIS.problem(sampleArray);
problem.solve();
console.log("Array : "+sampleArray);
console.log("Longest increasing subsequence : "+problem.getLIS());

problem = new MSIS.problem(sampleArray);
problem.solve();
console.log("Maximum sum increasing subsequence : "+problem.getMIS() +" = "+ problem.getMISValue());

console.log("***************************************");



