// Выбрать input типа checkbox
document.querySelectorAll('input[type="checkbox"]');

// Выбрать input типа checkbox, НЕ отмеченный
document.querySelectorAll('input[type="checkbox"]:not(:checked)');

// Найти все элементы с id=message или message-*
document.querySelectorAll('[id|="message"]');

// Найти все элементы с id=message-*
document.querySelectorAll('[id^="message-"]');

// Найти все ссылки с расширением href="...zip"
document.querySelectorAll('a[href$=".zip"]');

// Найти все элементы с data-action, содержащим delete в списке (через пробел)
document.querySelectorAll('[data-action~="delete"]');    

// Найти все элементы, у которых ЕСТЬ атрибут data-action, но он НЕ содержащит delete в списке (через пробел)
document.querySelectorAll('[data-action]:not([data-action~="delete"])');     

// Выбрать все чётные элементы списка #messages
document.querySelectorAll('#messages li:nth-child(2n)');     

// Выбрать один элемент сразу за заголовком h3#widget-title на том же уровне вложенности
document.querySelectorAll('h3#widget-title + *'); 

// Выбрать все ссылки, следующие за заголовком h3#widget-title на том же уровне вложенности
document.querySelectorAll('h3#widget-title ~ a');

// Выбрать ссылку внутри последнего элемента списка #messages
document.querySelectorAll('#messages li:last-child a');