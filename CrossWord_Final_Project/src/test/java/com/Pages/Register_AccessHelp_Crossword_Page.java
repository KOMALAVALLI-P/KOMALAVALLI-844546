package com.Pages;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Register_AccessHelp_Crossword_Page 
{

    WebDriver driver;
    
    //Login and Logout
	By login = By.xpath("//*[@id=\"hd\"]/div/div/div/div[1]/div/div[2]/div[1]/a[2]");
	By email = By.id("user_session_email");
	By password = By.id("user_session_password");
	By loginButton = By.xpath("//*[@id=\"user_session_submit\"]");
	//Access Help 
	By help = By.xpath("//*[@id=\"hd\"]/div/div/div[2]/div[1]/div/div[2]/div[1]/a[6]");
	By editDetails = By.xpath("//*[@id=\"content-slot\"]/div[2]/div/div/div/div/div[71]/a");
	
	
	//To Launch the chrome browser using the Url
	public void LaunchBrowser() 
	{ 
		System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe");//To set chromedriver as a browser to launch application
		driver = new ChromeDriver();//Create object to access chromedriver
		driver.manage().window().maximize();//To manage and maximize the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);//To manage timeunits in window
	}
					
	//Using webdriver get visting the testing Website
	public void Crossword_application() 
	{
		driver.get("https://www.crossword.in/");//To get Testing url
		System.out.println(driver.getTitle());
	}

	//For registeration
	public void register() throws InterruptedException
	{
		driver.findElement(login).click();
		Thread.sleep(1000);
		driver.findElement(By.id("customer_user_attributes_name")).sendKeys("Koms");
		driver.findElement(By.id("customer_user_attributes_email")).sendKeys("komsyas1329@gmail.com");
		driver.findElement(By.id("customer_user_attributes_password")).sendKeys("preethi29");
		driver.findElement(By.id("customer_user_attributes_password_confirmation")).sendKeys("preethi29");
		driver.findElement(By.id("customer_user_attributes_additional_detail_dob")).sendKeys("29/05/1998");
		Thread.sleep(1000);
		driver.findElement(By.id("customer_gender_female")).click();	
		driver.findElement(By.id("customer_submit")).click();
		
	}
	//Access Help Tab using Scrolling Functionality
	public void help() throws InterruptedException
	{
		driver.findElement(help).click();
		Thread.sleep(3000);
		JavascriptExecutor js = (JavascriptExecutor) driver;//To perform Scrolling functionality
		js.executeScript("window.scrollBy(0,2000)");//To scroll by 2000units
		Thread.sleep(3000);
		driver.findElement(editDetails).click();
		Thread.sleep(3000);
		
	}
	
	//Close the current tab
	public void Closepage() throws InterruptedException 
	{
		Thread.sleep(1000);
		driver.close(); 
	}
	
}
