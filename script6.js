const mas = [2,2,2,2,2]
let first = mas[0]
let prov = true
for (let i=1; i<mas.length; i++) {
    if (mas[i]!==first) {
        prov = false
    }
}

console.log(prov)
