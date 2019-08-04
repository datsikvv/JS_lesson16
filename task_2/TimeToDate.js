class TimeToDate {
	constructor() {
       this.now = new Date();
    };
    
    timeToNewYear() {
let newYearDay = new Date( this.now.getFullYear() + 1, 0, 1);
let ms = newYearDay.getTime() - this.now.getTime();

this.calculate(ms);

console.log('Сегодня ' +  this.now.getDate() + '.' + this.now.getMonth() + '.' + this.now.getFullYear());
console.log('Новый год ' +  '01'  + ' Января ' + newYearDay.getFullYear());

this.result(ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
};

timeToBirthday(dd, mm, yyyy) {
let birthday = new Date( yyyy, mm -1, dd);
let ms = this.now.getTime() - birthday.getTime();

this.calculate(ms);

console.log('Сегодня ' +  this.now.getDate() + '.' + this.now.getMonth() + '.' + this.now.getFullYear());
console.log('День Рождения ' +  dd + '.' + mm + '.' + yyyy);

this.result(ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
};

timeToNextBirthday(dd, mm, yyyy) {
  let birthYear;

  if (mm - 1 < this.now.getMonth()) {
  	birthYear = this.now.getFullYear() + 1;
  } else {
  	birthYear = this.now.getFullYear();
  };

let birthday = new Date( birthYear, mm - 1, dd);
let ms = birthday.getTime() - this.now.getTime();

this.calculate(ms);

console.log('Сегодня ' +  this.now.getDate() + '.' + this.now.getMonth() + '.' + this.now.getFullYear());
console.log('День Рождения ' +  dd + '.' + mm + '.' + birthYear);

this.result(ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
};
	
result(ms, sec, min, hour, day, week, month, year) {
    console.log('==============================================')
    console.log('До Вашей даты: ')
    console.log ('Миллисекунд ' + ms);
    console.log ('Секунд ' + this.sec);
    console.log ('Минут ' + this.min);
    console.log ('Часов ' + this.hour);
    console.log('Дней ' + this.day);
    console.log('Недель ' + this.week);
    console.log('Месяцев ' + this.month);
    console.log ('Лет ' + this.year);
    console.log('==============================================')
};

calculate(ms) {
    this.sec = (ms/1000).toFixed(0);
    this.min = (this.sec/60).toFixed(0);
    this.hour = (this.min/60).toFixed(0);
    this.day = (this.hour/24).toFixed(0);
    this.week = (this.day/7).toFixed(0);
    this.year = (this.day/365).toFixed(2);
    this.month = (this.year*12).toFixed(2);
    return this.sec, this.min, this.hour, this.day, this.week, this.month, this.year;
};
}

module.exports = TimeToDate;