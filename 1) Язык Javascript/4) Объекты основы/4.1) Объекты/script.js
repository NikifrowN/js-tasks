//==== Task-1 ===================
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
let user = {};
// Добавьте свойство name со значением John.
user.name = 'John';
// Добавьте свойство surname со значением Smith.
user.surname = 'Smith';
// Измените значение свойства name на Pete.
user.name = 'Pete';
// Удалите свойство name из объекта.
delete user.name;

//==== Task-2 ===================
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
   for (let key in obj) {
      return false;
   }
   return true;
}

let obj = {};
console.log(isEmpty(obj));
obj.key = 'value';
console.log(isEmpty(obj));

//==== Task-3 ===================
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
// const user = {
//    name: "John"
//  };

// Да. user хранит только ссылку на объект. Это изменять нельзя, а сам объект можно.

//==== Task-4 ===================
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let sum = 0;

for (let key in salaries) {
   sum += salaries[key];
}

console.log(sum);

//==== Task-5 ===================
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
   for (let key in obj) {
      if (typeof obj[key] == 'number') {
         obj[key] *= 2;
      }
   }
}

let menu = {
   width: 200,
   height: 300,
   title: "My menu" 
};

multiplyNumeric(menu);

console.log(menu);