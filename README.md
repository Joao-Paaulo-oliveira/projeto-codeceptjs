[casos-de-teste-login.md](https://github.com/user-attachments/files/20957831/casos-de-teste-login.md)# Projeto de Automação de Testes com CodeceptJS 

Este repositório contém um projeto de automação de testes End-to-End (E2E) com **CodeceptJS**, aplicados no site de prática **[Automation Practice BR](https://www.automationpratice.com.br/)**.

> **Status:** Em desenvolvimento 🚧

##  Cenários de Teste

> **Metodologia:** Cada cenário automatizado neste projeto também foi documentado para execução manual. Isso garante um alinhamento total entre as estratégias e validação dupla do comportamento esperado.

### Feature: Login
- ✔️ Login com sucesso (e-mail + senha válidos)  
- ❌ Tentativa apenas com e-mail (senha obrigatória)  
- ❌ Tentativa apenas com senha (e-mail obrigatório)  
- ❌ Sem credenciais (ambos os campos obrigatórios)

##  Tecnologias Utilizadas

- **CodeceptJS:** Framework principal para escrever testes claros e legíveis.  
- **Playwright:** Helper para controle do navegador, garantindo rapidez e robustez.  
- **Node.js:** Ambiente de execução JavaScript.  
- **NPM:** Gerenciador de pacotes.

##  Pré-requisitos

- Node.js v16+  
- Git

##  Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/Joao-Paaulo-oliveira/projeto-codeceptjs.git

# 2. Acesse a pasta do projeto
cd projeto-codeceptjs

# 3. Instale dependências
npm install
[Uploading 
# 📋 Plano de Testes — Módulo de Login

## Projeto: Sistema Web da Biblioteca Universitária
**Autor**: João Paulo  
**Data de Criação**: 27/06/2025  
**Versão**: 1.0  

---

### ✅ Caso de Teste 01: Login com sucesso

- **ID**: CT-LOGIN-001  
- **Tipo**: Funcional / Positivo  
- **Prioridade**: Alta  

#### 🧩 Pré-condições:
- Usuário cadastrado com e-mail e senha válidos
- Acesso à tela inicial do sistema

#### 🔄 Passos:
1. Acessar a tela inicial do sistema
2. Clicar em “Login”
3. Informar e-mail válido
4. Informar senha válida
5. Clicar no botão “Entrar”

#### ✅ Resultado Esperado:
- Usuário é redirecionado para a tela do painel logado
- Nome do usuário visível na interface

---

### 🚫 Caso de Teste 02: Tentativa de login com apenas e-mail

- **ID**: CT-LOGIN-002  
- **Tipo**: Funcional / Negativo  
- **Prioridade**: Média  

#### 🧩 Pré-condições:
- Acesso à tela de login

#### 🔄 Passos:
1. Informar apenas o e-mail
2. Deixar a senha em branco
3. Clicar no botão “Entrar”

#### ❌ Resultado Esperado:
- Exibição da mensagem: “Senha inválida.”
- Acesso negado ao sistema

---

### 🚫 Caso de Teste 03: Tentativa de login sem preencher nada

- **ID**: CT-LOGIN-003  
- **Tipo**: Funcional / Negativo  
- **Prioridade**: Alta  

#### 🧩 Pré-condições:
- Acesso à tela de login

#### 🔄 Passos:
1. Deixar campos de e-mail e senha em branco
2. Clicar no botão “Entrar”

#### ❌ Resultado Esperado:
- Exibição da mensagem: “E-mail inválido.”
- Acesso negado

---

### 🚫 Caso de Teste 04: Tentativa de login com apenas a senha

- **ID**: CT-LOGIN-004  
- **Tipo**: Funcional / Negativo  
- **Prioridade**: Média  

#### 🧩 Pré-condições:
- Acesso à tela de login

#### 🔄 Passos:
1. Informar apenas a senha
2. Deixar o campo de e-mail em branco
3. Clicar no botão “Entrar”

#### ❌ Resultado Esperado:
- Exibição da mensagem: “E-mail inválido.”
- Acesso negado

---
casos-de-teste-login.md…]()
