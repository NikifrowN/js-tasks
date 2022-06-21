//==== Task-1 ===================
// Добавить функциям метод "f.defer(ms)"

Function.prototype.defer = function(ms) {
   setTimeout(this, ms);
}

function f() {
   console.log("Hello!");
}

f.defer(1000);

//==== Task-2 ===================
// Добавьте функциям декорирующий метод "defer()"

Function.prototype.defer = function(ms) {
   let f = this;
   return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
   }
}

function f(a, b) {
   console.log( a + b );
}

f.defer(1000)(1, 2);