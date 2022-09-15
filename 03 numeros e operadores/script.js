 var idade = 28;
 var pi = 3.14; //usar ponto e não vírgula
 var exp = 2e10; // numero de significativos
 var exp = 2e-2; // numero de significativos negativos
 //limite de 15 dígitos, depois ele arredonda
 console.log(idade);
 console.log(pi);
 console.log(exp);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 (restante inteiro da divisão)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50 
// no caso acima, como não em como subtrair uma string de outra ele entende como uma operação de subtração, mesma coisa com multiplicação e divisão
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = 'valor 10' / 2;
console.log(testeNaN)
console.log(isNaN(testeNaN)) //verifica se é not a number

/*A ORDEM IMPORTA
Começa por multiplicação e divisão, depois por soma e subtração.
*/
//BINÁRIOS
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
//parênteses prioriza uma expressão 

//UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//decremento
var incremento3 = 5;
console.log(--incremento3); // 4
console.log(incremento3); // 4

// + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// EXERCÍCIO FINAL DE AULA
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// o resultado é 35
console.log(`O resultado é ${total}`); //prova real

// Crie duas expressões que retornem NaN
var expressaoUm = 'number'* 50/2;
var expressaoDois = 25/'2s';
console.log(expressaoUm)
// Somar a string '200' com o número 50 e retornar 250
var valor1 = '200';
var valor2 = 50;
console.log('O resultado deste exercício é:');
console.log(+200 +50);
// Incremente o número 5 e retorne o seu valor incrementado
var valorQualquer = 5;
console.log(++valorQualquer);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = +numero/2;
console.log(`O peso é ${peso}`);
