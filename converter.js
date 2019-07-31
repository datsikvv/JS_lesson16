const request = require('request');

let curs = 'USA';
//let curs = 'EUR';
//let curs = 'RUR';


let operation = 'sale';
//let operation = 'buy';

let amount = 1000;

 request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3&fbclid=IwAR2rmlXfaWPAjW3KUypbBG63SMCIDpCJd8kZMp-gPlmmV8_aJ3MRXnvAkVY', function (error, response, body) {

  let fileJson = JSON.parse(body);
  roundTwoDecimals(amount);

  if (curs === 'USA') {
      sale = fileJson[2].sale;
      buy = fileJson[2].buy;
  } else if (curs === 'EUR') {
      sale = fileJson[0].sale;
      buy = fileJson[0].buy;
  } else if (curs === 'RUR') {
      sale = fileJson[1].sale;
      buy = fileJson[1].buy;
  };

 if (operation === 'sale') {
    convertToCurrency(amount);
 } else {
    convertToUa(amount);
 };
});



function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  };

function convertToCurrency(amount) {
  let result = roundTwoDecimals(amount / sale).toFixed(2);
  console.log('Обмен по курсу ' + sale);
  console.log('Вы получаете ' + result + ' ' + curs);
  };

function convertToUa(amount) {
  let result = roundTwoDecimals(amount * buy).toFixed(2);
  console.log('Обмен по курсу ' + buy);
  console.log('Вы получаете ' + result + ' ' + 'UAH');
  };


// class Converter {
//   constructor(baseCurrencyUs) {
//     this.baseCurrencyUs = baseCurrencyUs;
// 	 }
// 	 roundTwoDecimals(amount) {
//     return Math.round(amount * 100) / 100;
//   }
//   convertToUa(amount) {
//     return this.roundTwoDecimals(amount * this.baseCurrencyUs).toFixed(2);
//   }
//   convertToUs(amount) {
//     return this.roundTwoDecimals(amount / this.baseCurrencyUs).toFixed(2);
//   }
// }

