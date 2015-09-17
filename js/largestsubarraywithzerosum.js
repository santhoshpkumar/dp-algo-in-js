/**
 * Created by santhoshkumar on 17/09/15.
 * 
 * Given an array of integers, find length of the largest subarray with sum equals to 0.
 * Note: This does not fit into DP criteria

 Examples:

 Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23};
 Output: 5
 The largest subarray with 0 sum is -2, 2, -8, 1, 7

 Input: arr[] = {1, 2, 3}
 Output: 0
 There is no subarray with 0 sum

 Input: arr[] = {1, 0, 3}
 Output: 1
 
 */

var LSZero = function (arr){
    var lsZero = [];
    var start = -1;
    var end = -1;
    var maxLength = -1;

    var calculateZero = function(){
        var i, j, curSum;

        for (i = 1; i < arr.length; i++) {
            curSum = 0;
            for (j = i; j < arr.length; j++) {
                curSum += arr[j];
                if (curSum  === 0  && maxLength < (j-i+1)) {
                    start = i;
                    end = j;
                    maxLength = j-i+1;
                }
            }
        }
    };

    this.getZeroSumArray = function(){
        if (maxLength > 0){
            return arr.slice(start,end+1);
        }
        return [];

    };

    this.solve = function() {
        calculateZero();
    };
};

var a = [15, -2, 2, -8, 1, 7, 10, 23];
//var a = [1,2,3,0];
var problem = new LSZero(a);
problem.solve();
var answer = problem.getZeroSumArray();
console.log("Array: "+a);
if (answer.length !== 0) {
    console.log("Zero sum sub array: " + answer);
}else{
    console.log("No zero sum sub array.");
}