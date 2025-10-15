import { getThemeById, getDefaultTheme, themeExists } from './themes.js'
import { saveTheme, loadTheme } from './storage.js'

let currentTheme = null

export function applyTheme(themeId) {
	const theme = getThemeById(themeId)
	if (!theme) {
		console.warn(`Тема с ID "${themeId}" не найдена`)
		return false
	}

	document.body.setAttribute('data-theme', themeId)
	saveTheme(themeId)
	currentTheme = theme

	updateThemeDisplay(theme)
	updateActiveButton(themeId)

	return true
}

function updateThemeDisplay(theme) {
	const currentThemeDisplay = document.getElementById('theme-name')
	const currentThemeIdDisplay = document.getElementById('current-theme-id')

	if (currentThemeDisplay) {
		currentThemeDisplay.textContent = theme.name
	}

	if (currentThemeIdDisplay) {
		currentThemeIdDisplay.textContent = theme.id
	}
}

function updateActiveButton(themeId) {
	const themeButtons = document.querySelectorAll('.theme-btn')
	themeButtons.forEach(btn => {
		if (btn.dataset.theme === themeId) {
			btn.classList.add('active')
		} else {
			btn.classList.remove('active')
		}
	})
}

export function initializeTheme() {
	const savedTheme = loadTheme()

	if (savedTheme && themeExists(savedTheme)) {
		applyTheme(savedTheme)
	} else {
		const defaultTheme = getDefaultTheme()
		applyTheme(defaultTheme.id)
	}
}

export function getCurrentTheme() {
	return currentTheme
}
