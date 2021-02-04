Break camelCase
//write a function that will break up camel case, using a space between words

// complete the function
function solution(string) {
    string.match(/[A-Z][a-z]+/g)
}


//SOLUTION 1 WITH LOOP
// function solution(string){
//     let newStr= " "
//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === string[i].toUpperCase()) {
//             if(newStr.includes ('')) {
//                 newStr = newStr.substring(0,i+i) + ' '
//             } else {
//                 newStr = newStr.substring( 0, i) + " "
//             }
//         }
//         newStr = newStr + string[i]
//     }
//     return newStr
// }



// SOLUTION 2 WITH MAP
// function solution(string) {
//     return string.split('').map((eachLetter)=> {
//         if(eachLetter === eachLetter.toUpper()) {
//             return '${eachLetter}'
//         } else {
//             return eachLetter
//         }
//     })

// }