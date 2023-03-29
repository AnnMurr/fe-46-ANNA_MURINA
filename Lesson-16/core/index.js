// task 1

const str = 'true';
const bool = false;
const numeric = 17;
const und = undefined;
const n = null;

console.log(typeof str, typeof bool, typeof numeric, typeof und, typeof n);


// task 2

const height = 15
const width = 20

if (height > width) {
    console.log(height);
} else if (width > height) {
    console.log(width)
}


// task 3

let count = 1;
const lastnum = 20;

while (count <= lastnum) {
    if (count % 3 === 0) {
        console.log(count);
    }
    count++;
}

// task 4 

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = (documents && key && pen && apple || orange);
console.log(shouldGoToWork);


// task 5 

const num = parseInt(prompt('enter the number:'));

if (num % 5 === 0 && num % 3 === 0) {
    alert('FizBuz');
} else if (num % 5 === 0) {
    alert('Fiz');
} else if (num % 3 === 0) {
    alert('Buz');
} else if (!num) {
    alert('value is undefined')
} else {
    alert("does not divide without a remainder")
}


// task 6 

let age = parseInt(prompt('введите свой возраст:'));
const age18 = 18;
const age16 = 16;

if (!age) {
    alert('возвраст не введен')
} else if (age >= age18) {
    alert('Попей пивка');
} else if (age < age18 && age >= age16) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else {
    alert('Пей колу')
}


// task 7

const south = 'юг',
    north = 'север',
    west = 'запад',
    east = 'восток'

const data = prompt('введите направление');

switch (data.toLowerCase()) {
    case south:
        alert('на юг пойдешь счастье найдешь');
        break;
    case north:
        alert('на север пойдешь много денег найдешь');
        break;
    case west:
        alert('на запад пойдешь верного друга найдешь');
        break;
    case east:
        alert('на восток пойдешь разработчиком станешь');
        break;
    default:
        alert('попробуйте еще раз');
        break;
}

// ADVANCED level
// Task 1

let prompMess = prompt('Введите ваше имя и фамилию');

prompMess = prompMess.toLowerCase().split(' ');
for (let i = 0; i < prompMess.length; i++) {
    prompMess[i] = prompMess[i].charAt(0).toUpperCase() + prompMess[i].slice(1);
}
alert(`Привет, ${prompMess.join(' ')} !`);


// task 2

let number = +prompt('введите число');
let subtract = +prompt('cколько отнять');
let add = +prompt('cколько прибавить');
let multiply = +prompt('cколько умножить');
let divide = +prompt('cколько разделить');

if (!number || !subtract || !add || !multiply || !divide) {
    alert('Попробуйте еще раз')
} else {
    let calculationResult = (((number - subtract) + add) * multiply) / divide;
    alert(`((((${number} - ${subtract}) + ${add}) * ${multiply} / ${divide} = ${calculationResult}`);
}

// task 3

let simbol = "#";
for (let a = 0; a < 6; a++) {
    console.log(simbol);
    simbol += simbol[0];
}