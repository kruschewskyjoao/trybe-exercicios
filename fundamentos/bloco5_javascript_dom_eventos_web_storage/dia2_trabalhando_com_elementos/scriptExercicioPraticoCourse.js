let h1Text = document.createElement('h1')
h1Text.innerHTML = 'Exercício 5.2 - JavaScript DOM'
document.body.append(h1Text)


let tagMain = document.createElement('main')
tagMain.className = 'main-content'
document.body.append(tagMain)   //qual diferença entre append e appendChild

let tagSectionContent = document.createElement('section')
tagSectionContent.className = 'center-content'
//document.querySelector('.main-content').appendChild(tagSectionContent)    por em let
let pegaDoHtml = document.querySelector('.main-content')
pegaDoHtml.appendChild(tagSectionContent)


let tagP1 = document.createElement('p')
tagP1.innerHTML = 'Algum texto era para ir aqui'
document.querySelector('.center-content').appendChild(tagP1)

let tagSectionLeft = document.createElement('section')
tagSectionLeft.className = 'left-content'
document.querySelector('.main-content').appendChild(tagSectionLeft)

let tagSectionRight = document.createElement('section')
tagSectionRight.className = 'right-content'
document.querySelector('.main-content').appendChild(tagSectionRight)

let createImage = document.createElement('img')
createImage.className = 'small-image'
createImage.src = 'https://picsum.photos/200'
document.querySelector('.left-content').appendChild(createImage)

let listaN = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
let createList = document.createElement('ul')
createList.className = 'list-count'
document.querySelector('.right-content').appendChild(createList)

for(let i = 0; i < listaN.length; i++){
  let lis = listaN[i]

  let newListItem = document.createElement('li')
  newListItem.innerText = lis

  createList.appendChild(newListItem)
}

//nona questão
for(let i = 0; i < 3;i++){
  let createh3 = document.createElement('h3')
  createh3.innerHTML = 'questão 9 feita com FOR'
  createh3.classList.add('description')
  document.querySelector('.main-content').appendChild(createh3)
}

//1 questao parte2
h1Text.className = 'title'

//q5
let sectLeft = document.querySelector('.main-content')  //.removeChild[0]
let deleteSection = document.querySelector('.left-content')
sectLeft.removeChild(deleteSection)

let cent = document.querySelector('.right-content')
cent.style.marginRight = 'auto'

let cor = document.querySelector('.center-content')  //.style.background = 'green'
cor.style.background = 'green'

let removeList = document.querySelector('ul')
removeList.removeChild(removeList.lastElementChild) //removeList.removeChild(removeList.childNodes[9])
removeList.removeChild(removeList.lastElementChild) //removeList.removeChild(removeList.childNodes[8])