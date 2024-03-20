class LoginUser {
    LoginU() {
        cy.get('.login-menu.header-menu-item').click()
        cy.wait(3000)
        cy.get('#frm-login').type('pavel.filip26@email.cz')
        cy.get('#frm-password').type('i5KFEQa8VTUhvhr')
        cy.get('.text-center > .btn').click()
        cy.wait(3000)
    
    }


}


export default LoginUser;