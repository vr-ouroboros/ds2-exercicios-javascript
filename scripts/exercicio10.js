const usuaio = prompt("Digite seu nome de usuário:");
const senha = prompt("Digite sua senha:");
tentativas = 3;

while (tentativas > 0) {
    if (usuaio == "admin" && senha == "1234") {
    console.log("Acesso permitido");
    break;
    } else {
    console.log("Acesso negado");
    tentativas--;
    }
} if (tentativas == 0) {
    console.log("Número de tentativas excedido");
}