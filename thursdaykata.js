Your goal is to create a function that removes the first and last characters of a string. 
Test.assertEquals(removeChar('eloquent'), 'loquen');
Test.assertEquals(removeChar('country'), 'ountr');
Test.assertEquals(removeChar('person'), 'erso');
Test.assertEquals(removeChar('place'), 'lac');
  


function removeChar(str){
    let str1 = '' //let the str = a new variable because we are returning a string output
    for(let i= 1; i<str.length -1; i++){ //let i=1 because we want to skip first letter 
        //i<str.length -1 because we want it to count length of word minus the last letter
        //i++ because we want it to keep counting after every character
      str1 += str[i]//new variable = the length of the string(word)
    }
    return str1//return new word
};

function removeChar(str){
    let arr = str.split('')//.split('')turns string into array
    arr.shift()//.shift('') removes first item from array
    arr.pop()//.pop('') removes last item from array
    return arr.join('')//.join('') turn array into string
}