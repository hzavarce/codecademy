const _ = {
    
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    //inRange() Checks if n is between start and up to, but not including, end.  If end is not specified , it's set to start with a start set to 0.  If start is greater than end the params are swapped to support negative ranges.
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      } if (start > end){
        let temp = end;
        end = start;
        start = temp;
      } 
      let isInRange = start <= number && number < end;
      return isInRange;
    },
    //words() method separates the words in a string and created an array with the separated words
    words(string) {
        let words = string.split(' ');
        return words;
    },
    //.pad() Method Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
    pad(string, length) {
        if(length <= string.length){
        return string;
        } 
        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
     //.has() ==> .has(object, path).  Checks if path is a direct property of object. 
    has(object, key) {
        const hasValue = object[key];
        if (hasValue != undefined){
          return true;
        } else {
          return false;
     }
     },
    //.invert()  Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
    invert(object){
        let invertedObject = {};
        for(let key in object){
            let originalValue = object[key];
            invertedObject = {originalValue : key};
        }
        return invertedObject;
    },
    // .findKey() it returns the key of the first element predicate returns truthy for instead of the element itself.
    /*.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
    .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
    .findKey() returns the first key that has a value that returns a truthy value from the predicate function
    .findKey() returns undefined if no values return truthy values from the predicate function */
    findKey(object, predicate) {
      for(let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if(predicateReturnValue === true){
          return key;
        }
      }
      return undefined;
    },
    // .drop() - Creates a slice of an array with n elements dropped from the beginning
    drop(array, n){
      if(n === undefined){
        n = 1; 
      }
      let droppedArray = array.slice(n, array.length);
      return droppedArray;
    },
    // .dropWhile() - Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
    /* .dropWhile() takes two arguments: an array and a predicate function
  The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
  .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value */
    dropWhile(array, predicate) {
      const cb = (element, index) => {
        return !predicate(element, index, array);
      };
      let dropNumber = array.findIndex(cb);
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    // .chunk() - Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
    /*.chunk() takes two arguments: an array and a size
    .chunk() breaks up the supplied array into arrays of the specified size
    .chunk() returns an array containing all of the previously-created array chunks in the order of the original array
    If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
    If no size is supplied to the method, the size is set to 1 */
    chunk(array, size) {
        if (size === undefined) {
          size = 1;
        };
        let arrayChunks = [];
        for (i = 0; i < array.length; i += size){
          let arrayChunk = array.slice(i, i + size);
          arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
      }
};




// Do not write or modify code below this line.
module.exports = _;
