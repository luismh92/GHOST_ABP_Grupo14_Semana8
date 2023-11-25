import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';
import fetchData from "../../fixtures/crear-miembro/fetch_mock_data";
class MemberItem {

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

    goToMembers() {
        cy.get('[data-test-nav="members"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    newMember() {
        cy.get('[data-test-new-member-button="true"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    fillMember(name, mail) {
        cy.get('#member-name').type(this.item.memberName);
        this.takeScreenshot();
        cy.wait(1000);
        cy.get('#member-email').type(this.item.memberEmail);
        this.takeScreenshot();
        cy.wait(1000);
    }

    saveMember() {
        try {
            cy.get('button[data-test-button="save"]').click();
            this.takeScreenshot();
            cy.wait(1000);
        } catch (error) {
            console.log(error);
            this.takeScreenshot();
            cy.wait(1000);
        }
    }

    validate(text) {
        cy.wait(500);
        cy.get('p.response').contains(text);
        this.takeScreenshot();
    }

    validateMember(name, email) {
        cy.wait(500);
        cy.get('p.gh-members-list-email').contains(email).should('be.visible');
        this.takeScreenshot();
    }

    leave() {
        cy.wait(500);
        cy.get('[data-test-leave-button]').click();
        this.takeScreenshot();
    }

    addYourself() {
        cy.wait(500);
        cy.get('body').then($body => {
            if ($body.find('[data-test-button="add-yourself"]').length > 0) {
                cy.get('[data-test-button="add-yourself"]').click();
                this.takeScreenshot();
            }
        });
    }
}

export default MemberItem;