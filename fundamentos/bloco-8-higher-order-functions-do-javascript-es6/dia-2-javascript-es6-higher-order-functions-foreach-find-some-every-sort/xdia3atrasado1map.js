const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

//console.log(fullNames);

let Names = persons.map((person) => `${person.firstName} ${person.lastName}`)
//console.log(Names)


const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let arrDeProdutos;

arrDeProdutos = products.map((produto) => {
  return {produto: produto}
})
console.log(arrDeProdutos)

const finaliza = (arr) => {
  arr.forEach((item, index) => {
    item['preço'] = prices[index]
  })
}

finaliza(arrDeProdutos)
console.log(arrDeProdutos)

//Outrojeito

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]