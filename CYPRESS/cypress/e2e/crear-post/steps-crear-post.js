import PostItem from './class-crear-post'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";
import { faker } from '@faker-js/faker';
const postItem = new PostItem();

Given('Un usuario se encuentra en la pagina principal del admin de Ghost', () => {
    postItem.checkMainPage();
    cy.url().should('eq', config.dashboard_url);
    cy.wait(700)
});

When('el usuario hace click sobre el item Posts', () => {
    postItem.goToListPosts();
});

When('el usuario hace click sobre el icono post', () => {
    postItem.goToIconPosts();
});

And('el usuario hace click sobre el boton New Post', () => {
    postItem.goToCreatePost();
});

And('el usuario hace click sobre el boton Settings', () => {
    postItem.goToSettings()
});

And('el usuario escribe en los campos Titulo y Contenido', () => {
    postItem.fillTitle();
    postItem.fillDescription();
});

And('el usuario escribe en los campos Titulo', () => {
    postItem.fillTitle();
});

And('el usuario escribe en los campos Contenido', () => {
    postItem.fillDescription();
});

And('el usuario escribe en los campos Url mas de los caracteres', () => {
    const data = faker.string.alpha({ length: { min: 700, max: 1000 } })
    postItem.fillUrl(data);
});

And('el usuario hace click sobre el boton Preview', () => {
    postItem.submitPreview();
});

And('el usuario hace click sobre el boton Publicar', () => {
    postItem.submitPublish()
});

And('el usuario hace click sobre el boton Continuar', () => {
    postItem.submitContinuePublish()
});

And('el usuario hace click sobre el boton Publicar Ahora', () => {
    postItem.submitConfirmPublish()
});

And('el usuario agrega un numero a la hora', () => {
    postItem.fillHora(2)
});

Then('el usuario deberia ver el menu de configuracion del Post', () => {
    cy.wait(800)
    cy.get('form[aria-label="Post settings"]').should('exist');
});

Then('el usuario deberia ser redirigido a la lista de los posts', () => {
    cy.wait(800)
    cy.url().should('eq', config.posts_url);
});

Then('el usuario deberia ser redirigido al formulario Crear Post', () => {
    cy.wait(800)
    cy.url().should('eq', config.new_post_url);
});

Then('la url deberia ser diferente al titulo', () => {
    cy.wait(800)
    cy.get('input[name="post-setting-slug"]').should('not.have.value', postItem.item.postTitle);
});

Then('el usuario deberia ver la previsualizacion del post', () => {
    cy.wait(800)
    cy.get('div.gh-browserpreview-iframecontainer').should('exist')
});

Then('el usuario deberia ver el post como publicado', () => {
    cy.wait(800)
    cy.get('div.gh-publish-title').should('exist')
});


Then('el usuario deberia ver el error de formato', () => {
    cy.wait(800)
    postItem.errorHora()
});