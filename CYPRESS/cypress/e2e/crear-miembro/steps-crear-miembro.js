import MemberItem from './class-crear-miembro';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";

const memberItem = new MemberItem();

Given('Un usuario se encuentra en la pagina de inicio e inicia sesion en Ghost', () => {
    memberItem.checkMainPage();
});

When('el usuario se dirige a la seccion members del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

And('el usuario da clic en el boton Add yourself as a member to test', () => {
    memberItem.addYourself();
});

And('el usuario da clic en el boton New Member', () => {
    memberItem.newMember();
});

And('el usario digita name y mail', () => {
    memberItem.fillMember(memberItem.item.memberName, memberItem.item.memberEmail);
});

And('el usuario da clic en el boton Save', () => {
    memberItem.saveMember();
});

And('el usuario vuelve a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

And('el usuario da click a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
});

And('el usario digita name y mail invalido', () => {
    memberItem.fillMember('admin', 'mailsinarroba');
});

Then('el usuario da click en el boton Leave', () => {
    memberItem.leave();
    cy.wait(1000);
    cy.url().should('eq', config.members_url);
});

Then('el usuario ve una tabla con el usuario admin agregado', () => {
    memberItem.validateMember('admin', config.username);
});

Then('el usuario ve una tabla con el usuario agregado', () => {
    memberItem.validateMember(memberItem.item.memberName, memberItem.item.memberEmail);
});


Then('el usuario ve un error de usuario existente', () => {
    memberItem.validate('Member already exists. Attempting to add member with existing email address');
});

Then('el usuario ve un error de mail invalido', () => {
    memberItem.validate('Invalid Email.');
});

Then ('el usuario vuelve a la seccion de miembros del sitio', () => {
    memberItem.goToMembers();
    cy.wait(500);
    cy.url().should('eq', config.members_url);
});









