//Crie a const para a frase aqui
/*  ```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
``` */

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'"

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const fraseAtt = frase.replace("verde", "rosa").replace("azul", "laranja")

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**. 

console.log(frase)
console.log(fraseAtt)

//Extra: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const fraseCaixaAlta = frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(fraseCaixaAlta)