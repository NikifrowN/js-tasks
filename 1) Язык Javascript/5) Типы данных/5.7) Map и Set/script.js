//==== Task-1 ===================
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
   return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

//==== Task-2 ===================
// Отфильтруйте анаграммы
function aclean(arr) {
   let map = new Map();

   for (let word of arr) {
      // Приводим все слова массива к одному виду и добавляем в map
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
   }

   return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

//==== Task-3 ===================
// Перебираемые ключи
let map = new Map();

map.set("name", "John");
//Создаём массив из ключей
let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);