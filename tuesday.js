Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

//  Test.assertEquals(solution('45', '1'), '1451');


function solution(a, b){
    //a & b are strings
  //return a string in form : short + long + short
    // shorter string on outside, longer on inside (45, 1) => 1+45+1 => 1451
    ///have to check length of a & b
    //string will not be same length. but may be empty => 0
    if (a.length < b.length) {
      return (a+b+a)
    }else {
      return (b+a+b)
    }
  
}


  //ternary operators

  //basically an if statement written in a one-liner. returns first the right anwer and if not the false
function solution(a, b){
    return a.length < b.length ? a+b+a : b+a+b
    
    //return (if statement goes in here) ? (true answer!) : (else return the false answer)
  }
    