import LoginPage from "../support/PageFiles/1_LoginPage";
import DashboardPage from "../support/PageFiles/2_dashboardPage";
import PimPage from "../support/PageFiles/3_pimPage";
import LeavePage from "../support/PageFiles/4_leavePage";
import AdminPage from "../support/PageFiles/5_adminPage";
import TimePage from "../support/PageFiles/6_timePage";
import NavigationPage from "../support/PageFiles/7_navigationPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const pimPage = new PimPage();
const leavePage = new LeavePage();
const adminPage = new AdminPage();
const timePage = new TimePage();
const navigationPage = new NavigationPage();

describe('OrangeHRM End-to-End Test', () => {
    it('Logs in, navigates through modules, and logs out', () => {
        // Login
        loginPage.visit();
        loginPage.enterUsername('Admin');
        loginPage.enterPassword('admin123');
        loginPage.clickLogin();
        loginPage.verifyDashboard();

        // Dashboard
        dashboardPage.verifyDashboardElements();

        // PIM Module
        pimPage.navigateToPIM();
        pimPage.verifyPIMPage();

        // Leave Module
        leavePage.navigateToLeave();
        leavePage.verifyLeavePage();

        // Admin Module
        adminPage.navigateToAdmin();
        adminPage.verifyAdminPage();

        // Time Module
        timePage.navigateToTime();
        timePage.verifyTimePage();

        // Navigate to other sections
        navigationPage.navigateToMyInfo();
        navigationPage.navigateToDirectory();

        // Logout
        dashboardPage.logout();
    });
});