import{Page,Locator} from "@playwright/test"
import { Home } from "./Homepage";
export class Login{
    private readonly userNameTextfield:Locator;
    private readonly passwordTextfield:Locator;
    private readonly loginButton:Locator;
    private readonly page:Page;
    private readonly loginValidation:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.userNameTextfield=page.locator("input[name='userName']");
        this.passwordTextfield=page.locator("#password_valid");
        this.loginButton=page.locator(".btn-primary");
        this.loginValidation=page.locator('p:has-text("Please enter correct User ID or password")');
    }

    async enterUsername(username:string)
    {
        await this.userNameTextfield.fill(username);
    }
    async enterPassword(password:string)
    {
        await this.passwordTextfield.fill(password);
    }
    async clickLoginButton()
    {
        await this.loginButton.click();
        
    }

    async verifyLogin()
    {
        return new Home(this.page);
    }
    

    async verifyInvalidCredentialsValidation()
    {
        return this.loginValidation.isVisible();
    }
}