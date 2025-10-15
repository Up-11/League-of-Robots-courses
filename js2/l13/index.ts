let age: number = 25
let name: string = 'John'
let isActive: boolean = true
type Point = {
	x: number
	y: number
}
let coordinates: Point = { x: 10, y: 20 }

// Объявление функции с явными типами параметров и возвращаемого значения
function addNumbers(a: number, b: number): number {
	return a + b
}
// Использование функции
let result: number = addNumbers(10, 5)
console.log(result) // Вывод: 15

// Определение интерфейса для объекта "Person"
interface Person {
	name: string
	age: number
	isStudent: boolean
}
// Использование интерфейса при объявлении объекта
let student: Person = {
	name: 'Alice',
	age: 20,
	isStudent: true,
}
// Функция, принимающая объект с определенной структурой
function printPerson(person: Person): void {
	console.log(
		`Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`
	)
}
// Вызов функции с объектом типа Person
printPerson(student)

// Базовый интерфейс "Shape"
interface Shape {
	color: string
}
// Интерфейс "Circle" наследует "Shape" и добавляет свойство "radius"
interface Circle extends Shape {
	radius: number
}
// Интерфейс "Rectangle" наследует "Shape" и добавляет свойства "width" и "height"
interface Rectangle extends Shape {
	width: number
	height: number
}
// Функция, принимающая объект с интерфейсом "Shape"
function draw(shape: Shape): void {
	console.log(`Drawing a ${shape.color} shape`)
}
// Создание объектов типа "Circle" и "Rectangle"
let myCircle: Circle = { color: 'blue', radius: 10 }
let myRectangle: Rectangle = { color: 'red', width: 20, height: 30 }
// Вызов функции с объектами разных интерфейсов
draw(myCircle) // Вывод: Drawing a blue shape
draw(myRectangle) // Вывод: Drawing a red shape

// Определение класса "Person"
class Person {
	// Свойства класса
	name: string
	age: number
	// Конструктор класса
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
	// Метод класса
	displayInfo(): void {
		console.log(`Name: ${this.name}, Age: ${this.age}`)
	}
}
// Создание объекта класса "Person"
let person1: Person = new Person('John', 30)
// Вызов метода объекта
person1.displayInfo() // Вывод: Name: John, Age: 30

// Определение класса "Car"
class Car {
	// Свойства класса
	brand: string
	model: string
	speed: number
	// Конструктор класса
	constructor(brand: string, model: string, speed: number) {
		this.brand = brand
		this.model = model
		this.speed = speed
	}
	// Метод для вывода информации о машине
	displayInfo(): void {
		console.log(
			`Brand: ${this.brand}, Model: ${this.model}, Speed: ${this.speed} km/h`
		)
	}
	// Метод для увеличения скорости
	accelerate(acceleration: number): void {
		this.speed += acceleration
		console.log(`Accelerating... New speed: ${this.speed} km/h`)
	}
}
// Создание объекта класса "Car" с использованием конструктора
let myCar: Car = new Car('Toyota', 'Camry', 120)
// Вызов метода для вывода информации о машине
myCar.displayInfo() // Вывод: Brand: Toyota, Model: Camry, Speed: 120 km/h
// Вызов метода для увеличения скорости
myCar.accelerate(20) // Вывод: Accelerating... New speed: 140 km/h`k

// Функция, использующая обобщенный тип
function identity<T>(value: T): T {
	return value
}
// Пример использования функции с явным указанием типа
let result: number = identity<number>(42)
// Тип выводится автоматически
let stringValue: string = identity('Hello, TypeScript!')
// Обобщенные функции могут использоваться с разными типами данных
let booleanValue: boolean = identity(true)

// Обобщенный класс для контейнера данных
class Container<T> {
	private data: T
	// Конструктор класса
	constructor(initialValue: T) {
		this.data = initialValue
	}
	// Метод для получения данных
	getData(): T {
		return this.data
	}
	// Метод для установки новых данных
	setData(newValue: T): void {
		this.data = newValue
	}
}
// Использование обобщенного класса с разными типами данных
let numberContainer = new Container<number>(42)
console.log(numberContainer.getData()) // Вывод: 42
let stringContainer = new Container<string>('Hello, Generics!')
console.log(stringContainer.getData()) // Вывод: Hello, Generics!

// Условный тип, который определяет, является ли тип числовым
type IsNumber<T> = T extends number ? true : false
// Пример использования
const result1: IsNumber<number> = true // Вывод: true, так как number является числовым типом
const result2: IsNumber<string> = false // Вывод: false, так как string не является числовым типом
const result3: IsNumber<boolean> = false // Вывод: false, так как boolean не является числовым типом

// Mapped Type, который делает все свойства "readonly"
type ReadonlyProps<T> = {
	readonly [P in keyof T]: T[P]
}
// Пример использования
interface Person {
	name: string
	age: number
}
// Создание объекта с readonly свойствами
let readOnlyPerson: ReadonlyProps<Person> = { name: 'John', age: 30 }
readOnlyPerson.name = 'Alice' // Ошибка, так как свойство "name" только для чтения
