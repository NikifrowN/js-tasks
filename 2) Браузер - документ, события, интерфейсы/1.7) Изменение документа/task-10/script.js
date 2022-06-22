let rows = document.querySelectorAll('#table tr');

let sortedRows = Array.from(rows).slice(1)
   .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
   
table.tBodies[0].append(...sortedRows);