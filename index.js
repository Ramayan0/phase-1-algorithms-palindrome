function isPalindrome(str) {
  let re = /[^A-Za-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

isPalindrome("racecar");


/* 
  Add your pseudocode here
  use:
 toLowerCase() method to return the calling string value converted to lowercase.
The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
The split() method splits a String object into an array of strings by separating the string into sub strings.
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.

*/


/*
  Add written explanation of your solution here
 Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it.
 Step 2 . use chaining method with built in finction to split, reverse and join the string.
  Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
