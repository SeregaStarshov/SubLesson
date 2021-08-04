let arr = [];

arr[0] = '439';
arr.push('322', '846', '22', '743', '42489', '3854');
console.log(arr);


for (let i = 0; i < arr.length; i++) {
    if(arr[i].startsWith(2) || arr[i].startsWith(4)) {
        console.log(arr[i]);
    }
    
}