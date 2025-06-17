# ⚙️ OrangeHRM Demo Website - End-to-End Testing Project

![OrangeHRM](https://github.com/user-attachments/assets/36ba2ee6-e6f9-4692-ad6c-46f328915e19)

🔗 **Live URL**: [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## 🧾 Introduction

This project demonstrates a full end-to-end testing lifecycle on the OrangeHRM demo site. It combines manual testing documentation with Cypress automation, focusing on validating core HRM features, improving test reusability, and ensuring quality and reliability of the application under test.

---

## 🚀 Project Type

**Fullstack QA Project**
- Manual Testing Documentation
- Cypress Automation Framework (POM)

---

## 🌐 Deployed App

- Frontend: [OrangeHRM UI](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- Backend: Not applicable (UI Demo site)
- Database: Not applicable

---

## 📁 Directory Structure

```
OrangeHRM-Cypress-Project/
├── cypress/
│   ├── e2e/
│   │   └── orangeHRMTest.cy.js
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   └── pageObjects/
│       ├── loginPage.js
│       ├── dashboardPage.js
│       ├── pimPage.js
│       ├── leavePage.js
│       ├── adminPage.js
│       └── navigationPage.js
├── cypress.config.js
└── README.md
```

---

## 🎬 Video Walkthroughs

- 🔗 **[Features Demo](https://drive.google.com/file/d/1mW2xMUowCMeQBkImaQjWoF5qZuOmNI3K/view?usp=drive_link)** 
- 🔗 **[Codebase Walkthrough](https://drive.google.com/file/d/1Wq2xYnvPi5od_X96dKR4Ey6EpxXRHEGG/view?usp=drive_link)**

---

## ✅ Features Covered

- 🔐 Login Authentication
- 🧑 Employee Management (PIM)
- 🗓️ Leave Module Flow
- 📊 Dashboard Validation
- 👤 Admin Role Verification
- 🧭 Navigation through Sidebar Menus

---

## 📐 Design Decisions & Assumptions

- Used Cypress with Page Object Model for separation of concerns
- Manual and automation both validate the same flow for coverage parity
- All test data is static as the demo site does not save state
- Login logic was reused with custom Cypress commands

---

## 💻 Usage

Navigate into the project and launch Cypress tests using:

```bash
cd OrangeHRM-Cypress-Project
npx cypress open
```

You can use the GUI to run individual spec files.

---

## 🔐 Credentials

Use the following credentials to log in to OrangeHRM:

```bash
Username: Admin
Password: admin123
```

---

## 📡 APIs Used

None (Testing a UI demo site with static data)

---

## 🧪 API Endpoints

Not applicable (UI-based testing only)

---

## 🧰 Technology Stack

| Category         | Tools               |
|------------------|---------------------|
| Manual Testing   | Jira, Zephyr, XMind |
| Automation       | Cypress              |
| Languages        | JavaScript, HTML, CSS |
| Framework        | Page Object Model (POM) |

---

## 📘 Documents

| 📄 Document             | 🔗 Link |
|--------------------------|--------|
| Test Plan                | [View](https://docs.google.com/document/d/1jW2MNoxhKw3z4FhTaYVMKSVonxVsAUHttTfZng54I4E/edit?usp=drive_link) |
| XMind Map                | [View](https://drive.google.com/file/d/1y8ESogtrtCn1ZGOnqVlDYYrG-tm4CzT5/view?usp=drive_link) |
| RTM                      | [View](https://docs.google.com/document/d/1fnXlupH7lkOThfcBNztFod7ddWG2-BSjq598PfjYVys/edit?usp=drive_link) |
| Test Scenarios & Cases   | [View](https://docs.google.com/spreadsheets/d/1AHWV_AJR5QWyoYelLIc_OIOO-FnF7jYR/edit?usp=drive_link) |
| Test Execution Report    | [View](https://docs.google.com/document/d/1DAoBeZT1oPYKD8eE96Qkzudj2Jq25UnRNaQsGzPtjEE/edit?usp=drive_link) |
| Bug Report               | [View](https://docs.google.com/spreadsheets/d/1SxHQCopCn9sxKwWhI4rFqyrrXu-QdUBpldXY68d3aRE/edit?usp=drive_link) |
| Bug Summary              | [View](https://docs.google.com/document/d/1DWc1EiT5k4TCSCFPD-SbtRWVr0NJjxrPhenQ0BBK3qA/edit?usp=drive_link) |

---

## ⚠️ Challenges Faced

- Dynamic elements required stable selectors
- Login abstraction had to be handled for all modules
- Intermittent UI delays handled via retry logic

---

## 🧾 File Formats Used

| Document Type          | Extension       |
|------------------------|-----------------|
| Test Plan              | `.docx`, `.pdf` |
| Test Scenarios/Cases   | `.xlsx`, `.csv` |
| Bug Reports            | `.xlsx`, `.pdf` |
| Automation Test Files  | `.cy.js`        |
| Config Files           | `.js`           |

---

## 🏁 Approvals

| Approver        | Role              | Date        |
|-----------------|-------------------|-------------|
| Shiva Kumar Sir | Project Manager   | 24-03-2025  |
| Anjali Madam    | Project Lead      | 24-03-2025  |

---

## 📌 References

- [📘 Cypress Documentation](https://www.cypress.io/)
- [🌍 OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- [🐱 GitHub Guide](https://github.com/git-guides)

---

## 👩‍💻 Author

**Swathi Thoorpati**  
📧 [swathithoorpati03@gmail.com](mailto:swathithoorpati03@gmail.com)

---

## 💡 About Me

I am an aspiring and dedicated QA Engineer with hands-on experience in both manual and automation testing. Skilled in test planning, bug tracking, and automation frameworks using Cypress and JavaScript, I strive to ensure high-quality, bug-free software through methodical testing and innovative solutions.
