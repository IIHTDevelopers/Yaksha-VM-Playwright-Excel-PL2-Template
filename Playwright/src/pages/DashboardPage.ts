import { Locator, Page } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    private dashboardLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardLogo = page.locator(`img[title="Go to DanpheEMR-Home"]`);
    }

    async isDashboardVisible(): Promise<boolean> {
        // write your logic here
        return false;
    }
}
