import { binarySearch } from './binary-search.js';

/**
 * Function to delete an element
 * @param {*} list arr 
 * @param {*} n 
 * @param {*} value 
 * @param {*} sortKey 
 * @returns 
 */
export function removeSorted(list, sortKey, value) {
    /** get index of element */
    let index = binarySearch(list, value, sortKey);
    /** element not found */
    if (index === -1) {
        return list;
    }
    /** delete element */
    else {
        list.splice(index, 1); 
        return list;
    }
}

