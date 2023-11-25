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
        cy.wait(800);
        cy.screenshot();
        cy.wait(800)
    }

    visit() {
        cy.wait(800)
        cy.visit(config.posts_url);
        this.takeScreenshot();
    }

    visitDetail() {
        cy.wait(800)
        cy.visit(config.new_post_url);
        this.takeScreenshot();
    }

    fillPost() {
        cy.wait(800)
        cy.get('textarea.gh-editor-title').type(this.item.postTitle);
        this.takeScreenshot();
        cy.wait(600)
        cy.get('div.kg-prose').type(this.item.postDescription);
        this.takeScreenshot();
        cy.wait(600)
    }

    submitPublish() {
        cy.wait(800)
        cy.get('button[data-test-button="publish-flow"]').click();
        this.takeScreenshot();
    }

    submitPreview() {
        cy.wait(800)
        cy.get('button[data-test-button="publish-flow-preview"]').click();
        this.takeScreenshot();
    }

    submitContinuePublish() {
        cy.wait(800)
        cy.get('button[data-test-button="continue"]').click();
        this.takeScreenshot();
        
    }

    submitConfirmPublish() {
        cy.wait(800)
        cy.get('button[data-test-button="confirm-publish"]').click();
        this.takeScreenshot();
    }

    goToCreatePost() {
        cy.wait(700)
        cy.get('a[data-test-new-post-button=""]').click();
        this.takeScreenshot();
        cy.wait(800);
        this.visitDetail()
        cy.wait(800);
    }

    goToListPosts() {
        cy.wait(800);
        cy.get('a[data-test-nav="posts"]').click();
        this.takeScreenshot();
    }

    goToIconPosts() {
        cy.wait(800);
        cy.get('a[data-test-nav="new-story"]').click();
        this.takeScreenshot();
    }

    goToSettings() {
        cy.wait(800);
        cy.get('.settings-menu-toggle').click();
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
}

export default PostItem;