let lis = document.querySelectorAll('li');

for (let li of lis) {
   const nestedLisCount = li.querySelectorAll('li').length;

   if (!nestedLisCount) {
      continue;
   }

   li.firstChild.data += ' [' + nestedLisCount + ']';
}