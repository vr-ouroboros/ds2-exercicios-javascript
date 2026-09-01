let cadastroAluno = prompt("Deseja cadastrar um aluno? (sim/não)");
while (cadastroAluno == 'sim') {
    const nomeAluno = prompt("Digite seu nome:");
    const nomeCurso = prompt("Digite o nome do curso:");

    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log("Notas inválidas. As notas devem estar entre 0 e 10.");
    }

    function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
    }

    function classificarMedia(media) {
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
    console.log("Nome do aluno: " + nomeAluno);
    console.log("Nome do curso: " + nomeCurso);
    let media = calcularMedia(nota1, nota2);
    console.log("Média: " + media);
    let classificacao = classificarMedia(media);
    console.log("Classificação: " + classificacao);

    cadastroAluno = prompt("Deseja cadastrar outro aluno? (sim/não)");
}