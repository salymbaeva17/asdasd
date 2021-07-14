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