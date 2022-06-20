//==== Task-1 ===================
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

function ucFirst(str) {
   if (!str) return str;

   return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('петя'));

//==== Task-2 ===================
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

function checkSpam(str) {
   let lowerCaseStr = str.toLowerCase();

   return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx');
}

console.log(checkSpam('free xxxxx'));

//==== Task-3 ===================
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
   if (str.length <= maxlength) {
      return str
   } else {
      return str.slice(0, maxlength - 1) + '…'
   }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//==== Task-4 ===================
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
   return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));