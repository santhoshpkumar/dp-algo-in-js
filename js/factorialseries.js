/**
 * Created by santhoshkumar on 13/09/15.
 *
 * Problem:
 * Calculate factorial of a given number.
 *
 */

var FactorialSeries = function(count) {
    var series = [];

    series[0] = 1;
    series[1] = 1;

    for (var i = 2; i <= count; i++) {
        series.push(series[i - 1] * i);
    }
    return series;
};

var seriesCount = 5;
console.log(FactorialSeries(seriesCount));