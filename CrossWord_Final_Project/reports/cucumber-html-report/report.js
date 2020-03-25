$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Crossword Website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword_WebPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Invalid_Login_Functionlity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cemailId\u003e\" and \"\u003cpassword\u003e\" with invaild details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ],
      "line": 13,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;1"
    },
    {
      "cells": [
        "komskoms@gmail.com",
        "koms29"
      ],
      "line": 14,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Invalid_Login_Functionlity"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"komskoms@gmail.com\" and \"koms29\" with invaild details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 10696521700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 33423623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komskoms@gmail.com",
      "offset": 22
    },
    {
      "val": "koms29",
      "offset": 47
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5432183200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1132324300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check if the user is able to register new user and access help",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-new-user-and-access-help",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@TC02_New_Registeration_and_acess_Help"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "The user launch the browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "The Crossword browser is opened",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User register the login details",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User access the help tab",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_user_launch_the_browser_application()"
});
formatter.result({
  "duration": 9574363700,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_Crossword_browser_is_opened()"
});
formatter.result({
  "duration": 13638713600,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_register_the_login_details()"
});
formatter.result({
  "duration": 3779285600,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_update_the_password()"
});
formatter.result({
  "duration": 8032636400,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_Close_the_browser()"
});
formatter.result({
  "duration": 1128661800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "To check if the user is able to view the new arrivals to add the books in the wishlist",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-new-arrivals-to-add-the-books-in-the-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC03_Adding_books_to_wishlist"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "The User launches the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Openes the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User logins using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "The user add the book in the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User Logouts the page",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_User_launches_the_Chrome_application()"
});
formatter.result({
  "duration": 9587893000,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.openes_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 10547511900,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_logins_using_email_and_password()"
});
formatter.result({
  "duration": 2661981700,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_user_add_the_book_in_the_wishlist()"
});
formatter.result({
  "duration": 7274954300,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_Logouts_the_page()"
});
formatter.result({
  "duration": 1270350200,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.closes_the_browser()"
});
formatter.result({
  "duration": 1097572600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "To check if the user is able to view the best sellers to add the books with quantity",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-best-sellers-to-add-the-books-with-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@TC04_Updating_pincode_and_review_the_book"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "The User launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Opening the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User logging in using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User add and update pincode and review the book",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User Logging out the page",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Closing the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_User_launching_the_Chrome_application()"
});
formatter.result({
  "duration": 9558708400,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.opening_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 4853315800,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_logging_in_using_email_and_password()"
});
formatter.result({
  "duration": 1259275600,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_user_add_books_with_quantity()"
});
formatter.result({
  "duration": 8132833400,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_Logging_out_the_page()"
});
formatter.result({
  "duration": 1296242000,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.closing_the_browser()"
});
formatter.result({
  "duration": 1114173000,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "To check if the user is able to switch to next window using window handling",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-switch-to-next-window-using-window-handling",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@TC05_Window_handling_functionality_to_switch_between_pages"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "The User launch the Chrome browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "Open the Crossword browser Home page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "User login  using the email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "The user switches to different window",
  "keyword": "Then "
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_User_launch_the_Chrome_browser_application()"
});
formatter.result({
  "duration": 9519506500,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.open_the_Crossword_browser_Home_page()"
});
formatter.result({
  "duration": 3171719800,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.user_login_using_the_email_and_password()"
});
formatter.result({
  "duration": 1428611800,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_user_switches_to_different_window()"
});
formatter.result({
  "duration": 13723413600,
  "status": "passed"
});
});