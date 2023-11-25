import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';
import fetchData from "../../fixtures/manejo-staff/fetch_mock_data";
class PageItem {

    item = {}

    constructor() {
        this.initializeData();
    }
    
    async initializeData() {
        this.item = await fetchData();
    }

    takeScreenshot() {
        cy.wait(500);
        cy.screenshot();
    }

    goToSettings() {
        cy.wait(800);
        cy.get('[data-test-nav="settings"]').click();
        this.takeScreenshot();
    }

    goToStaff() {
        cy.wait(800);
        cy.get('#staff').click();
        this.takeScreenshot();
    }

    inviteNewStaff() {
        cy.wait(800);
        cy.contains('button', 'Invite people').click();
        this.takeScreenshot();
    }
s
    selectRole(role) {
        cy.wait(800);
        cy.get(role).check();
        this.takeScreenshot();
    }

    sendInvitation() {
        cy.wait(800);
        cy.contains('button', 'Send invitation now').click();
        this.takeScreenshot();
    }

    typeofEmail(email) {
        cy.wait(800);
        cy.get('input[placeholder="jamie@example.com"]').type(email);
        this.takeScreenshot();
    }

    checkMainPage() {
        let logIn = new LoginPage()
        logIn.visit();
        this.takeScreenshot();
        cy.wait(800);
        logIn.login(config.username, config.password);
        this.takeScreenshot();
        cy.wait(800);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        this.takeScreenshot();
        cy.wait(800)
    }

    validate(text) {
        cy.wait(800);
        cy.get('span.text-red').contains(text);
        this.takeScreenshot();
    }

}

export default PageItem;