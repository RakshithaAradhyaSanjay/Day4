////Do the below programs in arrow functions
console.log("Do the below programs in arrow functions")
const printOdds = arr => arr.forEach(num => {
  if (num % 2 !== 0) console.log(num);
});
// Example usage:
const array = [1, 2, 3, 4, 5];
printOdds(array); // This will print: 1, 3, 5


 //Convert all the strings to title caps in a string array
console.log("Convert all the strings to title caps in a string array");
const toTitleCase = arr => arr.map(str => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    const stringarray = ["Hello", "Good Morning", "Good", "Day"]; // Example array
    console.log( toTitleCase (stringarray))



 //Sum of all the numbers in array
 console.log("Sum of all the numbers in array");
const sum = num => num.reduce((accumulator,currentValue) => accumulator+currentValue,0)
 const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Example array
 console.log(sum(array2));

 
  //Find Prime number in array
  console.log("Find Prime number in array");


   const isPrime = num => {
     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
       if (num % i === 0) return false; 
     return num > 1;
   };
   const primeNumbers = array.filter(isPrime);
  
   const primearray = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example array
   console.log(primeNumbers);


   //Return all the palindromes in array

 console.log("Return all the palindromes in an array ");

   const stringArray = ['madam', 'racecar', 'hello', 'world', 'refer', 'level']; // Example array
   const isPalindrome = str => str === str.split('').reverse().join('');
   const palindromes = stringArray.filter(isPalindrome);
   console.log(palindromes);

