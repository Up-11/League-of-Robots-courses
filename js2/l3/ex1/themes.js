export const themes = [
	{
		id: 'light',
		name: 'Светлая',
		icon: 'fa-sun',
		color: '#4a86e8',
		description: 'Классическая светлая тема',
	},
	...{
		id: 'ocean',
		name: 'Океан',
		icon: 'fa-water',
		color: '#00bcd4',
		description: 'Свежая морская тема',
	},
]

export function getThemeById(themeId) {
	return themes.find(t => t.id === themeId)
}

export function getDefaultTheme() {
	return themes[0]
}

export function themeExists(themeId) {
	return themes.some(t => t.id === themeId)
}
