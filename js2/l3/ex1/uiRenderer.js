import { themes } from './themes.js'
import { applyTheme } from './themeManager.js'

export function renderThemeButtons() {
	const themeButtonsContainer = document.getElementById('theme-buttons')
	if (!themeButtonsContainer) return

	themeButtonsContainer.innerHTML = ''

	themes.forEach(theme => {
		const button = createThemeButton(theme)
		themeButtonsContainer.appendChild(button)
	})
}

function createThemeButton(theme) {
	const button = document.createElement('button')
	button.className = 'theme-btn'
	button.dataset.theme = theme.id
	button.style.backgroundColor = theme.color
	button.innerHTML = `
        <i class="fas ${theme.icon}"></i>
        ${theme.name}
    `

	button.addEventListener('click', () => {
		applyTheme(theme.id)
	})

	return button
}

export function updateThemeCount() {
	const totalThemesDisplay = document.getElementById('total-themes')
	if (totalThemesDisplay) {
		totalThemesDisplay.textContent = themes.length
	}
}

export function initializeUI() {
	renderThemeButtons()
	updateThemeCount()
}
