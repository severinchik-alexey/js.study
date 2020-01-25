let surname = prompt('Какая у вас фамилия', 'Петров');
let name = prompt('Какое у вас имя', 'Петр');
let subname = prompt('Какое у вас Отчетво', 'Петрович');
let yearofbirthday = prompt('В каком году вы родились?', 'Введите год вашего рождения...');
while (isNaN(yearofbirthday) || yearofbirthday === '' || yearofbirthday === null) {
    alert('Нужно ввести цифры, повторите попытку');
    yearofbirthday = prompt('В каком году вы родились?', 'Введите год вашего рождения...');
};
let monthofbirthday = prompt('В каком месяце вы родились?', 'Введите месяц вашего рождения...');
while (isNaN(monthofbirthday) || monthofbirthday === '' || monthofbirthday === null) {
    alert('Нужно ввести цифры, повторите попытку');
    monthofbirthday = prompt('В каком месяце вы родились?', 'Введите месяц вашего рождения...');
};
let children = prompt('Сколько у вас детей (0 - ...)', '0');
while (isNaN(children) || children === '' || children === null) {
    alert('Нужно ввести цифры, повторите попытку');
    children = prompt('Сколько у вас детей (0 - ...)', '0');
};
let sex = confirm('Ваш пол мужской? (ОК или Cancel)');
let nowyear = 2020;
let nowmonth = 1;
children = (children === '0') ? 'нет' : children;
nowyear -= yearofbirthday;
nowyear = (monthofbirthday > nowmonth) ? (nowyear - 1) : (nowyear);
let adult = (nowyear >= 18) ? 'совершенолетний' : 'несовершенолетний';
nowmonth = 13 - monthofbirthday;
nowmonth = (nowmonth >= 12) ? (nowmonth = 0) : nowmonth;
sex = (sex) ? 'Мужской' : 'Женский';

alert(`   ${surname} ${name} ${subname} 
    Вам ${nowyear} лет и ${nowmonth} месяцев 
    Вы ${adult} 
    Ваш пол ${sex} 
    У вас ${children} детей`);
