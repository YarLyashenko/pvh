class AddressPopup {

    public get addressModal() {
        return $(`.address-new-modal`);
    }

    public get deliveryAddressRadio() {
        return this.addressModal.$(`input#deliveryAddress_new`);
    }

    public get billingAddressRadio() {
        return this.addressModal.$(`input#billingAddress_new`);
    }

    public get deliveryAndBillingRadio() {
        return this.addressModal.$(`input#deliveryBillingAddress_new`);
    }

    public get firstName() {
        return this.addressModal.$(`input#firstName`);
    }

    public get lastName() {
        return this.addressModal.$(`input#lastName`);
    }

    public get address1() {
        return this.addressModal.$(`input#address1`);
    }

    public get address2() {
        return this.addressModal.$(`input#address2`);
    }

    public get city() {
        return this.addressModal.$(`input#city`);
    }

    public get state() {
        return this.addressModal.$(`input#state`);
    }

    public get zipCode() {
        return this.addressModal.$(`input#zipCode`);
    }

    public get phone() {
        return this.addressModal.$(`input#phone1`);
    }

    public get country() {
        return this.addressModal.$(`select#country`);
    }

    public get cancelButton() {
        return this.addressModal.$(`button[data-testid="address-cancel-button"]`);
    }

    public get saveButton() {
        return this.addressModal.$(`button[data-testid="address-save-button"]`);
    }

}

export default new AddressPopup();
