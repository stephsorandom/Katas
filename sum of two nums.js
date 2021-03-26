Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
EX:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].


Input: nums = [3,2,4], target = 6
Output: [1,2]



//in the array, what two numbers equal to the target given. 
//find their index, and return it.
//return as array.
//nums = [2,7,11,15]
function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
     for(let j = 0; j < nums.length; j++) {
         if (i === j) {
             continue
         }
    // add two integers and they will equal the target
         if (nums[i] + nums[j] === target) {
             return [i,j]
         } 
        }
    }
};