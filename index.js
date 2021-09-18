import { mergeSort } from './helper-functions/merge-sort.js';
import { binarySearch } from './helper-functions/binary-search.js';
import { insertSorted } from './helper-functions/insert-sorted.js';
import { removeSorted } from './helper-functions/remove-sorted.js';

const sort = (list, sortKey) => {
  return mergeSort(list, sortKey);
};

const findIndex = (list, sortKey) => value => {
  return binarySearch(list, value, sortKey);
}


const insert = (list, sortKey, item) => {
  insertSorted(list, list.length, item)
  return list;
}


const remove = (list, sortKey, value) => {
  return removeSorted(list, sortKey, value);
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
