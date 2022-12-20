/* ********OBJETOS ********/
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'Mayara',
  idade: 22,
  profissao: 'Software Engineer',
  possuiFaculdade: true,
}

pessoa.nome; // 'Mayara'
pessoa.possuiFaculdade; // true

// MÉTODOS: É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20