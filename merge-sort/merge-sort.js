function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));

  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  const mergedArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else if (rightArr[0] < leftArr[0]) {
      mergedArr.push(rightArr.shift());
    }
  }

  // push the remaining elements in either of leftArr or rightArr to mergedArr
  while (leftArr.length > 0) {
    mergedArr.push(leftArr.shift());
  }

  while (rightArr.length > 0) {
    mergedArr.push(rightArr.shift());
  }

  return mergedArr;
}

const array = [4, 6, 2, 3, 5, 1, 7, 11, 9, 8, 15, 13, 12, 14];

console.log(mergeSort(array));
