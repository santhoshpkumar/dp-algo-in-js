/**
 * Created by santhoshkumar on 12/09/15.
 */

module.exports = {
    /**
     * Create a m*n array initialized with a value.
     *
     * @param  {object} initialValue
     * @param  {object} rows
     * x dimension
     * @param  {object} columns
     * y dimension
     * @return {Array}
     * x*y array object
     */

    createArray : function (initialValue, rows, cols ) {
        var jMax = cols || 0;
        var iMax = rows || 0;
        var result = [];
        var i, j;

        // return a blank array.
        if (iMax === 0 && jMax === 0) {
            return result;
        }

        // return a one dimensional array
        if (cols === 0) {
            for (i = 0; i <= iMax; i++) {
                result.push(initialValue);
            }
            return result;
        }

        // Create a single row initialized to size jMax and initialValue
        var row = [];
        for (j = 0; j <= jMax; j++) {
            row.push(initialValue);
        }

        // initialize each of the columns with the initialized row
        for (i = 0; i <= iMax; i++) {
            result.push(row.slice());
        }
        return result;
    },
    /**
     * Sort the array using insertion sort.
     *
     * @param  {Array} array on integers to sort
     * @return {Array}
     * Sorted Array
     */
    sort: function(arr) {
        for (var i = 1; i < arr.length; i++) {
            var cmpItm = arr[i];
            var tempArr = arr.slice();
            for (var j = i; j > 0 && cmpItm < arr[j - 1]; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = cmpItm;
        }
        return arr;
    }
};
