import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const emailAddress = faker.internet.email({ firstName, lastName });
const password = faker.internet.password();
const companyName = faker.company.name();
const address1 = faker.location.streetAddress();
const address2 = faker.location.secondaryAddress();
const city = faker.location.city();
const state = faker.location.state();
const zipCode = faker.location.zipCode();
const country = 'United States';
const phoneNumber = faker.phone.number();


// FIXME: This test currently fails. Debug and fix the test so that it passes.
//        This test does not have any assertions. Add any that you feel is necessary.
test('Sign up for account', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  
  await page.getByRole('textbox', { name: 'Name' }).fill(`${firstName} ${lastName}`);
  await page.getByRole('textbox', { name: 'Email Address' }).fill(emailAddress);
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('November');
  await page.locator('#years').selectOption('1990');

  await page.getByRole('textbox', { name: 'First Name *' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name *' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Company' }).fill(companyName);
  await page.getByRole('textbox', { name: 'Address *' }).fill(address1);
  await page.getByRole('textbox', { name: 'Address 2' }).fill(address2);
  await page.getByRole('combobox', { name: 'Country *' }).selectOption(country);
  await page.getByRole('textbox', { name: 'State *' }).fill(state);
  await page.getByRole('textbox', { name: 'City *' }).fill(city);
  await page.getByRole('textbox', { name: 'Zipcode *' }).fill(zipCode);
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill(phoneNumber);
  await page.getByRole('button', { name: 'Create Account' }).click();

  await page.getByRole('button', { name: 'Continue' }).click();
});

// TODO: Create a test to log in successfully using the account created above.

// TODO: Create a test to submit a Contact Us form.

// TODO: Refactor, if necessary.