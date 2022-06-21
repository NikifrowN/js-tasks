//==== Task-1 ===================
// Вывод каждую секунду

function printNumbers(from, to) {
   let current = from;

   let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
         clearInterval(timerId);
      }
      current++;
   }, 1000);
}

printNumbers(2, 10);

//==== Task-2 ===================
// Что покажет setTimeout?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
   i++;
}

// setTimeout выполнится только после завершения выполнения кода. i будет равно 100000000.