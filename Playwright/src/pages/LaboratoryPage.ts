import { Page, Locator } from "playwright";
import { CommonMethods } from "../tests/commonMethods";
import { expect } from "playwright/test";

export default class LaboratoryPage {
  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private settingsSubModule: Locator;
  private addNewLabTest: Locator;
  private addButton: Locator;
  private closeButton: Locator;
  private starIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.locator('a[href="#/Lab"]');
    this.laboratoryDashboard = page.locator('a[href="#/Lab/Dashboard"]');
    this.settingsSubModule = page.locator('(//a[@href="#/Lab/Settings"])[2]');
    this.addNewLabTest = page.locator(
      '//a[contains(text(),"Add New Lab Test")]'
    );
    this.addButton = page.locator('//button[contains(text(),"Add")]');
    this.closeButton = page.locator('//button[contains(text(),"Close")]');
    this.starIcon = page.locator('i[title="Remember this Date"]');
  }

  public get getErrorMessageLocator() {
    return (errorMessage: string) => {
      return this.page.locator(
        `//p[contains(text(),"error")]/../p[contains(text(),"${errorMessage}")]`
      );
    };
  }

  /**
   * @Test5 This method verifies the error message when attempting to add a new lab test without entering required values.
   *
   * @description Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without
   *              providing any input. Captures and returns the displayed error message. If the modal fails to close,
   *              an error is thrown to indicate failure.
   *
   * @return string - The error message text, trimmed of any whitespace.
   */
  async verifyErrorMessage(): Promise<string> {
    // write your logic here
    return "";
  }
}
