
const list = document.createElement('ul');
document.body.append(list);



let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let currentDay = new Date();

for (let i = 0; i < week.length; i++) {
    let day = document.createElement('li');
    day.innerHTML = week[i];
    list.append(day);
    if(i === 0 || i === 6) {
        day.style.fontStyle = 'italic';
    }
    if(i === currentDay.getDay()) {
        day.style.fontWeight = 'bold';
    }
}
