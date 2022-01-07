// let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
// let btn = document.querySelector('#btnModal')

// btn.addEventListener('click', function(){
//   myModal.show()
// })


//import datepicker
let date = document.getElementById('myInputDate').DatePickerX.init()
//fim


//import validate
const validation = new window.JustValidate('#form');
validation
  .addField('#nomeid', [
    {
      rule: 'required',
      errorMessage: 'Nome é necessario',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email inválido!',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido',
    },
  ])
  .addField('#tamanhoCamisa_select', [
    {
      rule: 'required',
    },
  ]) //disponivel-data
  .addField('#disponivel-data', [
    {
      rule: 'required',
      errorMessage:'Selecione a opção!',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });