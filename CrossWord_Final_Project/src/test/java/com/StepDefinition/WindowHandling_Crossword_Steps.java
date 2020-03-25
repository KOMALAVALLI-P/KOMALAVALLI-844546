package com.StepDefinition;

import java.io.IOException;

import com.Pages.WindowHandling_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WindowHandling_Crossword_Steps {

	
	WindowHandling_Crossword_Page switches = new WindowHandling_Crossword_Page();
	
	@Given("^The User launch the Chrome browser application$")
	public void the_User_launch_the_Chrome_browser_application() 
	{
	   switches.LaunchBrowser();
	}

	@When("^Open the Crossword browser Home page$")
	public void open_the_Crossword_browser_Home_page()
	{
       switches.CrossWord_application();
	}

	@Then("^User login  using the email and password$")
	public void user_login_using_the_email_and_password() throws IOException 
	{
		switches.LoginDetails();
	}

	@Then("^The user switches to different window$")
	public void the_user_switches_to_different_window() throws InterruptedException 
	{
	   switches.window_handling();
	}


}
