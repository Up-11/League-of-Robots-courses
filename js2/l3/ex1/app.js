import { initializeTheme } from './themeManager.js'
import { initializeUI } from './uiRenderer.js'

function initApp() {
	document.addEventListener('DOMContentLoaded', () => {
		initializeUI()
		initializeTheme()
	})
}

initApp()
