import { Locator, Page } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private admin: Locator;
  private logOut: Locator;
  private rememberMeCheckbox: Locator;


  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(``);
    this.passwordInput = page.locator(``);
    this.loginButton = page.locator(``);
    this.loginErrorMessage = page.locator(
      ``
    );
    this.admin = page.locator('');
    this.logOut = page.locator("");
    this.rememberMeCheckbox = page.locator(``);

  }

  async navigate() {
    await this.page.goto("");
  }

  /**
   * @Test1 This method logs in the user with valid credentials.
   *
   * @param username - The username used for login.
   * @param password - The password used for login.
   * @description Attempts to log in using the provided username and password. Highlights input fields
   *              during interaction and checks for successful login by verifying the visibility of the
   *              'admin' element post-login.
   * @return boolean - Returns true if login is successful, otherwise false.
   */

  async performLogin(loginData: Record<string, string>): Promise<boolean> {
    // write your logic here
    return false;
  }


  
/**
 * @Test11 This method verifies the presence of login fields and attempts to log in if the fields are visible.
 *
 * @description This function checks if the username, password, and "Remember Me" checkbox are present on the login page. 
 *              If the user is already logged in, it first logs the user out to reset the login state. Once the login fields 
 *              are verified, it performs a login operation using the provided login data. The function returns true if the 
 *              login is successful, otherwise false.
 *
 * @param loginData Record<string, string> - An object containing login credentials such as username and password.
 * 
 * @return Promise<boolean> - Returns true if the user successfully logs in after verifying the presence of the login fields, 
 *                            otherwise false.
 */
async verifyThePresenceOfLoginFields(loginData: Record<string, string>): Promise<boolean> {
  // write your logic here
    return false;
}

}
