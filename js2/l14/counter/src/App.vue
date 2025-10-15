<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => {
	count.value++
}
const decrement = () => {
	count.value--
}
const reset = () => {
	count.value = 0
}
</script>
<template>
	<div class="app">
		<div class="counter">
			<div class="display">{{ count }}</div>
			<div class="buttons">
				<button @click="decrement">-</button>
				<button @click="reset">Сброс</button>
				<button @click="increment">+</button>
			</div>
		</div>
	</div>
</template>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Arial, sans-serif;
	background: #f5f5f5;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.app {
	text-align: center;
	background: white;
	padding: 2rem;
	border-radius: 10px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
	color: #333;
	margin-bottom: 2rem;
}

.counter {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
}

.display {
	font-size: 3rem;
	font-weight: bold;
	color: #2c5aa0;
	padding: 1rem;
	border: 2px solid #ddd;
	border-radius: 8px;
	min-width: 100px;
}

.buttons {
	display: flex;
	gap: 0.5rem;
}

button {
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background 0.3s;
}

button:nth-child(1) {
	background: #ff6b6b;
	color: white;
}

button:nth-child(2) {
	background: #ddd;
	color: #333;
}

button:nth-child(3) {
	background: #51cf66;
	color: white;
}

button:hover {
	opacity: 0.8;
}
</style>
