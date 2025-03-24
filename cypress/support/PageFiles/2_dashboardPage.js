class DashboardPage {
    verifyDashboardElements() {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
    }

    logout() {
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();
    }
}

export default DashboardPage;