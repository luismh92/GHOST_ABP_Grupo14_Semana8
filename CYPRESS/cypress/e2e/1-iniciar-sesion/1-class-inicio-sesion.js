import config from "../../assets/config.json";
import { faker } from '@faker-js/faker';



class LoginPage {

    constructor() {
        this.dataLoaded = false;
        this.data = null;
    }

    takeScreenshot() {
        cy.wait(500);
        //cy.screenshot("sshot");
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


    fetchData() {
        const poolData = Cypress.env('POOL_DATA');
        cy.task('log', 'Pool data actual: ' + poolData);
        if ((poolData === 'apriori' && !this.dataLoaded) || poolData === 'dynamic') {
            let fetchResponse = fetch("https://my.api.mockaroo.com/1_iniciar_sesion.json?key=255bade0");
            fetchResponse.then(response => response.json())
                .then(json => {
                    this.data = json;
                    this.dataLoaded = true;
                })
                .catch(error => {
                    console.log(error);
                });
        } else if (poolData === 'random' && !this.dataLoaded) {
            this.data = Array.from({ length: 10 }, () => ({
                username: faker.internet.email(),
                password: faker.internet.password(),
                dashboard_url: "http://54.172.114.8:2368/ghost/#/dashboard"
            }));
            this.dataLoaded = true;
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 9);
    }

}

export default LoginPage;
