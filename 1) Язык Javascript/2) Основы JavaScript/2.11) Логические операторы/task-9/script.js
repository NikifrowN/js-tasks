// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let userName = prompt('Кто там?', '');

if (userName === 'Админ') {
   let password = prompt('Введите пароль', '');

   if (password === 'Я главный') {
      alert('Здравствуйте!');
   } else if (pass === '' || pass === null) {
      alert('Отменено');
   } else {
      alert('Неверный пароль');
   }
} else if (userName === '' || userName === null) {
   alert('Отменено');
} else {
   alert('Я вас не знаю');
}