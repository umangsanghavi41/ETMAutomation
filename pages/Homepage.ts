import{Page,Locator} from "@playwright/test"
export class Home{
    private readonly page:Page;
    private readonly header:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.header=page.locator('h1:has-text("Welcome ")');
    }
    async verifyHomePageExists()
    {
        return await this.header.isVisible();
    }
}