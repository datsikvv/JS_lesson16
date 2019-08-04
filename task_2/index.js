const TimeToDate = require('./TimeToDate');
let birthYear = 1987;
let birthMonth = 10;
let birthDate = 18;


const times = new TimeToDate();
times.timeToNextBirthday(birthDate, birthMonth, birthYear);
times.timeToBirthday(birthDate, birthMonth, birthYear);
times.timeToNewYear();


