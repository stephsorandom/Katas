In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

function wave(str){
    let arr=[];
    for (i=0; i<str.length; i++) {
      let newStr = ""  
      if (str.charAt(i) !== " ") {
          if (i==0) {
            newStr = str.charAt(i).toUpperCase() + str.slice(i+1, str.length)
          } else if (i==str.length) {
            newStr = str.slice(0, str.length-1) + str.charAt(i).toUpperCase();
          } else {
            newStr = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1, str.length)
          }
          arr.push(newStr);
          }
    }  return(arr)
}


function wave(str){
    let arr = []
    for(i=0;i<str.length;i++){
      if (i){
        if(str.charAt(i) != " "){arr.push(str.slice(0,i) + str.charAt(i).toUpperCase() + str.slice(i+1))}
      }else{
        if(str.charAt(i) != " "){arr.push(str.charAt(0).toUpperCase() + str.slice(1))}
      }
    }
    return arr
}
  

wave = (str) => (str.match(/\S/g)||[]).map((c, i, _, n=0) => str.replace(/\S/g, (x) => (n++) == i ? x.toUpperCase() : x))
