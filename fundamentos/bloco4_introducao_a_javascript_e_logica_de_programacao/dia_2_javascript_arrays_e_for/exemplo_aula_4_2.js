let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro']
let searchForFirstTask = tasksList[0]

console.log(searchForFirstTask)
let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);


tasksList.push('Fazer exercícios da Trybe')
console.log(tasksList)
tasksList.pop()
console.log(tasksList)
tasksList.shift()
console.log(tasksList)

let tasksList1 = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let indexOfTask = tasksList1.indexOf('Reunião')
console.log(indexOfTask)