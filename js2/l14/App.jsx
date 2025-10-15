import { useState } from 'react'
import './App.css' //подключение стилей для конкретного компонента
function App() {
	const [count, setCount] = useState(0) //создание счетчика
	return (
		<div>
			<h1>Counter</h1>
			{/* кнопка со слушателем события и функцией, увеличивающей счетчик при нажатии */}
			<button onClick={() => setCount(count => count + 1)}>
				count is {count}
				{/* отображение счетчика */}
			</button>
		</div>
	)
}
export default App
//создадим свой компонент кнопки
function Button(count, setCount) {
	//принимаем данные из родительского компонента
	return (
		<button onClick={() => setCount(count => count + 1)}>
			count is {count}
		</button>
	)
}
function App() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>Counter</h1>
			<Button count={count} setCount={setCount} />
			{/* добавляем наш компонент с кнопкой в App и передаем в него данные */}
		</div>
	)
}

// Пример ReactJS:
export const ReactComponent = () => {
	return <h1>Hello, ReactJS!</h1>
}
// Пример React Native:
import { View, Text } from 'react-native'
export const ReactNativeComponent = () => {
	return (
		<View>
			<Text>Hello, React Native!</Text>
		</View>
	)
}
