const TimeToDate = require('./TimeToDate');  // Подключение модуля
// Задаем входящие данные. Год, месяц и дату рождения
let birthYear = 1987; 
let birthMonth = 10;
let birthDate = 18;

const times = new TimeToDate();  //создание нового класса с помощью конструктора
times.timeToNextBirthday(birthDate, birthMonth, birthYear); //Подсчет сколько времени до следующего Дня рождения
times.timeToBirthday(birthDate, birthMonth, birthYear);   //Подсчет сколько прошло времени с Дня рождения
times.timeToNewYear();  //Подсчет времени до следующего Нового Года

