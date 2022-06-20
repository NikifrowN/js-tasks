//==== Task-1 ===================
// Хранение отметок "не прочитано"
let messages = [
   {text: "Hello", from: "John"},
   {text: "How goes?", from: "John"},
   {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

//==== Task-1 ===================
// Хранение времени прочтения

let readMap = new WeakMap();
let date = new Date;

readMap.set(messages[0], date.toDateString());