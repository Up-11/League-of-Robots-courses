// // const guestList = [] // 😭 гостей нет
// const theGirlList = ['Серсея', 'Илин Пейн', 'Меррин Трант', 'Дансен', 'Гора']

// // const infoArray = ['Россия', 'Москва', 144.5, 'Russian ruble', true]

// const arrayOfArrays = [
// 	'Россия',
// 	['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург'],
// 	[true, true, false, true],
// ]

// const infoArray = ['Россия', 'Москва', 144.5, 'Russian ruble', true]
// console.log(infoArray.length)
// // 5

// const guestList = ['Маша', 'Леонард', 'Шелдон', 'Джон Сноу']
// const firstGuest = guestList[0]

// console.log(firstGuest)
// // Маша

// console.log(guestList[3])
// // Джон Сноу

// console.log(guestList[999])
// // undefined

// const episodesPerSeasons = [10, 10, 10, 10, 10, 9, 7, 6]

// console.log(episodesPerSeasons[5])
// // 9

// // Запись в ячейку с индексом 5
// episodesPerSeasons[5] = 10
// console.log(episodesPerSeasons[5])
// // 10

// const watched = ['Властелин Колец', 'Гарри Поттер']

// watched.push('Зелёная Книга')
// console.log(watched)
// // ['Властелин Колец', 'Гарри Поттер', 'Зелёная книга']

// let newLength = watched.push('Мстители', 'Король Лев')
// console.log(newLength)
// // 5

// newLength = watched.unshift('Грязные танцы')
// console.log(newLength)
// // 6

// console.log(watched)
// // [
// //  'Грязные танцы', 'Властелин Колец', 'Гарри Поттер',
// //  'Зелёная книга', 'Мстители', 'Король Лев'
// // ]

// const array = []
// array.метод()

// const episodesPerSeasons = [10, 10, 10, 10, 10, 9, 7, 6]
// console.log(episodesPerSeasons.includes(8))
// // false
// console.log(episodesPerSeasons.includes(6))
// // true

// const people = ['Tom', 'Sam', 'Bob', 'Mike']
// const lastPerson = people.pop() // извлекаем из массива последний элемент
// console.log(lastPerson) // Mike
// console.log(people) // ["Tom", "Sam", "Bob"]

// const people = ['Tom', 'Sam', 'Bob', 'Mike']

// const first = people.shift() // извлекаем из массива первый элемент
// console.log(first) // Tom
// console.log(people) // ["Sam", "Bob", "Mike"]

// const people = ['Tom', 'Sam', 'Bob']

// const peopleToString = people.join('; ')
// console.log(peopleToString) // Tom; Sam; Bo

// for ([инициализация счетчика]; [условие]; [изменение счетчика]){

//     // действия
// }
// for (let i = 0; i < 5; i++) {
// 	console.log(i)
// }
// console.log('Конец работы')

// for (let i = 10; i > 5; i--) {
// 	console.log(i)
// }
// for (let i = 0; i < 10; i += 2) {
// 	console.log(i)
// }

// let i = 0
// for (; i < 60; ) {
// 	console.log(i)
// 	i = i + 10
// }

// const people = ['Tom', 'Sam', 'Bob']
// for (let i = 0; i < 3; i++) {
// 	console.log(people[i])
// }
// 	console.log(i)
// }
// console.log('Конец работы')

// for (let i = 10; i > 5; i--) {
// 	console.log(i)
// }
// for (let i = 0; i < 10; i += 2) {
// 	console.log(i)
// }

// let i = 0
// for (; i < 60; ) {
// 	console.log(i)
// 	i = i + 10

// for (let i = 1, j = 1; i < 5, j < 4; i++, j++) {
// 	console.log(i + j)
// }
// 1 итерация: i=1, j=1; i + j = 2
// 2 итерация: i=2, j=2; i + j = 4
// 3 итерация: i=3, j=3; i + j = 6

// for (let i = 1; i <= 5; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		console.log(i * j)
// 	}
// }

// while (условие) {
// 	// действия
// }

// let i = 1
// while (i <= 5) {
// 	console.log(i)
// 	i++
// }

// let i = 1
// do {
// 	console.log(i)
// 	i++
// } while (i <= 5)

// for (let i = 1; i <= 6; i++) {
// 	if (i === 4) break
// 	console.log(i)
// }
// console.log('Конец работы')

// for (let i = 1; i <= 6; i++) {
// 	if (i === 4) continue
// 	console.log(i)
// }
// console.log('Конец работы')

// const text = 'Hello'
// for (char of text) {
// 	console.log(char)
// }

// const people = ['Tom', 'Sam', 'Bob']
// for (const person of people) {
// 	console.log(person)
// }
// [первый операнд - условие] ? [второй операнд] : [третий операнд]
// const a = 1
// const b = 2
// const result = a < b ? a : b
// console.log(result) // 1

// const a = 1
// const b = 2
// const result = a < b ? a + b : a - b
// console.log(result) // 3
const people = ['Tom', 'Sam', 'Bill', 'Alice', 'Kate']
const deleted = people.splice(3)
console.log(deleted) // [ "Alice", "Kate" ]
console.log(people) // [ "Tom", "Sam", "Bill" ]
