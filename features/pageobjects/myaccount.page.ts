import Page from './page';

class MyAccountPage extends Page {

    public get pageContent() {
        return $(`.my-account__page-content`);
    }

    public get addressBook() {
        return this.pageContent.$(`.//a[contains(@href, 'addressbook')]`);
    }

    public open(locale: string) {
        return super.open(locale, "myaccount/addressbook");
    }
}

export default new MyAccountPage();
