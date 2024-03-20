import 'cypress-xpath';



class ClickButton {

    // klik pro přihlášení nového uživatele
    clickOnCookies() {
        cy.get('#c-p-bn').click()
        
    }


    hoverMenuHappliances() {
        cy.get('.main-menu-catalog-category')   
            .eq(5)                                
            .trigger('mouseover');                // Provede hover
        cy.wait(5000)                             // Čeká na načtení než provede clik 
        cy.contains(/Lednice/).click();

    }

    filterProductMile() {
        cy.get('.filter-show-more > span').scrollIntoView();
        cy.get(':nth-child(7) > .filter-scrollable > .filter-group > .filter-group-more > .another-items-number').click();
        cy.contains(/Miele/).scrollIntoView();
        cy.contains(/Miele/).click();
        cy.wait(5000)                             

        cy.get('[data-value="Miele"] > input')
          .should('be.checked');

    }

    
    clickRandomInsertButton() {
      cy.xpath('//*[@id="snippet--categoryProductList"]/div/div/div[4]/div[2]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[2]/div[1]/button/span[text()="Vložit do košíku"]').then($buttons => {
        const randomIndex = Math.floor(Math.random() * $buttons.length);
        const randomButton = $buttons.eq(randomIndex);
    
      cy.wrap(randomButton).click();
      cy.wait(5000)   

      });
    }
    
    


    clickRandomCleaners() {
            cy.get('.exponea-basket-carousel .btn.btn-cart.ajax' ).then($buttons => {
              const randomIndex = Math.floor(Math.random() * $buttons.length);
              const randomButton = $buttons.eq(randomIndex);
          
            cy.wrap(randomButton).click();
            cy.wait(5000)  
            cy.get('.close').click(); 

            });
          }

    goToBasket() {
        cy.wait(5000)  
        cy.get('.head-cart').click(); 




    }

          




}


export default ClickButton;