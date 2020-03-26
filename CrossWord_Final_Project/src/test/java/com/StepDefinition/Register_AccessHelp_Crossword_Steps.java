package com.StepDefinition;


import org.junit.Assert;

import com.Pages.Register_AccessHelp_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Register_AccessHelp_Crossword_Steps {
	
	
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
	public int user_register_the_login_details() throws InterruptedException 
	{
	  access.register();
	  int book = access.register();
	    System.out.println("Register:"+book);
	    Boolean b;
	    if(book==1)
	    {
	    	b=false;
	    	System.out.println("Already Register using this Email");
	    	Assert.assertTrue(b);
	    }
	    else
	    {
	    	System.out.println("New Registeration is available");
	    }
	    return book;
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
