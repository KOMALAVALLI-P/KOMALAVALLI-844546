package com.StepDefinition;


import com.Pages.Rate_And_Review__Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Rate_And_Review_Crossword_Steps {

	
	Rate_And_Review__Crossword_Page update = new  Rate_And_Review__Crossword_Page();
	
	@Given("^The User launching the Chrome application$")
	public void the_User_launching_the_Chrome_application()
	{
	   update.LaunchBrowser();
	}

	@When("^Opening the Crossword Home page$")
	public void opening_the_Crossword_Home_page() 
	{
	    update.CrossWord_application();
	}

	@Then("^User logging in using email and password$")
	public void user_logging_in_using_email_and_password() throws Throwable 
	{
		update.LoginDetails();
	}

	@Then("^User add and update pincode and review the book$")
	public void the_user_add_books_with_quantity() 
	{
	  update.Rate_And_Review();
	 
	}

	@Then("^User Logging out the page$")
	public void user_Logging_out_the_page() 
	{
	    update.LogoutDetails();
	}

	@Then("^Closing the browser$")
	public void closing_the_browser() throws InterruptedException
	{
	  update.Closepage();
	}
}
