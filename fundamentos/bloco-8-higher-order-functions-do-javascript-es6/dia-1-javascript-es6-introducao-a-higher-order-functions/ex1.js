/* 
const person1 = (param) => {
    return {
    nomeCompleto: param,
    email: `${param.replace(/\s/g, '').toLowerCase()}@trybe.com`
  }
};

 */

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: myFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: myFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const myFunction = (fullName) => {
  const eMail = `${fullName.replace(/\s/g, '_').toLowerCase()}@trybe.com`
  return {Name: fullName, eMail}
}

console.log(newEmployees(myFunction))