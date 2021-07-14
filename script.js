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