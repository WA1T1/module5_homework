let mas = new Map

mas.set('one', 'fre')
mas.set(2, 322)
mas.set(true, false)

for (let key of mas.keys()) {
    let cur = mas.get(key)
    console.log('Ключ — '+key+', значение — ' + cur)
}