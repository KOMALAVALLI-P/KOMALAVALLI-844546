package com.StepDefinition;


import org.openqa.selenium.WebDriver;

import com.Pages.InvalidLogin_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidLogin_Crossword_Steps {
    
	WebDriver driver; 
    InvalidLogin_Crossword_Page invalid =new  InvalidLogin_Crossword_Page(driver);
    
	@Given("^The User launch the Chrome application$")
	public void the_User_launch_the_Chrome_application() 
	{
	    invalid.LaunchBrowser();
	}

	@When("^Open the Crossword Home page$")
	public void open_the_Crossword_Home_page() 
	{
	   invalid.CrossWord_application();
	}

	@Then("^The user login using \"([^\"]*)\" and \"([^\"]*)\" with invaild details$")
	public void user_login_using_invalid_email_and_password(String emailId, String password) throws InterruptedException 
	{
		invalid.LoginDetails(emailId, password);
	}
	

	@Then("^Close the browser$")
	public void close_the_browser() throws InterruptedException 
	{
	    invalid.Closepage();
	}
}
