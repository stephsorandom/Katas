Break camelCase
//write a function that will break up camel case, using a space between words

// complete the function
function solution(string) {
    string.match(/[A-Z][a-z]+/g)
}

