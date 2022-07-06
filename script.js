
// function divide(a, b) {
//     if (a % b === 0) {
//         return "delitsya"
//     }
//     return "ne delitsya"
// }
//
// console.log(divide(10, 9))
// console.log(divide(10, 2))


// function num1(a, b) {
//     if (a > b) {
//         return `${a} больше ${b}`
//     }
//     return `${a} меньше ${b}`
//
// }
//
// console.log(num1(12, 20))
// console.log(num1(12, 7))


// function num2(a) {
//     if (a > 0) {
//         return "positive"
//     } else if (a < 0) {
//         return "negative"
//     }
//     return "equal"
// }
//

// console.log(num2(2))
// console.log(num2(-2))
// console.log(num2(0))


// function a(number) {
//     if (number % 2 === 0) {
//         return "Четное число"
//     }
//     return "Нечетное число"
// }
//
// console.log(a(24))
// console.log(a(27))

// function task6(s) {
//     if (typeof s === "string") {
//         return "String"
//     } else if (typeof s === "number") {
//         return "Number"
//     } else if (typeof s === "boolean") {
//         return "Boolean"
//     }
// }
//
// console.log(task6(14))
// console.log(task6(true))
// console.log(task6("Hello!"))

function num3(a) {
    if (a > 1 && a < 99) {
        return "Верно"
    }
    return "Неверно"
}

console.log(num3(76))
console.log(num3(0))
console.log(num3(100))


function num4(a) {
    if (a === 3 || a === 7) {
        return a + 7
    }
    return a / 10
}

console.log(num4(3))
console.log(num4(9))
console.log(num4(7))
console.log(num4(0))


function num5(a, b) {
    if (a <= 0 && b >= 5) {
        return a + b
    }
    return a - b
}

console.log(num5(-2, 8))
console.log(num5(0, 5))
console.log(num5(1, 4))


 function num6(a, b) {
    if (a > 7 && a < 12 || b >= 7 && b < 27) {
        return "Верно"
    }
    return "Неверно"
}

console.log(num6(8, 20))
console.log(num6(5, 15))


function season(month) {
    if (month === 1 || month === 2 || month === 12) {
        return "Winter"
    } else if (month >= 3 && month <= 5) {
        return "Spring"
    } else if (month >= 6 && month <= 8) {
        return "Summer"
    } else if (month >= 9 && month <= 11) {
        return "Autumn"
    }
}

console.log(season(1))
console.log(season(2))
console.log(season(3))
console.log(season(4))
console.log(season(5))
console.log(season(6))
console.log(season(7))
console.log(season(8))
console.log(season(9))
console.log(season(10))
console.log(season(11))
console.log(season(12))


function decade(day) {
    if (day >= 1 && day <= 10) {
        return "First decade"
    } else if (day >= 11 && day <= 20) {
        return "Second decade"
    } else if (day >= 21 && day <= 31) {
        return "Third decade"
    }
}

console.log(decade(2))
console.log(decade(12))
console.log(decade(22))


let a26 = 1
if ( a26 < 0){
    console.log("negative")
} else if ( a26 === 0 ){
    console.log("0")
} else {
    console.log("positive")
}


let a25 = 50
let b25 = 100
if ( a25 > b25 ){
    console.log("a больше b")
} else if ( a25 < b25 ){
    console.log("a меньше b")
}


let a24 = 10
if ( a24 === 10){
    console.log("Верно")
} else {
    console.log("Неверно")
}


let str15 = "Мы выполняем домашнее задание"
console.log(str15.substring(13,21).length)


let boolean = true
console.log(typeof boolean)


let number = 27
console.log(typeof number)


let string = "string"
console.log(typeof string)


let a23 = "10"
console.log(typeof a23)


let a22 = 10
let b22 = 35
let result22 = ` ${a22} + ${b22} `
console.log(typeof result22)


let a21 = 50
console.log(typeof a21)


let a20 = "домашнее"
console.log([a20.length])


let b18 = "программирование"
console.log([b18.length - 1])


let a19 = "информатика"
console.log(a19.length)


let welcome = "Welcome"
let name2 = "Ivan"
console.log(`${welcome}, ${name2}!`)


let days = 365
let planet = "Земля"
let population = "7 млрд."
let sun = "Солнце"
console.log(`В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${planet} составляет примерно ${population} человек.`)


