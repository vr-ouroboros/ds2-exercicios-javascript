function somar (a, b) {
    return a + b;
}

function calcularMedia (a, b) {
    return (a + b) / 2;
}

function classificarMedia (media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function criarSaudacao (nome) {
    return "Olá, " + nome + "!";
}

let nome = prompt("Digite seu nome:");
console.log(criarSaudacao(nome));

let soma = somar(10, 5);
console.log("A soma de 10 e 5 é: " + soma);

let media = calcularMedia(7, 8);
console.log("A média de 7 e 8 é: " + media);

let classificacao = classificarMedia(media);
console.log("Classificação: " + classificacao);