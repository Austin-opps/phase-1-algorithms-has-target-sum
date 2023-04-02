function hasTargetSum(array, target) {
  // Write your algorithm here
  const Numbers = {};

  for (const number of array){
    const complement = target - number;
    if (complement in Numbers) return true;
    Numbers[number] = true;
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here 
 O(n²)
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 4, and the target is 5, the complementary number is 1)
    iterate over the remaining numbers in the array
      check if any of the remaining numbers is the complement
        if so, return true
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  the hasTargetSum function takes two arguments:
   array: an array of numbers
   target: the target of number
   
   The function returns true if the array contains a number that is the complement of the target
   else it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 9));

  console.log("")

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3, 4], 6))
}

module.exports = hasTargetSum;
