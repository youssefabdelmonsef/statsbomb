import {getValue } from './common.js';

/**
 * Binary search has higher perfomance than findIndex in index.naive.js
 * @param {*} array array of object or array of numbers
 * @param {*} value number
 * @param {*} sortKey string
 * @returns number
 */
export function binarySearch(array, value, sortKey) {
    let j = 0, length = array.length;
    // A for loop was used to save space. More easily understood as a while loop. Exits if our pointer moves out of range.
    while (j < length) {
        let i = (length + j - 1) >> 1; // move the pointer to the median value using a shift in place of Math.floor() (to save characters)
        // If the value we're searching for is greater than the median, move our lower-bound past the median
        if (value > getValue(array[i], sortKey)) {
            j = i + 1;
        }
        // Otherwise, if the value we're searching for is less than the median, move our upper-bound to the median value
        else if (value < getValue(array[i], sortKey)) {
            length = i;
        }
        /** found */
        else {
            return i;
        }
    }
    /** not found */
    return -1;
}