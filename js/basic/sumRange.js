const array = [3, 4, 5, 1, 0, 6];
function sumRange(index) {
  if (index >= array.length || array.length < 1 || array == undefined) {
    return 0;
  }

  return array[index] + sumRange(index + 1);
}

function pow(num, index) {
  if (index <= 0) {
    return 1;
  }

  return num * pow(num, index - 1);
}

function parseJsObject(jobject, search) {
  if (jobject === null) {
    return false;
  }
  let searchRes = false;
  for (key in jobject) {
    if (jobject[key] === search) {
      searchRes = true;
      break;
    }
    if (typeof jobject[key] !== "object") {
      continue;
    }
    searchRes = searchRes | parseJsObject(jobject[key], search);
  }

  return searchRes;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log("Sum = " + sumRange(0));
console.log("Pow = " + pow(3, 4));
console.log("Search = " + parseJsObject(nestedObject, 44));
