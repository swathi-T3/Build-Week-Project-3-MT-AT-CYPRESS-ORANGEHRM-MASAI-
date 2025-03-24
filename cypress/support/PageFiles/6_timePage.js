class TimePage {
    navigateToTime() {
        cy.get('a[href="/web/index.php/time/viewTimeModule"]').click();
    }

    verifyTimePage() {
        cy.get(':nth-child(6) > .oxd-main-menu-item').should('have.text', 'My Info')
    }
}
export default TimePage;