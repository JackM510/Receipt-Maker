# Receipt-Maker
A simple JavaScript script that uses conditional statements to evaluate tax and discount for dishes in an Array called 'dishData'. This script was developed as part of the Programming with JavaScript course from Meta.

This project contains one .js file:
- **receiptMaker.js**
  - receiptMaker.js is the file that generates receipts.
  - This file uses the getDiscount() function to pass user input and apply a tax and discount value for dishes if applicable.

**Overview of the script:**
- Each dish in the 'dishData' Array has a 'name' and 'price'.
  - The price of each dish can have a fixed tax rate of '1.20' applied based on whether a parameter called 'taxBoolean' is specified as true or false in the function getPrices().
- The **getPrices()** function logs the name and price of each dish to the console after conditional statements evaluate whether a tax value should be applied.
- The **getDiscount()** function is used to evaluate the amount of discount eligible based on the number of guests attending.
  - The getDiscount() function first invokes the getPrices() function before executing conditional statements to evaluate the discount value.
  - The getDiscount() function first checks that the number of guests specified as a parameter is a number, and that the number is between 1-30.
    - If the number of guests specified is 5 or less then the discount value will be 5.
    - Else if the number of guests specified is 6 or more then the discount value will be 10. 
- The getDiscount() function is executed at the bottom of the script to illustrate the results of passing boolean and number parameters.
  - There are a few test calls to the getDiscount() function with no parameters and invalid parameters to ensure that the default else block is working in each function.
