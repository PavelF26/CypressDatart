class DeliveryInformation {


    wrongDeliveryInformation() {

        cy.get('#frm-select-addresss-delivery-firstName')
          .type("Jan")
          .should('have.value', 'Jan')

        cy.get('#frm-select-addresss-delivery-lastName')
          .type("Novák")
          .should('have.value', 'Novák')

          cy.get('#frm-select-addresss-delivery-street')
          .type("Přívrat 1")
          .should('have.value', 'Přívrat 1')

          cy.get('#frm-select-addresss-delivery-city')
          .type("Praha")
          .should('have.value', 'Praha')

          cy.get('#frm-select-addresss-delivery-zip')
          .type("61609")
          .should('have.value', '61609')


          cy.get('#frm-select-addresss-delivery-email')
          .type("jannovak.seznam.cz")
         



          cy.get('#frm-select-addresss-delivery-mobilePhone')
          .type("608555777")
          .should('have.value', '608555777')


          cy.get('.container > .row > .text-right > .btn').click()
          cy.url().should('include', 'https://www.datart.cz/kosik/dorucovaci-udaje');

          cy.get('.error').should('be.visible')
          cy.screenshot('error-emailu')





    }




    correctDeliveryInformation() {


        cy.get('#frm-select-addresss-delivery-email')
        .clear()
        .type("jannovak@seznam.cz")
        .then(($input) => {
          if ($input.val() !== 'jannovak@seznam.cz') {
            cy.screenshot('error emailu podruhé');
          }
        })
        .should('have.value', 'jannovak@seznam.cz');

        cy.get('.container > .row > .text-right > .btn').click()


    }

    fourthStepBasket() {
        cy.request('https://www.datart.cz/kosik/shrnuti')
        .then((response) => {
          if (response.status === 200) {
            cy.screenshot('url_available_screenshot');
          }
        });
                  


    }







}



export default DeliveryInformation;
