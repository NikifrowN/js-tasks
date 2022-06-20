//==== Task-1 ===================
// Создайте дату
let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

//==== Task-2 ===================
// Покажите день недели
function getWeekDay(date) {
   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

   return days[date.getDay()];
}

console.log(getWeekDay(date));

//==== Task-3 ===================
// День недели в европейской нумерации
function getLocalDay(date) {
   let day = date.getDay();

   return day == 0 ? 7 : day;
}

console.log(getLocalDay(date));

//==== Task-4 ===================
// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
   date.setDate(date.getDate() - days);
   return date.getDate();
}

console.log(getDateAgo(date, 1));

//==== Task-5 ===================
// Последнее число месяца?
function getLastDayOfMonth(year, month) {
   let date = new Date(year, month + 1, 0);
   return date.getDate();
}

console.log(getLastDayOfMonth(2022, 9));

//==== Task-6 ===================
// Сколько сегодня прошло секунд?
function getSecondsToday() {
   let now = new Date();

   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

   let diff = now - today;

   return Math.round(diff / 1000);
}

console.log(getSecondsToday());

//==== Task-7 ===================
// Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
   let now = new Date();

   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

   let diff = tomorrow - now;

   return Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());

//==== Task-8 ===================
// Форматирование относительной даты
function formatDate(date) {
   let diff = new Date() - date;
   if (diff < 1000) { 
      return 'прямо сейчас';
   }

   let sec = Math.floor(diff / 1000);
   if (sec < 60) {
      return sec + ' сек. назад';
   }

   let min = Math.floor(diff / 60000); 
   if (min < 60) {
      return min + ' мин. назад';
   }

   let d = date;
   d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
   ].map(component => component.slice(-2)); 

   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}