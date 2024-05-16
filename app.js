//Print odd numbers in an array

(function() {
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example array
   const oddNumbers = array.filter(number => number % 2 !== 0);
   console.log(oddNumbers);
 })();

 //Convert all the strings to title caps in a string array

  console.log("Convert all the strings to title caps in a string array");
(function() {
   const array = ["Hello", "Good Morning", "Good", "Day"]; // Example array
   var sorted = []
   for (var i = 0; i < array.length; i++) {
      
       sorted[i]=(array[i].toLowerCase());
      
    };
    console.log(sorted);
 
 })();

 //Sum of all the numbers in array
 console.log("Sum of all the numbers in array");
(function() {
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example array
     const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   console.log(sum);
 })();

  //Find Prime number in array
  console.log("Find Prime number in array");
 (function() {
   const array = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example array
   const isPrime = num => {
     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
       if (num % i === 0) return false; 
     return num > 1;
   };
   const primeNumbers = array.filter(isPrime);
   console.log(primeNumbers);
 })();


 //Palindrome

 console.log("Return all the palindromes in an array ");
 (function() {
   const stringArray = ['madam', 'racecar', 'hello', 'world', 'refer', 'level']; // Example array
   const isPalindrome = str => str === str.split('').reverse().join('');
   const palindromes = stringArray.filter(isPalindrome);
   console.log(palindromes);
 })()


 //Remove duplicates from an array
 console.log("Remove duplicates from an array ");
(function() {
  var array = [1, 2, 2, 3, 4, 4, 5]; // Example array with duplicates
  var uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
  console.log(uniqueArray); // Output will be: [1, 2, 3, 4, 5]
})();

 //Rotate an array by k times
(function() {
  var rotateArray = function(arr, k) {
    if (!arr.length || k <= 0) {
      return arr;
    }
    for (var i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };

  var array = [1, 2, 3, 4, 5]; // Example array
  var k = 2; // Number of times to rotate the array
  var rotatedArray = rotateArray(array, k);
  console.log(rotatedArray); // Output for k=2: [4, 5, 1, 2, 3]
})();


