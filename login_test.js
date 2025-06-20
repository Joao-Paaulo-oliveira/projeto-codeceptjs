Feature('login');


Scenario('Login com sucesso',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
})


S
cenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
});


Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
});


Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
   
   I.amOnPage('https://www.automationpratice.com.br/')
});
