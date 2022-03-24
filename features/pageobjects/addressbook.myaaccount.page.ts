import Page from './page';
import MyAccountPage from './myaccount.page';

class AddressbookPage extends Page {
    private pageContent = MyAccountPage.pageContent;

    public get addAddressButton() {
        return this.pageContent.$(`button[data-testid="address-add-button"]`);
    }

    public get deliveryAddressRadio() {
        return this.pageContent.$(`input#deliveryAddress_new`);
    }

    public get billingAddressRadio() {
        return this.pageContent.$(`input#billingAddress_new`);
    }

    public get deliveryAndBillingRadio() {
        return this.pageContent.$(`input#deliveryBillingAddress_new`);
    }

    public get firstName() {
        return this.pageContent.$(`input#firstName`);
    }

    public get lastName() {
        return this.pageContent.$(`input#lastName`);
    }

    public get address1() {
        return this.pageContent.$(`input#address1`);
    }

    public get address2() {
        return this.pageContent.$(`input#address2`);
    }

    public get city() {
        return this.pageContent.$(`input#city`);
    }

    public get state() {
        return this.pageContent.$(`input#state`);
    }

    public get zipCode() {
        return this.pageContent.$(`input#zipCode`);
    }

    public get phone() {
        return this.pageContent.$(`input#phone1`);
    }

    public get country() {
        return this.pageContent.$(`input#country`);
    }

    public open(locale: string) {
        return super.open(locale, "myaccount");
    }
}

export default new AddressbookPage();
