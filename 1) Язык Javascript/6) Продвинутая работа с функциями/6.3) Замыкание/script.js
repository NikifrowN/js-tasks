//==== Task-1 ===================
// Независимы ли счётчики?
function makeCounter() {
   let count = 0;
 
   return function() {
     return count++;
   };
 }
 
 let counter = makeCounter();
 let counter2 = makeCounter();
 
 alert( counter() ); // 0
 alert( counter() ); // 1

 alert( counter2() ); // 0
 alert( counter2() ); // 1
// counter и counter2 созданы разными вызовами функции

//==== Task-2 ===================
// Объект счётчика
function Counter() {
   let count = 0;
 
   this.up = function() {
     return ++count;
   };
   this.down = function() {
     return --count;
   };
 }
 
 let counter1 = new Counter();
 
 alert( counter1.up() ); // 1
 alert( counter1.up() ); // 2
 alert( counter1.down() ); // 1
// Всё написано правильно.

//==== Task-3 ===================
// Функция в if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Ошибка, т.к. функция sayHi() существует только внутри блока if, соответственно у неё нет доступа к глобальным переменным.

//==== Task-4 ===================
// Сумма с помощью замыканий

function sum(a){
   return function(b) {
      return a + b;
   }
}

console.log(sum(2)(3));

//==== Task-5 ===================
// Фильтрация с помощью функции

function inBetween(a, b) {
   return function(n) {
      return n >= a && n <= b;
   }
}

function inArray(arr) {
   return function(n) {
      return arr.includes(n);
   }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(2,4)));
console.log(arr.filter(inArray([3, 12, 6])));

//==== Task-6 ===================
// Сортировать по полю

let users = [
   { name: "John", age: 20, surname: "Johnson" },
   { name: "Pete", age: 18, surname: "Peterson" },
   { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
   return (a, b) => a[field] > b[field] ? 1 : -1;
}

console.log(users.sort(byField('age')));

//==== Task-7 ===================
// Армия функций

function makeArmy() {
   let shooters = [];

   for (let i = 0; i < 10; i++) {
      let shooter = function() {
         console.log(i);
      };
      shooters.push(shooter);
   }
   return shooters;
}

let army = makeArmy();

army[0]();
army[3]();