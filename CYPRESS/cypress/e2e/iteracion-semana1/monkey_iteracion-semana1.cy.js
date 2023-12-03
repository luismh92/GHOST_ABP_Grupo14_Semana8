import PageItem from '../crear-pagina/class-crear-pagina'
const pageItem = new PageItem();

describe('Ghost Pages with monkeys', function() {
    it('Visita las paginas en el admin de  Ghost #randomClick', function() {
        pageItem.checkMainPage();
        pageItem.goToListPages();
        cy.wait(1000);
        randomClick(10);
    })

    it('Visita las paginas en el admin de  Ghost #randomEvent', function() {
        pageItem.checkMainPage();
        pageItem.goToListPages();
        cy.wait(1000);
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}


const elementsAndEvents = { 'a': 'click', 'input': 'type', 'select': 'select', 'button': 'click' }

function randomEvent(monkeysLeft){

    if(monkeysLeft > 0) {
        const elements = Object.keys(elementsAndEvents)
        const element = elements[(Math.random() * elements.length) | 0]
    
        cy.get("body").then($body => {
            if ($body.find(element).length > 0) {   
                cy.get(element)
                .then( $el =>  {
                    const event = elementsAndEvents[element]
                    let randomEle = $el.get(getRandomInt(0, $el.length));
                    
                    if(!Cypress.dom.isHidden(randomEle)) {
                        cy.wrap(randomEle).trigger(event, {force: true});    
                        monkeysLeft = monkeysLeft - 1;
                    }
                    cy.wait(1000);
                    randomEvent(monkeysLeft);
                })
            }else{
                monkeysLeft = monkeysLeft - 1;
                cy.wait(1000);
                randomEvent(monkeysLeft); 
            }
        });
    }
}
