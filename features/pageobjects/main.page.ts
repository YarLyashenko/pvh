import Page from './page';

class MainPage extends Page {

    public async clickAcceptCookie() {
        await $(`div[data-testid='CookieNotice'] button`).click();
    }

    public async openDesktopLogin() {
        await $(`button[data-testid='sign-in-button']`).click();
    }

    public async clickNavigationMenuMobile() {
        await $(`label[data-testid='nav-toggle-label']`).click();
    }

    public async openMobileLogin() {
        await this.clickNavigationMenuMobile();
        await $(`li.sl-sign-in-or-register`).click();
    }

    public open(locale: string) {
        return super.open(locale);
    }
}

export default new MainPage();
