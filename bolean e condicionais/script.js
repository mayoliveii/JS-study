// /*BOOLEAN
// Existem dois valores booleanos false ou true.

// ******CONDICIONAIS IF E ELSE*****
// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
// */
// var possuiGraduacao = true;

// if(possuiGraduacao) {
//   console.log('Possui graduação');
// } else {
//   console.log('Não possui graduação');
// }
// // retorna Possui Graduação e não executa o else

// /* SWITCH
// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
// */
// var corFavorita = 'Azul';

// switch (corFavorita) {
//   case 'Azul':
//     console.log('Olhe para o céu.');
//     break;
//   case 'Vermelho':
//     console.log('Olhe para rosas.');
//     break;
//   case 'Amarelo':
//     console.log('Olhe para o sol.');
//     break;
//   default:
//     console.log('Feche os olhos');
// }

// /*
// TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
// */
// // Falso
// if(false)
// if(0); // ou -0
// if(NaN);
// if(null);
// if(undefined);
// if(''); // ou "" ou ``

// // Verdadeiro
// if(true);
// if(1);
// if(' ');
// if('Mayara');
// if(-5);
// if({});

// /*
// OPERADOR LÓGICO DE NEGAÇÃO !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
// */
// if(!true); // false
// if(!1); // false
// if(!''); // true
// if(!undefined); // true
// //Pode-se utilizar o !! para verificar se uma expressão é Truthy ou Falsy
// if(!!' '); // true
// if(!!''); // false

// /*
// OPERADORES DE COMPARAÇÃO
// Vão sempre retornar um valor booleano
// */
// 10 > 5; // true
// 5 > 10; // false
// 20 < 10; // false
// 10 <= 10 // true
// 10 >= 11 // false

// /* 
// O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
// */
// 10 == '10'; // true
// 10 == 10; // true
// 10 === '10'; // false
// 10 === 10 // true
// 10 != 15 // true
// 10 != '10' // false
// 10 !== '10' // true

// /*
// ********OPERADORES LÓGICOS &&*********
// && Compara se uma expressão e a outra é verdadeira
// */
// true && true; // true
// true && false; // false
// false && true; // false
// 'Gato' && 'Cão'; // 'Cão' retorna o útimo valor verdadeiro
// (5 - 5) && (5 + 5); // 0, pq zero é falso
// 'Gato' && false; // false
// (5 >= 5) && (3 < 6); // true
// /*
// Se ambos os valores forem true ele irá retornar o último valor verificado 
// Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

// Se os dois forem falsos ele vai retornar o primeiro falso
// Se os dois forem verdadeiros retorna o ultimo valor
// */

// /* operador lógico OU
// || Compara se uma expressão ou outra é verdadeira
// */
// true || true; // true
// true || false; // true
// false || true; // true
// 'Gato' || 'Cão'; // 'Gato'
// (5 - 5) || (5 + 5); // 10
// 'Gato' || false; // Gato
// (5 >= 5) || (3 < 6); // true
// // Retorna o primeiro valor true que encontrar

/* ****EXERCÍCIO**** */
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeMayara = 22;
var idadeHeryk = 15;

if(idadeMayara >= idadeHeryk) {
  console.log('A idade da Mayara é maior que a do heryk');
} else if(idadeMayara==idadeHeryk) {
  console.log('Temos a mesma idade');
} else {
  console.log('Heryk é mais velho');
};


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
//minha resposta: 3 -> pegou o primeiro verdadeiro
console.log(expressao); // prova real


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false
//prova real:
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil == china) {
  console.log('Mesma quantidade de bilhões de habitantes');
} else if(brasil <= china) {
  console.log('Brasil tem menos quantidade de bilhões de habitantes comparado à China'); 
} else{
 console.log('China tem mais habitantes que o Brasil')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//'Gato' && 'Cão'