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

    openPageSetting(){
        cy.wait(1000);
        cy.get('button[data-test-psm-trigger]').click({ force: true });
        this.takeScreenshot();
    }

    expandMetadata(){
        cy.wait(1000);
        cy.get('button[data-test-button="meta-data"]').click();
        this.takeScreenshot();
    }

    fillMetaTitle () {
        cy.wait(1000);
        cy.get('input[name="post-setting-meta-title"]').type(this.item.pageTitle);
        this.takeScreenshot();
    }

    fillMetaDescripcion () {
        cy.wait(1000);
        const description = this.item.pageDescription.length > 500 ? this.item.pageDescription.substring(0, 500) : this.item.pageDescription;
        cy.get('textarea[name="post-setting-meta-description"]').type(description);
        this.takeScreenshot();
    }


    expandFacebook(){
        cy.wait(1000);
        cy.get('button[data-test-button="facebook-data"]').click();
        this.takeScreenshot();
    }

    fillFacebookTitle () {
        cy.wait(1000);
        cy.get('input[name="post-setting-og-title"]').type(this.item.pageTitle);
        this.takeScreenshot();
    }

    fillFacebookDescripcion () {
        cy.wait(1000);
        const description = this.item.pageDescription.length > 500 ? this.item.pageDescription.substring(0, 500) : this.item.pageDescription;
        cy.get('textarea[name="post-setting-og-description"]').type(description);
        this.takeScreenshot();
    }

    attachImage() {
        cy.wait(1000);
        const image = './cypress/assets/images/cypress-end-to-end-test.png';
        cy.get('input[type="file"]').last().selectFile(image, {force: true});
        this.takeScreenshot();
    }


}

export default PageItem;