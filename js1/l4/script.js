// const income = 100;
// const strIncome = "100";
// const result = income == strIncome;
// console.log(result); //true

// const income = 100;
// const strIncome = "100";
// const result = income === strIncome;
// console.log(result); // false

// console.log(true && true);  // true
// console.log(true && false); // false
// console.log(false && false); // false

// const money = 1000
// const age = 21
// // проверяем, что age больше 18 и money больше 100
// const access1 = age > 18 && money > 100
// console.log(access1) // true

// // проверяем, что age больше 18 и money больше 1000
// const access2 = age > 18 && money > 1000
// console.log(access2)

// console.log(true || true);  // true
// console.log(true || false); // true
// console.log(false || false); // false

// const money = 1000;
// const age = 21;
// // проверяем, что age больше 18 или money больше 1000
// const access1 = age > 18 || money > 1000;
// console.log(access1); // true

// // проверяем, что age больше 22 или money больше 1000
// const access2 = age > 22 || money > 1000;
// console.log(access2);   // false

// console.log(!true);     // false
// console.log(!false);     // true

// const isAlive = true;
// const isDead = !isAlive;
// console.log(isDead);     // false

// let isAlive // undefined
// let name = 'Tom'

// const result = isAlive && name
// console.log(result)

// console.log(false && "Tom");  // false
// console.log("Tom" && null);   // null
// console.log(true && "Tom");   // Tom

// console.log(false || "Tom");  // Tom
// console.log("Tom" || null);   // Tom
// console.log(true || "Tom");   // true

// let isAlive;        // undefined
// console.log(!isAlive);   // true
// console.log(!null);     // true
// console.log(!0);        // true
// console.log(!10);        // false
// console.log(!"");        // true (пустая строка)
// console.log(!"Tom");     // false

// const age = 22
// age <= 17 && console.log('Вам меньше 18 лет. Доступ запрещен.')
// age > 17 && console.log('Вам больше 17 лет. Доступ разрешен.')

// age <= 17 && console.log('Вам меньше 18 лет. Доступ запрещен.')

// age > 17 && console.log('Вам больше 17 лет. Доступ разрешен.')

// const age = 12
// age <= 17 || console.log('Вам больше 17 лет. Доступ разрешен.')
// age > 17 || console.log('Вам меньше 18 лет. Доступ запрещен.')

// let x = true;
// let y = false;
// y &&= x;
// console.log(y); // false

// let c = false;
// let d = true;
// c &&= d;
// console.log(c); // false

// let a = true;
// let b = true;
// a &&= b;
// console.log(a); // true

// let e = false;
// let f = false;
// e &&= f;
// console.log(e); // false

// let x = true;
// let y = false;
// y ||= x;
// console.log(y); // true

// let a = true;
// let b = true;
// a ||= b;
// console.log(a); // true

// let c = false;
// let d = true;
// c ||= d;
// console.log(c); // true

// let e = false;
// let f = false;
// e ||= f;
// console.log(e); // false
//
// if(условие){

//     некоторые действия
// }

// const income = 100;
// if(income > 50) {

//     console.log("доход больше 50");
// }

// const income = 100
// if (income > 50) console.log('доход больше 50')

// const income = 100;
// if(income > 50)
//     console.log("доход больше 50");

// const income = 100
// const age = 19
// if (income > 50 && age > 18) {
// 	console.log('доход больше 50')
// 	console.log('возраст больше 18')
// }

// let myVar = 89
// if (myVar) {
// 	console.log(`Переменная myVar имеет значение: ${myVar}`)
// }``

// let myVar
// if (myVar) {
// 	console.log(`Переменная myVar имеет значение: ${myVar}`)
// }

// if (myVar !== undefined && myVar !== null) {
// 	console.log(`Переменная myVar имеет значение: ${myVar}`)
// }

// if(условие){
//     действия, если условие истинно
// }
// else{
//     действия, если условие ложно
// }

// const income = 45;
// if(income > 50){

//     console.log("Доход больше 50");
// }
// else{
//     console.log("Доход меньше или равен 50");
// }

// const income = 45
// if (income > 50) console.log('Доход больше 50')
// else console.log('Доход меньше или равен 50')

// const income = 50
// if (income > 50) {
// 	console.log('Доход больше 50')
// } else if (income === 50) {
// 	console.log('Доход равен 50')
// } else {
// 	console.log('Доход меньше 50')
// }

