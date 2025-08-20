# Description
This project was created when I learned that my company wanted to interview QA Engineer candidates for automation. Because the company did not have a formal interview process specific for QA Automation candidates, I wanted to create something so that candidates can showcase some of the general, basic abilities expected of someone participating in the automation effort. 

This repository uses [Playwright](https://playwright.dev/) because Playwright is the framework of choice at the company.

# Getting started
## Prerequsites:
To set up this project successfully, the following tools and frameworks must be installed:
* [Git](https://git-scm.com/downloads)
* [NodeJS](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Setup
To get started, clone the repository:
```
$ git clone https://emergentcode.visualstudio.com/QA%20Automation%20Tools/_git/QA.Automation.Playwright.InterviewTasks
```

After the project is cloned, `cd` into the project's directory and install Playwright:
```
$ npx playwright install
```

This should install the correct version of Playwright based on the `package-lock.json` file.


`faker-js` (used to generate fake test data) can be installed with:
```
npm i @faker-js/faker
```

# Test execution
Tests can be executed with:
```
npx playwright test
```
For more details on how to run various subsets of tests, see Playwright's documentation for [Running and debugging tests](https://playwright.dev/docs/running-tests).

# Tasks
Before beginning the tasks, create a new branch off of `main` and name the branch: `<firstname>-<lastname>`. **Make changes to your branch only.**

Perform the the following tasks:
1. This test currently fails. Debug and fix the test so that it passes.
   * This test does not have any assertions. Add any that you feel is necessary.
2. Create a test to log in successfully using the account created in the test above.
3. Create a test to submit a Contact Us form.
4. Refactor test(s), if necessary.

Commit and push when tasks are completed.
