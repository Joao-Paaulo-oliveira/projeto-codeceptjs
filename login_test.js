Feature('login');


Scenario('Login com sucesso',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.fillField("#user", 'joao.ppaulo92@hotmail.com')
   I.fillField("#password", '123456')
   I.click('#btnLogin')
   I.waitForText('Login realizado',5)
}).tag('loginComSucesso')


Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.fillField("#user", 'joao.ppaulo92@hotmail.com')
   I.click('#btnLogin')
   I.waitForText('Senha inválida.',5)
}).tag('apenasEmail')


Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.click('#btnLogin')
   I.waitForText('E-mail inválido.',5)
 
}).tag('semEmaileSenha')



Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
   I.click('Login')
   I.waitForText('Login',10)
   I.click('#btnLogin')
   I.fillField('#password','123456')
   I.waitForText('E-mail inválido.',5)
 
}).tag('apenasSenha')
