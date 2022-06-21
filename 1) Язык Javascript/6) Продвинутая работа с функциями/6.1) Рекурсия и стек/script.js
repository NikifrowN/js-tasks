//==== Task-1 ===================
// Вычислить сумму чисел до данного
// Цикл
function sumTo1(n) {
   let sum = 0;
   for (let i = 0; i <= n; i++) {
      sum += i;
   }
   return sum;
}

console.log(sumTo1(3));

// Рекурсия
function sumTo2(n) {
   return n == 1 ? 1 : (n + sumTo2(n - 1));
}

console.log(sumTo2(3));

// Арифметическая прогрессия
function sumTo3(n) {
   return n * (n + 1) / 2;
}

console.log(sumTo3(3));

//==== Task-2 ===================
// Вычислить факториал

function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(n));

//==== Task-3 ===================
// Числа Фибоначчи

function fib(n) {
   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

//==== Task-4 ===================
// Вывод односвязного списка

let list = {
   value: 1,
   next: {
      value: 2,
      next: {
         value: 3,
         next: {
         value: 4,
         next: null
         }
      }
   }
};

function printList(list) {
   console.log(list.value);

   if (list.next) {
      printList(list.next);
   }
}

printList(list);

//==== Task-4 ===================
// Вывод односвязного списка в обратном порядке

function printReverseList(list) {
   if (list.next) {
      printReverseList(list.next);
   }

   console.log(list.value);
}

printReverseList(list);