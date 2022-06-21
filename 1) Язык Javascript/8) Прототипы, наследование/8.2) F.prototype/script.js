//==== Task-2 ===================
// Создайте новый объект с помощью уже существующего

function Rabbit(speed) {
   this.speed = speed;
}

const rabbit1 = new Rabbit(4);
const rabbit2 = new rabbit1.constructor(12);

console.log(rabbit1);
console.log(rabbit2);