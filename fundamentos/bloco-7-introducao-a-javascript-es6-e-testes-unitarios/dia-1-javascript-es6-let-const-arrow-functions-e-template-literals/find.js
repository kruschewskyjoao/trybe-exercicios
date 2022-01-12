//procurar o x

/* const findX = (param) => {
  let paraArr = param.split(' ')
  let resp = ''
  for(let i = 0; i < paraArr.length; i+=1) {
    resp += paraArr[i]
    if(paraArr[i] === 'x') {
      resp += 'joao'
    }
  }
  return resp
}

console.log(findX('Tryber x aqui!')) */


const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));

/* const tent1 = (param) => (
  `Tryber ${param} aqui!`
)
console.log(tent1('aloalo')) */