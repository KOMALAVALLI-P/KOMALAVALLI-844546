package com.StepDefinition;


import java.io.IOException;

import com.Excel.Excel_Utility;
import com.Pages.AddWishlist_Crossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AddWishlist_Crossword_Steps
{

	Excel_Utility data = new Excel_Utility();
	AddWishlist_Crossword_Page add = new AddWishlist_Crossword_Page();
	
	@Given("^The User launches the Chrome application$")
	public void the_User_launches_the_Chrome_application() 
	{
	    add.LaunchBrowser();
	}

	@When("^Openes the Crossword Home page$")
	public void openes_the_Crossword_Home_page() 
	{
	    add.CrossWord_application();
	}

	@Then("^User logins using email and password$")
	public void user_logins_using_email_and_password() throws Throwable 
	{
		for(int i=1;i<=1;i++)
		{
		add.LoginDetails(i);
		}
	}

	@Then("^The user add the book in the wishlist$")
	public void the_user_add_the_book_in_the_wishlist() throws IOException, InterruptedException 
	{
	    add.wishlist();
	    add.screenshot("src\\test\\resources\\Screenshot\\Wishlist.png");
	}

	@Then("^User Logouts the page$")
	public void user_Logouts_the_page() 
	{
	    add.LogoutDetails();
	}

	@Then("^Closes the browser$")
	public void closes_the_browser() throws InterruptedException 
	{
	    add.Closepage();
	}
}
