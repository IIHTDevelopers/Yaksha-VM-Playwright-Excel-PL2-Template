import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";
export default class AppointmentPage {
  readonly page: Page;
  public appointment: {
    appointmentLink: Locator;
    titleName: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.appointment = {
      appointmentLink: page.locator('a[href="#/Appointment"]'),
      titleName: page.locator("//span[text() = 'Patient List |']"),
      searchBar: page.locator("#quickFilterInput"),
      hospitalSearchBar: page.locator("#id_input_search_using_hospital_no"),
      patientName: page.locator(
        "//div[@role='gridcell' and @col-id='ShortName'][1]"
      ),
      patientCode: page.locator(
        "//div[@role='gridcell' and @col-id='PatientCode'][1]"
      ),
    };
  }
  
  /**
   * @Test10 This method searches and verifies the patient list in the appointment section.
   *
   * @description This function navigates to the appointment page, waits for the patient list to load, and verifies
   *              the visibility of the first patient in the list. It then searches for the first patient's name in
   *              the search bar and checks if the results match the search term. The function repeats the process for
   *              the patient's hospital search code, ensuring that both the name and code are correctly matched in the
   *              search results. If all the checks pass, it returns true; otherwise, it returns false.
   * @return boolean - Returns true if the search and verification process is successful, otherwise false.
   */

  async searchAndVerifyPatientList(): Promise<boolean> {
    // write your logic here
    return false;
  }
}
