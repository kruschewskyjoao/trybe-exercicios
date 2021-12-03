        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

        

        function mudaTexto(texto, tag) {
              let textoP = document.querySelectorAll(tag)
              for(let i = 0; i < textoP.length; i ++){
                textoP[i].innerText = texto
                textoP[i].style.textAlign = 'center'
              }
        }
        mudaTexto('Dig din, sem criatividade', 'p')


        function mudaCor(tagC, cor) {
                let muda = document.querySelectorAll(tagC)
                for(let x = 0; x < muda.length; x++) {
                        muda[x].style.background = cor 
                }
        }
        mudaCor('.main-content', 'rgb(76,164,109')
        mudaCor('.main-content .center-content', 'white')

        function toCaps(frase, tagg) {
                let caps = document.querySelectorAll(tagg)
                for(let z = 0; z < caps.length; z++) {
                        caps[z].innerText = frase
                        caps[z].style.textTransform = 'uppercase'
                }
        }
        //toCaps('SEXTOUUUUUUUUU', 'p')


        document.querySelector('h1').innerText = 'Exercício 5.1 - JavaScript'
        
        

        function mostrar(tag) {
                let neuroniosFritos = document.getElementsByTagName(tag)
                for(let i = 0; i < neuroniosFritos.length; i++) {
                        console.log(neuroniosFritos[i].innerText)
                }
        }
        mostrar('p')





        // let textoP = document.querySelectorAll('p')
        // for(let i = 0; i < textoP.length; i++) {
        //         textoP[i].innerText = 'O melhor da turma haha.'
        //         textoP[i].style.textAlign = 'center'
        // }
        // let corForGreen = document.querySelectorAll('.main-content')
        // for(let x = 0; x < corForGreen.length; x++) {
        //         corForGreen[x].style.background = 'rgb(76,164,109'
        // }
        // let corForWhite = document.querySelectorAll('.main-content .center-content')
        // for(let z = 0; z < corForWhite.length; z++) {
        //         corForWhite[z].style.background = 'white'
        // }

        // document.querySelector('h1').innerText = 'Exercício 5.1 - JavaScript'