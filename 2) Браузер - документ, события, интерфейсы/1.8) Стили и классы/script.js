function showNotification({top = 0, right = 0, html}) {
   let elem = document.createElement('div');

   elem.style.top = top + 'px';
   elem.style.right = right + 'px';

   elem.innerHTML = html;
   document.body.append(elem);

   setTimeout(() => elem.remove(), 1500);
}

showNotification({
   top: 10,
   right: 10,
   html: 'Hello',
});