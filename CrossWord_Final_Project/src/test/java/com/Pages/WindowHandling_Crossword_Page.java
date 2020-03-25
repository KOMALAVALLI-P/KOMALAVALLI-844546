package com.Pages;


import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class WindowHandling_Crossword_Page {

   WebDriver driver;
	
	//Login and Logout
	By login = By.linkText("Login");
	By email = By.id("user_session_email");
	By password = By.id("user_session_password");
	By loginButton = By.xpath("//*[@id=\"user_session_submit\"]");
	By logout = By.linkText("Logout");
	//Window handling
	By stationery = By.xpath("//*[@id=\"nav-menu-915599\"]/ul/li[3]/a");
	
	
	//To Launch the application
	public void LaunchBrowser() 
	{ 
		System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe");//To set chromedriver as a browser to launch application
		driver = new ChromeDriver();//Create object to access chromedriver
		driver.manage().window().maximize();//To manage and maximize the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);//To manage the timeunits of the window
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
	//For Window Handling operation
	public void window_handling() throws InterruptedException
	{
		Thread.sleep(5000);
		driver.findElement(stationery).click();
			
		Set<String> winHandles = driver.getWindowHandles();//To get the window
		System.out.println("The number of windows handles are" +winHandles.size());//To display number of windows handled
		for(String winHandle:winHandles)
		{
			driver.switchTo().window(winHandle);//Switches to particular window
		}//Loop for switching
		String title = driver.getTitle();//To get the title of the window handled
		System.out.println("The page title is : " +title);//To print title of the handled window
			
		Set<String> winHandles2 = driver.getWindowHandles();//To get the window 
		System.out.println("The number of windows handles are" +winHandles2.size());
		for(String winHandle2:winHandles2)
		{
			driver.switchTo().window(winHandle2);//Switches to particular window
			driver.close();
		}//Loop for switching	
	}
	
}
