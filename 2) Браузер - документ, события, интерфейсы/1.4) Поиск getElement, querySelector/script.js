// Поиск элементов
// Как найти?…

// Таблицу с id="age-table".
let table = document.querySelector('#age-table');

// Все элементы label внутри этой таблицы (их три).
let labels = table.querySelectorAll('#age-table label');

// Первый td в этой таблице (со словом «Age»).
let td = table.querySelector('td');

// Форму form с именем name="search".
let form = document.querySelector('form[name="search"]');

// Первый input в этой форме.
let firstInput = form.querySelector('input');

// Последний input в этой форме.
let inputs = form.querySelectorAll('input');
let lastInput = inputs[inputs.length - 1];