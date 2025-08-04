// const cat = {}

// const book = {
// 	title: 'Война и мир',
// 	author: 'Лев Толстой',
// 	pages: 1274,
// 	isFinished: true,
// }

// const cat = {
// 	kittens: ['Беляш', 'Михаил', 'Чарли'],
// 	favoriteToy: {
// 		name: 'мячик',
// 		size: 'маленький',
// 	},
// }

// const cat = {
// 	name: 'Том',
// 	meow: function () {
// 		console.log('Мяу-мяу')
// 	},
// }

// cat.meow()
// // Мяу-мяу

// const cat = {}
// cat.name = 'Simon'
// cat.gender = 'male'
// cat.color = 'brown'
// cat.age = 2
// cat.adorable = true

// console.log(cat)
// // {
// //   name: 'Simon',
// //   gender: 'male',
// //   color: 'brown',
// //   age: 2,
// //   adorable: true
// // }

// console.log(`На полке стоит «${book.title}»`)
// // На полке стоит «Война и мир»

// const pagesPerDay = book.pages / 365
// console.log(
// 	`Чтобы прочитать её за год, читайте
//   ${pagesPerDay} страницы в день`
// )
// // Чтобы прочитать её за год, читайте 3.5 страницы в день

// console.log(`На полке стоит «${book['title']}»`)

// const pagesPerDay = book['pages'] / 365
// console.log(
// 	`Чтобы прочитать её за год, читайте
//   ${pagesPerDay} страницы в день`
// )

// const signature = book.signature

// console.log(signature)
// // undefined

// const book = {
// 	title: 'Капитанская дочка',
// }

// // Добавляем новое свойство
// book.author = 'А. С. Пушкин'

// // Изменяем существующее
// book.title = 'Сказка о царе Салтане'

// console.log(book)
// // { title: 'Сказка о царе Салтане', author: 'А. С. Пушкин'}

// const book = {
// 	title: 'Война и мир',
// 	author: 'Лев Толстой',
// 	pages: 1274,
// 	isFinished: true,
// 	usersReading: [1946, 1293, 7743],
// }

// delete book.usersReading
// delete book['isFinished']

// console.log(book)
// // { title: 'Война и мир', author: 'Лев Толстой', pages: 1274 }

// const book = {
// 	title: 'Война и мир',
// 	author: 'Лев Толстой',
// 	pages: 1274,
// 	isFinished: true,
// 	usersReading: [1946, 1293, 7743],
// }

// book.usersReading = undefined
// book['isFinished'] = undefined
// // {
// //    title: 'Война и мир',
// //    author: 'Лев Толстой',
// //    pages: 1274
// //    isFinished: undefined,
// //    usersReading: undefined
// // }

// const user = {
// 	name: 'Tom',
// 	age: 26,
// 	displayUserInfo: function () {
// 		console.log(this.name)
// 		console.log(this.age)
// 	},
// }

// let user = {
// 	name: 'Tom',
// 	age: 26,
// 	displayUserInfo() {
// 		console.log(this.name, this.age)
// 	},
// 	move(place) {
// 		console.log(this.name, 'идет в ', place)
// 	},
// }
// user.display() // Tom 26
// user.move('магазин') // Tom идет в магазин

// const user = {}
// user['name'] = 'Tom'
// user['age'] = 26
// user['display'] = function () {
// 	console.log(user.name)
// 	console.log(user.age)
// }

// // вызов метода
// user['display']()

// const user = {
// 	['name']: 'Tom',
// 	['age']: 26,
// 	['display']: function () {
// 		console.log(user.name)
// 		console.log(user.age)
// 	},
// }
// user['display']()

// const user = {
// 	name: 'Tom',
// 	age: 26,
// 	display: function () {
// 		console.log(user.name)
// 		console.log(user.age)
// 	},
// }
// // вызов метода
// user.display()

// const prop1 = 'name'
// const prop2 = 'age'
// const tom = {
// 	[prop1]: 'Tom',
// 	[prop2]: 37,
// }
// console.log(tom) // {name: "Tom", age: 37}
// console.log(tom.name) // Tom
// console.log(tom['age']) // 37

// function createObject(propName, propValue) {
// 	return {
// 		[propName]: propValue,
// 		print() {
// 			console.log(`${propName}: ${propValue}`)
// 		},
// 	}
// }
// const person = createObject('name', 'Tom')
// person.print() // name: Tom

// const book = createObject('title', 'JavaScript Reference')
// book.print() // title: JavaScript Reference

// const fruits = ['яблоко', 'банан']
// fruits.push('апельсин') // метод массива

// const person = { name: 'Аня' }
// person.name = 'Мария' // свойство объекта

// 'привет'.toUpperCase() // "ПРИВЕТ"
// ;(5.5).toFixed(1) // "5.5"

// const arr = [1, 2, 3]
// // arr наследует методы от Array.prototype
// console.log(arr.__proto__ === Array.prototype) // true
// // А Array.prototype наследует от Object.prototype
// console.log(arr.__proto__.__proto__ === Object.prototype) // true

// const programmer = { name: 'John', level: 'Junior' }

// programmer.mainLanguage = 'JavaScript'
// delete programmer.level

// console.dir(programmer)

// const shows = ['Breakind Bad', 'The Office', 'Silicon Valley']
// // Свойство массива
// shows.length
// // Получить элемент массива,
// // аналогично как у объекта shows['1']
// shows[1]

// function sum(a, b) {
// 	return a + b
// }
// // Можно вызвать свойство функции
// sum.arguments
// // Можно присвоить значение в поле
// sum.someField = 'value'
// console.dir(sum)

// const show = 'Breaking Bad'
// console.log(show.length)
// // 12
// console.log(show.charAt(1))
// // 'r'
// console.log(show.toUpperCase())
// // 'BREAKING BAD'

// const pet = 'dog'
// // Будет создан объект
// const pet2 = new String('dog')
// console.log(pet === pet2)
// // false, потому что в pet2 находится объект
// console.dir(pet2)
// /* Выведет
// {
//   0: "d",
//   1: "o",
//   2: "g",
//   length: 3
// }
// */

const cat = 'Boris'
// Свойство не добавится
cat.color = 'red'
// Также ничего не изменится
delete color.length
const cats = ['Boris', 'Vasya', 'Murzik']
// Теперь массив стал длинной в пять элементов
cats.length = 5
// Добавилось поле
cats.someField = 'value'
console.dir(cats)
/*
{
  0: "Boris",
  1: "Vasya",
  2: "Murzik",
  someField: "value",
  length: 5
}
*/

const cat = new String('Boris')
cat.color = 'black'
// Добавится, так как в cat лежит объект, а не строка

parseInt("10") → 10  
Number("10") → 10  
if (confirm("Ты уверен?")) {
  // Если нажал "ОК"
} else {
  // Если нажал "Отмена"
}
