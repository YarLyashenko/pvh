/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param locale path of the sub page (e.g. nl.tommy.com)
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    public open(locale: string, path?: string) {
        return browser.url(`https://${locale}.tommy.com/${path ? path : ''}`)
    }
}
