let lang = prompt('На какой язык переключиться - ru/en?', '');

// if(lang === 'ru') {
//    console.log(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
// } else if(lang === 'en') {
//    console.log(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
// }

// switch (lang) {
//     case 'ru':
//         console.log(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']);
//         break;
//     case 'en':
//         console.log(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
//         break;
//     default:
//         console.log('Нет такого языка!');
// }

let arr = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(arr[lang])


// let namePerson = prompt('Введите имя Артем, Максим или любое другое', 'Артем');
// let message = (namePerson === 'Артем') ? console.log('Директор') :
// (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');