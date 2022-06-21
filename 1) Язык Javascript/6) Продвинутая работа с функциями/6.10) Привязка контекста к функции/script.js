//==== Task-1 ===================
// Связанная функция как метод

// Что выведет функция?

function f() {
  alert( this ); // ?
}

let user1 = {
  g: f.bind(null)
};

user1.g();

// null, т.к. когда мы запускаем user.g(), исходная функция вызывается с this == null.

//==== Task-2 ===================
// Что выведет этот код?

function f() {
   alert(this.name);
 }
 
 f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
 
 f();

// Вася, т.к. нельзя изменить существующую привязку.

//==== Task-3 ===================
// Свойство функции после bind

function sayHi() {
   alert( this.name );
 }
 sayHi.test = 5;
 
 let bound = sayHi.bind({
   name: "Вася"
 });
 
 alert( bound.test ); // что выведет? почему?

// undefined, т.к. результатом работы bind явялется другой объект. 