function heavyFactorial(n){
    if(n === 0 || n === 1) return 1;

    return n * heavyFactorial(n -1)
}
const createCalculatorCache = () => {
    const cache = {};
    return function(number){
    if(cache[number] !== undefined){
        return cache[number];
    }

    const result = heavyFactorial(number);
    cache[number] = result;

    return result;
    };
}

const calculatorCache = createCalculatorCache();

const calculateFactorialForInput = function(){
   const num = parseInt(document.getElementById("number-input").value)
   const resultDisplay = document.getElementById("result-display")

   if(isNaN(num)){
    resultDisplay.innerHTML = `
    <p style="color: #F44336">Please enter a valid number</p>
    `;
    return;
   }
   const result = calculatorCache(num);

   resultDisplay.innerHTML = `
   <p>Factorial of ${num} is: <strong>${result}</strong></p>
   `
}




// Bubble Sort Function
function bubbleSortFun(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = 
                            [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const arr = [34, 12, 5, 78, 23, 56, 90, 43, 21, 67, 89, 2, 15, 73, 49, 33, 11, 25, 88, 77, 60, 3, 45, 54, 91, 18, 26, 30, 72, 70, 16, 4, 99, 82, 39, 48, 8, 63, 29, 97, 10, 24, 53, 1, 62, 32, 95, 38, 86, 19, 71, 41, 14, 87, 35, 44, 100, 20, 68, 75, 69, 59, 42, 50, 9, 17, 27, 40, 13, 31, 94, 76, 12
];
console.log(bubbleSortFun(arr)); 


const calculate = calculateWithCacheFunction(bubbleSortFunction);


function sortNumbers() {
    const input = document.getElementById("number-input").value.trim();
    const resultDisplay = document.getElementById("result-display");

    if (!input) {
        resultDisplay.innerHTML = `<p style="color: #F44336">Please enter valid numbers separated by commas or spaces.</p>`;
        return;
    }

    const numbers = input.split(/[\s,]+/).map(Number);
    if (numbers.some(isNaN)) {
        resultDisplay.innerHTML = `<p style="color: #F44336">Please enter only valid numbers separated by commas or spaces.</p>`;
        return;
    }

    const sortedNumbers = calculate(input);
    resultDisplay.innerHTML = `<p>Sorted Numbers: <strong>${sortedNumbers.join(", ")}</strong></p>`;
}

function clearResult() {
    document.getElementById("number-input").value = "";
    document.getElementById("result-display").innerHTML = "";
}

  