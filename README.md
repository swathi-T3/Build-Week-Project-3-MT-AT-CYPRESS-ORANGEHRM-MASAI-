# ⚙️ OrangeHRM Demo Website - End-to-End Testing Project

![OrangeHRM Screenshot](https://github.com/user-attachments/assets/36ba2ee6-e6f9-4692-ad6c-46f328915e19)

## 🧩 Introduction

This project focuses on end-to-end testing of the OrangeHRM demo website using both **manual testing** and **Cypress automation**. It ensures that the key functionalities across modules like Login, PIM, Leave, Admin, and Time work smoothly and deliver a seamless experience.

## 🚀 Project Type

Fullstack Testing (Manual + Cypress Automation)

---

## 🌐 Deployed App

- **Frontend (Demo App)**: [OrangeHRM-Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- **Backend**: Not applicable
- **Database**: Not applicable

---

## 📁 Directory Structure
      OrangeHRM-Cypress-Project/
         ├── cypress/
         │ ├── e2e/
         │ │ └── orangeHRMTest.cy.js
         │ ├── pageObjects/
         │ │ ├── loginPage.js
         │ │ ├── dashboardPage.js
         │ │ ├── pimPage.js
         │ │ ├── leavePage.js
         │ │ ├── adminPage.js
         │ │ └── navigationPage.js
         │ └── support/
         │ ├── commands.js
         │ └── e2e.js
         ├── cypress.config.js
         ├── package.json
   
---

## 🎥 Video Walkthrough

- **[Project Features Demo (1-3 mins)](https://drive.google.com/file/d/1mW2xMUowCMeQBkImaQjWoF5qZuOmNI3K/view?usp=sharing)** 
- **[Codebase Walkthrough (3-5 mins)](https://drive.google.com/file/d/1Wq2xYnvPi5od_X96dKR4Ey6EpxXRHEGG/view?usp=sharing)** 

---

## ✨ Features

- Manual test planning, scenarios, and RTM mapping
- Bug reporting and summary
- Cypress automation using Page Object Model (POM)
- Custom commands and hooks integration
- Visual test execution reporting

---

## 🧠 Design Decisions or Assumptions

- Used Cypress due to its powerful real-time testing features
- Page Object Model ensures reusability and maintainability
- Assumed demo data will not change frequently
- Authentication handled via custom login command

---

## 🛠️ Installation & Getting Started

### Prerequisites

- Node.js
- Visual Studio Code

### Install Dependencies

```bash
npm init -y
npm install cypress --save-dev


