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