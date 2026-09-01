let num = 0;
num = Number(prompt("Digite um número (0 para sair):"));
let total = 0;
let soma = 0;
let media = 0;
let maiorNum = null;
let menorNum = null;

while (num !== 0) {
    total++;
    soma += num;
    media = soma / total;

    if (maiorNum === null || num > maiorNum) {
          maiorNum = num;
      }

      if (menorNum === null || num < menorNum) {
          menorNum = num;
      }

    num = Number(prompt("Digite outro número (0 para sair):"));
}

console.log("Total de números digitados: " + total);
console.log("Soma dos números digitados: " + soma);
console.log("Média dos números digitados: " + media);
console.log("Maior número digitado: " + maiorNum);
console.log("Menor número digitado: " + menorNum);
