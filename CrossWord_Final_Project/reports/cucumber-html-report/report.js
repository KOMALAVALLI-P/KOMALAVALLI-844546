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
    },
    {
      "cells": [
        "komala@gmail.com",
        "komala98"
      ],
      "line": 15,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;3"
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
  "duration": 10154666000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2434301900,
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
  "duration": 4901205700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1091523900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;3",
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
  "name": "The user login using \"komala@gmail.com\" and \"komala98\" with invaild details",
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
  "duration": 9302306900,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2339750100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komala@gmail.com",
      "offset": 22
    },
    {
      "val": "komala98",
      "offset": 45
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5313765200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1067248900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To check if the user is able to register new user and access help",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-new-user-and-access-help",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC02_New_Registeration_and_acess_Help"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The user launch the browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The Crossword browser is opened",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User register the login details",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User access the help tab",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_user_launch_the_browser_application()"
});
formatter.result({
  "duration": 9294568700,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_Crossword_browser_is_opened()"
});
formatter.result({
  "duration": 4599810400,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_register_the_login_details()"
});
formatter.result({
  "duration": 3077981100,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_update_the_password()"
});
formatter.result({
  "duration": 7678382000,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_Close_the_browser()"
});
formatter.result({
  "duration": 1078820100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To check if the user is able to view the new arrivals to add the books in the wishlist",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-new-arrivals-to-add-the-books-in-the-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC03_Adding_books_to_wishlist"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "The User launches the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Openes the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User logins using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "The user add the book in the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User Logouts the page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_User_launches_the_Chrome_application()"
});
formatter.result({
  "duration": 9258683600,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.openes_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2824001400,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_logins_using_email_and_password()"
});
formatter.result({
  "duration": 831144000,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_user_add_the_book_in_the_wishlist()"
});
formatter.result({
  "duration": 3024885700,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_Logouts_the_page()"
});
formatter.result({
  "duration": 1439266700,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.closes_the_browser()"
});
formatter.result({
  "duration": 1069254800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "To check if the user is able to view the best sellers to add the books with quantity",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-best-sellers-to-add-the-books-with-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC04_Updating_pincode_and_review_the_book"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "The User launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Opening the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User logging in using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User add and update pincode and review the book",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User Logging out the page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Closing the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_User_launching_the_Chrome_application()"
});
formatter.result({
  "duration": 9277254700,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.opening_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3291659600,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_logging_in_using_email_and_password()"
});
formatter.result({
  "duration": 870421300,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_user_add_books_with_quantity()"
});
formatter.result({
  "duration": 4402290100,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_Logging_out_the_page()"
});
formatter.result({
  "duration": 811577600,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.closing_the_browser()"
});
formatter.result({
  "duration": 1069403400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "To check if the user is able to switch to next window using window handling",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-switch-to-next-window-using-window-handling",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@TC05_Window_handling_functionality_to_switch_between_pages"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "The User launch the Chrome browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Open the Crossword browser Home page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User login  using the email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "The user switches to different window",
  "keyword": "Then "
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_User_launch_the_Chrome_browser_application()"
});
formatter.result({
  "duration": 9267421200,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.open_the_Crossword_browser_Home_page()"
});
formatter.result({
  "duration": 4401121900,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.user_login_using_the_email_and_password()"
});
formatter.result({
  "duration": 840682500,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_user_switches_to_different_window()"
});
formatter.result({
  "duration": 13464071600,
  "status": "passed"
});
});