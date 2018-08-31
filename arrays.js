var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, element){
    return [element, ...myArray];
};

function destructivelyAddElementToBeginningOfArray (myArray, element){
  myArray.unshift(element);
  return myArray
}

function addElementToEndOfArray (myArray, element){
    return [...myArray, element];
};

function destructivelyAddElementToEndOfArray (myArray, element){
  myArray.push(element);
  return myArray
}

function accessElementInArray(myArray, index) {
  return myArray[index]
}

function removeElementFromBeginningOfArray (myArray, element){
  myArray.shift(element);
  return myArray
}

function destructivelyRemoveElementFromBeginningOfArray (myArray){
  myArray.unshift(element);
  return myArray
}
