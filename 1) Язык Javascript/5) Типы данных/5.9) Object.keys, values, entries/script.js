//==== Task-1 ===================
// Сумма свойств объекта

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250
};

function sumSalaries(salaries) {
   let sum = 0;

   for(let value of Object.values(salaries)) {
      sum += value;
   }

   return sum;
}

console.log(sumSalaries(salaries));

//==== Task-1 ===================
// Подсчёт количества свойств объекта

function count(obj) {
   return Object.keys(obj).length;
}

let user = {
   name: 'John',
   age: 30
};

console.log(count(user));