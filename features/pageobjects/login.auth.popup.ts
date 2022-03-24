import AuthPopup from './auth.popup';

class LoginPopup {
    private popup = AuthPopup.authModal;

    public get email() {
        return this.popup.$(`#signin-email`);
    }

    public get password() {
        return this.popup.$(`#signin-password`);
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

    public async login(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.submitButton.click();
    }


}

export default new LoginPopup();
