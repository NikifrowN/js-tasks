//==== Task-1 ===================
// Работа с прототипами

// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)

// 1. true из объекта rabbit.
// 2. null из объекта animal.
// 3. undefined, т.к. такого свойства нет.

//==== Task-2 ===================
// Алгоритм поиска

let head = {
   glasses: 1
};

let table = {
   pen: 3,
   __proto__: head,
};

let bed = {
   sheet: 1,
   pillow: 2,
   __proto__: table,
};

let pockets = {
   money: 2000,
   __proto__: bed,
};

//==== Task-3 ===================
// Куда будет произведена запись?

// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal1 = {
  eat() {
    this.full = true;
  }
};

let rabbit1 = {
  __proto__: animal1
};

rabbit1.eat();

// rabbit из-за this. 

//==== Task-4 ===================
// Почему наедаются оба хомяка?

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
   stomach: [],
 
   eat(food) {
     this.stomach.push(food);
   }
 };
 
 let speedy = {
   __proto__: hamster
 };
 
 let lazy = {
   __proto__: hamster
 };
 
 // Этот хомяк нашёл еду
 speedy.eat("apple");
 alert( speedy.stomach ); // apple
 
 // У этого хомяка тоже есть еда. Почему? Исправьте
 alert( lazy.stomach ); // apple

// Ошибка происходит из-за того, что при вызове метода eat, мы изменяем stomach прототипа, а не хомяков, т.к. у них
// нет stomach. Если каждому из хомяков добавить stomach - все будет робатать корректно.