The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, 
-1 for each incorrect answer, and 
+0 for each blank answer, represented as an empty string (in C the space character is used).

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
If the score < 0, return 0.

//you have array1 & array2.
//array1 is the correct answers and array2 is student answers
//compare array2 with array1, and give the correct points.
//return a number
//if the answers is < 0, return 0


function checkExam(array1, array2) {
    // 2 arrays of letters & same length
     //return a number
     let sum = 0
     for(let i=0; i < array1.length; i++) {
       if (array1[i] === array2[i])  {
          sum += 4
       } else if(array2[i] == "") {
         sum += 0
       } else {
         sum -=1
       }
     } 
     if(sum < 0){
       return 0
     } else {
     return sum 
     }
   }