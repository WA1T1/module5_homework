let string = prompt()

let answer = ''
for (let i=string.length-1; i>=0;i--) {
    answer += string[i]
}

console.log(answer)