// const income = 500
// if (income < 200) {
// 	console.log('Доход ниже среднего')
// } else if (income >= 200 && income < 300) {
// 	console.log('Чуть ниже среднего')
// } else if (income >= 300 && income < 400) {
// 	console.log('Средний доход')
// } else {
// 	console.log('Доход выше среднего')
// }

// const income = 500
// if (income < 200) {
// 	console.log('Доход ниже среднего')
// } else if (income >= 200 && income < 300) {
// 	console.log('Чуть ниже среднего')
// } else if (income >= 300 && income < 400) {
// 	console.log('Средний доход')
// }

// let x = NaN
// if (x) {
// 	// false
// }

// const emptyText = "";   // false - так как пустая строка
// const someText = "javascript";  // true - строка не пустая

// function имя_функции(параметры) {
// 	// Инструкции
// }

// function hello() {
// 	console.log('Hello Liga ROBOTOV')
// }

// имя_функции(параметры)
//
// // определение функции
// function hello() {
//	console.log('Hello Liga ROBOTOV')
// }
// // вызов функции
// hello()
// hello()
// hello()
// hello()

// // определение функции
// function hello() {
// 	console.log('Hello Liga ROBOTOV')
// }
// // передача константе message ссылки на функцию hello
// const message = hello
// message() // вызываем функцию, ссылка на которую хранится в константе message

// function goodMorning() {
// 	console.log('Доброе утро')
// }
// function goodEvening() {
// 	console.log('Добрый вечер')
// }
// let message = goodMorning // присваиваем переменной message функцию goodMorning
// message() // Доброе утро
// message = goodEvening // меняем функцию в переменной message
// message()

// function print(message) {
// 	console.log(message)
// }

// print('Hello JavaScript')
// print('Hello LIGA ROBOTOV')
// print('Function in JavaScript')

// function print(message) {
// 	console.log(message)
// }
// print()

// function sum(a, b){
//     const result = a + b;
//     console.log(result);
// }

// sum(2, 6);          // 8
// sum(4, 5);          // 9
// sum(109, 11);       // 120

// function sum(a, b) {
// 	const result = a + b
// 	return result
// }

// function sum (a, b) {
//   return a + b;
// }
// let num1 = sum(2, 4);
// console.log(num1);  // 6

// const num2 = sum(6, 34);
// console.log(num2);  // 40

// function menu(n) {
// 	if (n == 1)
// 		return function (x, y) {
// 			return x + y
// 		}
// 	else if (n == 2)
// 		return function (x, y) {
// 			return x - y
// 		}
// 	else if (n == 3)
// 		return function (x, y) {
// 			return x * y
// 		}
// 	return function () {
// 		return 0
// 	}
// }

// const action = menu(1) // выбираем первый пункт - сложение
// const result = action(2, 5) // выполняем функцию и получаем результат в константу result
// console.log(result) // 7

// function menu(n){

//     if(n==1) return function(x, y){ return x + y;}
//     else if(n==2) return function(x, y){ return x - y;}
//     else if(n==3) return function(x, y){ return x * y;}
//     return function(){ return 0;};
// }

// let action = menu(1);
// console.log(action(2, 5));          // 7

// action = menu(2);
// console.log(action(2, 5));          // -3

// action = menu(3);
// console.log(action(2, 5));          // 10

// action = menu(190);
// console.log(action(2, 5));          // 0

// function sum(x, y){ return x + y;}
// function subtract(x, y){ return x - y;}
// function multiply(x, y){ return x * y;}
// function zero(){ return 0;}

// function menu(n){

//     switch(n){
//         case 1: return sum;
//         case 2: return subtract;
//         case 3: return multiply;
//         default: return zero;
//     }

// }

// let action = menu(1);
// console.log(action(5, 4));          // 9

// action = menu(2);
// console.log(action(5, 4));          // 1

// action = menu(3);
// console.log(action(5, 4));          // 20

// action = menu(190);
// console.log(action(5, 4));          // 0

const userInput = prompt('Введите что-нибудь:', 'Значение по умолчанию')
console.log(userInput) // Выведет введённый текст или null

const name = prompt('Как вас зовут?', 'Гость')
if (name) {
	alert(`Привет, ${name}!`)
} else {
	alert('Вы не ввели имя!')
}
