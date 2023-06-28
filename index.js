function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('')
  return reversedWord === word;
}

/* 
  Add your pseudocode here

  write a function called isPalindrome 
  function receive one argument, a string
  create reversed version of the string
  if the string and reversed string are strictly equal return true
*/

/*
  Add written explanation of your solution here
  My solution contains a function that takes a strings and reverses the string to check if the string and reversed string read the same.It returns true is they read the same and false if they dont.
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
