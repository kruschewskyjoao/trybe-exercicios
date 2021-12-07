let h1Text = document.createElement('h1')
h1Text.innerHTML = 'Exercício 5.2 - JavaScript DOM'
document.body.append(h1Text)

let tagMain = document.createElement('main')
tagMain.className = 'main-content'
document.body.append(tagMain)   //qual diferença entre append e appendChild

let tagSectionContent = document.createElement('section')
tagSectionContent.className = 'center-content'
document.querySelector('.main-content').appendChild(tagSectionContent)

let tagP1 = document.createElement('p')
tagP1.innerHTML = 'Algum texto era para ir aqui'
document.querySelector('.center-content').appendChild(tagP1)

let tagSectionLeft = document.createElement('section')
tagSectionLeft.className = 'left-content'
document.querySelector('.main-content').appendChild(tagSectionLeft)