@Crossword_WebPage
Feature: Crossword Website

@TC01_Invalid_Login_Functionlity
Scenario Outline: To check if the user is not able to login with Invalid details
Given The User launch the Chrome application
When Open the Crossword Home page 
Then The user login using "<emailId>" and "<password>" with invaild details
And Close the browser

Examples: 

|emailId	                      |password  	|
|komskoms@gmail.com		          |koms29    	|
|komala@gmail.com		          |komala5    	|
|valli@gmail.com		          |valli@98   	|
|preethi@gmail.com		          |preethi295@ 	|
|komsraj@gmail.com		          |raj@17   	|
|komsbaby@gmail.com		          |baby@10   	|
|babyraj@gmail.com		          |babyraj@1017 |

@TC02_New_Registeration_and_acess_Help
Scenario: To check if the user is able to register new user and access help
Given The user launch the browser application
When The Crossword browser is opened
Then User register the login details
Then User access the help tab
Then User Close the browser

@TC03_Adding_books_to_wishlist
Scenario: To check if the user is able to view the new arrivals to add the books in the wishlist
Given The User launches the Chrome application
When Openes the Crossword Home page
Then User logins using email and password
Then The user add the book in the wishlist
Then User Logouts the page
And Closes the browser


@TC04_Updating_pincode_and_review_the_book
Scenario: To check if the user is able to view the best sellers to add the books with quantity
Given The User launching the Chrome application
When Opening the Crossword Home page
Then User logging in using email and password
Then User add and update pincode and review the book
Then User Logging out the page
And Closing the browser

@TC05_Window_handling_functionality_to_switch_between_pages
Scenario: To check if the user is able to switch to next window using window handling
Given The User launch the Chrome browser application
When Open the Crossword browser Home page
Then User login  using the email and password
Then The user switches to different window

