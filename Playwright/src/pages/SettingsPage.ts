import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";
import { error } from "console";

export default class SettingsPage {
  readonly page: Page;
  public settings: {
    settingsModule: Locator;
    departments: Locator;
    manageDepartment: Locator;
    searchBar: Locator;
    ChangeBillingCounter: Locator;
    counters: Locator;
    counterItem: Locator;
    editButton: Locator;
    editFormTitle: Locator;
    closeButton: Locator;
    addDepartmentButton: Locator;
    departmentCode: Locator;
    departmentName: Locator;
    parentDepartmentName: Locator;
    addDepartmentModalButton: Locator;
    editbutton: Locator;
    departmentUpdatedSuccessMsg: Locator;
    updateDepaertmentButton: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.settings = {
      settingsModule: page.locator(""),
      departments: page.locator(""),
      manageDepartment: page.locator(""),
      searchBar: page.locator(""),
      ChangeBillingCounter: page.locator(
        ''
      ),
      counters: page.locator(""),
      counterItem: page.locator(""),
      editButton: page.locator(""),
      editFormTitle: page.locator(""),
      closeButton: page.locator(""),
      addDepartmentButton: page.locator(``),
      departmentCode: page.locator(``),
      departmentName: page.locator(``),
      parentDepartmentName: page.locator(``),
      addDepartmentModalButton: page.locator(``),
      editbutton: page.locator(``),
      departmentUpdatedSuccessMsg: page.locator(
        ``
      ),
      updateDepaertmentButton: page.locator(``),
    };
  }


  /**
   * @Test16 This method verifies the addition and editing of a department.
   *
   * @description This function navigates to the settings module, adds a new department by generating a unique department
   *              code and name, and then searches for and edits the department's status to 'inactive' by selecting 'No'
   *              from a dropdown. The method handles interactions with multiple elements, such as filling the department
   *              code and name fields, submitting the form, and verifying the successful update message after making changes.
   *              If successful, it returns the success message; otherwise, it logs any errors.
   *
   * @param addDepartmentData Record<string, string> - Object containing department data such as department code.
   *
   * @return Promise<string> - Returns the success message after department update or logs an error if something goes wrong.
   */
  public async verifyAddAndEditDepartment(
    addDepartmentData: Record<string, string>
  ) {
    // write your logic here
    return "";
  }
}
