// const message = 'Hello'
// console.log(message[0]) // H
// console.log(message[4]) // o

// const message = 'Hello'
// console.log(message.repeat(3)) // hello hello hello
// console.log(message.length) //  5 символов

// const hello = 'привет мир. пока мир'
// console.log(hello.includes('мир')) // true
// console.log(hello.includes('миг')) // false

// const hello = 'Привет Том'
// console.log(hello.toLowerCase()) // привет том
// console.log(hello.toUpperCase()) // ПРИВЕТ ТОМ

// let hello = '   Привет Том  '
// const beforeLength = hello.length
// hello = hello.trim()
// const afterLength = hello.length
// console.log('Длина строки до: ', beforeLength) // 15
// console.log('Длина строки после: ', afterLength) // 10

// let hello = 'Привет '
// const world = 'мир'
// hello = hello.concat(world)
// console.log(hello) // Привет мир

// const name = 'Tom'
// const hello = `Hello ${name}`
// console.log(hello) // Hello Tom

// const tom = { name: 'Tom', age: 37 }
// const markup = `<div>
//     <p><b>Name</b>: ${tom.name}</p>
//     <p><b>Age</b>: ${tom.age}</p>
// </div>`

// document.body.innerHTML = markup

// const people = [
// 	{ name: 'Tom', age: 37 },
// 	{ name: 'Sam', age: 41 },
// 	{ name: 'Bob', age: 21 },
// ]
// const markup = `<ul>
//     ${people.map(person => `<li>${person.name}</li>`)}
// </ul>`

// document.body.innerHTML = markup

// const myExp1 = /hello/
// const myExp2 = new RegExp('hello')

// const initialText = 'hello world!' // строка для поиска
// const exp = /hello/ // регулярное выражение
// const result = exp.test(initialText) // проверяем наличие в строке выражения exp
// console.log(result) // true

// const initialText2 = 'Hi all'
// const result2 = exp.test(initialText2)
// console.log(result2) // false - в строке "Hi all" нет "hello"

// const initialText = 'hello world!' // строка для поиска
// const exp = /hello/ // регулярное выражение
// const result = exp.exec(initialText) // проверяем наличие в строке выражения exp
// console.log(result) // ['hello', index: 0, input: 'hello world!', groups: undefined]

// const initialText2 = 'Hi all'
// const result2 = exp.exec(initialText2)
// console.log(result2) // null - в строке "Hi all" нет "hello"

// ['hello', index: 0, input: 'hello world!', groups: undefined]

// const exp = /[abc]/ // соответствует либо "a", либо "b", либо "c"

// const str1 = 'JavaScript'
// const str2 = 'Pascal'
// const str3 = 'Python'
// console.log(exp.test(str1)) // true
// console.log(exp.test(str2)) // true
// console.log(exp.test(str3)) // false

// const exp = /\d\d\d\d/ // соответствует четырем цифрам подряд
// const code1 = '1234'
// const code2 = 'jav5'
// const code3 = '3452'
// console.log(exp.test(code1)) // true
// console.log(exp.test(code2)) // false
// console.log(exp.test(code3)) // true

// const exp = /\+\d-\d\d\d-\d\d\d-\d\d\d\d/
// const contact1 = 'Email: mycomp@gmail.com'
// const contact2 = 'Phone: +1-234-567-8901'
// console.log(exp.test(contact1)) // false
// console.log(exp.test(contact2)) // true

// const exp = /\d-?\d\d\d-?\d\d\d-?\d\d\d\d/
// const phone1 = '+1-234-567-8901'
// const phone2 = '12345678901'
// const phone3 = '1-2345678901'
// console.log(exp.test(phone1)) // true
// console.log(exp.test(phone2)) // true
// console.log(exp.test(phone3)) // true

// const exp = /;*/ // соответствует любому количеству символов ;
// const str1 = 'number1 = 3'
// const str2 = 'number2 = 4;'
// const str3 = 'number3 = 5;;;'
// console.log(exp.test(str1)) // true
// console.log(exp.test(str2)) // true
// console.log(exp.test(str3)) // true

// const contacts =
// 	'Email: mycomp@gmail.com  Phones: +1-234-567-8901 and +1-234-567-8902'
// const phonePattern = /\+\d-\d{3}-\d{3}-\d{4}/
// const result = phonePattern.exec(contacts)
// console.log(result)
// Консольный вывод
// ['+1-234-567-8901', index: 32, input: 'Email: mycomp@gmail.com  Phones: +1-234-567-8901 and +1-234-567-8902', groups: undefined]

// const exp = /\d{4}-\d{2}-\d{2}/
// const text = 'Publication Date: 2021-09-06'
// const result = exp.exec(text)
// console.log(result[0]) // 2021-09-06

// const exp = /(\d{4})-(\d{2})-(\d{2})/
// const text = 'Publication Date: 2021-09-06'
// const result = exp.exec(text)
// console.log(result)
// // Консольный вывод
// // (4) ['2021-09-06', '2021', '09', '06', index: 18, input: 'Publication Date: 2021-09-06', groups: undefined]

// const exp = /(\d{4})-(\d{2})-(\d{2})/
// const text = 'Publication Date: 2021-09-06'
// const result = exp.exec(text)

// console.log(result[0]) // 2021-09-06 - все соответствие
// console.log(result[1]) // 2021 - первая группа
// console.log(result[2]) // 09 - вторая группа
// console.log(result[3]) // 06 - третья группа

// console.log(`${result[3]}.${result[2]}.${result[1]}`) // 06.09.2021

// const initialText = 'Он пришел домой и сделал домашнюю работу'
// const exp = /дом[а-я]*/gi
// const result = initialText.match(exp)
// result.forEach(value => console.log(value))
// // или так
// // console.log(result[0]);
// // console.log(result[1]);

const initialText = 'Он пришел домой и сделал домашнюю работу'
const exp = /дом[а-я]*/gi
const result2 = exp.exec(initialText)
result2.forEach(value => console.log(value))

const initialText = 'hello world'
const exp = /wor/
const result = initialText.search(exp)
console.log(result) // 6

let menu = 'Завтрак: каша, чай. Обед: суп, чай. Ужин: салат, чай.'
const exp = /чай/gi
menu = menu.replace(exp, 'кофе')
console.log(menu)
