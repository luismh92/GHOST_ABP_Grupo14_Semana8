import config from "../../assets/config.json";
import LoginPage from '../1-iniciar-sesion/1-class-inicio-sesion';
import DashBoardItem from '../dashboard/class-dashboard';
import fetchData from "../../fixtures/crear-post/fetch_mock_data";
class PostItem {

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
        cy.wait(1000)
    }

    visit() {
        cy.wait(1000)
        cy.visit(config.posts_url);
        this.takeScreenshot();
    }

    visitDetail() {
        cy.wait(1000)
        cy.visit(config.new_post_url);
        this.takeScreenshot();
    }

    fillPost() {
        cy.get('textarea.gh-editor-title').type(this.item.postTitle);
        this.takeScreenshot();
        cy.wait(1000)
        cy.get('div.kg-prose').type(this.item.postDescription);
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitPublish() {
        cy.get('button[data-test-button="publish-flow"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitPreview() {
        cy.get('button[data-test-button="publish-flow-preview"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitContinuePublish() {
        cy.get('button[data-test-button="continue"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    submitConfirmPublish() {
        cy.get('button[data-test-button="confirm-publish"]').click();
        this.takeScreenshot();
        cy.wait(1000)
    }

    goToCreatePost() {
        cy.get('a[data-test-new-post-button=""]').click();
        this.takeScreenshot();
        cy.wait(1000);
        this.visitDetail()
        cy.wait(1000);
    }

    goToListPosts() {
        cy.get('a[data-test-nav="posts"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    goToIconPosts() {
        cy.get('a[data-test-nav="new-story"]').click();
        this.takeScreenshot();
        cy.wait(1000);
    }

    goToSettings() {
        cy.get('.settings-menu-toggle').click();
        this.takeScreenshot();
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
}

export default PostItem;