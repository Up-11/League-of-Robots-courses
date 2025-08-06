// // class Person {}
// // const tom = new Person()
// // const bob = new Person()

// // const tom = new Person() // ! Ошибка - Uncaught ReferenceError: Cannot access 'Person' before initialization

// class Person {
// 	name
// 	age
// }
// const tom = new Person()
// tom.name = 'Tom'
// tom.age = 37
// console.log(tom.name) // Tom
// console.log(tom.age) // 37

// tom.name = 'Tom' // установим значение поля
// console.log(tom.name) // получим значение свойства

// class Person {
// 	name = 'Unknown'
// 	age = 18
// }
// const tom = new Person()
// console.log(tom.name) // Unknown
// tom.name = 'Tom'
// console.log(tom.name) // Tom

// class Person {
// 	name
// 	age
// 	move(place) {
// 		console.log(`Go to ${place}`)
// 	}
// 	eat() {
// 		console.log('Eat apples')
// 	}
// }
// const tom = new Person()
// tom.move('Hospital') // Go to Hospital
// tom.move('Cinema') // Go to Cinema
// tom.eat() // Eat apples

// class Person {
// 	name
// 	age
// 	print() {
// 		console.log(`Name: ${this.name}  Age: ${this.age}`)
// 	}
// }
// const tom = new Person()
// tom.name = 'Tom'
// tom.age = 37
// tom.print() // Name: Tom  Age: 37

// const bob = new Person()
// bob.name = 'Bob'
// bob.age = 41
// bob.print() // Name: Bob  Age: 41

// const bob = new Person()

// class Person {
// 	name
// 	age
// 	constructor() {
// 		console.log('Вызов конструктора')
// 	}
// 	print() {
// 		console.log(`Name: ${this.name}  Age: ${this.age}`)
// 	}
// }
// const tom = new Person() // Вызов конструктора
// const bob = new Person() // Вызов конструктора

// class Person {
// 	name
// 	age
// 	constructor(pName, pAge) {
// 		this.name = pName
// 		this.age = pAge
// 	}
// 	print() {
// 		console.log(`Name: ${this.name}  Age: ${this.age}`)
// 	}
// }
// const tom = new Person('Tom', 37)
// tom.print() // Name: Tom  Age: 37
// const bob = new Person('Bob', 41)
// bob.print() // Name: Bob  Age: 41

// class Person {
// 	#name
// 	#age
// 	constructor(name, age) {
// 		this.#name = name
// 		this.#age = age
// 	}
// 	print() {
// 		console.log(`Name: ${this.#name}  Age: ${this.#age}`)
// 	}
// }
// const tom = new Person('Tom', 37)
// tom.#name = 'Sam' // ! Ошибка - нельзя обратиться к приватному полю
// tom.#age = -45 // ! Ошибка - нельзя обратиться к приватному полю
// tom.print() // Name: Tom  Age: 37

// class Person {
// 	#name
// 	#age = 1
// 	constructor(name, age) {
// 		this.#name = name
// 		this.setAge(age)
// 	}
// 	setAge(age) {
// 		if (age > 0 && age < 110) this.#age = age
// 	}
// 	print() {
// 		console.log(`Name: ${this.#name}  Age: ${this.#age}`)
// 	}
// }
class Person {
	#name
	#age = 1
	constructor(name, age) {
		this.#name = name
		this.setAge(age)
	}
	setAge(age) {
		if (age > 0 && age < 110) this.#age = age
	}
	print() {
		console.log(`Name: ${this.#name}  Age: ${this.#age}`)
	}
}
const tom = new Person('Tom', 37)
tom.print() // Name: Tom  Age: 37
tom.setAge(22)
tom.print() // Name: Tom  Age: 22
tom.setAge(-1234)
tom.print() // Name: Tom  Age: 22
class Person {
	#name = 'undefined'
	#age = 1
	constructor(name, age) {
		this.#name = this.#checkName(name)
		this.setAge(age)
	}
	#checkName(name) {
		if (name !== 'admin') return name
	}
	setAge(age) {
		if (age > 0 && age < 110) this.#age = age
	}
	print() {
		console.log(`Name: ${this.#name}  Age: ${this.#age}`)
	}
}
const tom = new Person('Tom', 37)
tom.print() // Name: Tom  Age: 37
const bob = new Person('admin', 41)
bob.print() // Name: Undefined  Age 41
//let personName = bob.#checkName("admin"); // ! Ошибка - нельзя обратится к приватному методу

class Person {
	static retirementAge = 65
	constructor(name, age) {
		this.name = name
		this.age = age
	}
	print() {
		console.log(`Имя: ${this.name}  Возраст: ${this.age}`)
	}
}

console.log(Person.retirementAge) // 65
Person.retirementAge = 62
console.log(Person.retirementAge) // 62

Person.retirementAge = 62
console.log(Person.retirementAge) // 62


print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
        console.log(`Пенсионный возраст: ${this.retirementAge}`);   // к статическому полю нельзя обратиться через this
}

print(){ 
    console.log(`Имя: ${this.name}  Возраст: ${this.age}`); 
    console.log(`Пенсионный возраст: ${Person.retirementAge}`);
}
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static printClassInfo(){ 
        console.log("Класс Person представляет человека");
    }
}
Person.printClassInfo();    // Класс Person представляет человека


class Person{
    static #retirementAge = 65;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){ 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
    static calculateRestAges(person){
        if(this.#retirementAge > person.age){
            const restAges = this.#retirementAge - person.age;
            console.log(`До пенсии осталось ${restAges} лет`);
        }
        else console.log("Вы уже на пенсии");
    }
}
// console.log(Person.#retirementAge);  // ! Ошибка: поле retirementAge -приватное
const tom = new Person("Tom", 37);
Person.calculateRestAges(tom);      // До пенсии осталось 28 лет
const bob = new Person("Bob", 71);
Person.calculateRestAges(bob);      // Вы уже на пенсии
// определение приватного поля
#field;
set field(value){
    this.#field= value;
}
get field(){
    return this.#field;
}

class Person{
    #ageValue = 1;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    set age(value){
        console.log(`Передано ${value}`);
        if(value>0 && value < 110) this.#ageValue = value;
    }
    get age(){
        return this.#ageValue;
    }
}
const tom = new Person("Tom", 37);
console.log(tom.age);
tom.age = -15;
console.log(tom.age);

console.log(tom.age);
а не
console.log(tom.age());

class Person{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee{
    name; 
    age;
    company;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person();
tom.name = "Tom"; 
tom.age= 34;
const bob = new Employee();
bob.name = "Bob"; 
bob.age = 36; 
bob.company = "Google";
tom.print();    // Name: Tom  Age: 34
bob.print();    // Name: Bob  Age: 36
bob.work();     // Bob works in Google

class Base{}
class Derived extends Base{}

class Person{
    name;
    age;
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
    company;
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person();
tom.name = "Tom"; 
tom.age= 34;
const bob = new Employee();
bob.name = "Bob"; 
bob.age = 36; 
bob.company = "Google";
tom.print();    // Name: Tom  Age: 34
bob.print();    // Name: Bob  Age: 36
bob.work();     // Bob works in Google

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
class Employee extends Person{
     
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.name} works in ${this.company}`);
    }
}
  
const tom = new Person("Tom", 34);
tom.print();    // Name: Tom  Age: 34
 
const sam = new Employee("Sam", 25, "Google");
sam.print();    // Name: Sam  Age: 25
sam.work();     // Sam works in Google
