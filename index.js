function customFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
}
const numbers = [5, 10, 15, 20];
const result = customFilter(numbers, (num) => num > 10);
console.log(result); // [15, 20]

// Task 2: Custom ForEach Function
function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
}
const items = ["apple", "banana", "cherry"];
customForEach(items, (item, index) => {
  console.log(`${index}: ${item}`);
});

// Task 3: Custom Map Function
function customMap(array, callback) {
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
      resultArray.push(callback(array[i], i, array));
    }
    return resultArray;
}
const numbersToDouble = [1, 2, 3];
const customMapResult = customMap(numbersToDouble, (num) => num * 2);
console.log(customMapResult); // [2, 4, 6]

// Extra: Implement these methods as array built-in methods.
Array.prototype.customFilter = function(callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        resultArray.push(this[i]);
      }
    }
    return resultArray;
};
  
const numbers = [5, 10, 15, 20];
const result = numbers.customFilter((num) => num > 10);
console.log(result); // [15, 20]
  
