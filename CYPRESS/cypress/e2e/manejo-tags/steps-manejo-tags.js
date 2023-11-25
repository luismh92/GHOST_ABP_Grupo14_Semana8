import TagPage from './class-manejo-tags'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const tagPage = new TagPage();

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags', () => {
    tagPage.checkMainPage();
    cy.wait(500);
    cy.url().should('eq', config.dashboard_url);
    cy.wait(500);
});

When('el usuario se dirige a la seccion tags del sitio', () => {
    cy.wait(1000);
    tagPage.goTotags();
    cy.wait(1000);
    cy.url().should('eq', config.tags_url);
});

And('el usuario hace clic en el boton de New Tag', () => {
    tagPage.newTag();
    cy.wait(1000);
});

And('el usuario deberia ver el formulario de un nuevo tag', () => {
    cy.url().should('eq', config.new_tag_url);
    cy.wait(1000);
});

And('el usuario deberia llenar el campo name', () => {
    tagPage.fillName();
    cy.wait(1000);
});

And('el usuario da click sobre el boton Save', () => {
    tagPage.submit();
    cy.wait(1000);
});

And('el usuario deberia llenar el campo description', () => {
    tagPage.filldescription();
    cy.wait(1000);
});


And('el usuario expande el item metadata', () => {
    tagPage.expandMetadata();
    cy.wait(1000);
});

And('el usuario llena el titulo de metadata', () => {
    tagPage.fillTitleMetadata();
    cy.wait(1000);
});


And('el usuario llena el descripcion de metadata', () => {
    tagPage.fillDescriptionMetadata();
    cy.wait(1000);
});


And('el usuario llena el conical url de metadata', () => {
    tagPage.fillCanonicalUrlMetadata();
    cy.wait(1000);
});


And('el usuario expande el item facebook', () => {
    tagPage.expandFacebook();
    cy.wait(1000);
});


And('el usuario llena el titulo de facebook', () => {
    tagPage.fillTitleFacebook();
    cy.wait(1000);
});


And('el usuario llena el descripcion de facebook', () => {
    tagPage.fillDescriptionFacebook();
    cy.wait(1000);
});


Then('el usuario debe ser redirigido al editar tag si fue exitoso', () => {
    cy.wait(1000);
    tagPage.validateEditPage();
    cy.wait(1000);
});


