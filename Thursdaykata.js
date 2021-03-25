You will be given an array 'a' and a value 'x'. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.

EX:
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);


NOT RIGHT
function check(a, x) {
    // a => array
    // x => value
    // go through 'a' and filter looking for 'x'? 
    // or loop through the array looking for x...
    for(let i=0; i<a.length; i++){ // i am looping through array
        if (a.length[x]) { // checking if in the length of array the x is in there
            return true  //return true
        }
        else{
            return false // if not return false 
        } 
    }
  }

RIGHT ANSWER
//using for loop to check if x is in array
function check(a,x){
    for (let i=0; i<a.length;i++){ //loop through array
      if (a[i]==x){ return true } //if array position holds x => returns true
    }
    return false //if no x in arrayk ==> return false
  }



  //USING .INCLUDES 
  // .includes checks to see if that value is inside array and returns with a simple true or false
  // no need to use return true , else return false....
  function check(a,x){
    return a.includes(x);
  };