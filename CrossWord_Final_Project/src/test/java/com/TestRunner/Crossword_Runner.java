package com.TestRunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/feature/Testcase.feature",
		plugin = {"pretty","html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		tags = {" @TC01_Invalid_Login_Functionlity , @TC02_New_Registeration_and_acess_Help, @TC03_Adding_books_to_wishlist, @TC04_Updating_pincode_and_review_the_book, "
				+ "@TC05_Window_handling_functionality_to_switch_between_pages"},
		glue = {"com.StepDefinition"},
		monochrome = true
		)

public class Crossword_Runner {

	@AfterClass
	  public static void extendReport()
	{
		 Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		 Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		 Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		 Reporter.setSystemInfo("Machine", "Windows 10"+"64 Bit");
		 Reporter.setSystemInfo("Selenium", "3.141.59");
		 Reporter.setSystemInfo("Maven", "4.0.0");
		 Reporter.setSystemInfo("Java version", "1.8.0_131");
	}
}

