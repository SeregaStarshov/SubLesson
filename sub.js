
const list = document.createElement('ul');
document.body.append(list);



let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let currentDay = new Date();

for (let i = 0; i < week.length; i++) {
    let day = document.createElement('li');
    day.innerHTML = week[i];
    list.append(day);
    if(i === 5 || i === 6) {
        day.style.fontStyle = 'italic';
    }
    if(i === currentDay.getDay() - 1) {
        day.style.fontWeight = 'bold';
    }
}
