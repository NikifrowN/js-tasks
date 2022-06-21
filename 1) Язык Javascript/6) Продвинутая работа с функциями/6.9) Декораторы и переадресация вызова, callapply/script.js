//==== Task-1 ===================
// Декоратор-шпион

function spy(func) {
   function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
   }

   wrapper.calls = [];

   return wrapper;
}

function work(a, b) {
   console.log( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

//==== Task-2 ===================
// Задерживающий декоратор

function f(x) {
   console.log(x);
}

function delay(f, ms) {
   return function() {
      setTimeout(() => f.apply(this, arguments), ms);
   };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

//==== Task-3 ===================
// Декоратор debounce

function debounce(f, ms) {
   let isCooldown = false;

   return function() {
      if (isCooldown) return;

      f.apply(this, arguments);

      isCooldown = true;

      setTimeout(() => isCooldown = false, ms);
   };
}

let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

//==== Task-4 ===================
// Тормозящий (throttling) декоратор

function throttle(func, ms) {

   let isThrottled = false;
   let savedArgs;
   let savedThis;

   function wrapper() {
      if (isThrottled) { // (2)
         savedArgs = arguments;
         savedThis = this;
         return;
      }

      func.apply(this, arguments); // (1)

      isThrottled = true;

      setTimeout(function() {
         isThrottled = false; // (3)
         if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
         }
      }, ms);
   }

   return wrapper;
}

function f(a) {
   console.log(a)
}

 // f1000 передаёт вызовы f максимум раз в 1000 мс
let f11000 = throttle(f, 1000);

 f11000(1); // показывает 1
 f11000(2); // (ограничение, 1000 мс ещё нет)
 f11000(3); // (ограничение, 1000 мс ещё нет)

 // когда 1000 мс истекли ...
 // ...выводим 3, промежуточное значение 2 было проигнорировано