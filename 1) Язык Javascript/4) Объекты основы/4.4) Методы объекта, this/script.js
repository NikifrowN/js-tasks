//==== Task-1 ===================
// Каким будет результат выполнения этого кода?

let user = {
  name: "Джон",
  go: function() { alert(this.name) }
}

// (user.go)()

// Ошибка, т.к. пропущена точка с запятой после объявления объекта.

//==== Task-2 ===================
// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// 1. this ссылается на объект перед точкой
// 2. То же, что и в первом случае.
// 3. Не происходит передачи значение this.
// 4. Не происходит передачи значение this.

//==== Task-3 ===================
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user1 = makeUser();

alert( user1.ref.name ); // Каким будет результат?

// Ошибка. makeUser() вызвана как функция, а не как метод. 

//==== Task-4 ===================
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
   read() {
      this.a = +prompt('a', 0);
      this.b = +prompt('b', 0);
   },
   sum() {
      return this.a + this.b;
   },
   mul() {
      return this.a * this.b;
   }
}

//==== Task-5 ===================
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().down().showStep(); // 1

let ladder = {
   step: 0,
   up() {
      this.step++;
      return this;
   },
   down() {
      this.step--;
      return this;
   },
   showStep() {
      alert( this.step );
      return this;
   }
}

ladder.up().up().down().up().down().showStep();