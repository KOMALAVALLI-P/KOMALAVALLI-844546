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
        "komala5"
      ],
      "line": 15,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;3"
    },
    {
      "cells": [
        "valli@gmail.com",
        "valli@98"
      ],
      "line": 16,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;4"
    },
    {
      "cells": [
        "preethi@gmail.com",
        "preethi295@"
      ],
      "line": 17,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;5"
    },
    {
      "cells": [
        "komsraj@gmail.com",
        "raj@17"
      ],
      "line": 18,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;6"
    },
    {
      "cells": [
        "komsbaby@gmail.com",
        "baby@10"
      ],
      "line": 19,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;7"
    },
    {
      "cells": [
        "babyraj@gmail.com",
        "babyraj@1017"
      ],
      "line": 20,
      "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;8"
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
  "duration": 10412283300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 4386698500,
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
  "duration": 5114209100,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1121850100,
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
  "name": "The user login using \"komala@gmail.com\" and \"komala5\" with invaild details",
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
  "duration": 9557282500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3188610200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komala@gmail.com",
      "offset": 22
    },
    {
      "val": "komala5",
      "offset": 45
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5122964700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1138048100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;4",
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
  "name": "The user login using \"valli@gmail.com\" and \"valli@98\" with invaild details",
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
  "duration": 9456973300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2793261500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valli@gmail.com",
      "offset": 22
    },
    {
      "val": "valli@98",
      "offset": 44
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5049963900,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1121763600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;5",
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
  "name": "The user login using \"preethi@gmail.com\" and \"preethi295@\" with invaild details",
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
  "duration": 9415640900,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2541595900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "preethi@gmail.com",
      "offset": 22
    },
    {
      "val": "preethi295@",
      "offset": 46
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5160271200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1132375000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;6",
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
  "name": "The user login using \"komsraj@gmail.com\" and \"raj@17\" with invaild details",
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
  "duration": 9374502700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3789227300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komsraj@gmail.com",
      "offset": 22
    },
    {
      "val": "raj@17",
      "offset": 46
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5517973500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1101417900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;7",
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
  "name": "The user login using \"komsbaby@gmail.com\" and \"baby@10\" with invaild details",
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
  "duration": 9403074700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3358279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "komsbaby@gmail.com",
      "offset": 22
    },
    {
      "val": "baby@10",
      "offset": 47
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 4927943700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1098120500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To check if the user is not able to login with Invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-not-able-to-login-with-invalid-details;;8",
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
  "name": "The user login using \"babyraj@gmail.com\" and \"babyraj@1017\" with invaild details",
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
  "duration": 9445529300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2985315100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "babyraj@gmail.com",
      "offset": 22
    },
    {
      "val": "babyraj@1017",
      "offset": 46
    }
  ],
  "location": "InvalidLogin_Crossword_Steps.user_login_using_invalid_email_and_password(String,String)"
});
formatter.result({
  "duration": 5152935100,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin_Crossword_Steps.close_the_browser()"
});
formatter.result({
  "duration": 1097048800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To check if the user is able to register new user and access help",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-new-user-and-access-help",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@TC02_New_Registeration_and_acess_Help"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The user launch the browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The Crossword browser is opened",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User register the login details",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User access the help tab",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_user_launch_the_browser_application()"
});
formatter.result({
  "duration": 9362476500,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.the_Crossword_browser_is_opened()"
});
formatter.result({
  "duration": 2306806700,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_register_the_login_details()"
});
formatter.result({
  "duration": 3487319300,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_update_the_password()"
});
formatter.result({
  "duration": 8033217000,
  "status": "passed"
});
formatter.match({
  "location": "Register_AccessHelp_Crossword_Steps.user_Close_the_browser()"
});
formatter.result({
  "duration": 1089694800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "To check if the user is able to view the new arrivals to add the books in the wishlist",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-new-arrivals-to-add-the-books-in-the-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC03_Adding_books_to_wishlist"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "The User launches the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Openes the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User logins using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "The user add the book in the wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User Logouts the page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_User_launches_the_Chrome_application()"
});
formatter.result({
  "duration": 9702933300,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.openes_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 2119632500,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_logins_using_email_and_password()"
});
formatter.result({
  "duration": 1942361400,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.the_user_add_the_book_in_the_wishlist()"
});
formatter.result({
  "duration": 13775901600,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.user_Logouts_the_page()"
});
formatter.result({
  "duration": 1468627200,
  "status": "passed"
});
formatter.match({
  "location": "AddWishlist_Crossword_Steps.closes_the_browser()"
});
formatter.result({
  "duration": 1102286400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "To check if the user is able to view the best sellers to add the books with quantity",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-view-the-best-sellers-to-add-the-books-with-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@TC04_Updating_pincode_and_review_the_book"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "The User launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Opening the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User logging in using email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User add and update pincode and review the book",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "User Logging out the page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Closing the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_User_launching_the_Chrome_application()"
});
formatter.result({
  "duration": 9491100400,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.opening_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3039281700,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_logging_in_using_email_and_password()"
});
formatter.result({
  "duration": 1177915200,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.the_user_add_books_with_quantity()"
});
formatter.result({
  "duration": 9897783000,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.user_Logging_out_the_page()"
});
formatter.result({
  "duration": 848678600,
  "status": "passed"
});
formatter.match({
  "location": "Rate_And_Review_Crossword_Steps.closing_the_browser()"
});
formatter.result({
  "duration": 1090738800,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "To check if the user is able to switch to next window using window handling",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-switch-to-next-window-using-window-handling",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@TC05_Window_handling_functionality_to_switch_between_pages"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "The User launch the Chrome browser application",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Open the Crossword browser Home page",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "User login  using the email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "The user switches to different window",
  "keyword": "Then "
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_User_launch_the_Chrome_browser_application()"
});
formatter.result({
  "duration": 9313765600,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.open_the_Crossword_browser_Home_page()"
});
formatter.result({
  "duration": 3222786300,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.user_login_using_the_email_and_password()"
});
formatter.result({
  "duration": 1173901900,
  "status": "passed"
});
formatter.match({
  "location": "WindowHandling_Crossword_Steps.the_user_switches_to_different_window()"
});
formatter.result({
  "duration": 9480166800,
  "status": "passed"
});
});