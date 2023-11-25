import config from "../../assets/config.json";


class LoginPage {

    takeScreenshot() {
        cy.wait(500);
        cy.screenshot("sshot");
        cy.wait(1000);
    }

    visit() {
        cy.visit(config.sigin_url)
        this.takeScreenshot();
    }

    fillUsername(name) {
        cy.get('input#identification').type(name);
        this.takeScreenshot();
    }

    fillPassword(password) {
        cy.get('input#password').type(password);
        this.takeScreenshot();
    }

    submit() {
        cy.get('button[data-test-button="sign-in"]').click();
        this.takeScreenshot();
    }

    login(email, password) {
        cy.get('input#identification').type(email);
        cy.wait(1000);
        this.takeScreenshot();
        cy.get('input#password').type(password);
        cy.wait(1000);
        this.takeScreenshot();
        cy.get('button[data-test-button="sign-in"]').click();
        cy.wait(1000);
        this.takeScreenshot();
    }

    validate(text) {
        cy.wait(1000);
        cy.get('p.main-error').contains(text);
        this.takeScreenshot();

    }

    // generateDatapoolApriori() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-datapool"]').click();
    //     this.takeScreenshot();
    // }

    // generateUsername() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-username"]').click();
    //     this.takeScreenshot();
    // }

    // generatePassword() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-password"]').click();
    //     this.takeScreenshot();
    // }

    // generatePostUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-post-url"]').click();
    //     this.takeScreenshot();
    // }

    // generatePageUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-page-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateDashboardUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-dashboard-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateNewPageUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-new-page-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateNewPostUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-new-post-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateSignupUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-signup-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateSettingsUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-settings-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateMembersUrl() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-members-url"]').click();
    //     this.takeScreenshot();
    // }

    // generateTitle() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-title"]').click();
    //     this.takeScreenshot();
    // }

    // generateText() {
    //     cy.wait(1000);
    //     cy.get('button[data-test-button="generate-text"]').click();
    //     this.takeScreenshot();
    // }


}

export default LoginPage;
