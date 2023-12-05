/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    const result = [];
    transactions.forEach((transaction) => {
      const { category, price } = transaction;
  
      const existingCategory = result.find((obj) => obj.category === category);
  
      if (existingCategory) {
        existingCategory.totalSpent += price;
      } else {
        result.push({ category, totalSpent: price });
      }
    });
  
    return result;
  }
  
  module.exports = calculateTotalSpentByCategory;

//   all test cases passed 

/* 
    PASS  tests/anagram.test.js
    PASS  tests/expenditure-analysis.test.js

    Test Suites: 2 passed, 2 total
    Tests:       9 passed, 9 total
    Snapshots:   0 total
    Time:        2.138 s
    Ran all test suites.
    PS C:\WebDev\100x cohort\assignments\01-js> 
*/
