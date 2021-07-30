let num = 266219;
let str = String(num);
let arr = str.split('');

// let result = arr.reduce((mul, item) => mul * item, 1);
// console.log(result);
// let numberPow1 = result1 ** 3;


let result2 = 1;

for (let i = 0; i < arr.length; i++) {
    result2 *= arr[i];
}
console.log(result2);

let numberPow2 = result2 **3;
console.log(numberPow2);
let strNumberPow2 = String(numberPow2);
let twoNumbers = +strNumberPow2.slice(0, 2);
console.log(twoNumbers);