/* ********FUNÇÕES ********
Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor. */

function areaQuadrado(lado) {
 return lado * lado;
}
console.log(areaQuadrado(2))
console.log(areaQuadrado(4))
console.log(areaQuadrado(8))

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7
console.log(total);

/* ****PARÂMETROS E ARGUMENTOS****
-Ao criar uma função, você pode definir parâmetros.
-Ao executar uma função, você pode passar argumentos.
*/

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(70.10, 1.60)); //argumentos

/*Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer*/

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita('azul')); 

//ARGUMENTOS PODEM SER FUNÇÕES
/* Chamadas de Callback, geralmente são funções que ocorrem após algum evento.*/
addEventListener('click', function() {
  console.log('Clicou');
});
/*
 A função acima possui dois argumentos
 Primeiro é a string 'click'
Segundo é uma função anônima:
 Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}
*/


//PODE OU NÃO RETORNAR UM VALOR
/*Quando não definimos o return, ela irá retornar undefined. 
O código interno da função é executado normalmente, independente de existir valor de return ou não.*/
function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(70, 1.60); // retorna o imc
console.log(imc2(70, 1.60)); // retorna o imc e undefined