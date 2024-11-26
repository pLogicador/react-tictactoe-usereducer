# React Tic Tac Toe com useReducer

Este projeto é uma versão refatorada do tradicional **Jogo da Velha** desenvolvido com React. Nesta versão, a gestão do estado da aplicação foi feita utilizando o **hook** `useReducer`, uma alternativa ao `useState`, para demonstrar como lidar com estados mais complexos e realizar o controle de fluxo de forma mais escalável e estruturada.

## Tecnologias Utilizadas
- **React**: Biblioteca para construção de interfaces de usuário.
- **useReducer**: Hook do React utilizado para gerenciar o estado de forma mais estruturada, ideal para estados mais complexos ou múltiplas ações.
  
## O que muda em relação à versão anterior?
- A versão anterior do jogo utilizava o hook `useState` para gerenciar o estado de cada célula do tabuleiro, o próximo jogador, e a vitória. Nesta versão, substituímos o `useState` por `useReducer`, uma abordagem que facilita o gerenciamento de estados mais complexos e facilita o controle das mudanças de estado através de ações.
- O uso do `useReducer` proporciona uma maneira mais robusta de gerenciar o estado, especialmente útil em projetos maiores onde o estado da aplicação pode ser mais intrincado.
  
## Funcionalidades

- **Jogo da velha**: O jogo pode ser jogado por dois jogadores alternando entre os símbolos "X" e "O".
- **Detecção de vitória**: O vencedor é identificado assim que uma linha (horizontal, vertical ou diagonal) é preenchida por um único símbolo.
- **Controle de histórico**: O jogo mantém um histórico das jogadas feitas, permitindo voltar a qualquer ponto do jogo.
  
## Como Rodar o Projeto
### Pré-requisitos
- **Node.js** e **npm** instalados.
### Passos
1. Clone o repositório:
````bash
git clone https://github.com/pLogicador/react-tictactoe-usereducer.git
````
2. Navegue até o diretório do projeto:
````bash
cd react-tictactoe-usereducer
````
3. Instale as dependências:
````bash
npm install
````
4. Inicie o servidor de desenvolvimento:
````bash
npm start
````
5. Abra o navegador e acesse http://localhost:3000.
   
## Como Contribuir
1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b minha-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o seu repositório (`git push origin minha-feature`).
5. Abra um pull request.

