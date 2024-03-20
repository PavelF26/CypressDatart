class HP {

    // dojde k načtení url stránky a konrola
    visitHomepage() {
        cy.visit("https://www.datart.cz/")
        cy.url().should('include', 'https://www.datart.cz/');
        cy.wait(3000)
       // cy.screenshot('Hlavní stránka');

        
    }

}


export default HP;