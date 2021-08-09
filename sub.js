
// const list = document.createElement('ul');
// document.body.append(list);



// let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// let currentDay = new Date();
// console.log(currentDay.getDate())

// for (let i = 0; i < week.length; i++) {
//     let day = document.createElement('li');
//     day.innerHTML = week[i];
//     list.append(day);
//     if(i === 5 || i === 6) {
//         day.style.fontStyle = 'italic';
//     }
//     if((i) === currentDay.getDay() - 1) {
        
//         day.style.fontWeight = 'bold';
//     }
// }

let currentDay = new Date();

let currentTimes = currentDay.toLocaleString('ru', 
{weekday: 'long',
day: '2-digit',
month: 'long',
});



function getTimes(time) {
    let strHours = '';
    let str = '';
    if(time === currentDay.getHours()) {
        if (time === 1 || time === 21) {
            strHours = 'час';
            str = `${time} ${strHours}`;
        } else if(time > 1 && time < 5 || time > 21 && time <= 24) {
            strHours = 'часа';
            str = `${time} ${strHours}`;
        } else if(time >= 5 && time <= 20 || time === 0) {
            strHours = 'часов';
            str = `${time} ${strHours}`;
            
        }
    } else if(time === currentDay.getMinutes()) {
        if (time === 1 || time === 21 || time === 31 || time === 41 || time === 51) {
            strHours = 'минута';
            str = `${time} ${strHours}`;
        } else if(time > 1 && time < 5 || time > 21 && time <= 24 || time > 31 && time <= 34 || time > 41 && time <= 44 || time > 51 && time <= 54) {
            strHours = 'минуты';
            str = `${time} ${strHours}`;
        } else if(time >= 5 && time <= 20 || time === 0 || time > 24 && time <= 30 || time > 34 && time <= 40 || time > 44 && time <= 50 || time > 54 && time <= 60) {
            strHours = 'минут';
            str = `${time} ${strHours}`;
            
        }
    } else if(time === currentDay.getSeconds()) {
        if (time === 1 || time === 21 || time === 31 || time === 41 || time === 51) {
            strHours = 'секунда';
            str = `${time} ${strHours}`;
        } else if(time > 1 && time < 5 || time > 21 && time <= 24 || time > 31 && time <= 34 || time > 41 && time <= 44 || time > 51 && time <= 54) {
            strHours = 'секунды';
            str = `${time} ${strHours}`;
        } else if(time >= 5 && time <= 20 || time === 0 || time > 24 && time <= 30 || time > 34 && time <= 40 || time > 44 && time <=50 || time > 54 && time <= 60) {
            strHours = 'секунд';
            str = `${time} ${strHours}`;
        }
    }
    
    return str;
}

function addNumber(time) {
    
   return `${time.toLocaleDateString()} - ${time.toLocaleTimeString()}`;
}


console.log(`Сегодня ${currentTimes} ${currentDay.getFullYear()} года ${getTimes(currentDay.getHours())} ${getTimes(currentDay.getMinutes())} ${getTimes(currentDay.getSeconds())}`);
console.log(addNumber(currentDay));

let updateTime = setInterval(() => console.log(new Date()), 1000);
