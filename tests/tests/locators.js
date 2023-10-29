export const USER_LOGIN = (page) => page.locator("#user_login");
export const USER_PASSWORD = (page) => page.locator("#user_password");
export const USER_PASSWORD_CONFIRMATION = (page) => page.locator("#user_password_confirmation");
export const USER_FIRST_NAME = (page) => page.locator("#user_firstname");
export const USER_LAST_NAME = (page) => page.locator("#user_lastname");
export const USER_EMAIL = (page) => page.locator("#user_mail");
export const SUBMIT_BUTTON = (page) => page.locator('input[value="Submit"]');
export const FLASH_NOTICE = (page) => page.locator("#flash_notice");
export const LOGIN_PAGE_LOGIN = (page) => page.locator("#username");
export const LOGIN_PAGE_PASSWORD = (page) => page.locator("#password");
export const LOGIN_PAGE_BUTTON = (page) => page.locator("#login-submit");
export const LOGIN_MY_ACCOUNT_BUTTON = (page) => page.locator("a.my-account");
export const LOGIN_LOGOUT_BUTTON = (page) => page.locator("a.logout");
export const LOGIN_USER_BUTTON = (page) => page.locator("a.user.active:first-child");
export const ISSUES_BUTTON = (page) => page.locator("a.issues");
export const FILTER_ADD_FILTER = (page) => page.locator("select#add_filter_select");
export const FILTER_CATEGORY_LABEL = (page) => page.locator('label[for="cb_category_id"]');
export const FILTER_FIRST_DROPDOWN_LIST = (page) => page.locator("select#operators_category_id");
export const FILTER_SECOND_DROPDOWN_LIST = (page) => page.locator("select.value#values_category_id_1");
export const FILTER_APPLY_BUTTON = (page) => page.locator('p > a.icon.icon-checked');
export const FILTER_ISSUE = (page) => page.locator("td.category");
export const SEARCH_FIELD = (page) => page.locator("#q");
export const SEARCH_RESULT = (page) => page.locator("span.highlight.token-0");
export const CREATE_NEW_ISSUE = (page) => page.locator('a.icon.icon-add.new-issue[href="/projects/redmine/issues/new"]');
export const CREATE_SUBJECT_FIELD = (page) => page.locator('#issue_subject');
export const CREATE_STATUS = (page) => page.locator('#issue_status_id');
export const CREATE_BUTTON = (page) => page.locator('input[value="Create"]');
export const CREATE_FLASH_NOTICE = (page) => page.locator('#flash_notice');












