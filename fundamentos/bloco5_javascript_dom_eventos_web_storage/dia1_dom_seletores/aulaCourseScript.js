let listas = document.querySelectorAll('.piloto-f1-atual')
//lista array 
for(let i = 0; i < listas.length; i++) {
  listas[i].innerText = 'Lewis Hamilton'
}
//Vai selecionar todos elementos com classe 'piloto-f1-atual' e no for vai varrer elas
// e mudar o innetText(texto nela) por 'Lewis Hamilton'