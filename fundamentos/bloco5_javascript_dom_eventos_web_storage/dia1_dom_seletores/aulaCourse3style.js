document.querySelector('#header-container').style.background = 'lightgreen'
document.querySelector('.emergency-tasks, div').style.background = 'lightpink'
let corTitulo1 = document.querySelectorAll('.emergency-tasks h3')
for(let i = 0; i < corTitulo1.length; i++) {
  corTitulo1[i].style.background = 'blue'
}
document.querySelector('.no-emergency-tasks').style.background = 'rgb(240,230,140)'
let corTitulo2 = document.querySelectorAll('.no-emergency-tasks h3')
for(let i = 0; i < corTitulo2.length; i++) {
  corTitulo2[i].style.background = 'black'
}
document.querySelector('#footer-container').style.background = 'black'