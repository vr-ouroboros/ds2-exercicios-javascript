const idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    console.log("Voto obrigatório");
} else if (idade >= 16) {
    console.log("Voto opcional");
} else if (idade == 0) {
    console.log("Idade inválida");
} else if (isNaN(idade) == true) {
    console.log("Idade inválida");
} else if (idade < 0){
    console.log("Idade inválida");
} else {
    console.log("Não pode votar");
}