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
        cy.wait(2000);
        cy.screenshot("sshot");
        cy.wait(2000);
    }

    checkMainPage() {
        let logIn = new LoginPage()
        logIn.visit();
        this.takeScreenshot();
        cy.wait(2000);
        logIn.login(config.username, config.password);
        this.takeScreenshot();
        cy.wait(2000);
        let dashboard = new DashBoardItem();
        dashboard.visit();
        this.takeScreenshot();
        cy.wait(2000)
    }

    goToMembers() {
        cy.wait(2000);
        cy.get('[data-test-nav="members"]').click();
        this.takeScreenshot();
    }

    newMember() {
        cy.wait(2000);
        cy.get('[data-test-new-member-button="true"]').click();
        this.takeScreenshot();
    }


    fillMemberName(name = this.item.memberName){
        cy.wait(2000);
        cy.get('#member-name').type(name);
        this.takeScreenshot();
    }

    fillMemberEmail(email = this.item.memberEmail){
        cy.wait(2000);
        cy.get('#member-email').type(email);
        this.takeScreenshot();
    }

    saveMember() {
        try {
            cy.wait(2000);
            cy.get('button[data-test-button="save"]').click();
            this.takeScreenshot();
            cy.wait(2000);
        } catch (error) {
            console.log(error);
            this.takeScreenshot();
            cy.wait(2000);
        }
    }

    validate(text) {
        cy.wait(2000);
        cy.get('p.response').contains(text);
        this.takeScreenshot();
    }

    validateMember(name, email) {
        cy.wait(2000);
        cy.get('p.gh-members-list-email').contains(email);
        this.takeScreenshot();
    }

    leave() {
        cy.wait(2000);
        cy.get('[data-test-leave-button]').click();
        this.takeScreenshot();
    }

    addYourself() {
        cy.wait(2000);
        cy.get('body').then($body => {
            if ($body.find('[data-test-button="add-yourself"]').length > 0) {
                cy.get('[data-test-button="add-yourself"]').click();
                this.takeScreenshot();
            }
        });
    }

}

export default MemberItem;