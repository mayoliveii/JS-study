/*BOOLEAN
Existem dois valores booleanos false ou true.

******CONDICIONAIS IF E ELSE*****
Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
*/
var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

/* SWITCH
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

/*
TRUTHY E FALSY
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
*/
// Falso
if(false)
if(0); // ou -0
if(NaN);
if(null);
if(undefined);
if(''); // ou "" ou ``

// Verdadeiro
if(true);
if(1);
if(' ');
if('Mayara');
if(-5);
if({});

/*
OPERADOR LÓGICO DE NEGAÇÃO !
O operador !, nega uma operação booleana. Ou seja, !true é igual a false
*/
if(!true); // false
if(!1); // false
if(!''); // true
if(!undefined); // true
//Pode-se utilizar o !! para verificar se uma expressão é Truthy ou Falsy
if(!!' '); // true
if(!!''); // false

/*
OPERADORES DE COMPARAÇÃO
Vão sempre retornar um valor booleano
*/
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

/* 
O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
*/
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

