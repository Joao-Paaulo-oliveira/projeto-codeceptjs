
Feature('login');

// Cenário de login com sucesso, com email e senha válidos
Scenario('Login com sucesso',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')                     // Clica no botão/link Login
   I.waitForText('Login',10)            // Aguarda o texto "Login" aparecer (até 10s)
   I.fillField("#user", 'joao.ppaulo92@hotmail.com')  // Preenche o campo usuário
   I.fillField("#password", '123456')  // Preenche o campo senha
   I.click('#btnLogin')                 // Clica no botão para enviar o formulário
   I.waitForText('Login realizado',5)  // Confirma mensagem de sucesso no login
}).tag('loginComSucesso');

// Cenário tentando logar apenas com email, sem senha
Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.fillField("#user", 'joao.ppaulo92@hotmail.com')  // Apenas email preenchido
   I.click('#btnLogin')
   I.waitForText('Senha inválida.',5)  // Espera mensagem de erro de senha
}).tag('apenasEmail');

// Cenário tentando logar sem preencher email e senha
Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.click('#btnLogin')  // Envia sem preencher campos
   I.waitForText('E-mail inválido.',5)  // Espera mensagem de erro de email
}).tag('semEmaileSenha');

// Cenário tentando logar apenas com a senha, sem email
Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.click('#btnLogin')
   I.fillField('#password','123456')  // Preenche senha depois do submit (provável erro de ordem)
   I.waitForText('E-mail inválido.',5)  // Espera erro de email
}).tag('apenasSenha');
