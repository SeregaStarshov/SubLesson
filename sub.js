let number = 100;

check:
for (let i = 2; i < number; i++) {

    for (let j = 2; j < i; j++) {
        if(i % j === 0) continue check;
    }
    console.log(`${i} Делители этого числа: 1 и ${i}`);
}




let arr = [];

arr[0] = '439';
arr.push('322', '846', '22', '743', '42489', '3854');
console.log(arr);


for (let i = 0; i < arr.length; i++) {
    if(arr[i].startsWith(2) || arr[i].startsWith(4)) {
        console.log(arr[i]);
    } 
}