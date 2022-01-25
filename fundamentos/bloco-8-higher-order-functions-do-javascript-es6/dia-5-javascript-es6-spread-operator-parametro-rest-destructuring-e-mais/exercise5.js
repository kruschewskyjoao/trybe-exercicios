const myList = [1, 2, 3];

const teste = (([um, dois, tres]) => `${tres} ${dois} ${um}`) //[tres, dois, um]

console.log(teste(myList))