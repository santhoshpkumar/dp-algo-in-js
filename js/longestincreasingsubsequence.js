/**
 * Created by santhoshkumar on 17/09/15.
 *
 * Find the length of the longest sub-sequence of a given sequence such that
 * all elements of the sub-sequence are sorted in increasing order.
 * For example, length of LIS for { 10, 22, 9, 33, 21, 50, 41, 60, 80 } is 6 and LIS is {10, 22, 33, 50, 60, 80}.
 *
 */


var LIS = function (arr){
    var lis = [];
    var choice = [];
    var output = [];

    var calculateLIS = function(){
        var i, j;

        // LIS is min 1 at each index
        lis = arr.map(function () {
            return 1;
        });

        choice = arr.map(function (item, index) {
            return index;
        });

        for (i = 1; i < arr.length; i++) {
            for (j = 0; j < i; j++) {
                if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                    lis[i] = lis[j] + 1;
                    choice[i] = j;
                }
            }
        }
    };

    var generateLIS = function(){
        // Backtrack and generate the lis sub sequence
        var result = {};
        result.index = 0;
        result.max = 0;

        result =  lis.reduce(function (prevValue, currValue, index) {
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
    };

    this.solve = function() {
        calculateLIS();
        generateLIS();
    };

    this.getLISValue = function() {
        return output.length;
    };

    this.getLIS = function(){
        return output;
    };
};

module.exports = {
    problem: LIS
};

//var a = [2,30,1,8,3,9,2,5];
//var problem = new LIS(a);
//problem.solve();
//console.log("Array : "+a);
//console.log("LIS : "+problem.getLIS() +" = "+ problem.getLISValue());




