class AuthPopup {

    public get authModal() {
        return $(`#authentication-portal [data-testid="modal-backdrop"]`);
    }

    public get registerButton() {
        return this.authModal.$(`button[data-testid="register"]`);
    }
}

export default new AuthPopup();
