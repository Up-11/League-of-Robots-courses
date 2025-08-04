const buttonElement = document.getElementById('change')
const squareDiv = document.getElementById('square')

// Чтобы реагировать на нажатие кнопки, записываем функцию в свойство onclick.
// Эта функция будет вызываться при каждом нажатии на кнопку. Часто говорят,
// что эта функция обрабатывает событие
buttonElement.onclick = function () {
	squareDiv.style = `background-color: ${getColor()};`
}

function getColor() {
	const colors = [
		'#49A16C',
		'#064236',
		'#ED6742',
		'#F498AD',
		'#1A5AD7',
		'#AFC9DA',
		'#FFD829',
		'#282A2E',
		'#5E6064',
		'#E6E6E6',
	]
	return colors[Math.floor(Math.random() * colors.length)]
}

const buttonElement = document.getElementById('change')
const squareDiv = document.getElementById('square')

// Чтобы реагировать на нажатие кнопки, подписываемся
// на событие click и передаём функцию-обработчик.
// Эта функция будет вызываться при каждом нажатии на кнопку
buttonElement.addEventListener('click', function () {
	squareDiv.style = `background-color: ${getColor()};`
})

window.addEventListener('keydown', function (event) {
	// Используем объект события,
	// чтобы получить информацию о нажатой клавише
	alert(`Вы нажали на кнопку: ${event.key}`)
})

function changeColor() {
	// Меняем цвет кнопки, на которой произошло событие.
	// Кнопка доступна с помощью ключевого слова this
	this.style = `background-color: ${getColor()};`
}

const buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; ++i) {
	const button = buttons[i]
	// К каждой кнопке привязываем обработчик
	button.addEventListener('click', changeColor)
	// Обратите внимание, что мы не вызываем
	// функцию changeColor, а только пишем её имя
}
