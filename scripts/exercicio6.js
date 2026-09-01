const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

if (media < 5) {
    console.log("Reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else if (media >= 7) {
    console.log("Aprovado");
} else if (media > 10 || media < 0) {
    console.log("Nota inválida");
}