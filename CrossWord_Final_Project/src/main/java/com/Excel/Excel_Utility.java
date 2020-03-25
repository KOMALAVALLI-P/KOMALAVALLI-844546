package com.Excel;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class Excel_Utility {

	

			//To read and return the username
			public  String excel_username1(int a) throws IOException
			{	  
				FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\TestData\\TestData.xlsx"));
				XSSFWorkbook workbook = new XSSFWorkbook(fil);
				XSSFSheet sheet=workbook.getSheet("Sheet1");
				int count=sheet.getLastRowNum();
				System.out.println(count);	    
				XSSFRow row =sheet.getRow(a);
				XSSFCell cell=row.getCell(0);
				String un=cell.getStringCellValue();
							  
				return un;
			}
					
			//To read and return the password
			public  String excel_password1(int b) throws IOException 
			{ 
				FileInputStream fil = new FileInputStream(new File("src\\test\\resources\\TestData\\TestData.xlsx"));
				XSSFWorkbook workbook = new XSSFWorkbook(fil);
				XSSFSheet sheet=workbook.getSheet("Sheet1");
				int count=sheet.getLastRowNum();
				System.out.println(count);
				XSSFRow row =sheet.getRow(b);
				XSSFCell cell1=row.getCell(1);
				String pwd=cell1.getStringCellValue();
				          
				return pwd;
			}
			
}

	

