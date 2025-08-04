// function makeShawerma(meat) {
// 	alert(`Ваша шаурма с ${meat} готова 🌯`)
// }

// makeShawerma('курочка')

// function namedFunction() {}

// function showMessage(user, message) {
// 	console.log(`${user}: ${message}`)
// }

// showMessage('Вася', 'Привет')
// showMessage('Иван', 'Как дела')

// // Найти первый подходящий элемент (как CSS-селектор)
// const button = document.querySelector('.big-btn')

// // Найти ВСЕ элементы
// const images = document.querySelectorAll('img')

// // Найти по ID (уникальный как паспорт)

// // Меняем текст
// title.textContent = 'Новый заголовок!'

// // Меняем HTML внутри
// title.innerHTML = 'Новый <span>крутой</span> заголовок'
//
const title = document.getElementById('title')

const button = document.getElementById('button')

button.addEventListener('click', function () {
	title.textContent = 'Интерактивный заголовок'
	button.textContent = 'Ты нажал меня'
})
// 1. Создаем элемент
const newCard = document.createElement('div')

// 2. Наполняем содержимым
newCard.innerHTML = `
  <h3>Новый товар</h3>
  <p>Описание...</p>
`

// 3. Добавляем в DOM
document.body.appendChild(newCard) // В конец страницы

let x = 5
console.log(++x) // 6 (увеличил и вернул)
console.log(x++) // 6 (вернул, потом стало 7)
console.log(x) // 7

let y = 5
console.log(--y) // 4
console.log(y--) // 4
console.log(y) // 3

/// ✅ 1. Сложение (+)
///Этот оператор складывает два числа.
let result = 5 + 3
console.log(result) // 8

/// Также + используется для объединения строк:
let name = 'Привет, ' + 'мир!'
console.log(name) // "Привет, мир!"

/// ✅ 2. Вычитание (-)
///Вычитает второе число из первого.
let result = 10 - 4
console.log(result) // 6

/// ✅ 3. Умножение (*)
///Умножает два числа.
let result = 6 * 2
console.log(result) // 12

/// ✅ 4. Деление (/)
///Делит первое число на второе.
let result = 10 / 2
console.log(result) // 5

/// ✅ 5. Остаток от деления (%)
///Этот оператор возвращает остаток от деления двух чисел.
let result = 10 % 3
console.log(result) // 1

/// Это полезно, например, чтобы определить: число чётное или нечётное.

/// ✅ 6. Возведение в степень (**)
///Поднимает число в степень.
let result = 2 ** 3
console.log(result) // 8
