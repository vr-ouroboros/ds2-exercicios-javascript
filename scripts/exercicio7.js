const usuario = prompt("Digite seu usuario:");
const senha = Number(prompt("Digite sua senha:"));

if (usuario === "admin" && senha === 1234) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}