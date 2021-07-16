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
.split(",")
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