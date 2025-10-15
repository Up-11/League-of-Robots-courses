const THEME_STORAGE_KEY = 'theme'

export function saveTheme(themeId) {
	localStorage.setItem(THEME_STORAGE_KEY, themeId)
}

export function loadTheme() {
	return localStorage.getItem(THEME_STORAGE_KEY)
}

export function removeTheme() {
	localStorage.removeItem(THEME_STORAGE_KEY)
}
