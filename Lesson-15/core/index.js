// task 1

let x = 20
let y = 58
let z = 42
let additionResult = x + y + z;
console.log(additionResult);


// task 2

numberOfsecondsInMinute = 60;
numberOfminutesInHour = 60;
numberOfhoursInDay = 24;
numberOfdaysInYear = 365;
myAge = 24;
myAgeInSeconds = numberOfsecondsInMinute * numberOfminutesInHour * numberOfhoursInDay  * numberOfdaysInYear * myAge;
console.log(myAgeInSeconds);


// task 3

let count = 42;
let userName = '42';
console.log(typeof(count.toString()), typeof( `${count}`));
console.log(typeof((+userName)), typeof(parseInt(userName)));


// task 4

let a = 1;
let b = 2;
let c = "белых медведей";
let stringResult = `${a}${b} ${c}`;
console.log(stringResult);


// task 5

let access = 'доступ';
let marine = 'морпех';
let frost = 'наледь';
let across = 'попрек';
let chopped = 'рубило';
let lengthWords = (access + marine + frost + across + chopped).length;
console.log(lengthWords);


// task 6

setTimeout(() => {
    let promName = prompt('Enter your name');
    let promAge = prompt('Enter your age');

    console.log(promName);
    console.log(promAge);
}, 2000)


