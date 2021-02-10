Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


//Solution 1 with Turnurary functions?
function iqTest(numbers){
    let arr = numbers.split(' ')
    let newArr = arr.map((x) => {
  
    return (x % 2 == 0 ? 'even' : 'odd')
    })
    console.log(newArr)
    return (newArr.indexOf('even') == newArr.lastIndexOf('even')
           ? newArr.indexOf('even')+1
           : newArr.indexOf('odd')+1)
}


function iqTest(numbers){
    let arr = numbers.split(` `).map((n) => Number(n))
    let even = arr.filter((n) => n % 2 === 0)
    let odd = arr.filter((n) => n % 2 ! == 0)
    return odd.length < even.length ? arr.indexOf(odd[0])+1: arr.indexOf(even[0])+1
}


function iqTest(numbers){
    // ...
    let numArr = numbers.split(' ')
    let evens = []
    let odds = []
    
    let even = numArr.map((ele) => {
        if (ele % 2 > 0) {
          odds.push(ele)
        }
        else {
          evens.push(ele)
        }
        return ele
    })
  
    if (evens.length > odds.length) {
      console.log("i was called")
      for(let i = 0; i < even.length; i++) {
        if (odds[0] == even[i]) {
          return i + 1
        }
      }
    }
    if (odds.length > evens.length) {
      console.log("no, i was called")
      for(let i = 0; i < even.length; i++) {
        if (evens[0] == even[i]) {
          return i + 1
        }
      }
    }
  }