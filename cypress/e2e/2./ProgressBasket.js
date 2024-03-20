class ProgressBasket {
    addAccessories() {
        cy.get('.basket-wrap-box > .row > .text-right > .btn').scrollIntoView();
        cy.get('[data-id="1"] > .basket-product-box > .basket-product-wrap > .basket-item-quantity > .basket-item-quantity-tooltip > .quantity > [data-type="add"').click();     
    }

    secondStepBasket() {
        cy.url().should('include', 'https://www.datart.cz/kosik');
        cy.get('.basket-wrap-box > .row > .text-right > .btn').scrollIntoView();
        cy.wait(2000);                        
        cy.get('.basket-wrap-box > .row > .text-right > .btn').click();
    }

    priceAndDelivery() {
        cy.url().should('include', 'https://www.datart.cz/kosik/doprava-platba');
        cy.get('#input-trasport-133').click()
        cy.get('#input-trasport-133').should('be.checked');
        cy.wait(2000);                        
        cy.get('#payment-item-3').click()
        cy.get('.container > .row > .text-right > .btn').click()

    }



}



export default ProgressBasket;