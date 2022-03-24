import AuthPopup from './auth.popup';

class RegisterPopup {
    private popup = AuthPopup.authModal;

    public get email() {
        return this.popup.$(`#create-account-email`);
    }

    public get password() {
        return this.popup.$(`#create-account-password`);
    }

    public get agreeTermsCheckbox() {
        return this.popup.$(`.Checkbox label[for="agree-terms"]`);
    }

    public get newsletterCheckbox() {
        return this.popup.$(`.Checkbox label[for="newsletter"]`);
    }

    public get submitButton() {
        return this.popup.$(`button[data-testid="Button-primary"]`);
    }

    public async fillEmail(email: string) {
        await this.email.setValue(email);
    }

    public async fillPassword(password: string) {
        await this.password.setValue(password);
    }

    public async register(email: string, password: string, agreeTerms: boolean, agreeNewsletter: boolean) {
        await this.fillEmail(email);
        await this.fillPassword(email);
        if (agreeTerms) {
            await this.agreeTermsCheckbox.click();
        }
        if (agreeNewsletter) {
            await this.newsletterCheckbox.click();
        }
        await this.submitButton.click();
    }


}

export default new RegisterPopup();
