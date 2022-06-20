//==== Task-1 ===================
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
   return str
      .split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
}

console.log(camelize('background-color'));

//==== Task-2 ===================
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
   return arr.filter(item => a <= item && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

//==== Task-3 ===================
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
         arr.splice(i, 1);
         i--;
      }
   }
}

let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4);

console.log(arr1);

//==== Task-4 ===================
// Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];

console.log(arr2.sort((a, b) => b - a));

//==== Task-5 ===================
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
   return arr.slice().sort();
}

let sorted = copySorted(arr3);

console.log(arr3);
console.log(sorted);

//==== Task-6 ===================
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

function Calculator() {
   this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
   };

   this.calculate = function(str) {
      let split = str.split(' '),
         a = +split[0],
         operator = split[1],
         b = +split[2]

      if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
         return NaN;
      }

      return this.methods[operator](a, b);
   }

   this.addMethod = function(name, func) {
      this.methods[name] = func;
   };
}

//==== Task-7 ===================
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 25 };
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 38 };
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 30 };

let users = [ vasya, petya, masha ];

let names = users.map((item) => item.name);

console.log(names);

//==== Task-8 ===================
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let usersMapped = users.map(user => ({
   fullName: `${user.name} ${user.surname}`,
   id: user.id
}));

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

//==== Task-9 ===================
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
function sortByAge(arr) {
   arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(users);
console.log(users);

//==== Task-10 ===================
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

let arr4 = [1, 2, 3];

function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}

shuffle(arr4);
console.log(arr4);
shuffle(arr4);
console.log(arr4);

//==== Task-11 ===================
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

function getAverageAge(users) {
   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(users));

//==== Task-12 ===================
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
   let result = [];

   for (let str of arr) {
      if (!result.includes(str)) {
         result.push(str);
      }
   }

   return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
   "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));