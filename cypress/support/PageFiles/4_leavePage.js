class LeavePage {
    navigateToLeave() {
        cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
    }

    verifyLeavePage() {
        cy.get(':nth-child(3) > .oxd-main-menu-item').should('have.text','Leave')
          
    }
}

export default LeavePage;

