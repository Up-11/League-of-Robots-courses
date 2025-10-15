let student = {
	name: 'Твое имя',
	age: 15,
	isOnline: true,
	hobbies: ['программирование', 'музыка', 'спорт'],
	getInfo: function () {
		return `Привет! Я ${this.name}, мне ${this.age} лет.`
	},
}

function addHobby(newHobby) {
	student.hobbies.push(newHobby)
	return `Добавлено новое хобби: ${newHobby}`
}

function showHobbies() {
	let result = 'Мои хобби: '
	student.hobbies.forEach(hobby => {
		result += hobby + ', '
	})
	return result
}

let nameElement = document.getElementById('student-name')
let infoElement = document.getElementById('student-info')
let hobbiesElement = document.getElementById('hobbies-list')

nameElement.textContent = student.name
infoElement.textContent = student.getInfo()

document.getElementById('show-hobbies').addEventListener('click', function () {
	hobbiesElement.innerHTML = ''

	student.hobbies.forEach(hobby => {
		let hobbyItem = document.createElement('p')
		hobbyItem.textContent = '★ ' + hobby
		hobbiesElement.appendChild(hobbyItem)
	})
})

document.getElementById('add-hobby').addEventListener('click', function () {
	let newHobby = prompt('Какое хобби хотите добавить?')
	if (newHobby) {
		addHobby(newHobby)
		alert(`Хобби "${newHobby}" добавлено!`)
	}
})

infoElement.addEventListener('click', function () {
	student.isOnline = !student.isOnline
	let status = student.isOnline ? 'онлайн' : 'оффлайн'
	this.style.color = student.isOnline ? 'green' : 'gray'
	alert(`Статус изменен: ${status}`)
})
