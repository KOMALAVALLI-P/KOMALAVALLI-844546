package com.Pages;


import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.Excel.Excel_Utility;



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
	public void LoginDetails(int a) throws IOException
	{
		Excel_Utility data = new Excel_Utility();//Object to access excel
		driver.findElement(login).click();
		driver.findElement(email).sendKeys(data.excel_username1(a)); //Passing values for email
		driver.findElement(password).sendKeys(data.excel_password1(a));//Passing values for password
		driver.findElement(loginButton).click();
	}
	//Updating pincode and review the book
	public void Rate_And_Review() throws InterruptedException
	{
		driver.findElement(bestSellers).click();
		driver.findElement(bookName).click();
		driver.findElement(pincode).sendKeys("605013");
		driver.findElement(submit1).click();
		driver.findElement(review).click();
		driver.findElement(rate).click();
		driver.findElement(message).sendKeys("Good one to gain knowledge");
	    Thread.sleep(3000);
	}
	//To take the screenshot
		public void screenshot(String path) throws IOException
		{
			TakesScreenshot ts =((TakesScreenshot)driver);
			File SrcFile=ts.getScreenshotAs(org.openqa.selenium.OutputType.FILE);//To get screenshot of output type File
			FileUtils.copyFile(SrcFile, new File(path));//Copying into new file
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
