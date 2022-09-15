function myEach(collection, callback) {
  for(let ele in collection) {
    callback(collection[ele])
  }
  return collection
}

function myMap(collection, callback) {
  let modifiedArr = []

  for(let ele in collection) {
    modifiedArr.push(callback(collection[ele]))
  }
  return modifiedArr;
}

function myReduce(collection, callback, acc) {
  let copiedArr = [...collection]
  acc = acc || copiedArr.shift();
  for(let ele in copiedArr) {
    acc = callback(acc, copiedArr[ele], copiedArr)
  }
  return acc;
}

function myFind(collection, callback) {
  for(let ele in collection) {
    let element = collection[ele];
    if (callback(element)) {
      return element
    }
  }

}

function myFilter(collection, callback) {
  let selectedArray = [];

  for(let ele in collection) {
    let element = collection[ele];
    if (callback(element)) {
      selectedArray.push(element)
    }
  }
  return selectedArray;
}

function mySize(collection) {
return Object.keys(collection).length
}

function myFirst(collection, n = 1) {
  let count = 1;
  let array = [];

  for(let ele in collection) {
    if (count <= n) {
      array.push(collection[ele]);
      count++
    }
  }
  return array.length > 1 ? array : array[0]
}


function myLast(collection, n = 1) {
  let startingIndex = collection.length - n;

  return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex];
  
}

function myKeys(collection) {
  let keyCollect = collection
  return Object.keys(keyCollect)
}

function myValues(collection) {
  let valueCollect = collection
  return Object.values(valueCollect)
}