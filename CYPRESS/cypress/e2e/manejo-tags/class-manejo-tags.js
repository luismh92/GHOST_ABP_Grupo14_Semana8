import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';
import items from "../../fixtures/manejo-tags/manejo_tags_apriori_mock_data.json";


class TagPage {

    item = {
        "apriori" : items[Math.floor(Math.random()*items.length)],
        "dinamico" : {},
        "aleatorio" : {}
    }["apriori"]


    takeScreenshot() {
        cy.wait(500);
        cy.screenshot("sshot");
        cy.wait(1000);
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

    goTotags() {
        cy.get('[data-test-nav="tags"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    newTag() {
        cy.get('span').contains('New tag').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    submit() {
        cy.get('button[data-test-button="save"]').click();
        this.takeScreenshot();
    }


    validate(text) {
        cy.wait(1000);
        cy.get('p.main-error').contains(text);
        this.takeScreenshot();

    }

    validateEditPage(){
        cy.wait(500);
        cy.get('div').contains('Edit tag').should('be.visible');
    }

    fillName(){
        console.log("fillName", process.env)
        cy.wait(500);
        cy.get('input[data-test-input="tag-name"]').type(this.item.tagName);
        this.takeScreenshot();
    }

    filldescription(){
        cy.wait(1000);
        cy.get('#tag-description').type(this.item.tagDescription);
        cy.wait(1000);
        this.takeScreenshot();
    }

    expandMetadata(){
        cy.wait(1000);
        cy.get('div > h4').contains('Meta data').parent().siblings('button').click();
        this.takeScreenshot();
    }


    fillTitleMetadata(){    
        cy.wait(1000);
        cy.get('input[id="meta-title"]').type(this.item.metaTitle);
        this.takeScreenshot();
    }

    fillDescriptionMetadata(){    
        cy.wait(1000);
        cy.get('textarea[id="meta-description"]').type(this.item.metaDescription);
        this.takeScreenshot();
    }

    fillCanonicalUrlMetadata(){
        cy.wait(1000);
        cy.get('input[id="canonical-url"]').type(this.item.canonicalUrl);
        this.takeScreenshot();
    }   

    expandFacebook(){
        cy.wait(1000);
        cy.get('div > h4').contains('Facebook card').parent().siblings('button').click();
        this.takeScreenshot();
    }

    fillTitleFacebook(){    
        cy.wait(1000);
        cy.get('input[id="og-title"]').type(this.item.ogTitle);  
        this.takeScreenshot();
    }

    fillDescriptionFacebook(){    
        cy.wait(1000);
        cy.get('textarea[id="og-description"]').type(this.item.ogDescription);   
        this.takeScreenshot();
    }
}

export default TagPage;
