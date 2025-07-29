# Refatoração: Aperfeiçoando o Design de Códigos Existentes - Um Estudo Prático

Este repositório serve como um estudo prático e um guia passo a passo sobre a aplicação dos princípios de refatoração de código, baseados no livro seminal de Martin Fowler, **"Refatoração - Aperfeiçoando o design de códigos existentes"**.

O objetivo principal é documentar e demonstrar um processo de refatoração real, utilizando o histórico de commits para ilustrar cada transformação e decisão tomada.

> **"Qualquer tolo pode escrever um código que um computador entenda. Bons programadores escrevem código que humanos possam entender."** - Martin Fowler

## Objetivo do Projeto

O livro de Fowler utiliza exemplos em JavaScript para explicar os conceitos. Neste projeto, optei por usar **TypeScript** para aproveitar a segurança de tipos e a clareza que uma tipagem forte oferece.

Para o ambiente de execução, foi escolhido o **Deno**, um runtime moderno que lida nativamente com a transpilação de TypeScript para JavaScript, simplificando o setup de desenvolvimento.

Este README e todo o repositório visam destacar as técnicas de refatoração mencionadas por Fowler, com o foco em tornar o código:

-   **Visualmente agradável:** Mais limpo e organizado.
-   **Fácil de manter:** Reduzindo a complexidade e facilitando futuras alterações.
-   **Escalável:** Com uma arquitetura que suporta crescimento.

---

## O Que é Refatoração?

Segundo Martin Fowler, a refatoração é "o processo de alterar um sistema de software de tal maneira que não se altere o comportamento externo do código, mas que se melhore sua estrutura interna. É uma forma disciplinada de limpar o código que minimiza as chances de introduzir bugs."

### Principais Conceitos Abordados

Ao longo deste projeto, serão explorados e aplicados diversos conceitos fundamentais da refatoração, como:

-   **Extrair Função (*Extract Function*) (134):** Transformar um trecho de código em uma nova função com um nome que explique seu propósito.
-   **Extrair Variável (*Extract Variable*):** Utilizar uma variável para dar nome a uma expressão complexa, melhorando a legibilidade.
-   **Renomear Variável (*Rename Variable*):** Escolher nomes de variáveis e funções que revelem sua intenção.
-   **Substituir variável temporária por consulta (*Replace Temp with Query*) (207):**: *Adicionar o siginificado*
-   **Internalizar variável (*Inline Variable*) (152):**: *Adicionar o siginificado*
-   **Mudar declaração de função (*Change Function Declaration*) (153):**: *Adicionar o siginificado*
-   **Deslocar instruções (*Slide Statements*) (252):**: *Adicionar o siginificado*
-   **Dividir laço (*Split Loop*) (257):**: *Adicionar o siginificado*
### Como Acompanhar a Refatoração
- **Separar em fases (Split Phase) (183)**: *Adicionar o siginificado*

Para uma melhor compreensão do processo, **recomenda-se a análise do histórico de commits em ordem cronológica**. Cada commit está associado a uma técnica ou princípio de refatoração do livro, com mensagens claras que descrevem a transformação realizada.

## 🛠️ Ferramentas Utilizadas

-   **[TypeScript](https://www.typescriptlang.org/):** Um superset do JavaScript que adiciona tipagem estática opcional.
-   **[Deno](https://deno.land/):** Um runtime seguro e moderno para JavaScript e TypeScript.
