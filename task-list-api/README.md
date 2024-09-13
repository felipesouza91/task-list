# Gerenciador de Tarefas

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

## Sobre o projeto

> Projeto de API REST para gerencia lista de tarefas e tarefas associadasd

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas para as seguintes tarefas:

- Requisitos funcionais
    - [ ] O usuário deve poder criar e gerenciar listas, cada uma contendo itens associados
    - [ ] Dentro de cada lista, o usuário deve poder adicionar, editar, remover e alterar o estado de itens.
    - [ ] O usuário deve poder visualizar e organizar as listas  e itens de forma intuitiva, com opções de filtragem disponíveis.
    - [ ]  O usuário pode destacar itens dentro das listas para indicar prioridade.
- Regras e Negócio
  - [ ] Os itens dentro de uma lista devem seguir critérios básicos de validação, como comprimento mínimo do título.
  - [ ] Cada item deve possuir um estado que pode ser alterado pelo usuário.
  - [ ]  Itens destacados devem ser priorizados na visualização.
- Requisitos Não Funcionais
  - [ ] As listas e itens devem ser armazenados de forma persistente.
  - [ ] A aplicação deve fornecer uma API para as operações principais.
  - [ ] Deve haver testes automatizados para as funcionalidades principais.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou o de `docker`
- Você instalou o um versão do `java 17 ou superior`
- Você instalou alguma IDE `IntelliJ IDEA, Eclipse, Spring Tools, VSCode`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.

## 🚀 Executando o projeot

Para executor o 

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