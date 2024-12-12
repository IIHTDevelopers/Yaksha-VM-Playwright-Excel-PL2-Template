import { Locator, Page } from "playwright";
import { CommonMethods } from "../tests/commonMethods";

// import { error } from "console";

export default class ProcurementPage {
  readonly page: Page;
  private procurement: Locator;
  private purchaseRequest: Locator;
  private purchaseOrder: Locator;
  private goodsArrivalNotification: Locator;
  private quotations: Locator;
  private settings: Locator;
  private reports: Locator;
  private favoriteButton: Locator;
  private okButton: Locator;
  private printButton: Locator;
  private firstButton: Locator;
  private previousButton: Locator;
  private nextButton: Locator;
  private lastButton: Locator;
  private fromDate: Locator;
  private toDate: Locator;
  private invalidMsg: Locator;
  private requestedDateColumn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.procurement = page.locator('');
    this.purchaseRequest = page.locator(
      ``
    );
    this.purchaseOrder = page.locator(
      ``
    );
    this.goodsArrivalNotification = page.locator(
      ``
    );
    this.quotations = page.locator(``);
    this.settings = page.locator(``);
    this.reports = page.locator(``);
    this.favoriteButton = page.locator(
      ``
    );
    this.okButton = page.locator(``);
    this.printButton = page.locator(``);
    this.firstButton = page.locator(``);
    this.previousButton = page.locator(``);
    this.nextButton = page.locator(``);
    this.lastButton = page.locator(``);
    this.fromDate = page.locator(``);
    this.toDate = page.locator(``);
    this.invalidMsg = page.locator(``);
    this.requestedDateColumn = page.locator(``);
  }

  /**
   * @Test4 This method verifies the visibility of essential elements in the Purchase Request List on the Procurement page.
   *
   * @description Navigates to the Procurement module and verifies the presence of multiple elements, including buttons
   *              and options related to the Purchase Request List. It highlights each element and checks if it is visible
   *              on the page. If any element is missing, the method returns false, and a warning is logged.
   * @return boolean - Returns true if all elements are visible; otherwise, returns false.
   */
  async verifyPurchaseRequestListElements(): Promise<boolean> {
    // write your logic here
    return false;
  }

  /**
   * @Test8 This method verifies the error message displayed after entering incorrect filter values.
   *
   * @description This method navigates to the Procurement module and attempts to apply
   *              an invalid date filter. After clicking the OK button, it captures the displayed
   *              error message, which indicates that the entered date is invalid.
   *
   * @return string - The trimmed error message displayed on the page after entering invalid filters.
   */
  async verifyNoticeMessageAfterEnteringIncorrectFilters(): Promise<string> {
    // write your logic here
    return "";
  }
}