let age1 = 17
console.log( `Мне ${age1} лет!`)


let name1 = "Aitolkun"
console.log("Привет, " + name1 + "!")


let str1 = "Привет, "
let str2 = "Мир!"
console.log(`${str1}${str2}`)


let str = "Привет, Мир!"
console.log(str)


let age = 17
console.log(age)


let name = "Aitolkun"
console.log(name)


let a17 = 20
let b17 = 21
console.log( a17 < b17)


let a16 = 20
let b16 = 21
console.log( a16 > b16)


let a15 = 17
let b15 = 7
console.log(a15 % b15)


let a14 = 18
let b14 = 7
console.log(a14 % b14)


let a13 = 24
let b13 = 6
console.log( a13 % b13)


let a12 = 660
a12 = a12 / 2
console.log(a12)


let a11 = 50
a11 = a11 * 5
console.log(a11)


let a10 = 20
let b10 = 10
b10 = a10 - b10
console.log(b10)



let a8 = 20
let b8 = 10
a9 = a8 + b8
console.log(a9)


let name8 = "Аскар"
let number8 = 10
let result1 = name8 + number8
console.log(result1)


let a7 = "10"
let b7= "99"
let result7 = a7 + b7
console.log(result7)


let a6 = 17
let b6 = 10
let c6 = a6 - b6
let d6 = 15
let result6 = c6 + d6
console.log(result6)


let a5 = 30
let b5 = 15
let c5 = a5 + b5
console.log(c5)
console.log( c5 % 4)



let c2 = 15
let d2 = 2
let result3 = c2 + d2
console.log(result3)


let a4 = 10
let b2 = 2
console.log( a4 + b2)
console.log( a4 - b2)
console.log( a4 * b2)
console.log( a4 / b2)


let a3 = 67
a3 = 67 % 7
console.log(a3)


let a2 = 100
a2 = a2 * 2
console.log(a2)


let a1 = 10
let b = 2
let c = 5
console.log( a1 + b + c )
// or
let d = a1 + b + c
console.log(d)


let a = 10
console.log(a)


const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.keys(obj1).length)


const obj2 = {
    a: 1,
    b: 2,
    c: 3
}
console.log(obj2["c"])
console.log(obj2.c)
console.log(Object.values(obj2)[2])


const obj3 = {
    Ширин: '1000',
    Айжан: '500',
    Атай: '200'
}
delete obj3.Айжан
console.log(obj3)


const obj4 = {Ширин: '1000', Айжан:'500', Атай: '200'}
obj4.Атай = "500"
console.log(obj4)


const obj5 = {Ширин: '1000', Айжан:'500', Атай: '200'}
obj5.Медет = "1500"
console.log(obj5)


const obj6 = {
    Ширин: '1000',
    Айжан: '500',
    Атай: {
        salary: '500'
    }
}
console.log(obj6.Атай.salary)


const today1 = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
console.log(today1["3"])


let day = 3
const today = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
console.log(today[day])


const  obj9 = {
    Ширин: '1000',
    Айжан:'500',
    Атай: {
        salary: '500'
    }
}
console.log(Object.keys(obj9), Object.keys(obj9.Атай))


const obj10 = {
    Ширин: '1000',
    Айжан:'500',
    Атай: {
        salary: '500'
    }
}
console.log(Object.values(obj10),Object.values(obj10.Атай))


const obj11 = {
    Ширин: '1000',
    Айжан:'500',
    Атай: {
        salary: '500'
    }
}
console.log(Object.entries(obj11), Object.entries((obj11.Атай)))


const task12_1 = obj =>{
    return obj.name.length % 2 === 0 ? 0 : 1
}
console.log(task12_1({name: "Igor"}))


