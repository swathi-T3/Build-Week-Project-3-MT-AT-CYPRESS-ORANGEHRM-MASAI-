class NavigationPage {
    navigateToMyInfo() {
        cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click();
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('have.text', 'Admin')
    }

    navigateToDirectory() {
        cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
        cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Directory')
    }
}

export default NavigationPage;