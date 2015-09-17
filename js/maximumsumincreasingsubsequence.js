/**
 * Created by santhoshkumar on 17/09/15.
 *
 * Given an array of n positive integers.
 * Write a program to find the sum of maximum sum sub-sequence of the given array such that
 * the integers in the sub-sequence are sorted in increasing order.
 * For example, if input is {1, 101, 2, 3, 100, 4, 5}, then output should be 106 (1 + 2 + 3 + 100),
 * if the input array is {3, 4, 5, 10}, then output should be 22 (3 + 4 + 5 + 10) and
 * if the input array is {10, 5, 4, 3}, then output should be 10
 *
 */
    
var MIS = function (arr){
    var mis = [];
    var choice = [];
    var output = [];
    var msis = 0;

    var calculateMIS = function(){
        var i, j;

        // Initilize the MIS
        mis = arr.map(function (value) {
            return value;
        });

        choice = arr.map(function (item, index) {
            return index;
        });

        for (i = 1; i < arr.length; i++) {
            for (j = 0; j < i; j++) {
                if (arr[i] > arr[j] && mis[i] < arr[i] + mis[j]) {
                    mis[i] = mis[j] + arr[i];
                    choice[i] = j;
                }
            }
        }
    };

    var generateMIS = function(){
        // Backtrack and generate the mis sub sequence
        var result = {};
        result.index = 0;
        result.max = 0;

        result =  mis.reduce(function (prevValue, currValue, index) {
            if (currValue > prevValue.max) {
                prevValue.max = currValue;
                prevValue.index = index;
            }
            return prevValue;
        }, result);

        var pointer = result.index;
        while (pointer >= choice[pointer]){
            output.push(arr[pointer]);
            if (pointer === choice[pointer]){
                break;
            }
            pointer = choice[pointer];
        }
        output.reverse();
        msis = result.max;
    };

    this.solve = function() {
        calculateMIS();
        generateMIS();
    };

    this.getMISValue = function() {
        return msis;
    };

    this.getMIS = function(){
        return output;
    };
};

module.exports = {
    problem: MIS
};

//var a = [2,3,1,8,3,9,2,5];
//var problem = new MIS(a);
//problem.solve();
//console.log("Array : "+a);
//console.log("LIS : "+problem.getMIS() +" = "+ problem.getMISValue());