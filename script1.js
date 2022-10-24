let per = prompt()

per = +per


if (typeof per === 'number' && !isNaN(per)) {
    console.log(per%2===0? "чётное":"нечётное")
}
else {
    console.log("Упс, кажется, вы ошиблись")
}

console.log(per%2===0? "чётное":"нечётное")

