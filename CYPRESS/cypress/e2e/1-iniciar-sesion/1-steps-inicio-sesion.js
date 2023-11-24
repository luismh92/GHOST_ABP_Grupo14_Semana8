import LoginPage from './1-class-inicio-sesion'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const loginPage = new LoginPage();

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost', () => {
    loginPage.visit();
    cy.wait(500);
});

When('el usuario introduce un nombre de usuario y contrasena incorrectos', () => {
    loginPage.fillUsername('error'+config.username);
    cy.wait(500);
    loginPage.fillPassword(config.password+'error');
});

When('el usuario introduce solamente un nombre de usuario correcto', () => {
    loginPage.fillUsername(config.username);
});

When('el usuario introduce solamente una contrasena correcta', () => {
    loginPage.fillPassword(config.password);
});

When('el usuario no introduce nombre de usuario ni contrasena', () => {
});

When('el usuario introduce un nombre de usuario y contrasena correctos', () => {
    loginPage.fillUsername(config.username);
    cy.wait(500);
    loginPage.fillPassword(config.password);
});

And('el usuario hace clic en el boton de inicio de sesion', () => {
     loginPage.submit();

});

Then('el usuario deberia recibir el mensaje de error de credenciales', () => {
    loginPage.validate('There is no user with that email address.');
});

Then('el usuario deberia recibir el mensaje de error', () => {
    loginPage.validate('Please fill out the form to sign in.');
});

Then('el usuario deberia ser redirigido al dashboard principal de Ghost', () => {
    cy.url().should('eq', config.dashboard_url);
});
