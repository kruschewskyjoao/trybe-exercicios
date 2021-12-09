let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

  console.log('Bem-vinda, ' + info['personagem'])
info.recorrente = 'Sim'

for(let i in info) {
  console.log(i)
}
for(let i in info) {
  console.log(info[i])
}

console.log(' ') //pula linha

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O ultimo MacPatinhas',
  recorrente: 'Sim'
}

console.log(info.personagem + ' e ' + info2.personagem)
console.log(info.origem + ' e ' + info2.origem)
console.log(info.nota + ' e ' + info2.nota)
if(info.recorrente === info2.recorrente) {
  console.log('Ambos recorrentes')
}

console.log(' ') //pula linha
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
//let livrofav = leitor.livrosFavoritos[0]['titulo']
//console.log(livrofav)
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0]['titulo'])

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editor: 'Rocco',
}
console.log(leitor)