/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

***********************************************************************/

function printAndPause(nums) {
  // Your code here
  function print(index){
  if(index < nums.length){
    console.log (nums[index]);
    setTimeout(() => {
      print (index +1);
    } ,nums[index])
  }
}
print(0);
}



// printAndPause([200, 800, 200, 800, 200, 800]);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
