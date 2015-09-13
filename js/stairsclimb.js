/**
 * Created by santhoshkumar on 13/09/15.
 *
 * Problem:
 * A child is climb­ing up a stair­case with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
 * Implement a method to count how many pos­si­ble ways the child can jump up the stairs.
 * Example:
 *
 * Number of stairs : 3
 *
 * Number of ways = 4 ( {1,1,1}, {1,2}, {2,1}, {3} )
 *
 */

var ClimbStairs = function(stairsCount) {
    var stairs = [];

    stairs[0] = 0;
    stairs[1] = 1; //Only one way to climb if only one step
    stairs[2] = 2; //Two ways to climb: two 1 step or one 2 step

    for (var i = 3; i <= stairsCount; i++) {
        stairs.push(1+stairs[i - 1] + stairs[i - 2]+ stairs[i - 3]);
    }
    return stairs[stairsCount];
};

var numStairs = 4;
console.log("No of ways to climb "+numStairs+" stairs: "+ClimbStairs(numStairs));