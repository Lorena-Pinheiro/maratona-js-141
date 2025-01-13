// /*1. Soma de Dois Números
// Descrição:
// Peça ao usuário dois números e exiba a soma deles.
// Tarefas:
// Crie uma função soma que receba dois números como parâmetros.
// Exiba o resultado no console ou em um alert.
function soma(){
    var n1 = parseInt(document.getElementById("n1").value)
    var n2 = parseInt(document.getElementById("n2").value)
    resultado = n1 + n2
    document.getElementById("resultado").innerHTML = resultado
}


// 2. Verificação de Par ou Ímpar
// Descrição:
// Peça ao usuário um número e diga se ele é par ou ímpar.
// Tarefas:
// Crie uma função que receba um número.
// Verifique se o número é divisível por 2.
// Exiba no console "O número é par" ou "O número é ímpar".
function parImpar(){
    var parImpar = document.getElementById("parImpar").value
    if(parImpar % 2 == 0){
        document.getElementById("resultado2").innerHTML = "Par"
    }
    else{
        document.getElementById("resultado2").innerHTML = "Impar"
    }
    console.log(typeof parImpar)
}

// 3. Contagem de Números
// Descrição:
// Exiba os números de 1 a 10 usando um loop.
// Tarefas:
// Utilize um loop for para imprimir os números no console.
// Modifique o exercício para usar um while.
function contagemFor(){
    const lista = []
    for(let i = 0; i < 11; i++){
        lista.push(i)
    }
    document.getElementById("resultadoFor").innerHTML = lista.toString()
}
function contagemWhile(){
    const lista = []
    var i = 0
    while(i<11){
        lista.push(i)
        i++
    }
    document.getElementById("resultadoWhile").innerHTML = lista.toString()
}
// 4. Tabuada de um Número
// Descrição:
// Crie uma tabuada para um número informado pelo usuário.
// Tarefas:
// Peça ao usuário um número.
// Use um loop for para multiplicar o número de 1 a 10.
// Exiba o resultado no console.
function tabuada(){
    var tabuada = parseInt(document.getElementById("tabuada").value)
    const lista = []
    for(let i = 0; i < 11; i++){
        resultado = tabuada * i
        x = tabuada + " X " + i + " = " + resultado + "<br>"
        lista.push(x)
    }
    document.getElementById("resultadoTabuada").innerHTML = lista.toString()
}


// 5. Encontrar o Maior Número em uma Lista
// Descrição:
// Dado um array de números, encontre o maior valor.
// Tarefas:
// Crie um array como [3, 7, 2, 9, 5].
// Use um loop para comparar os números e encontrar o maior.
// Exiba o maior número no console.
function maiorNumero(){

}

// 6. Inverter uma Palavra
// Descrição:
// Peça ao usuário uma palavra e exiba-a invertida.
// Tarefas:
// Crie uma função que receba uma string.
// Converta a string para um array com o método split.
// Inverta a ordem com o método reverse e transforme novamente em string com join.
function inverterPalavra(){
    var palavra = document.getElementById("palavra").value
    const lista = palavra.split("")
    lista.reverse()
    document.getElementById("resultadoInverterPalavra").innerHTML = lista.join("")
}

// 7. Soma de Elementos de um Array
// Descrição:
// Calcule a soma dos elementos de um array.
// Tarefas:
// Crie um array como [1, 2, 3, 4, 5].
// Use um loop ou o método reduce para somar os valores.
// Exiba o resultado no console.
function somaArray(){
    const lista = [1,2,3,4,5]
    document.getElementById("resultadoSomaArray").innerHTML = lista.reduce(soma, 0)
    function soma(total, num){
        return total + num
    }
}

// 8. Número Primo
// Descrição:
// Verifique se um número informado pelo usuário é primo.
// Tarefas:
// Crie uma função que receba um número.
// Verifique se ele é divisível apenas por 1 e por ele mesmo.
// Exiba "É primo" ou "Não é primo".
function primo(){
    var primo = document.getElementById("primo").value
      
}

// 9. Fatorial de um Número
// Descrição:
// Calcule o fatorial de um número informado pelo usuário.
// Tarefas:
// Crie uma função que receba um número.
// Use um loop para multiplicar os números de 1 até o número informado.
// Exiba o resultado no console.
function fatorial(){
    var fatorial = document.getElementById("fatorial").value
    let resultado = 1
    while(fatorial > 0){
        resultado = resultado * fatorial
        fatorial = fatorial - 1
    }
    document.getElementById("resultadoFatorial").innerHTML = resultado
}

// 10. Verificar Palíndromo
// Descrição:
// Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
// Tarefas:
// Crie uma função que receba uma string.
// Inverta a string e compare com o original.
// Exiba no console se a palavra é ou não um palíndromo.
function palidromo(){
    var palavra = document.getElementById("palidromo").value
    const lista = palavra.split("")
    const reverso = lista.reverse()
    if(palavra === reverso.join("")){
        document.getElementById("resultadoPalidromo").innerHTML = "É Palíndromo"
    }
    else{
        document.getElementById("resultadoPalidromo").innerHTML = "Não é Palíndromo"
    }
}

// 11. Contar Vogais em uma Frase
// Descrição:
// Dada uma frase, conte o número de vogais.
// Tarefas:
// Peça ao usuário uma frase.
// Use um loop para verificar cada caractere.
// Conte as vogais (a, e, i, o, u) e exiba o total.
function vogal(){
    var palavra = document.getElementById("vogal").value
    
}

// 12. Gerar Números Aleatórios
// Descrição:
// Gere um número aleatório entre 1 e 100.
// Tarefas:
// Use a função Math.random e ajuste o intervalo para 1 a 100.
// Exiba o número gerado no console.

// 13. Substituir Números Negativos por Zero
// Descrição:
// Dado um array de números, substitua todos os números negativos por zero.
// Tarefas:
// Crie um array como [4, -3, 2, -1, 0].
// Use um loop para verificar cada número.
// Substitua os números negativos por 0 e exiba o array no console.

// 14. Verificar Palavras Proibidas em um Texto
// Descrição:
// Verifique se uma frase contém palavras proibidas.
// Tarefas:
// Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
// Peça ao usuário uma frase.
// Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

// 15. Gerar uma Lista de Números Pares
// Descrição:
// Crie uma lista de números pares entre 1 e 20.
// Tarefas:
// Use um loop para gerar os números pares.
// Adicione os números a um array e exiba-o no console.
// */