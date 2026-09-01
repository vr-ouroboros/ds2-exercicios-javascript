# ds2-exercicios-javascript
Repositório criado com a finalidade de subir exercícios de JavaScript.

## Exercício 1
Em que momento uma página dinâmica é carregada e por que um banco de dados pode ser necessário?

Uma página dinâmica é processada no momenyo da requisição do usuário, geralmente no servidor.
O banco de dados pode ser necessário para buscar, armazenar e atualizar informações exibidas na página, como usuários, produtos ou pedidos.

## Exercício 2

| Caracteristica | Client-Side | Server-side |
| Local de execução | No navegador ou dispositivo do usuário | No servidor |
| Tecnologias | HTML, CSS, JavaScript | PHP, Java |
| Responsabilidades | Interface, interação, visual | Regras de negócio, autenticação, banco de dados|
| Vantagens | Rapidez, UX | Segurança, controle, acesso ao banco de dados |
| Limitações | Codigo pode ser visto e alterado por usuários | Depende da comunicação com servidor |
| Exemplos | Alterar elementos da página, animações | Consultar banco de dados, autenticar usuário |

## Classificação das operações
1. Validar se um campo obrigatório foi preenchido — Client-side e Server-side (ambos).
No client-side, a validação pode informar imediatamente ao usuário que o campo está vazio. Porém, também deve existir uma validação no server-side, pois a validação feita no navegador pode ser ignorada ou manipulada.
2. Consultar dados sigilosos de um cliente — Server-side.
Informações sigilosas devem ser acessadas pelo servidor, que pode verificar as permissões do usuário e consultar o banco de dados de maneira segura. Esses dados não devem ficar diretamente disponíveis no código executado no navegador.
3. Alterar a cor de um botão após um clique — Client-side.
Essa é uma alteração visual da interface e pode ser realizada diretamente no navegador, normalmente utilizando JavaScript e CSS, sem necessidade de comunicação com o servidor.
4. Verificar login e senha em um banco de dados — Server-side.
A autenticação deve ocorrer no servidor, pois ele possui acesso seguro ao banco de dados e pode comparar as credenciais utilizando mecanismos adequados de segurança. A senha também não deve ser validada apenas pelo navegador.
5. Calcular o total de uma compra — Ambos.
O client-side pode calcular e mostrar rapidamente o valor total para o usuário. Entretanto, o servidor também deve realizar ou confirmar esse cálculo antes de finalizar a compra, evitando que preços, descontos ou quantidades sejam manipulados no navegador.
6. Controlar uma sessão de usuário — Server-side.
O controle da sessão deve ser realizado principalmente pelo servidor, pois envolve autenticação, identificação do usuário e proteção de informações. O navegador pode armazenar um cookie ou token relacionado à sessão, mas o controle e a validação devem ficar no servidor.

## Exercício 3
Ao substituir 'console.log' por 'Console.log'  o erro `Uncaught ReferenceError: Console is not defined` foi exibido e ele acontece porque o JavaScript é case sensitive, ou seja, ele diferencia minúsculas de maiúsculas.

## Exercício 4
A diferença entre uma variável declarada com 'let' e outra declarada com 'const' é que quando declarada com 'let' essa variável pode ter seu valor alterado a qualquer momento, já uma variável declarada com 'const' não poderá ter seu valor alterado.
