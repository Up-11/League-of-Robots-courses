<script>
import { ref } from 'vue'
const props = definedProps<{
  title: string
} > ()
const name = ref('Лига Роботов')
</script>
<template>
	<p>Привет, {{ name }}!</p>
	<ul>
		<li v-for="(item, i) in items" :key="i">{{ item }}</li>
	</ul>
</template>
<style>
p {
	color: red;
}
</style>
<template>
	<button @click="count++">+</button>
	<p>Количество: {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0) // реактивное число
</script>
<style scoped>
p {
	color: red;
}
</style>
