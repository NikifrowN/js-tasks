//==== Task-1 ===================
// Дочерние элементы в DOM

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

// div
document.body.firstElementChild;
// ul
document.body.lastElementChild;
// li
document.body.lastElementChild.lastElementChild;

//==== Task-2 ===================
// Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null?
// Да, lastChild всегда последний.
// Правда, что elem.children[0].previousSibling всегда равен null ?
// Нет, потому что children[0] - потом элемент. Перед ним может быть другой узел.