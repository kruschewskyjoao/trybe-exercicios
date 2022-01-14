
    function verifica(value1, value2) {
      if (!value1 || !value2) {
        throw new Error('Informe os dois valores para realizar a soma');
      } else if(isNaN(value1) || isNaN(value2)) {
        throw new Error('INFORMA ESSE INFERNO DIREITO');
      }
    };

    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      const valor1 = document.getElementById('value1')
      const valor2 = document.getElementById('value2')
      const imprimeResultado = document.getElementById('result')
      try {
        verifica(value1, value2);
        imprimeResultado.innerHTML = `Resultado: ${result}`;
        valor1.value = '';
        valor2.value = '';
      } catch (error) {
        imprimeResultado.innerHTML = `Erro: ${error.message}`;
        valor1.value = '';
        valor2.value = '';
        throw error.message
      }

    };
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }