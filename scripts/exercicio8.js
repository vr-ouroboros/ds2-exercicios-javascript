const num = Number(prompt("Digite um número:"));
let tabuada;
if (isNaN(num) == false) {
    for (let i = 1; i <= 10; i++) {
        tabuada = num * i;
        console.log(num + " x " + i + " = " + tabuada);
    }
} else {
    console.log("Número inválido");
}