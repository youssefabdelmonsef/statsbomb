import { pipe, always, applySpec } from 'ramda';
import { mergeSort } from './helper.js';

const sort = (list, sortKey) => {
  // SHOULD IMPLEMENT
  return mergeSort(list, sortKey);
};

const findIndex = (list, sortKey) => value => {
  // SHOULD IMPLEMENT
  return -1;
}


const insert = (list, sortKey, item) => {
  // SHOULD IMPLEMENT a preserving order insertion
  return list;
}


const remove = (list, sortKey, value) => {
  // SHOULD IMPLEMENT
  return list;
}

export const List = ({ sortKey, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, sortKey);

  return {
    items,
    findIndex: findIndex(items, sortKey),
    remove: value => List({
      sortKey,
      initial: remove(items, sortKey, value),
      initialOrder: true
    }),

    insert: item => List({
      sortKey,
      initial: insert(items, sortKey, item),
      initialOrder: true
    })
  }
}

// function merge(left, right, sortKey) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays
//         // if (left[0][sortKey] < right[0][sortKey]) {
//         if (getValue(left[0], sortKey) < getValue(right[0], sortKey)) {
//             arr.push(left.shift());
//         } else {
//             arr.push(right.shift());
//         }
//     }
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...arr, ...left, ...right ]
//   }
  
//   function mergeSort(array, sortKey) {
//     const half = array.length / 2;
    
//     // Base case or terminating case
//     if(array.length < 2){
//       return array;
//     }
    
//     const left = array.splice(0, half);
//     return merge(mergeSort(left, sortKey), mergeSort(array, sortKey), sortKey);
//   }