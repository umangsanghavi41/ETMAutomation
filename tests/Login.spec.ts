import{test,expect} from "@playwright/test"
import { Login } from "../pages/Loginpage"
import { Home } from "../pages/Homepage"
import { TestConfig } from "../test.config"
import { DataProvider } from "../utils/LoginDatafromJSON"
import { da } from "@faker-js/faker"
import { log } from "node:console"

let login:Login;
let home:Home;
let config:TestConfig;

/* const jsonPath="data/LoginData.json";
const jsonData=DataProvider.getDatafromJSON(jsonPath);
for(const data of jsonData)
{
   test(`Login with data:${data.testName}`, async({page})=>{
    const login=new Login(page);
    const home=new Home(page);
    const config=new TestConfig();
    const dataProvider=new DataProvider();
    await page.goto(config.url);
    await login.loginwithValidDetails(data.validusername,data.validpassword);
    if(data.testName.toLowerCase=='validdata')
    {
        const result=await home.verifyHomePageExists();
        expect(result).toBeTruthy();
    }
    else
    {
        const validation=await login.loginwithInvalidDetails();
        expect(validation).toBeTruthy();
    }
   }) */
test.beforeEach(async({page})=>{
     login=new Login(page);
     home=new Home(page);
     config=new TestConfig();
     await page.goto(config.url);
})
test("Login user with valid details", async()=>{
    await login.enterUsername(config.validusername);
    await login.enterPassword(config.validpassword);
    await login.clickLoginButton();
})
test.only("Validate login with invalid login details", async()=>{
    await login.enterUsername(config.invalidusername);
    await login.enterPassword(config.invalidpassword);
    await login.clickLoginButton();
    const result=await login.verifyInvalidCredentialsValidation();
    expect(result).toBeTruthy();
})
