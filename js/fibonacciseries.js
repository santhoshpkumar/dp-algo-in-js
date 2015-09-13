/**
 * Created by santhoshkumar on 13/09/15.
 *
 * Problem:
 * Fibonacci Series : The current number is the sum of previous two number.
 *
 */

var FibonacciSeries = function(count) {
    var series = [];

    series[0] = 0;
    series[1] = 1;

    for (var i = 2; i <= count; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
};

var seriesCount = 8;
console.log(FibonacciSeries(seriesCount));