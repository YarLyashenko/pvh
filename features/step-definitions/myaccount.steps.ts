import {Then, When} from '@wdio/cucumber-framework';

import MyAccountPage from '../pageobjects/myaccount.page';
import AddressBookPage from '../pageobjects/addressbook.myaaccount.page';
import AddressPopup from '../pageobjects/address.popup';

When(/^I click address book button$/, async () => {
    await MyAccountPage.addressBook.click();
});
When(/^I click new address button$/, async () => {
    await AddressBookPage.addAddressButton.click();
});
When(/^I fill firstname:(.+), lastname:(.+), address1:(.+), address2:(.+), city:(.+), zipcode:(.+), phone:(.+), countryCode:(.+)$/,
    async (firstname, lastname, address1, address2, city, zipcode, phone, countryCode) => {
        await AddressPopup.firstName.setValue(firstname);
        await AddressPopup.lastName.setValue(lastname);
        await AddressPopup.address1.setValue(address1);
        await AddressPopup.address2.setValue(address2);
        await AddressPopup.city.setValue(city);
        await AddressPopup.zipCode.setValue(zipcode);
        await AddressPopup.phone.setValue(phone);
        await AddressPopup.country.selectByAttribute("value", countryCode);
    });
Then(/^I verify firstname:(.+), lastname:(.+), address1:(.+), address2:(.+), city:(.+), zipcode:(.+), phone:(.+), country:(.+)$/,
    async (firstname, lastname, address1, address2, city, zipcode, phone, country) => {
        await expect(AddressBookPage.firstName).toHaveValue(firstname);
        await expect(AddressBookPage.lastName).toHaveValue(lastname);
        await expect(AddressBookPage.address1).toHaveValue(address1);
        await expect(AddressBookPage.address2).toHaveValue(address2);
        await expect(AddressBookPage.city).toHaveValue(city);
        await expect(AddressBookPage.zipCode).toHaveValue(zipcode);
        await expect(AddressBookPage.phone).toHaveValue(phone);
        await expect(AddressBookPage.country).toHaveValue(country);
    });

When(/^I click save new address$/, async () => {
    await AddressPopup.saveButton.click();
});

