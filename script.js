const task13 = obj => {
    return Object.keys(obj).reduce((acc, item) => {
        if (obj[item]){
            return acc
        }
        return [...acc, item]
    }, [])
}
console.log(task13({ isActive: false, isPilot: true }))