class AdminPage {
    navigateToAdmin() {
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
    }

    verifyAdminPage() {
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('have.text', 'Admin')
    }
}

export default AdminPage;