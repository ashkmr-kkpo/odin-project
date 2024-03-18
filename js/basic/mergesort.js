function recmergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(recmergeSort(left), recmergeSort(array));
}

function mergeSort(arr) {
  if (arr.length === 0) {
    return;
  }
  if (arr.length === 1) {
    return arr;
  }

  let runs = Math.log(arr.length) / Math.log(2);
  runs++;
  console.log("runs", runs);
  for (let i = 1; i < runs; i++) {
    let div = ~~(arr.length / (i * 2));
    console.log("div", div);
    for (let j = 0; j < div; j++) {
      let replace = merge(arr.slice(j, j + i), arr.slice(j + i, j + i + i));
      console.log(arr.slice(j, j + i), j, j + i);
      console.log(arr.slice(j + i, j + i + i), j + i, j + i + i);
      console.log("donemerge", replace);
    }
  }
}

function merge(arr1, arr2) {
  let newArr = [];
  while (arr1.length && arr2.length) {
    let smallest = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
    newArr.push(smallest);
  }
  return newArr.concat(arr1).concat(arr2);
}

let arr = [1, 5, 9, 13];
let arr2 = [3, 6, 8, 14];

let unsort = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(recmergeSort(unsort));
