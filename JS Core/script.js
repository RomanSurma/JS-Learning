//Змінні

// let admin, name;
// name = "Roma";
// admin = name;
// console.log(admin);
// console.log(1+2);

// let username, age;
// username = prompt();
// age = prompt();
// console.log(`I am: ${username}`);
// console.log(`I am: ${age}`);

// Умови

// let age = Number("5259598")
// console.log(age);
// let nameJS = prompt("How name does have JS?");
// if (nameJS == "ECMAScript"){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let number = +prompt();
// if (number > 0){
//     console.log(1);
// }else if (number < 0){
//     console.log(-1);
// }else if (number == 0){
//     console.log(0);
// }
// let result;

// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }
// let a = Number(prompt());
// let b = Number(prompt());
// console.log(a)
// console.log(b)
// let result = (a + b < 4) ? 'Мало' : 'Много';
// console.log(result)
// let login = prompt();
// let message = (login == "Employee") ? "Hello" :
//     (login == "Headmaster") ? "Good morning" :
//         (login == " ") ? "No login" :
//             "";
// console.log(message);
// let age = +prompt();
// if(age <= 14 || age >= 90){
//     console.log("false")
// }else{
//     console.log("true")
// }

// let age = +prompt();
// if(!(age <= 14 || age >= 90)){
//     console.log("true")
// }else{
//     console.log("false")
// }

// let age = + prompt();
// if(age > 14 && age < 90){
//     console.log("true")
// }else{
//     console.log("false")
// }

// let login = prompt();
// let password;
// if (login == "admin"){
//     password = prompt();
//     if (password == "I'm in charge"){
//         console.log("Hello");
//     }else if (password == "" || password == null){
//         console.log("Canceled");
//     }else{
//         console.log("Wrong password");
//     }
// }else if(login == "" || login == null){
//     console.log("Canceled");
// }else{
//     console.log("I don't know you");
// }

//Цикли

// for ( let i = 2; i <= 10; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// let i = 0;
// while (i < 3){
//     console.log(i++)
// }

// let number;
// do {
//     number = +prompt("Enter the number, greater 100");
// }while(number <= 100 && number)

// let n = +prompt('Введіть число в діапазоні якого потрібно показати усі прості числа');
// let i = 2;
// for (i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             break;
//         } else {
//             console.log(i);
//         }
//     }
// }

// Switch

// let browser = prompt();
// if (browser == "Edge"){
//     console.log("You've got the Edge!");
// }else if (browser == "Chrome"
// || browser == "Firefox"
// || browser == "Safari"
// || browser == "Opera"){
//     console.log('Okay we support these browsers too');
// }else {
//     console.log('We hope that this page looks ok!');
// }

// const number  = +prompt();
// switch (number){
//     case 0:
//         console.log("You enter 0");
//         break;
//     case 1:
//         console.log("You enter 1");
//         break;
//     case 2:
//     case 3:
//         console.log("You enter 2, maybe 3");
//         break;
// }

//Функції

//let age = +prompt();
// function checkAge(age){
//     return (age > 18) ? true : confirm("Parents allowed?")
// }
// console.log(checkAge(age));

// function checkAge(age){
//     return (age > 18) || confirm("Parents allowed?");
// }
// console.log(checkAge(age));

// let a = +prompt();
// let b = +prompt();
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(a,b));

// let x = prompt("x?", '');
// let n = prompt("n?", '');
// function pow(x, n) {
//     let result = x;
//
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }

//Функции-стрелки, основы

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Are you agree?",
    () => alert("You agree."),
    () => alert("You canceled.")
);


















