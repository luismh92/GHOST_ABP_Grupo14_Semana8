import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';
import fetchData from "../../fixtures/crear-pagina/fetch_mock_data";

class PageItem {

    item = {}

    constructor() {
        this.initializeData();
    }
    
    async initializeData() {
        this.item = await fetchData();
    }

    takeScreenshot() {
        cy.wait(1000);
        cy.screenshot();
    }

    visit() {
        cy.wait(1000);
        cy.visit(config.pages_url);
        this.takeScreenshot();
    }

    visitDetail() {
        cy.wait(1000);
        cy.visit(config.new_page_url);
        this.takeScreenshot();
    }

    fillPage() {
        cy.wait(1000);
        cy.get('textarea.gh-editor-title').type(this.item.pageTitle);
        this.takeScreenshot();
        cy.wait(1000);
        cy.get('div.kg-prose').type(this.item.pageDescription);
        this.takeScreenshot();
    }

    submitPublish() {
        cy.wait(1000);
        cy.get('button[data-test-button="publish-flow"]').click();
        this.takeScreenshot();
    }

    submitPreview() {
        cy.wait(1000);
        cy.get('button[data-test-button="publish-preview"]').click();
        this.takeScreenshot();
    }

    submitContinuePublish() {
        cy.wait(1000);
        cy.get('button[data-test-button="continue"]').click();
        this.takeScreenshot();
    }

    submitConfirmPublish() {
        cy.wait(1000);
        cy.get('[data-test-button="publish-flow"]').click({ force: true });
        this.takeScreenshot();
    }

    goToCreatePage() {
        cy.wait(1000);
        cy.get('a[data-test-new-page-button=""]').click();
        this.takeScreenshot();
        cy.wait(1000);
        this.visitDetail();
    }

    goToListPages() {
        cy.wait(1000);
        cy.get('a[data-test-nav="pages"]').click();
        this.takeScreenshot();
    }

    goToSettings() {
        cy.wait(1000);
        cy.get('.settings-menu-toggle').click();
        this.takeScreenshot();
    }

    checkMainPage() {
        let logIn = new LoginPage()
        logIn.visit();
        this.takeScreenshot();
        cy.wait(1000);
        logIn.login(config.username, config.password);
        this.takeScreenshot();
        cy.wait(1000);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        this.takeScreenshot();
        cy.wait(1000)
    }
}

export default PageItem;