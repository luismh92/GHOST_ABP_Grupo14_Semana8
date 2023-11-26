import TagPage from './class-manejo-tags'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";
import { faker } from '@faker-js/faker';

const tagPage = new TagPage();

Given('Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags', () => {
    tagPage.checkMainPage();
    cy.wait(500);
    cy.url().should('eq', config.dashboard_url);
});

When('el usuario se dirige a la seccion tags del sitio', () => {
    tagPage.goTotags();
    cy.wait(500);
    cy.url().should('eq', config.tags_url);
});

And('el usuario hace clic en el boton de New Tag', () => {
    tagPage.newTag();
});

And('el usuario deberia ver el formulario de un nuevo tag', () => {
    cy.url().should('eq', config.new_tag_url);
});

And('el usuario deberia llenar el campo name', () => {
    tagPage.fillName();
});

And('el usuario deberia llenar el campo name vacio', () => {
    tagPage.fillName(' ');
});

And('el usuario da click sobre el boton Save', () => {
    tagPage.submit();
});

And('el usuario deberia llenar el campo description', () => {
    tagPage.filldescription();
});


And('el usuario expande el item metadata', () => {
    tagPage.expandMetadata();
});

And('el usuario llena el titulo de metadata', () => {
    tagPage.fillTitleMetadata();
});


And('el usuario llena el descripcion de metadata', () => {
    tagPage.fillDescriptionMetadata();
});


And('el usuario llena el conical url de metadata', () => {
    tagPage.fillCanonicalUrlMetadata();
});

And('el usuario llena el conical url de metadata invalid', () => {
    tagPage.fillCanonicalUrlMetadata(tagPage.item.tagName);
});


And('el usuario expande el item xcard', () => {
    tagPage.expandXcard();
});


And('el usuario llena el titulo de xcard', () => {
    tagPage.fillTitleXcard();
});


And('el usuario llena la descripcion de xcard', () => {
    tagPage.fillDescriptionXcard();
});


And('el usuario expande el item facebook', () => {
    tagPage.expandFacebook();
});


And('el usuario llena el titulo de facebook', () => {
    tagPage.fillTitleFacebook();
});


And('el usuario llena el descripcion de facebook', () => {
    tagPage.fillDescriptionFacebook();
});


Then('el usuario debe ser redirigido al editar tag si fue exitoso', () => {
    tagPage.validateEditPage();
});


And('el usuario ve un error de name invalido', () => {
    tagPage.erroNameVacio();
});

And('el usuario ve un error de conical url invalido', () => {
    tagPage.erroUrlMetadata();
});


And('el usuario llena el titulo de facebook mas de 100 caracteres', () => {
    const data = faker.string.alpha({ length: { min: 101, max: 200 } })
    tagPage.total = data.length;
    tagPage.fillTitleFacebook(data);
});

And('el usuario llena el descripcion de facebook mas de 65 caracteres', () => {
    const data = faker.string.alpha({ length: { min: 66, max: 200 } })
    tagPage.total = data.length;
    tagPage.fillDescriptionFacebook(data);
});


And('el usuario llena el titulo de metadata mas de 70 caracteres', () => {
    const data = faker.string.alpha({ length: { min: 71, max: 200 } })
    tagPage.total = data.length;
    tagPage.fillTitleMetadata(data);
});

And('el usuario llena el descripcion de metadata mas de 156 caracteres', () => {
    const data = faker.string.alpha({ length: { min: 156, max: 200 } })
    tagPage.total = data.length;
    tagPage.fillDescriptionMetadata(data);
});

And('el usuario ve un warning de caracteres recomendado', () => {
    tagPage.spanCount(tagPage.total);
});