const task13_0 = array =>{
    return array.map(item => item.id)
}
//или
const task13_1 = array =>{
    return array.map(item => Object.keys(item))
}
console.log(task13_0( [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))
console.log(task13_1( [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))


const userData = obj =>{
    obj.age = 25
    obj.name = "Azat"
    return obj
}
console.log(userData({name: "Igor"}))


const product = {
    name: "headphones",
    price: 100,
    discount: 0
}
if (product.price > 100){
    product.price = product.price - (product.price * 0.1)
    product.discount = "10%"
} else{
    product.price = product.price - (product.price * 0.07)
    product.discount = "7%"
}
console.log(product)


let user ={
    "my name": "Ivan",
    age: 30,
    city: "Bishkek"
}
// .split(",")
console.log(user)
console.log(user.age)
console.log(user["age"])
console.log(user["my name"]) //квадратные скобки исп-ся только когда ключ состоит из 2-х и более слов

delete user.age //удалили 30 из объекта
console.log(user)


const car = {
    model: "Tesla",
    year: 2021,
    color: "red",
    variable: 56
}

let variable = "model"
console.log(car.variable) // 56 // ищет ключ в объекте
console.log(car[variable]) // Tesla // используем когда ключ хранится в переменной только без кавычек
console.log(car["variable"]) // 56 // ищет ключ в объекте
console.log(car)
car.wheels = 4 // добавили новый ключ
car.color = "magenta" // изменили значение уже созданного ключа
console.log(car)
console.log({} === {}) // false - 2 объекта не равны


let movie = {
    title: "Avatar",
    year: 2009,
    genre: "fantastic",
    type: "HD RIP"
}
movie.year = 2025
console.log(movie)
console.log(Object.keys(movie)) // [ 'title', 'year', 'genre', 'type' ]
console.log(Object.values(movie)) // [ 'Avatar', 2025, 'fantastic', 'HD RIP' ]
console.log(Object.entries(movie)) //[[ 'title', 'Avatar' ],[ 'year', 2025 ],[ 'genre', 'fantastic' ],[ 'type', 'HD RIP' ]]



const room ={
    width: 500,
    height: 600,
    color: "light"
}
Object.freeze(room) // замораживаем объект - теперь нельзя изменять значения бывших ключей и добавлять новые
room.color = "purple"
console.log(room)


const film = {
    title: "Avengers",
    year: 2020,
    actors: ["Robert Downey Jr", "Scarlett Johansson"],
    address: {
        city: "Bishkek",
        phone: "+996555555555",
        email: "avengers-bishkek@gmail.com"
    }
}
console.log(film)
console.log(film.actors) // [ 'Robert Downey Jr', 'Scarlett Johansson' ]
console.log(film.actors[0]) // Robert Downey Jr
console.log(film.address) // {city: 'Bishkek',phone: +996555555555, email: 'avengers-bishkek@gmail.com}
console.log(film.address.email) // avengers-bishkek@gmail.com


const books = [
    {id: 1, title: "Master and Margarita", author: "M. Bulgakov"},
    {id: 2, title: "Romeo and Juliette", author: "W. Shakespeare"},
    {id: 3, title: "War and peace", author: "L. Tolstoy"}
]

let myBook = books.find(item => item.id === 2) // { id: 2, title: 'Romeo and Juliette', author: 'W. Shakespeare' }
console.log(myBook)

let input = "and"
let input2 = "s"
let result = books.filter(item => item.title.includes(input))
let result2 = books.filter(item => item.title.includes(input2))
console.log(result)
console.log(result2)


const task3 = array => {
 return array.reduce((acc, item) => [...acc, item.id], [])
}
acc = []
acc = [1]
acc = [1, 2]
acc = [1, 2, 3]
acc = [1, 2, 3, 4]
const task3_1 = array => array.map(item => item.id)

console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]))
console.log(task3_1([{id: 1},{id: 2},{id: 3},{id: 4}]))
console.log(task3([{id: true}]))
console.log(task3_1([{id: true}]))


const task11 = array => {
    return array.reduce((acc, item, idx)=> {
        return {...acc, [`field${[idx+ 1]}`]: item}
    }, {})
}

console.log(task11([true,1,'wow','you are smart, bro']))


const task12 = obj =>{
    return Object.keys(obj).reduce((acc, item) => {
        if (typeof obj[item] === "string" ) {
            return {...acc, [item]: obj[item]}
        }
        return acc
    }, {})
}
console.log(task12({ name: 'pilot', isActive: true, job: "developer" }))


const task13 = obj => {
    return Object.keys(obj).reduce((acc, item) => {
        if (obj[item]){
            return acc
        }
        return [...acc, item]
    }, [])
}
console.log(task13({ isActive: false, isPilot: true }))
