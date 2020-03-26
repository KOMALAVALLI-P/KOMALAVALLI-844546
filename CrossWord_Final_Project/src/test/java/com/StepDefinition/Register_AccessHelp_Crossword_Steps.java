package com.StepDefinition;


import com.Pages.Register_AccessHelp_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register_AccessHelp_Crossword_Steps
{
	
	Register_AccessHelp_Crossword_Page access = new Register_AccessHelp_Crossword_Page();
	@Given("^The user launch the browser application$")
	public void the_user_launch_the_browser_application() 
	{
	    access.LaunchBrowser();
	}

	@When("^The Crossword browser is opened$")
	public void the_Crossword_browser_is_opened() 
	{
	    access.Crossword_application();
	}

	@Then("^User register the login details$")
	public void user_register_the_login_details() throws InterruptedException 
	{
	   access.register();
	}

	@Then("^User access the help tab$")
	public void user_update_the_password() throws InterruptedException 
	{
	   access.help();
	}

	@Then("^User Close the browser$")
	public void user_Close_the_browser() throws Throwable {
	   access.Closepage();
	}


}
