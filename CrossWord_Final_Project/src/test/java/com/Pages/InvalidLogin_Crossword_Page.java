package com.Pages;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class InvalidLogin_Crossword_Page {

   WebDriver driver;
	
	//Login and Logout
	By login = By.linkText("Login");
	By email = By.id("user_session_email");
	By passwords = By.id("user_session_password");
	By loginButton = By.xpath("//*[@id=\"user_session_submit\"]");
	By logout = By.linkText("Logout");
	
	public InvalidLogin_Crossword_Page(WebDriver driver) 
	{
		this.driver=driver;
	}
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
	//Invalid login 
	public void LoginDetails(String emailId,String password)throws InterruptedException
	{
		driver.findElement(login).click();
		driver.findElement(email).sendKeys(emailId); 
		driver.findElement(passwords).sendKeys(password);
		Thread.sleep(2000);
		driver.findElement(loginButton).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}
		
	//Close the current tab
	public void Closepage() throws InterruptedException 
	{
		Thread.sleep(1000);
		driver.close(); 
	}
		
}
