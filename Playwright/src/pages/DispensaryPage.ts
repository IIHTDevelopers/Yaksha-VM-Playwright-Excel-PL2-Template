import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";

export default class DispensaryPage {
  readonly page: Page;
  private maxRetries = 3;
  private timeoutDuration = 5000;
  private fromDate: Locator;

  public dispensary: {

    dispensaryLink: Locator;
    activateCounter: Locator;
    counterSelection: Locator;
    counterName: Locator;
    activatedCounterInfo: Locator;
    deactivateCounterButton: Locator;
    titleName: Locator;
    name: Locator;
    prescription: Locator;
    report: Locator;
    userCollectionReport: Locator;
    showReportButton: Locator;
    patientName: Locator;
    searchBar: Locator;

  };

  constructor(page: Page) {
    this.page = page;
    this.fromDate = page.locator(`(//input[@id="date"])[1]`);
    this.dispensary = {
      dispensaryLink: page.locator('a[href="#/Dispensary"]'),
      activateCounter: page.locator("//a[contains(text(),'Counter')]"),
      counterSelection: page.locator('//div[@class="counter-item"]'),
      counterName: page.locator('//div[@class="counter-item"]//h5'),
      activatedCounterInfo: page.locator(`div.mt-comment-info`),
      deactivateCounterButton: page.locator(
        `//button[contains(text(),'Deactivate Counter')]`
      ),
      titleName: page.locator('//span[@class="caption-subject"]'),
      name: page.locator('(//div[@class="col-sm-4 col-md-3"]//label//span)[1]'),
      prescription: page.locator("//a[contains(text(),' Prescription ')]"),
      report: page.locator(" //a[text()=' Reports ']"),
      userCollectionReport: page.locator(
        "(//span[@class='report-name']//i)[1]"
      ),
      showReportButton: page.locator("//span[text()='Show Report']"),
      patientName: page.locator(
        "(//div[@role='row']//div[@col-id='PatientName'])[2]"
      ),
      searchBar: page.locator("#quickFilterInput"),
    };
  }

  /**
   * @Test3 This method verifies the activation message for a random counter in the dispensary module.
   *
   * @description Navigates to the Dispensary page and selects a random counter if multiple counters are available.
   *              After activating the selected counter, the method verifies that the activation message displays
   *              the correct counter name. If the counter name matches in the activation message, the function
   *              returns true. Logs are included to provide details on counter selection and activation status.
   * @return boolean - Returns true if the activation message correctly shows the selected counter name; otherwise, returns false.
   */
  async verifyActiveCounterMessageInDispensary(): Promise<boolean> {
    // write your logic here
    return false;
  }

  /**
   * @Test9 This method verifies if the counter is activated in the dispensary section.
   *
   * @description This function highlights the dispensary link, clicks on it to navigate to the dispensary page,
   *              waits for the page to load, and then attempts to activate the counter. It checks whether the 'deactivate'
   *              counter button becomes visible after activation. If the button is not found, it logs a warning and returns false.
   *              If the activation is successful, it returns true.
   * @return boolean - Returns true if the counter is successfully activated, otherwise false.
   */

  async verifyCounterisActivated(): Promise<boolean> {
    // write your logic here
    return false;
  }

  /**
 * @Test14 This method verifies the search functionality within the Dispensary module.
 *
 * @description This function navigates to the dispensary section and opens the User Collection Report page. 
 *              It allows filtering reports by selecting a "From Date" and clicking the "Show Report" button. 
 *              The method captures a patient's name from the report, uses it to perform a search, and verifies 
 *              that the search results match the expected patient name.
 *
 * @param data - A record containing the "FromDate" for filtering the User Collection Report.
 * @return boolean - Returns true if the search functionality works as expected and the results match; otherwise, false.
 */

  async verfiySearchfunctionality(
    data: Record<string, string>
  ): Promise<boolean> {
    // write your logic here
    return false;
  }
}
