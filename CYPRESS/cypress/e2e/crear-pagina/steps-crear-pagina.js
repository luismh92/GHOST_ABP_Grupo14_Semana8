import PageItem from './class-crear-pagina'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const pageItem = new PageItem();

Given('Un usuario se encuentra en la pagina principal del admin de Ghost', () => {
    pageItem.checkMainPage();
    cy.url().should('eq', config.dashboard_url);
});

When('el usuario hace click sobre el item pages', () => {
    pageItem.goToListPages();
});

And('el usuario hace click sobre el boton New Page', () => {
    pageItem.goToCreatePage();
});

And('el usuario hace click sobre el boton Settings', () => {
    pageItem.goToSettings();
});

And('el usuario escribe en los campos Titulo y Contenido', () => {
    pageItem.fillPage();
});

And('el usuario hace click sobre el boton Preview', () => {
    pageItem.submitPreview();
});

And('el usuario hace click sobre el boton Publicar', () => {
    pageItem.submitPublish();
});

And('el usuario hace click sobre el boton Continuar', () => {
    pageItem.submitContinuePublish();
});

And('el usuario hace click sobre el boton Publicar Ahora', () => {
    pageItem.submitConfirmPublish();
});

Then('el usuario deberia ver el menu de configuracion', () => {
    cy.wait(1000);
    cy.get('form[aria-label="Post settings"]').should('exist');
});

Then('el usuario deberia ser redirigido a la lista de las paginas', () => {
    cy.wait(1000);
    cy.url().should('eq', config.pages_url);
});

Then('el usuario deberia ser redirigido al formulario crear pagina', () => {
    cy.wait(600);
    cy.url().should('eq', config.new_page_url);
});

Then('el usuario deberia ver la previsualizacion de la pagina', () => {
    cy.wait(1000);
    cy.get('button[data-test-button=publish-preview]').should('exist');
});

Then('el usuario deberia ver la pagina como publicada', () => {
    cy.wait(1000);
    cy.get('div.gh-publish-title').should('exist');
});
