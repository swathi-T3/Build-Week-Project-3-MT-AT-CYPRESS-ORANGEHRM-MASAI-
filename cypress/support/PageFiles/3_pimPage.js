class PimPage {
    navigateToPIM() {
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
    }

    verifyPIMPage() {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }
}

export default PimPage;