let str = ' На улице испортилась погода и идет дождь. ';
let string;

// function transformString(item) {
//     if (item === '' || Number(item) || item === null) {
//         alert('Вы ввели неверное значение!');
//     }

//     let arr = item.split('');

//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i] === " ") {
//             arr.splice(i, 1);
//         }
//     }

//     if (arr.length < 30) {
//         return arr;
//     }
//     string = arr.slice(0, 31).join('');
//     string += '...';
//     return string;
    
// }

// transformString(str);
// console.log(string);
// Как можно сделать решение короче?

function transformString(item) {
    if (item === '' || Number(item) || item === null) {
        alert('Вы ввели неверное значение!');
    }
    string = item.trim().slice(0, 31);
    string += '...';
}
transformString(str)
console.log(string)