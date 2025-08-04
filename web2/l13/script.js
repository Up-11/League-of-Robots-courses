// const myText = document.getElementById('myText')
// const btn = document.getElementById('btn')

// myText.style.color = 'red'
// myText.classList.add('bg-green')

// btn.addEventListener('click', () => {
// 	myText.style.color = 'blue'
// 	myText.classList.remove('bg-green')
// 	btn.style.backgroundColor = 'red'
// })

// box.style.backgroundColor = 'blue'

// const text = document.getElementById('text')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
// 	const isActive = text.classList.contains('active')

// 	if (isActive) {
// 		text.classList.remove('active')
// 		btn.textContent = 'Сделать ярче'
// 	} else {
// 		text.classList.add('active')
// 		btn.textContent = 'Сделать неактивным'
// 	}
// })

// const box = document.getElementById('box')

// if (box.classList.contains('active')) {
// 	alert('Блок активен!')
// }

// if (условие) {
// 	console.log('Выполнится, если условие истинное')
// }

// if (условие1) {
// 	// ...
// } else if (условие2) {
// 	// ...
// } else if (условие3) {
// 	// ...
// } else {
// 	// Выполнится, если все условия выше ложные
// }

// if (условие) {
// 	// Блок кода, выполнится, если условие выполняется
// } else {
// 	// Блок кода, выполнится в противном случае
// }

let phrase = prompt('Скажи слово друг и заходи')

if (phrase === 'Друг') {
	alert('Привет')
} else {
	alert('Я тебя не знаю')
}

// Применяем скидку, если цена больше или равна 2 500 рублей
if (price >= 2500) {
	price = price * 0.9
}

if (foundItems === 0) {
	console.log('Ничего не найдено')
} else {
	console.log('Печатаем результаты поиска')
}

if (isAdmin) {
	// Сокращённая запись isAdmin === true
	console.log('Привет, админ!')
} else {
	console.log('Привет, пользователь!')
}

let foundItems = 0

if (foundItems) {
	console.log('Ничего не найдено')
} else {
	console.log('Печатаем результаты поиска')
}

if (username === 'Виктор') {
	console.log('Привет, Витёк! Эта пасхалка для тебя')
}

let discount = 0
if (userStatus === 'VIP') {
	discount = 25
} else if (userStatus === 'privileged') {
	discount = 15
} else if (userStatus === 'clubMember') {
	discount = 5
}
