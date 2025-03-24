class LoginPage {
    visit() {
        cy.visit('/web/index.php/auth/login');
    }

    enterUsername(username) {
        cy.get('input[name="username"]', { timeout: 10000 })
            .should('be.visible')
            .type(username);
    }

    enterPassword(password) {
        cy.get('input[name="password"]', { timeout: 10000 })
            .should('be.visible')
            .type(password);
    }

    clickLogin() {
        cy.get('button[type="submit"]', { timeout: 10000 })
            .should('be.enabled')
            .click();
    }

    verifyDashboard() {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text', { timeout: 10000 })
            .should('contain', 'Dashboard');
    }
}

export default LoginPage;

