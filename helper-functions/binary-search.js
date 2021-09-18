import { getValue } from './common.js';

/**
 * Binary search has higher perfomance than findIndex in index.naive.js
 * A for loop was used to save space. More easily understood as a while loop. Exits if our pointer moves out of range.
 * @param {*} array array of object or array of numbers
 * @param {*} value number
 * @param {*} sortKey string
 * @returns number
 */
export function binarySearch(array, value, sortKey) {
    let j = 0, length = array.length;
    while (j < length) {
        let i = (length + j - 1) >> 1;
            if (value > getValue(array[i], sortKey)) {
            j = i + 1;
        }
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