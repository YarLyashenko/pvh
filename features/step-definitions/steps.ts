import {Given, Then, When} from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';
import AuthPopup from '../pageobjects/auth.popup';
import RegisterPopup from '../pageobjects/register.auth.popup';
import LoginPopup from '../pageobjects/login.auth.popup';

Given(/^I am on the (\w+) page$/, async (locale) => {
    await MainPage.open(locale);
});

When(/^I close cookies popup$/, async () => {
    await MainPage.clickAcceptCookie();
});

When(/^I open desktop login popup$/, async () => {
    await MainPage.openDesktopLogin();
});

When(/^I click register button$/, async () => {
    await AuthPopup.registerButton.click();
});

When(/^I register with email: (.+), password:(.+) and (subscribe|not subscribe) to newsletter$/,
    async (email, password, newsletter) => {
        await RegisterPopup.register(email, password, true, "subscribe" === newsletter);
    });

When(/^I register with valid email, password and (subscribe|not subscribe) to newsletter$/, async (newsletter) => {
    let email = Math.random().toString(36).substring(7) + "@testmail.com";
    await RegisterPopup.register(email, "SuperSecretPassword!", true, "subscribe" === newsletter);
});

When(/^I login with valid email:(.*), password:(.*)$/, async (email, password) => {
    await LoginPopup.login(email, password);
});

Then(/^(Register|Login) popup should be closed$/, async (page) => {
    await expect(AuthPopup.authModal).not.toBeDisplayed();
});

Then(/^Current page should have title "(.*)"$/, async (title) => {
    await expect(browser).toHaveTitle(title);
});
