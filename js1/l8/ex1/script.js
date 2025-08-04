const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const textBlock = document.getElementById('textBlock')

box1.classList.add('rounded')
box1.style.border = '3px solid #2ecc71'

box2.classList.add('shadow')
box2.style.backgroundColor = '#9b59b6'

box3.classList.add('highlight')
box3.style.width = '180px'
box3.style.height = '180px'

textBlock.textContent = 'Новый текст элемента'
textBlock.style.color = '#e74c3c'
textBlock.style.fontWeight = 'bold'

const newBox = document.createElement('div')
newBox.className = 'box'
newBox.style.backgroundColor = '#f1c40f'
newBox.textContent = 'Новый блок'
document.body.appendChild(newBox)

const allBoxes = document.querySelectorAll('.box')
allBoxes.forEach(box => {
	box.style.margin = '30px'
	box.style.transition = 'all 0.5s'
})
