/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
  }
  
  module.exports = findLargestElement;

  // all test cases passed

  /* 
    PASS  tests/expenditure-analysis.test.js
    PASS  tests/anagram.test.js
    PASS  tests/findLargestElement.test.js                                                                              

    Test Suites: 3 passed, 3 total
    Tests:       13 passed, 13 total
    Snapshots:   0 total
    Time:        2.131 s
    Ran all test suites.
  */
