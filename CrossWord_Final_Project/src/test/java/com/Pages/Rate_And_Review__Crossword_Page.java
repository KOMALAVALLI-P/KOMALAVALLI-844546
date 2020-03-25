package com.Pages;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Rate_And_Review__Crossword_Page {

    WebDriver driver;
	
	//Login and Logout
	By login = By.linkText("Login");
	By email = By.id("user_session_email");
	By password = By.id("user_session_password");
	By loginButton = By.xpath("//*[@id=\"user_session_submit\"]");
	By logout = By.linkText("Logout");
	//Adding books with updating pincode
	By bestSellers = By.xpath("//*[@id=\"content-slot\"]/div[4]/div/div/div/div[2]/div/a/img");	
	By bookName = By.xpath("//*[@id=\"content-slot\"]/div[2]/div/div[3]/ul/div/div/li[4]/div/div[2]/span[1]/a");
	By pincode = By.name("zipcode");
	By submit1 = By.className("button");
	//Rate and Review the book
	By review = By.xpath("//*[@id=\"write-review\"]/a");
	By rate = By.xpath("//*[@id=\"rating-4\"]");
	By message = By.id("review_detail_review");
	
	//To Launch the application
	public void LaunchBrowser() 
	{ 
		System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe");//To set chromedriver as a browser to launch application
		driver = new ChromeDriver();//Create object to access chromedriver
		driver.manage().window().maximize();//To manage and maximize the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);//To manage Timeunits in window
	}
	//To Get Crossword application
	public void CrossWord_application()
	{
		driver.get("https://www.crossword.in/");//To get Testing url
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
	//Updating pincode and review the book
	public void Rate_And_Review()
	{
		driver.findElement(bestSellers).click();
		driver.findElement(bookName).click();
		driver.findElement(pincode).sendKeys("605013");
		driver.findElement(submit1).click();
		driver.findElement(review).click();
		driver.findElement(rate).click();
		driver.findElement(message).sendKeys("Good one to gain knowledge");
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
