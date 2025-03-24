# ⚙️***OrangeHRM Demo Website - End-to-End Testing Project***-
![Screenshot 2025-03-24 110255](https://github.com/user-attachments/assets/36ba2ee6-e6f9-4692-ad6c-46f328915e19)
<br>
URL:- [OrangeHRM-Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

### 📌 ***Overview***

This project focuses on end-to-end testing of the OrangeHRM demo website, covering both manual testing and Cypress automation. The objective is to ensure the website functions as expected across various modules, providing a smooth and reliable user experience.

### 🎯 ***Objective***

- Validate core functionalities of the OrangeHRM demo website
- Perform manual testing to ensure feature completeness and user flow accuracy
- Implement Cypress automation to improve test efficiency and reusability

### 🔑 ***Key Deliverables***

- Comprehensive Test Plan Document
- Detailed Test Scenarios & Test Cases
- Thorough Bug Reports and Bug Summary Report
- Cypress Automation Framework with Page Object Model (POM)
- Test Execution Report (Manual & Automation)
- Final Test Summary Report

### 🛠️ ***Tools & Technologies Used***

- Manual Testing Tools:
   -  Jira
   -  Zephyr
   -  Xmind Map

- Automation Testing Tools:
    - Cypress
    - Visual Studio Code

- Languages:
    - JavaScript
    - HTML
    - CSS

- Framework Design:
    - Page Object Model (POM)
  ---

## 🕵️ MANUAL TESTING:

### 🔹 ***1. Test Plan***

  - Outlined strategy covering:
      - Scope
      - Approach
      - Resources
      - Timelines

### 🔹 ***2. Xmind Map Test Plan***

  - Created a visual, hierarchical breakdown of:
      - Testing objectives
      - Module breakdown

### 🔹 ***3. Requirement Traceability Matrix (RTM)***

  - Mapped:
    - Test cases to requirements
    - Ensured complete coverage

### 🔹 ***4. Test Scenarios & Test Cases***

  - Designed high-level scenarios covering:
    - Login
    - Dashboard
    - PIM
    - Leave
    - Admin modules

- Detailed test cases include:
    - Clear steps
    - Expected results
    - Postconditions

### 🔹 ***5. Bug Report***

- Documented defects with:
    - Steps to reproduce
    - Severity
    - Environment details
    - Screenshots

### 🔹 ***6. Bug Summary Report***

- Included:
    - Total test cases
    - Defects by severity
    - Module-level pass/fail status
---

## 🤖 ***AUTOMATION TESTING***

### ⚙️ ***Cypress Automation Setup***

- 🔹 Tech Stack
      - Cypress
      - JavaScript
      - Node.js
      - Mocha

### 🔹 ***Installation Steps***

1. Install dependencies:
     - Node modules
     
     ```npm init -y```
   
    - Cypress installation
  
    ```npm install cypress --save-dev```
   
     - Cucumber installation
       
     ```npm install @badeball/cypress-cucumber-preprocessor --save-dev```

3. Run Cypress UI mode:
   
    ```npx cypress open```

4. Run Cypress headless mode:

    ```npx cypress run```


### 🛠️ ***Project Structure***

    📂 OrangeHRM-Cypress-Project
    │
    ├── 📁 cypress
    │   ├── 📁 e2e
    │   │   ├── login.cy.js
    │   │   ├── dashboard.cy.js
    │   │   ├── pim.cy.js
    │   │   ├── leave.cy.js
    │   │   └── admin.cy.js
    │   │
    │   ├── 📁 support
    │   │   ├── commands.js
    │   │   └── e2e.js
    │   │
    │   └── 📁 pageObjects
    │       ├── loginPage.js
    │       ├── dashboardPage.js
    │       ├── pimPage.js
    │       └── leavePage.js
    │
    └── cypress.config.js

### 🔹 ***Explanation***
  - e2e:
     - Contains end-to-end test scripts
  - pageObjects:
    - Holds reusable classes representing web pages
  - support:
      - Custom commands and reusable functions
  - cucumber:
     - /features:
       - Contains feature files for BDD
    - /stepDefinitions:
       - Holds step definitions corresponding to feature files
     
  ### 🔥 ***Test Execution***
  
-  Manual: Conducted step-by-step validation, recorded results.
-  Automation: Ran Cypress tests using npx cypress run.
-  Test Reports: Cypress automatically generated test execution reports.

### 🔥 ***Key Cypress Features Implemented***

- Locators:
    - get(), contains(), and custom selectors
- Assertions:
    - BDD-style (should(), expect())
- Custom Commands:
    - Reusable login and navigation functions
- Hooks:
    - Managed test setup and teardown with before(), beforeEach(), after()
- Page Object Model:
    - Separated UI locators from test logic

### ⏳ ***Challenges Faced***

- Dynamic Elements:
    - Resolved by implementing more reliable selectors
- Authentication Handling:
    - Created reusable login commands
 
### 🏅 ***Conclusion***

The project successfully validated core functionalities of the OrangeHRM demo site. The manual testing phase ensured all features worked as intended, while the Cypress automation framework improved testing speed, consistency, and reusability.

This project demonstrates a complete testing lifecycle — from planning and execution to reporting — highlighting both manual testing skills and Cypress automation expertise.
- File Extensions Used
- Test Plan Document: ```.docx / .pdf```
- Test Scenarios & Cases: ```.xlsx / .csv```
- Bug Reports: ```.xlsx / .pdf```
- Automation Code: ```cy.js```
- Cypress Configuration: ```.js```

### 📌 ***References***

- [📘 Cypress Documentation](https://www.cypress.io/)
- [🌍 OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- [🐱 GitHub Guidence](https://github.com/git-guides)

### 👩‍💻 ***Author***
Swathi Thoorpati
Contact Me- [E-MailId](swathithoorpati03@gmail.com)

### 🌟 ***About Me***
I am an aspiring and dedicated Quality Assurance professional with a strong foundation in manual and automation testing. Passionate about ensuring software reliability and user satisfaction, I specialize in creating comprehensive test strategies, scenarios, and automation frameworks. My expertise in Cypress, JavaScript, and testing methodologies empowers me to deliver high-quality, maintainable test solutions. I am committed to continuous learning and improving testing processes for better software experiences.

### 🏁 ***Approvals***

| Approver | Role | Date |
| -------- | -------- | -------- |
| Shiva kumar sir | Project Manger|  24-03-2025 |
| Anjali Madam    | Project Lead  |  24-03-2025 |

 









  
