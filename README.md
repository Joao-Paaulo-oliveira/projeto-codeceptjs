# Projeto de Automação de Testes com CodeceptJS 

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
