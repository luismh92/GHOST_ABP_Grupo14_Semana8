import MemberItem from './class-crear-miembro';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import config from "../../assets/config.json";
import { faker } from '@faker-js/faker';

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
    memberItem.fillMemberName(memberItem.item.memberName);
    memberItem.fillMemberEmail(memberItem.item.memberEmail);
});

And('el usario digita mail', () => {
    memberItem.fillMemberEmail(memberItem.item.memberEmail);
});

And('el usario digita name mas de los caracteres permitidos', () => {
    const data = faker.string.alpha({ length: { min: 700, max: 1000 } })
    memberItem.fillMemberName(data);
});

And('el usario digita mail mas de los caracteres permitidos', () => {
    const data = faker.string.alpha({ length: { min: 700, max: 1000 } })
    memberItem.fillMemberEmail(data);
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
    memberItem.fillMemberName('admin');
    memberItem.fillMemberEmail('mailsinarroba');
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


Then('el usuario deberia ver un error , ingresar nombre', () => {
    memberItem.validate('Invalid Name.');
});









