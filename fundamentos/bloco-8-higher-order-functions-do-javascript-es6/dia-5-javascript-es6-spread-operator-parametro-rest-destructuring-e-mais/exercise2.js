const sum = (...params) => params.reduce((acc, curr) => acc + curr)

console.log(sum(1,2,3,4,5,65))
console.log(sum(1,100,200,300,12,48))