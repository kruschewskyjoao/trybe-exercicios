const interromper = document.querySelector('#btnsubmit')
const inputNome = document.querySelector('#input-nome')
const inputEmail = document.querySelector('#input-email')
const inputCpf = document.querySelector('#input-cpf')
const inputEnd = document.querySelector('#input-endereco')
const inputCidade = document.querySelector('#input-cidade')
const txtCurriculo = document.querySelector('#text-area-curriculo')
const inputCargo = document.querySelector('#input-cargo')
const ultimoCargo = document.querySelector('#dsc-ultimo-cargo')
const inputData = document.querySelector('#data-inicio')
const divUlt = document.querySelector('#divfinal')
const arrayEstados = ['AC', 'AL', 'AP', 'BA', 'AM', 'ES', 'GO', 'CE', 'MA', 'MT', 'MS', 'MG', 'PA', 'PG', 'PB']

function btninter() {
  event.preventDefault()
  if(inputNome.value === '') {
    alert('Nome está vazio!')
  }
  if(inputEmail.value === '') {
    alert('Email está vazio!')
  }
  if(inputCpf.value === '') {
    alert('Cpf está vazio')
  }
  if(inputEnd.value === '') {
    alert('Endereço está vazio')
  }
  if(inputCidade.value === ''){
    alert('Cidade está vazia')
  }
  if(txtCurriculo.value === '') {
    alert('Curriculo está vazio')
  }
  if(inputCargo.value === '') {
    alert('Cargo está vazio')
  }
  if(ultimoCargo.value === '') {
    alert('Ultimo cargo está vazio')
  }
  if(true)
    copyAll()
  }
interromper.addEventListener('click', btninter)


const inputEstado = document.querySelector('#input-estado')
function geradorEstados() {
  for(let i = 0; i < arrayEstados.length; i += 1) {
    let criador = document.createElement('option')
    inputEstado.appendChild(criador)
    criador.innerHTML = arrayEstados[i]
  }
}
geradorEstados()


function copyAll(){
  let allForm = [inputNome.value, inputEmail.value, inputCpf.value, inputEnd.value, inputCidade.value, txtCurriculo.value, inputCargo.value, ultimoCargo.value, inputData.value]
  for(let i = 0; i < allForm.length; i += 1) {
    let criando = document.createElement('p')
    divUlt.appendChild(criando)
    criando.innerHTML = allForm[i]
  }
}