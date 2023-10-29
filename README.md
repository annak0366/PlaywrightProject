# Automated Tests for Redmine Web-Site

## Summary of the repository
This repository contains a set of automated tests for the Redmine web-site (https://www.redmine.org/).

## Introduction

Redmine is a popular open-source project management and issue tracking system. This repository houses a collection of automated tests that verify the functionality of the Redmine web application. These tests are designed to help ensure the quality and reliability of Redmine by checking various aspects of the system's behavior.

## Features

The automated tests cover Redmine's functionalities, including to:

- User registProject creation and management.
- Filtration of the issues.
- Creating the new issues.
- Searching functionality.
  
## Requirements
Before you can run the Playwright tests for this project, make sure you have the following requirements in place:

1. **Node.js**: You need to install Node.js on your system. You can download it from (https://nodejs.org/).

2. **Playwright**: You'll need Playwright as a dev dependency. Install it using npm:

   npm init playwright@latest
  
## Steps to install

To set up the project follow these steps:

1. Clone this repository to your local machine using `git clone` 
2. Navigate to the project directory:
   `cd myPlaywrightProject`
3.Install the project dependencies by running: `npm install`

## Steps to launch
1. Open a terminal and navigate to the project directory: `cd myPlaywrightProject`
2. Run the tests using the Playwright test runner. To run a test, use the following command:
`npx playwright test test_cases.spec.js`
3.Check the console for test results.
4.Review the generated test report for detailed test outcomes.

## Steps to creating the report

1. Run the tests

2. Capture test output

3. Choose a reporting tool

4. Generate the report

5. Include visual elements: Add to the report visual elements, such as charts, graphs, screenshots, or other visuals that illustrate the test results and issues.




