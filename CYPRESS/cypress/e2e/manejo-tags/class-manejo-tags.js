import config from "../../assets/config.json";
import fetchData from "../../fixtures/manejo-tags/fetch_mock_data";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';


class TagPage {

    
    item = {}

    constructor() {
        this.initializeData();
    }
    
    async initializeData() {
        this.item = await fetchData();
    }

    takeScreenshot() {
        cy.wait(500);
        cy.screenshot("sshot");
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
    }

    goTotags() {
        cy.wait(500);
        cy.get('[data-test-nav="tags"]').click();
        this.takeScreenshot();
    }

    newTag() {
        cy.wait(500);
        cy.get('span').contains('New tag').click();
        cy.wait(500);
        this.takeScreenshot();
    }

    submit() {
        cy.wait(500);
        cy.get('button[data-test-button="save"]').click();
        this.takeScreenshot();
    }


    validate(text) {
        cy.wait(500);
        cy.get('p.main-error').contains(text);
        this.takeScreenshot();
    }

    validateEditPage(){
        cy.wait(500);
        cy.get('div').contains('Edit tag')
    }

    fillName(){
        cy.wait(500);
        cy.get('input[data-test-input="tag-name"]').type(this.item.tagName);
        this.takeScreenshot();
    }

    filldescription(){
        cy.wait(500);
        cy.get('#tag-description').type(this.item.tagDescription);
        cy.wait(500);
        this.takeScreenshot();
    }

    expandMetadata(){
        cy.wait(500);
        cy.get('div > h4').contains('Meta data').parent().siblings('button').click();
        this.takeScreenshot();
    }


    fillTitleMetadata(){    
        cy.wait(500);
        cy.get('input[id="meta-title"]').type(this.item.metaTitle);
        this.takeScreenshot();
    }

    fillDescriptionMetadata(){    
        cy.wait(500);
        cy.get('textarea[id="meta-description"]').type(this.item.metaDescription);
        this.takeScreenshot();
    }

    fillCanonicalUrlMetadata(){
        cy.wait(500);
        cy.get('input[id="canonical-url"]').type(this.item.canonicalUrl);
        this.takeScreenshot();
    }   

    expandFacebook(){
        cy.wait(500);
        cy.get('div > h4').contains('Facebook card').parent().siblings('button').click();
        this.takeScreenshot();
    }

    fillTitleFacebook(){    
        cy.wait(500);
        cy.get('input[id="og-title"]').type(this.item.ogTitle);  
        this.takeScreenshot();
    }

    fillDescriptionFacebook(){    
        cy.wait(500);
        cy.get('textarea[id="og-description"]').type(this.item.ogDescription);   
        this.takeScreenshot();
    }
}

export default TagPage;
