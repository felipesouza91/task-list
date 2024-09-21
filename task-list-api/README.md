# Gerenciador de Tarefas

![Github open issues](https://img.shields.io/github/issues/felipesouza91/task-list?style=for-the-badge)
![GitHub Licence](https://img.shields.io/github/license/felipesouza91/task-list?style=for-the-badge)
![GitHub Licence](https://img.shields.io/github/languages/count/felipesouza91/task-list?style=for-the-badge)
![GitHub Licence](https://img.shields.io/github/languages/top/felipesouza91/task-list?style=for-the-badge)
![GitHub Licence](https://img.shields.io/github/checks-status/felipesouza91/task-list/main?style=for-the-badge)
<!--![GitHub Licence](https://img.shields.io/github/actions/workflow/status/felipesouza91/task-list/:workflow?style=for-the-badge) -->


## Sobre o projeto

> Projeto de API REST para gerencia lista de tarefas e tarefas associadasd

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas para as seguintes tarefas:

- Requisitos funcionais
    - [X] O usuário deve poder criar e gerenciar listas, cada uma contendo itens associados
    - [X] Dentro de cada lista, o usuário deve poder adicionar, editar, remover e alterar o estado de itens.
    - [X] O usuário deve poder visualizar e organizar as listas  e itens de forma intuitiva, com opções de filtragem disponíveis.
    - [X] O usuário pode destacar itens dentro das listas para indicar prioridade.
- Regras e Negócio
  - [X] Os itens dentro de uma lista devem seguir critérios básicos de validação, como comprimento mínimo do título.
  - [X] Cada item deve possuir um estado que pode ser alterado pelo usuário.
  - [X] Itens destacados devem ser priorizados na visualização.
- Requisitos Não Funcionais
  - [X] As listas e itens devem ser armazenados de forma persistente.
  - [X] A aplicação deve fornecer uma API para as operações principais.
  - [ ] Deve haver testes automatizados para as funcionalidades principais.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou o de `docker`
- Você instalou o um versão do `java 17 ou superior`
- Você instalou alguma IDE `IntelliJ IDEA, Eclipse, Spring Tools, VSCode`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.

## 🛠️ Tecnologias 

* [![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
* [![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/)
* [![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
* [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
* [![Junit]( https://img.shields.io/badge/Junit-grey?style=for-the-badge&logo=junit5)](https://junit.org/junit5/)
* [![Junit]( https://img.shields.io/badge/REST%20ASSURED%0A-grey?style=for-the-badge&logo=data:image/png;base64,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)](https://rest-assured.io/)

 
## 🚀 Executando o projeot

Para executor o projeto siga as instruções abaixo

Linux e macOS:

```
mvmw clean package
docker-compose -f './docker-compose.yaml' up -d
./mvmw spring-boot:run

```

Windows:

```
mvmw clean package
docker-compose -f './docker-compose.yaml' up -d
./mvmw.cmd spring-boot:run
```

## 📫 Como contrinuir Contribuindo

Para contribuir com <nome_do_projeto>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 😄 Seja um dos contribuidores

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.