package com.Pages;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class AddWishlist_Crossword_Page {

   WebDriver driver;
	
	//Login and Logout
	By login = By.linkText("Login");
	By email = By.id("user_session_email");
	By password = By.id("user_session_password");
	By loginButton = By.xpath("//*[@id=\"user_session_submit\"]");
	By logout = By.linkText("Logout");
	//Adding books to the wishlist
	By bestSellers = By.xpath("//*[@id=\"content-slot\"]/div[4]/div/div/div/div[2]/div/a/img");
	By book= By.xpath("//*[@id=\"content-slot\"]/div[2]/div/div[1]/ul/div/div/li[3]/div/div[2]/span[1]/a");
	By wishlist = By.xpath("//*[@id=\"wishlist\"]/input[2]");
		
	//To Launch the application
	public void LaunchBrowser() 
	{
	    System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
	//To Get Crossword application
	public void CrossWord_application()
	{
		driver.get("https://www.crossword.in/");
		System.out.println(driver.getTitle());
	}
	
	//For login operation
	public void LoginDetails() 
	{
    	driver.findElement(login).click();
		driver.findElement(email).sendKeys("komalavalli1998@gmail.com"); 
		driver.findElement(password).sendKeys("koms@2905");
		driver.findElement(loginButton).click();
	}
	//Adding books to the wishlist
	public void wishlist()
	{
		driver.findElement(bestSellers).click();
		driver.findElement(book).click();
		driver.findElement(wishlist).click();
	}
		
	//For Logout operation
	public void LogoutDetails()
	{
	    driver.findElement(logout).click();
	}
		
	//Close the current tab
	public void Closepage() throws InterruptedException 
	{
		Thread.sleep(1000);
		driver.close(); 
	}
}
