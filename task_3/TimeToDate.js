const moment = require('moment'); // подключение модуля https://momentjs.com/

class TimeToDate {
    constructor() {
		this.now = moment();
		this.newYearDay = moment().startOf('year').add(1, 'years');  
	};
    
    //Подсчет времени до следующего Нового Года
    timeToNewYear() {
        this.calculate(this.newYearDay, this.now );
        this.showTodayDay();
        this.showTargetDay(this.newYearDay);
        this.showResult(this.ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
    };

    //Подсчет сколько прошло времени с Дня рождения
    timeToBirthday(dd, mm, yyyy) {
        let birthday = moment().set({'year': yyyy, 'month': mm, 'date': dd});

        this.calculate(this.now, birthday );
        this.showTodayDay();
        this.showTargetDay( birthday );
        this.showResult(this.ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
    };
    
    //Подсчет сколько времени до следующего Дня рождения
    timeToNextBirthday(dd, mm, yyyy) {
        let birthYear;

        if (mm - 1 < moment().get('month')) {
          birthYear = moment().add(1, 'years').get('year');
        } else {
          birthYear = moment().get('year');
        };

        let birthday = moment().set({'year': birthYear, 'month': mm, 'date': dd}); 
        
        this.calculate( birthday, this.now );
        this.showTodayDay();
        this.showTargetDay( birthday );
        this.showResult(this.ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year);
    };
    
    //Производим расчет
    calculate(dayTo, dayFrom) {
    	this.ms = dayTo.diff(dayFrom);
        this.sec = dayTo.diff(dayFrom, 'seconds')
        this.min = dayTo.diff(dayFrom, 'minutes')
        this.hour = dayTo.diff(dayFrom, 'hours');
        this.day = dayTo.diff(dayFrom, 'days');
        this.week = dayTo.diff(dayFrom, 'weeks');
        this.year = dayTo.diff(dayFrom, 'years');;
        this.month = dayTo.diff(dayFrom, 'month');
        return this.ms, this.sec, this.min, this.hour, this.day, this.week, this.month, this.year;
    };

    //Вывод результата
    showResult(ms, sec, min, hour, day, week, month, year) {
        console.log('==============================================')
        console.log('До Вашей даты: ')
        console.log ('Миллисекунд ' + this.ms);
        console.log ('Секунд ' + this.sec);
        console.log ('Минут ' + this.min);
        console.log ('Часов ' + this.hour);
        console.log('Дней ' + this.day);
        console.log('Недель ' + this.week);
        console.log('Месяцев ' + this.month);
        console.log ('Лет ' + this.year);
        console.log('==============================================')
    };
    
    //Вывод сегодняшней даты
    showTodayDay() {
        console.log('Сегодня - ' +  this.now.format("Do MMMM YYYY"));
    };
    
    //Вывод даты отноительно которой производим расчет
    showTargetDay(date) {
        console.log('Ваша дата - ' +  date.format("Do MMMM YYYY"));
    };

};

module.exports = TimeToDate;




























// class TimeToDate {



// }