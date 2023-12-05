/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      return false;
    }
  }
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;

// cleared all test cases. 

/* 
  PS C:\WebDev\100x cohort\assignments\01-js> npm test

  > 01@1.0.0 test
  > jest
  
   PASS  tests/anagram.test.js
    isAnagram
      √ returns true for anagrams (4 ms)                                                                         
      √ returns false for non-anagrams (1 ms)                                                                    
      √ returns true for anagrams with different casing (1 ms)                                                   
      √ returns true for anagrams with special characters                                                        
      √ returns false for non-anagrams with special characters (7 ms)                                            
                                                                                                                 
  Test Suites: 1 passed, 1 total                                                                                 
  Tests:       5 passed, 5 total                                                                                 
  Snapshots:   0 total
  Time:        1.101 s
  Ran all test suites.
  PS C:\WebDev\100x cohort\assignments\01-js> cd ..
  PS C:\WebDev\100x cohort\assignments> 
   *  History restored 
  
  PS C:\WebDev\100x cohort\assignments\01-js>
*/
