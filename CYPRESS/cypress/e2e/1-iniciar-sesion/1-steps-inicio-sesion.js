import LoginPage from './1-class-inicio-sesion'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const loginPage = new LoginPage();
let number = 0;

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost', () => {
    loginPage.fetchData();
    cy.wait(500);
    cy.task('log', 'Valor Data: ' + JSON.stringify(loginPage.data));
    cy.task('log', 'Se cargo Data?: ' + loginPage.dataLoaded);
    loginPage.visit();
    cy.wait(500);
});

When('el usuario introduce un nombre de usuario y contrasena incorrectos', () => {
    number = loginPage.getRandomNumber();
    loginPage.fillUsername(loginPage.data[number].username);
    cy.wait(500);
    loginPage.fillPassword(loginPage.data[number].password);
});

When('el usuario introduce solamente un nombre de usuario correcto', () => {
    number = loginPage.getRandomNumber();
    loginPage.fillUsername(loginPage.data[number].username);
});

When('el usuario introduce solamente una contrasena correcta', () => {
    number = loginPage.getRandomNumber();
    loginPage.fillPassword(loginPage.data[number].password);
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
