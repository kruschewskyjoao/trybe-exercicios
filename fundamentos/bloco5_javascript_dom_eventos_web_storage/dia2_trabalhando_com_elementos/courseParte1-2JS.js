// let elemento = document.querySelector('#elementoOndeVoceEsta').parentElement
// elemento.style.color = 'red'

// let texto = document.querySelector('#primeiroFilhoDoFilho')
// texto.innerText = 'To tentando lembrar das aulas'

// let primeiroFilho = document.querySelector('#pai').firstChild
// let q5 = document.querySelector('#elementoOndeVoceEsta').previousElementSibling // Elemento anterior
// let q6 = document.querySelector('#elementoOndeVoceEsta').nextSibling  //Proximo nó
// let q7 = document.querySelector('#elementoOndeVoceEsta').nextSibling.nextElementSibling  //Primeiro elemento depois do nó 
// let q8 = document.querySelector('#pai').lastElementChild.previousElementSibling    //Pega o ultimo elemento e o anterior a ele

// console.log(q8)


let irmao = document.createElement('section')
irmao.innerHTML = 'Criar irmão para elementoOndeVoceEsta'
irmao.className = 'irmaoOndeVoceEsta'
document.querySelector('#pai').appendChild(irmao)


let fi1 = document.createElement('p')
fi1.innerHTML = 'Filho do elementoOndeVoceEsta'
document.querySelector('#elementoOndeVoceEsta').appendChild(fi1)

let fi2 = document.createElement('p')
fi2.innerHTML = 'filho do primeiroFilhoDoFilho'
fi2.className = 'fiDoFiDoFi'
document.querySelector('#primeiroFilhoDoFilho').appendChild(fi2)

fi2.removeChild()